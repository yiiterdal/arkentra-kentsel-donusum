// Kullanım: node scripts/build-checklist-pdf.mjs
// app/data/muteahhit-kontrol-listesi.json içeriğinden public/ altına PDF üretir (Microsoft Edge gerekir).
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(readFileSync(join(root, 'app/data/muteahhit-kontrol-listesi.json'), 'utf8'));
const logoUrl = pathToFileURL(join(root, 'public/images/logo/arkentra-logo-color.png')).href;
const outFile = join(root, 'public', data.pdfPath);

const edgeCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

let n = 0;
const groupsHtml = data.groups
  .map(
    (group) => `
    <h2>${esc(group.title)}</h2>
    ${group.questions
      .map((item) => {
        n += 1;
        return `<div class="q"><div class="box"></div><div><p class="qt"><span>${n}.</span> ${esc(item.q)}</p><p class="why">${esc(item.why)}</p></div></div>`;
      })
      .join('')}`
  )
  .join('');

const html = `<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>${esc(data.title)}</title>
<style>
  @page { size: A4; margin: 16mm 16mm 18mm; }
  * { box-sizing: border-box; }
  body { font-family: 'Segoe UI', Arial, sans-serif; color: #1f2937; font-size: 10.5pt; line-height: 1.45; margin: 0; }
  header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #15803d; padding-bottom: 10px; margin-bottom: 14px; }
  header img { height: 34px; }
  header .site { font-size: 9pt; color: #6b7280; text-align: right; }
  h1 { font-size: 19pt; margin: 0 0 4px; color: #111827; }
  .sub { color: #4b5563; margin: 0 0 6px; }
  .intro { font-size: 9.5pt; color: #4b5563; margin: 0 0 6px; }
  h2 { font-size: 11pt; text-transform: uppercase; letter-spacing: .04em; color: #15803d; margin: 16px 0 6px; }
  .q { display: flex; gap: 10px; padding: 7px 0; border-bottom: 1px solid #e5e7eb; break-inside: avoid; }
  .box { width: 13px; height: 13px; border: 1.5px solid #15803d; flex-shrink: 0; margin-top: 3px; }
  .qt { margin: 0; font-weight: 600; color: #111827; }
  .qt span { color: #15803d; }
  .why { margin: 2px 0 0; font-size: 9.5pt; color: #4b5563; }
  footer { margin-top: 18px; padding-top: 10px; border-top: 1px solid #e5e7eb; font-size: 8.5pt; color: #6b7280; break-inside: avoid; }
  footer strong { color: #111827; }
</style></head><body>
<header><img src="${logoUrl}" alt="ARKENTRA"><div class="site">arkentrakentseldonusum.com<br>info@arkentrakentseldonusum.com</div></header>
<h1>${esc(data.title)}</h1>
<p class="sub">${esc(data.subtitle)}</p>
<p class="intro">Her soruya yazılı ve belgeli cevap isteyin. Cevabı aldığınız soruları işaretleyin.</p>
${groupsHtml}
<footer><strong>ARKENTRA Kentsel Dönüşüm</strong> · İstanbul genelinde müteahhitten bağımsız kentsel dönüşüm danışmanlığı. Teklifleri ücretsiz karşılaştırmak için: arkentrakentseldonusum.com/muteahhit-teklif-karsilastirma<br>
Bu liste genel bilgilendirme amaçlıdır ve hukuki danışmanlık yerine geçmez. Mevzuat atıfları: 6306 sayılı Afet Riski Altındaki Alanların Dönüştürülmesi Hakkında Kanun (mevzuat.gov.tr).</footer>
</body></html>`;

const htmlFile = join(tmpdir(), 'arkentra-checklist.html');
writeFileSync(htmlFile, html, 'utf8');
mkdirSync(dirname(outFile), { recursive: true });

let lastError;
for (const edge of edgeCandidates) {
  try {
    execFileSync(edge, [
      '--headless',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${outFile}`,
      pathToFileURL(htmlFile).href,
    ]);
    console.log(`PDF oluşturuldu: ${outFile}`);
    process.exit(0);
  } catch (error) {
    lastError = error;
  }
}
console.error('Edge bulunamadı veya PDF üretilemedi.', lastError);
process.exit(1);

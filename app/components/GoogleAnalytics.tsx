import Script from 'next/script';

const googleTagId = process.env.NEXT_PUBLIC_GTAG_ID ?? 'GT-T9KBP6Z';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTagId}');
        `}
      </Script>
    </>
  );
}

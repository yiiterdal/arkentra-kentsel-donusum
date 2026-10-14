import IlcePage, { ilceMetadata } from '../components/IlcePage';
import { getIlce } from '../data/ilceler';

const ilce = getIlce('maltepe-kentsel-donusum');

export const metadata = ilceMetadata(ilce);

export default function MaltepeKentselDonusumPage() {
  return <IlcePage ilce={ilce} />;
}

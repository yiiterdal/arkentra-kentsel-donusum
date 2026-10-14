import IlcePage, { ilceMetadata } from '../components/IlcePage';
import { getIlce } from '../data/ilceler';

const ilce = getIlce('bakirkoy-kentsel-donusum');

export const metadata = ilceMetadata(ilce);

export default function BakirkoyKentselDonusumPage() {
  return <IlcePage ilce={ilce} />;
}

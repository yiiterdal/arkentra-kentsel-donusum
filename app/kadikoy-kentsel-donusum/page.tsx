import IlcePage, { ilceMetadata } from '../components/IlcePage';
import { getIlce } from '../data/ilceler';

const ilce = getIlce('kadikoy-kentsel-donusum');

export const metadata = ilceMetadata(ilce);

export default function KadikoyKentselDonusumPage() {
  return <IlcePage ilce={ilce} />;
}

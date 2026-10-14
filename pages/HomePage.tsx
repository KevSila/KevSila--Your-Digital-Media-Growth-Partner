import CTA from '../components/CTA';
import Hero from '../components/Hero';
import Industries from '../components/Industries';
import PageMeta from '../components/PageMeta';
import Pricing from '../components/Pricing';
import Process from '../components/Process';
import Services from '../components/Services';
import WhySilatech from '../components/WhySilatech';
import StartingPoints from '../components/StartingPoints';
import SelectedWork from '../components/SelectedWork';
import ResponsibleDelivery from '../components/ResponsibleDelivery';
import { pageMetadata } from '../data/siteMetadata';
export default function HomePage() {
  return <><PageMeta {...pageMetadata['/']} /><Hero /><StartingPoints /><Services /><SelectedWork /><Process /><ResponsibleDelivery /><Industries /><WhySilatech /><Pricing /><CTA /></>;
}
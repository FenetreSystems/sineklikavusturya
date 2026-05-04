import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductCategories from './components/ProductCategories';
import WhyManufacturer from './components/WhyManufacturer';
import CustomProduction from './components/CustomProduction';
import ComparisonTable from './components/ComparisonTable';
import UsageAreas from './components/UsageAreas';
import MaterialQuality from './components/MaterialQuality';
import ColorOptions from './components/ColorOptions';
import ProjectProduction from './components/ProjectProduction';
import Dealership from './components/Dealership';
import AustrianRegions from './components/AustrianRegions';
import Testimonials from './components/Testimonials';
import PriceFactors from './components/PriceFactors';
import FAQ from './components/FAQ';
import Corporate from './components/Corporate';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileFixedButtons from './components/MobileFixedButtons';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <TrustBar />
      <ProductCategories />
      <WhyManufacturer />
      <CustomProduction />
      <ComparisonTable />
      <UsageAreas />
      <MaterialQuality />
      <ColorOptions />
      <ProjectProduction />
      <Dealership />
      <AustrianRegions />
      <Testimonials />
      <PriceFactors />
      <FAQ />
      <Corporate />
      <FinalCTA />
      <Footer />
      <MobileFixedButtons />
      <div className="h-16 md:hidden"></div>
    </main>
  );
}

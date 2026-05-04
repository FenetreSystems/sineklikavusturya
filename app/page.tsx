import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ProductCategories from "./components/ProductCategories";
import WhyManufacturer from "./components/WhyManufacturer";
import CustomProduction from "./components/CustomProduction";
import ComparisonTable from "./components/ComparisonTable";
import UsageAreas from "./components/UsageAreas";
import MaterialQuality from "./components/MaterialQuality";
import ColorOptions from "./components/ColorOptions";
import ProjectProduction from "./components/ProjectProduction";
import AustriaCities from "./components/AustriaCities";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import SchemaJsonLd from "./components/SchemaJsonLd";
import dynamic from 'next/dynamic';

const Dealership = dynamic(() => import('./components/Dealership'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const AustriaSellers = dynamic(() => import('./components/AustriaSellers'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const NeighborCountries = dynamic(() => import('./components/NeighborCountries'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const CustomerReviews = dynamic(() => import('./components/CustomerReviews'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const PriceFactors = dynamic(() => import('./components/PriceFactors'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const FAQ = dynamic(() => import('./components/FAQ'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const Corporate = dynamic(() => import('./components/Corporate'), { loading: () => <div className="py-20">Yükleniyor...</div> });
const FinalCTA = dynamic(() => import('./components/FinalCTA'), { loading: () => <div className="py-20">Yükleniyor...</div> });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0">
      <SchemaJsonLd />
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
      <AustriaCities />
      <AustriaSellers />
      <NeighborCountries />
      <CustomerReviews />
      <PriceFactors />
      <FAQ />
      <Corporate />
      <FinalCTA />
      <Footer />
      <MobileBottomBar />
    </div>
  );
}

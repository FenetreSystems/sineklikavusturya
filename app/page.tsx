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
import Dealership from "./components/Dealership";
import AustriaCities from "./components/AustriaCities";
import AustriaSellers from "./components/AustriaSellers";
import NeighborCountries from "./components/NeighborCountries";
import CustomerReviews from "./components/CustomerReviews";
import PriceFactors from "./components/PriceFactors";
import FAQ from "./components/FAQ";
import Corporate from "./components/Corporate";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import SchemaJsonLd from "./components/SchemaJsonLd";

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

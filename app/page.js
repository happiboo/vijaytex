/* app/page.js */
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductLineup from '../components/ProductLineup';
import WhyVijayTex from '../components/WhyVijayTex';
import ComparisonTable from '../components/ComparisonTable';
import CommitmentSection from '../components/CommitmentSection';
import AboutUs from '../components/AboutUs';
import BuybackPolicy from '../components/BuybackPolicy';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Global film grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />
      <main>
        <HeroSection />
        <ProductLineup />
        <WhyVijayTex />
        <ComparisonTable />
        <CommitmentSection />
        <AboutUs />
        <BuybackPolicy />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

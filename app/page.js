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

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Vijay Tex',
      url: 'https://www.vijaytexconeinserts.com',
      logo: 'https://www.vijaytexconeinserts.com/logo.png',
      description:
        'Vijay Tex is a leading manufacturer of cone disks, cone inserts, cone washers, and cone edge protectors for paper cones and yarn cones. Established in 1996, Coimbatore, India.',
      foundingDate: '1996',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-94430-59101',
        contactType: 'sales',
        availableLanguage: ['English', 'Tamil'],
      },
    },
    {
      '@type': 'Product',
      name: 'Yarn Cone Disk',
      description:
        'Precision-moulded PPCP cone disk for 3°, 4° and 5° yarn cones and paper cones. Functions as a cone insert, cone washer, and yarn cone edge protector.',
      brand: { '@type': 'Brand', name: 'Vijay Tex' },
      category: 'Textile Cone Accessories',
      material: 'PPCP (Polypropylene Copolymer)',
      keywords:
        'cone disk, cone insert, cone washer, paper cone disk, paper cone washer, paper cone inserts, yarn cone disk, yarn cone inserts, yarn cone washer, yarn cone edge protector, paper cone edge protectors',
    },
    {
      '@type': 'Product',
      name: 'PP Plastic Twine',
      description:
        'Premium virgin-grade PP twine available at 1000, 1500, and 2000 meters per kg for textile spinning mills.',
      brand: { '@type': 'Brand', name: 'Vijay Tex' },
      category: 'Textile Accessories',
    },
    {
      '@type': 'Product',
      name: 'Yarn Cone Cover',
      description:
        'Yarn cone cover made from PP, HM-HDPE, and LDPE for maximum coverage per kg. Available at 20g, 30g, and 40g.',
      brand: { '@type': 'Brand', name: 'Vijay Tex' },
      category: 'Textile Cone Accessories',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

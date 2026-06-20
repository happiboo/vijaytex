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
const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytexconeinserts.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* LocalBusiness — primary entity (LocalBusiness already extends Organization) */
    {
      '@type': 'LocalBusiness',
      '@id': `${base}/#organization`,
      name: 'Vijay Tex',
      url: base,
      telephone: '+91 94430 59101',
      priceRange: '₹₹',
      logo: {
        '@type': 'ImageObject',
        url: `${base}/logo.png`,
      },
      image: {
        '@type': 'ImageObject',
        url: `${base}/logo.png`,
      },
      description:
        'Vijay Tex is a leading manufacturer of cone disks, cone inserts, cone washers, cone edge protectors, PP plastic twine, and yarn cone covers for textile spinning mills. Established in 1996, Coimbatore, Tamil Nadu, India.',
      foundingDate: '1996',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'No.12, V.R.R. Nagar, Vilankurichi (Po)',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamil Nadu',
        postalCode: '641035',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 11.058079719543457,
        longitude: 77.01194763183594,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91 94430 59101',
          contactType: 'sales',
          availableLanguage: ['English', 'Tamil'],
          areaServed: 'IN',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+91 94421 55833',
          contactType: 'sales',
          availableLanguage: ['English', 'Tamil'],
          areaServed: 'IN',
        },
      ],
      email: 'vijaytex07@gmail.com',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'India' },
      ],
      knowsAbout: [
        'Cone Disks', 'Cone Inserts', 'Cone Washers', 'Yarn Cone Covers',
        'PP Plastic Twine', 'Textile Cone Accessories', 'Spinning Mill Supplies',
      ],
      sameAs: [
        /* Add verified profile URLs below when available, e.g.: */
        /* 'https://www.indiamart.com/vijay-tex/', */
        /* 'https://www.linkedin.com/company/vijay-tex/', */
      ],
    },

    /* Product 1 — Yarn Cone Disc */
    {
      '@type': 'Product',
      '@id': `${base}/#product-cone-disc`,
      name: 'Yarn Cone Disc',
      url: base,
      description:
        'Precision-moulded PPCP cone disk for 3°, 4° and 5° yarn cones and paper cones. Functions as a cone insert, cone washer, and yarn cone edge protector in one unit. Made from 60% recycled plastic, 30% virgin plastic, 10% hardening agents.',
      brand: { '@type': 'Brand', name: 'Vijay Tex' },
      manufacturer: { '@id': `${base}/#organization` },
      category: 'Textile Cone Accessories',
      material: 'PPCP (Polypropylene Copolymer) — 60% recycled, 30% virgin, 10% hardening agents',
      image: {
        '@type': 'ImageObject',
        url: `${base}/products/cone-disc.png`,
      },
      keywords:
        'cone disk, cone insert, cone washer, paper cone disk, paper cone washer, paper cone inserts, yarn cone disk, yarn cone inserts, yarn cone washer, yarn cone edge protector, paper cone edge protectors, PPCP cone disk',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Cone Angle Compatibility', value: '3°, 4°, 5°' },
        { '@type': 'PropertyValue', name: 'Recycled Content', value: '60%' },
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${base}/#organization` },
        areaServed: 'IN',
      },
    },

    /* Product 2 — PP Plastic Twine */
    {
      '@type': 'Product',
      '@id': `${base}/#product-pp-twine`,
      name: 'PP Plastic Twine',
      url: base,
      description:
        'Premium virgin-grade polypropylene twine for textile spinning mills. Available at 1000, 1500, and 2000 meters per kg for superior meter-per-kg value.',
      brand: { '@type': 'Brand', name: 'Vijay Tex' },
      manufacturer: { '@id': `${base}/#organization` },
      category: 'Textile Accessories',
      material: 'Virgin Grade Polypropylene (PP)',
      image: {
        '@type': 'ImageObject',
        url: `${base}/products/twine.jpg`,
      },
      keywords: 'PP plastic twine, polypropylene twine, textile twine, spinning mill twine, yarn twine',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Available Lengths', value: '1000 m/kg, 1500 m/kg, 2000 m/kg' },
        { '@type': 'PropertyValue', name: 'Material Grade', value: 'Virgin Grade' },
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${base}/#organization` },
        areaServed: 'IN',
      },
    },

    /* Product 3 — Yarn Cone Cover */
    {
      '@type': 'Product',
      '@id': `${base}/#product-cone-cover`,
      name: 'Yarn Cone Cover',
      url: base,
      description:
        'Yarn cone covers made from PP, HM-HDPE, and LDPE for maximum coverage per kg. Available in 20g, 30g, and 40g variants. Manufactured in Coimbatore, Tamil Nadu.',
      brand: { '@type': 'Brand', name: 'Vijay Tex' },
      manufacturer: { '@id': `${base}/#organization` },
      category: 'Textile Cone Accessories',
      material: 'PP, HM-HDPE, LDPE',
      image: {
        '@type': 'ImageObject',
        url: `${base}/products/cone-cover.jpg`,
      },
      keywords: 'yarn cone cover, cone cover, PP cone cover, HDPE cone cover, LDPE cone cover, textile cone cover, Coimbatore cone cover',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Available Weights', value: '20g, 30g, 40g' },
        { '@type': 'PropertyValue', name: 'Material', value: 'PP, HM-HDPE, LDPE' },
      ],
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        seller: { '@id': `${base}/#organization` },
        areaServed: 'IN',
      },
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

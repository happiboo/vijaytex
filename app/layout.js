/* app/layout.js */
import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytex.com'),
  title: {
    default: 'Vijay Tex | Cone Disks, Cone Inserts & Cone Washers for Yarn & Paper Cones',
    template: '%s | Vijay Tex',
  },
  description:
    'Vijay Tex manufactures premium cone disks, cone inserts, and cone washers for paper cones and yarn cones. Our paper cone disks, yarn cone inserts, yarn cone washers, and cone edge protectors are trusted by 150+ spinning mills across India. ESTD 1996.',
  keywords: [
    'cone disk',
    'cone insert',
    'cone washer',
    'paper cone disk',
    'paper cone washer',
    'paper cone inserts',
    'yarn cone disk',
    'yarn cone inserts',
    'yarn cone washer',
    'yarn cone edge protector',
    'paper cone edge protectors',
    'textile cone disks',
    'spinning mill cone accessories',
    'PPCP cone disk',
    'cone disk manufacturer India',
    'yarn cone accessories',
    'paper cone accessories',
    'PP plastic twine',
    'yarn cone cover',
    'Vijay Tex',
    'Coimbatore textile parts',
    'cone disk manufacturer Coimbatore',
  ],
  authors: [{ name: 'Vijay Tex' }],
  creator: 'Vijay Tex',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    /* og:title — punchy for social shares, includes trust signal */
    title: 'Vijay Tex — Trusted by 150+ Spinning Mills Since 1996',
    /* og:description — benefit-led, specific, no fluff */
    description:
      'Manufacturer of PPCP cone disks, cone inserts, cone washers, PP plastic twine & yarn cone covers. Precision-made in Coimbatore for Ring frame, Airjet & Rotor spinning systems.',
    siteName: 'Vijay Tex',
    /* No images key — opengraph-image.js in /app auto-generates the card at 1200×630 */
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Tex — Cone Disks & Textile Mill Accessories | Est. 1996',
    description:
      'PPCP cone disks, yarn cone covers & PP twine for spinning mills. 150+ mills served. Dispatched within 24 hours. Coimbatore, India.',
    /* No images key — Next.js pulls from opengraph-image.js automatically */
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,    /* allow pinch-zoom — never block user zoom (accessibility) */
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site summary" />
      </head>
      <body>{children}</body>
    </html>
  );
}

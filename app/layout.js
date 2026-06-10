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
    'Vijay Tex',
    'Coimbatore textile parts',
  ],
  authors: [{ name: 'Vijay Tex' }],
  creator: 'Vijay Tex',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Vijay Tex | Cone Disks, Cone Inserts, Cone Washers & Edge Protectors',
    description:
      'Premium cone disks, cone inserts, cone washers and edge protectors for yarn cones and paper cones. Trusted by 150+ spinning mills across India since 1996.',
    siteName: 'Vijay Tex',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vijay Tex — Cone Disks, Cone Inserts & Cone Washers for Yarn and Paper Cones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Tex | Cone Disks, Cone Inserts & Cone Washers',
    description:
      'Premium paper cone disks, yarn cone inserts, cone washers & edge protectors. Trusted by 150+ mills across India.',
    images: ['/og-image.jpg'],
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
      </head>
      <body>{children}</body>
    </html>
  );
}

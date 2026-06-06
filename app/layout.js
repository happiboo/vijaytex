/* app/layout.js */
import '../styles/globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytex.com'),
  title: {
    default: 'Vijay Tex | Precision Engineered Cone Disks',
    template: '%s | Vijay Tex',
  },
  description: 'Vijay Tex manufactures high-quality textile cone disks trusted by spinning mills across India. Decades of expertise, unmatched quality assurance.',
  keywords: ['Textile Cone Disks', 'Spinning Mills', 'Vijay Tex', 'Cone Disks', 'Textile Machinery Parts', 'India'],
  authors: [{ name: 'Vijay Tex' }],
  creator: 'Vijay Tex',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Vijay Tex | Precision Engineered Cone Disks',
    description: 'High-quality textile cone disks trusted by spinning mills across India. Discover unmatched quality and decades of expertise with Vijay Tex.',
    siteName: 'Vijay Tex',
    images: [
      {
        url: '/og-image.jpg', // Recommend adding an og-image.jpg to your public folder
        width: 1200,
        height: 630,
        alt: 'Vijay Tex - Precision Engineered Cone Disks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Tex | Precision Engineered Cone Disks',
    description: 'High-quality textile cone disks trusted by spinning mills across India.',
    images: ['/og-image.jpg'], // Recommend adding an og-image.jpg to your public folder
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

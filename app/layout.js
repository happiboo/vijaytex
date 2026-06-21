/* app/layout.js */
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import '../styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytexconeinserts.com';

export const metadata = {
  metadataBase: new URL(base),
  title: {
    default: 'Vijay Tex | Cone Disks & Inserts for Spinning Mills',
    template: '%s | Vijay Tex',
  },
  description:
    'PPCP cone disks, inserts & washers for spinning mills. Trusted by 150+ mills across India. Vijay Tex, Coimbatore since 1996.',
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
  publisher: 'Vijay Tex',
  category: 'manufacturing',
  verification: {
    google: 'tsBYmFz16DMguNO5ekcpykIJzkNV3rSe3H0dPwVMMw8',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: base,
    title: 'Vijay Tex — Trusted by 150+ Spinning Mills Since 1996',
    description:
      'Manufacturer of PPCP cone disks, cone inserts, cone washers, PP plastic twine & yarn cone covers. Precision-made in Coimbatore for Ring frame, Airjet & Rotor spinning systems.',
    siteName: 'Vijay Tex',
    images: [
      {
        url: `${base}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Vijay Tex — Cone Disks, Cone Inserts & Cone Washers for Textile Spinning Mills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijay Tex — Cone Disks & Textile Mill Accessories | Est. 1996',
    description:
      'PPCP cone disks, yarn cone covers & PP twine for spinning mills. 150+ mills served. Dispatched within 24 hours. Coimbatore, India.',
    images: [`${base}/opengraph-image`],
  },
  alternates: {
    canonical: base,
  },
  icons: {
    shortcut: '/favicon.ico',
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '96x96', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
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
  maximumScale: 5,
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable site summary" />
      </head>
      <body>{children}</body>
    </html>
  );
}

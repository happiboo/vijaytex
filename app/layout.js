/* app/layout.js */
import '../styles/globals.css';

export const metadata = {
  title: 'Vijay Tex — Precision Engineered Cone Disks',
  description: 'Vijay Tex manufactures high-quality textile cone disks trusted by mills across India. Decades of expertise, unmatched quality assurance.',
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

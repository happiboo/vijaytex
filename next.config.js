/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        /* Long-lived cache for hashed static assets (Next.js appends content hash) */
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        /* Long-lived cache for public images */
        source: '/:file(.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
      {
        /* Long-lived cache for public video and fonts */
        source: '/:file(.*\\.(?:mp4|woff|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;

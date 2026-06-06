export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytexconeinserts.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

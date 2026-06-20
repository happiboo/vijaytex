export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytexconeinserts.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      /* Allow AI search agents that cite content (brand awareness benefit) */
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      /* Block AI training crawlers — does NOT affect Google Search indexing */
      { userAgent: 'GPTBot',        disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: 'Bytespider',    disallow: '/' },
      { userAgent: 'CCBot',         disallow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

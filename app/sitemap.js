export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytexconeinserts.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-06-22'),
    },
  ];
}

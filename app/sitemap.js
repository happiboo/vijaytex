export default function sitemap() {
  // Replace with your actual domain if different
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.vijaytexconeinserts.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}

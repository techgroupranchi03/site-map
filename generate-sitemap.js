const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

const staticPages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/disclaimer', changefreq: 'monthly', priority: 0.7 },
];

const dynamicPages = []; // Add dynamic routes if applicable

const pages = [...staticPages, ...dynamicPages];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://react-seo-poc.netlify.app' });
  const writeStream = createWriteStream('./public/sitemap.xml', { encoding: 'utf-8' });

  // Pipe the pages directly to the sitemap stream
  const pagesStream = Readable.from(pages);
  pagesStream.pipe(sitemap).pipe(writeStream);

  await streamToPromise(sitemap);
  writeStream.end();
  console.log('Sitemap generated successfully at ./public/sitemap.xml');
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
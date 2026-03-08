import { NextResponse } from 'next/server'

export const revalidate = 0

export async function GET() {
  const staticPages = [
    'https://iptvforver.com',
    'https://iptvforver.com/about',
    'https://iptvforver.com/blog',
    'https://iptvforver.com/pricing',
    'https://iptvforver.com/contact',
    'https://iptvforver.com/contacts',
    'https://iptvforver.com/en',
    'https://iptvforver.com/product/1-month',
    'https://iptvforver.com/product-category/iptv-subscription/page/3',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticPages.map(url => `<url><loc>${url}</loc><lastmod>${new Date().toISOString()}</lastmod><changefreq>${url === 'https://iptvforver.com' ? 'daily' : 'weekly'}</changefreq><priority>${url === 'https://iptvforver.com' ? '1.0' : '0.8'}</priority></url>`).join('')}</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    },
  })
}

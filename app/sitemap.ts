import { MetadataRoute } from 'next'

export const revalidate = 0
export const dynamic = 'force-dynamic'

// Function to fetch ALL WordPress posts for sitemap (handles pagination)
async function getAllWordPressPosts() {
  const allPosts: any[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    try {
      const response = await fetch(
        `https://blog.iptvforver.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=id,slug,modified`,
        { cache: 'no-store' }
      )

      if (!response.ok) {
        if (response.status === 400) {
          // No more pages
          hasMore = false
          break
        }
        console.warn('WordPress API unavailable for sitemap')
        break
      }

      const posts = await response.json()
      if (posts.length === 0) {
        hasMore = false
      } else {
        allPosts.push(...posts)
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1')
        hasMore = page < totalPages
        page++
      }
    } catch (error) {
      console.error('Error fetching WordPress posts for sitemap:', error)
      hasMore = false
    }
  }

  return allPosts
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllWordPressPosts()
  const currentDate = new Date()

  // Static pages with optimized priorities
  const staticPages = [
    {
      url: 'https://iptvforver.com',
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://iptvforver.com/pricing',
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: 'https://iptvforver.com/about',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://iptvforver.com/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: 'https://iptvforver.com/blog',
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Dynamic blog post pages
  const blogPages = posts.map((post: any) => ({
    url: `https://iptvforver.com/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}

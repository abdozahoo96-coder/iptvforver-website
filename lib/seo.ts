// SEO Configuration for IPTV FORVER
export const siteConfig = {
  name: "IPTV FORVER",
  title: "IPTV FORVER - Premium IPTV Streaming Service",
  description: "IPTV FORVER offers premium IPTV streaming with 25,000+ live TV channels and 26,000+ movies. Get your IPTV FORVER subscription today.",
  url: "https://iptvforver.com",
  ogImage: "https://iptvforver.com/images/LOGO-FORVER.png",
  keywords: [
    "iptv forver",
    "iptv forver subscription",
    "premium iptv",
    "iptv streaming",
    "live tv channels",
    "iptv service",
    "iptvforver",
    "iptv forver website",
    "iptv provider",
    "streaming service"
  ],
  author: "IPTV FORVER Team",
  creator: "IPTV FORVER",
  publisher: "IPTV FORVER",
  category: "technology",
  locale: "en_US",
  type: "website"
}

export const generateMetadata = (
  title?: string,
  description?: string,
  path?: string,
  ogImage?: string
) => {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords.join(", "),
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    category: siteConfig.category,
    openGraph: {
      type: siteConfig.type,
      locale: siteConfig.locale,
      url: path ? `${siteConfig.url}${path}` : siteConfig.url,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 300,
          height: 300,
          alt: `${siteConfig.name} Logo`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
      description: description || siteConfig.description,
      images: [ogImage || siteConfig.ogImage],
      creator: "@iptvforver"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: path ? `${siteConfig.url}${path}` : siteConfig.url
    }
  }
}

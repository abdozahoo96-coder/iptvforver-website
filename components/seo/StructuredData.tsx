// JSON-LD Structured Data for better SEO
export function IPTVFORVERStructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV FORVER",
    "alternateName": ["IPTV FORVER Service", "IPTVFORVER"],
    "url": "https://iptvforver.com",
    "logo": "https://iptvforver.com/images/LOGO-FORVER.png",
    "description": "IPTV FORVER - Premium IPTV streaming service with 25,000+ live TV channels and 26,000+ movies. Professional IPTV subscription provider.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7956-154482",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "French", "Arabic"],
      "serviceArea": "Worldwide"
    },
    "sameAs": [
      "https://wa.link/kkdei9"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Digital Services",
      "addressCountry": "Global"
    },
    "foundingDate": "2019",
    "numberOfEmployees": "10-50",
    "industry": "IPTV Streaming Services"
  }

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IPTV FORVER Subscription Service",
    "description": "Premium IPTV FORVER streaming service offering 25,000+ live TV channels, 26,000+ movies and TV shows with HD/4K quality streaming.",
    "provider": {
      "@type": "Organization",
      "name": "IPTV FORVER"
    },
    "serviceType": "IPTV Streaming Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IPTV FORVER Subscription Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV FORVER 1 Month Subscription"
          },
          "price": "10.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV FORVER 12 Month Subscription"
          },
          "price": "49.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV FORVER Premium Package"
          },
          "price": "289",
          "priceCurrency": "USD"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "797",
      "priceCurrency": "USD",
      "offerCount": "6"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTV FORVER",
    "alternateName": "IPTV FORVER Official Website",
    "url": "https://iptvforver.com",
    "description": "Official IPTV FORVER website offering premium IPTV subscriptions with 25,000+ channels and 26,000+ movies.",
    "publisher": {
      "@type": "Organization",
      "name": "IPTV FORVER"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://iptvforver.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "IPTV FORVER Service"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
    </>
  )
}

export function IPTVFORVERBreadcrumb({ items }: { items: Array<{ name: string; url?: string }> }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url ? `https://iptvforver.com${item.url}` : undefined
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData)
      }}
    />
  )
}

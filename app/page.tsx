import { Metadata } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ChannelLogosCarousel from '../components/ChannelLogosCarousel'
import MoviesCarousel from '../components/MoviesCarousel'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import SubscriptionPricing from '../components/SubscriptionPricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'IPTV FORVER - Official Website | Premium IPTV Subscription Service',
  description: 'Official IPTV FORVER website with premium IPTV subscriptions. Get IPTV FORVER with 25,000+ live TV channels, 26,000+ movies & TV shows. Start your IPTV FORVER subscription today.',
  keywords: 'iptv forver, iptv forver subscription, iptvforver, premium iptv, iptv streaming service, live tv channels, iptv forver online',
  openGraph: {
    title: 'IPTV FORVER - Official Website | Premium IPTV Subscription',
    description: 'Get your IPTV FORVER subscription from the official website. 25,000+ channels, 26,000+ movies with premium streaming quality.',
    url: 'https://iptvforver.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-surface-950">
      <Header />
      <Hero />
      <ChannelLogosCarousel />
      <MoviesCarousel />
      <Features />
      <SubscriptionPricing />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  )
}

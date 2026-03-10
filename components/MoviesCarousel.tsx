'use client'

import { useLanguage } from '../lib/language-context'
import { motion } from 'framer-motion'

export default function MoviesCarousel() {
  const { t } = useLanguage()
  const movies = Array.from({ length: 8 }, (_, i) => `/images/movies carousel/${i + 1}.png`)

  return (
    <section className="relative py-16 sm:py-20 bg-surface-900 overflow-hidden">
      {/* Mesh gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.1),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            {t('movies.title')}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t('movies.description')}
          </p>
        </motion.div>

        {/* Infinite scrolling movies */}
        <div className="relative overflow-hidden">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-surface-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-surface-900 to-transparent z-10 pointer-events-none" />

          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 animate-scroll-infinite">
            {/* Reduced duplicates for better performance */}
            {[...movies, ...movies].map((movie, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
              >
                <div className="relative group overflow-hidden rounded-xl border border-white/5 shadow-2xl hover:border-primary-500/30 transition-all duration-500">
                  <img
                    src={movie}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

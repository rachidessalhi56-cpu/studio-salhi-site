import { Star, Quote } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

// ⚠️ TÉMOIGNAGES D'EXEMPLE — remplacez-les par les avis de vrais clients
// (voir README, section Personnalisation, et src/i18n/translations.js).
export default function Testimonials() {
  const { t, lang } = useLang()
  return (
    <section id="avis" className="scroll-mt-24 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{t.testimonials.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t.testimonials.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.testimonials.reviews.map(({ name, event, text }) => (
            <figure
              key={name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <Quote className="h-8 w-8 text-gold/60 rtl:-scale-x-100" />
              <div className="mt-4 flex gap-1" aria-label={t.testimonials.starsAria}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-stone-300">
                {lang === 'ar' ? `"${text}"` : `« ${text} »`}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-sm text-gold/80">{event}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-500">{t.testimonials.disclaimer}</p>
      </div>
    </section>
  )
}

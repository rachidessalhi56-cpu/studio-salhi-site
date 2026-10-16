import { Check, MessageCircle } from 'lucide-react'
import { SITE } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

export default function Pricing() {
  const { t, lang } = useLang()
  const waUrl = (plan) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.pricing.waQuote(plan))}`

  return (
    <section id="tarifs" className="scroll-mt-24 bg-ink-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{t.pricing.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t.pricing.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-stone-400">{t.pricing.sub}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.pricing.plans.map(({ key, name, features }, i) => {
            const featured = i === 1
            return (
              <article
                key={key}
                className={`relative flex flex-col rounded-2xl border p-8 transition-transform hover:-translate-y-1 ${
                  featured
                    ? 'border-gold bg-gradient-to-b from-gold/15 to-white/[0.03] shadow-xl shadow-gold/10'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                {featured && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-ink ${
                      lang === 'ar' ? '' : 'tracking-wide uppercase'
                    }`}
                  >
                    {t.pricing.mostWanted}
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold text-white">{name}</h3>
                <p className="mt-2 font-display text-4xl font-bold text-gold">
                  {t.pricing.onQuote}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-stone-300">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waUrl(name)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition-transform hover:scale-[1.03] ${
                    featured ? 'bg-gold text-ink' : 'border border-gold/50 text-gold hover:bg-gold/10'
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  {t.pricing.askQuote}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

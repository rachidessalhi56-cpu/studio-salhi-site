import { CalendarCheck, Phone, MessageCircle } from 'lucide-react'
import { SITE } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const { t } = useLang()
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.hero.waHello)}`

  return (
    <section id="accueil" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Fond : dégradés sombres + halo doré, 100 % CSS (aucune image externe) */}
      <div className="absolute inset-0 bg-ink" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 38%, rgba(201,162,39,0.16), transparent 70%), radial-gradient(ellipse 40% 30% at 80% 85%, rgba(201,162,39,0.07), transparent 70%), radial-gradient(ellipse 45% 35% at 15% 80%, rgba(201,162,39,0.05), transparent 70%)',
        }}
      />
      {/* Vignettage bas pour la transition vers la section suivante */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-28 pb-20 text-center sm:px-6">
        <Eyebrow className="mb-5">{t.hero.eyebrow}</Eyebrow>
        <h1 className="font-display text-5xl font-bold tracking-wide text-white sm:text-7xl lg:text-8xl">
          STUDIO <span className="text-gold">SALHI</span>
        </h1>
        <p className="mt-4 text-xl text-stone-300 sm:text-2xl" dir="rtl" lang="ar">
          {SITE.arabicName}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
          {t.hero.tagline}
          <br />
          <span className="text-stone-400">
            {t.hero.years} {t.hero.yearsSuffix} {t.hero.expText}
          </span>
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollTo('reservation')}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-ink shadow-xl shadow-gold/20 transition-transform hover:scale-105 sm:w-auto"
          >
            <CalendarCheck className="h-5 w-5" />
            {t.hero.reserveDate}
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 text-base font-semibold text-gold transition-colors hover:bg-gold/10 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {t.hero.whatsapp}
          </a>
        </div>

        <a
          href={`tel:+${SITE.whatsapp}`}
          className="mt-6 inline-flex items-center gap-2 text-stone-300 transition-colors hover:text-gold"
        >
          <Phone className="h-4 w-4" />
          <span className="text-lg font-semibold tracking-wide" dir="ltr">
            {SITE.phoneDisplay}
          </span>
        </a>

        {/* Bandeau de confiance */}
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {t.hero.badges.map(({ big, small }) => (
            <div
              key={big}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm"
            >
              <p className="font-display text-xl font-semibold text-gold">{big}</p>
              <p className="mt-1 text-sm text-stone-400">{small}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

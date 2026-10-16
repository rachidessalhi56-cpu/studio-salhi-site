import { Link } from 'react-router-dom'
import { Camera, Instagram, Phone } from 'lucide-react'
import { SITE } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t, lang } = useLang()

  const NAV_LINKS = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.gallery, id: 'galerie' },
    { label: t.nav.pricing, id: 'tarifs' },
    { label: t.nav.reviews, id: 'avis' },
    { label: t.nav.contact, id: 'contact' },
  ]

  return (
    <footer className="border-t border-white/10 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60">
                <Camera className="h-5 w-5 text-gold" />
              </span>
              <span className="font-display text-xl font-semibold text-white">{SITE.name}</span>
            </div>
            <p className="mt-3 text-sm text-stone-400" dir="rtl" lang="ar">
              {SITE.arabicName}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-500">
              {t.hero.tagline}
            </p>
          </div>

          <div>
            <h4
              className={`text-sm font-bold text-gold ${
                lang === 'ar' ? '' : 'tracking-widest uppercase'
              }`}
            >
              {t.footer.navTitle}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-stone-400 transition-colors hover:text-gold"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`text-sm font-bold text-gold ${
                lang === 'ar' ? '' : 'tracking-widest uppercase'
              }`}
            >
              {t.footer.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              <li>
                <a href={`tel:+${SITE.whatsapp}`} className="flex items-center gap-2 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" /> <bdi>{SITE.phoneDisplay}</bdi>
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Instagram className="h-4 w-4 text-gold" /> <bdi>{SITE.instagramHandle}</bdi>
                </a>
              </li>
            </ul>
            <Link
              to="/admin"
              className="mt-6 inline-block rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-stone-400 transition-colors hover:border-gold/50 hover:text-gold"
            >
              {t.footer.proSpace}
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-stone-500">
          <p>{t.footer.rights(new Date().getFullYear())}</p>
          <p className="mt-1">{t.footer.giftNote}</p>
          <Link
            to="/privacy"
            className="mt-3 inline-block underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}

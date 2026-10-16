import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Camera } from 'lucide-react'
import { SITE } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function LangSwitcher({ onPick }) {
  const { lang, setLang, t } = useLang()
  const btn = (code, label) => (
    <button
      key={code}
      onClick={() => {
        setLang(code)
        onPick?.()
      }}
      aria-label={t.switcher.aria}
      className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
        lang === code ? 'bg-gold text-ink' : 'text-stone-400 hover:text-gold'
      }`}
    >
      {label}
    </button>
  )
  return (
    <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/30 p-1">
      {btn('ar', t.switcher.ar)}
      {btn('fr', t.switcher.fr)}
    </div>
  )
}

export default function Navbar() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    // Sur une autre page (ex. /privacy) : retour à l'accueil puis défilement
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(id), 150)
    } else {
      scrollTo(id)
    }
  }

  const LINKS = [
    { id: 'accueil', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'galerie', label: t.nav.gallery },
    { id: 'tarifs', label: t.nav.pricing },
    { id: 'avis', label: t.nav.reviews },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <button onClick={() => go('accueil')} className="flex items-center gap-2.5 text-start">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-ink-soft">
            <Camera className="h-5 w-5 text-gold" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold tracking-wide text-white">
              {SITE.name}
            </span>
            <span
              className={`block text-[11px] text-gold/80 ${
                lang === 'ar' ? '' : 'tracking-[0.2em] uppercase'
              }`}
            >
              {t.nav.brandSub}
            </span>
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="text-sm font-medium text-stone-300 transition-colors hover:text-gold"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <LangSwitcher />
          </li>
          <li>
            <button
              onClick={() => go('reservation')}
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:scale-105"
            >
              {t.nav.reserve}
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitcher />
          <button
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menuAria}
            className="rounded-md p-2 text-stone-200 hover:bg-white/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="block w-full rounded-md px-3 py-2.5 text-start text-base font-medium text-stone-200 hover:bg-white/5 hover:text-gold"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => go('reservation')}
                className="block w-full rounded-full bg-gold px-5 py-3 text-center text-base font-bold text-ink"
              >
                {t.nav.reserveDate}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'
import { ShieldCheck, ArrowLeft } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Eyebrow from '../components/Eyebrow.jsx'

export default function Privacy() {
  const { t, lang } = useLang()
  const p = t.privacy

  return (
    <div className="min-h-screen bg-ink font-body text-stone-200">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
        <div className="text-center">
          <Eyebrow>{p.eyebrow}</Eyebrow>
          <h1 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {p.title}
          </h1>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mt-4 text-sm text-stone-500">{p.updated}</p>
        </div>

        <p className="mt-10 leading-relaxed text-stone-300">{p.intro}</p>

        <div className="mt-8 space-y-6">
          {p.sections.map((s, i) => (
            <section
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold text-gold">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                {s.title}
              </h2>
              {s.text && <p className="mt-3 leading-relaxed text-stone-300">{s.text}</p>}
              {s.items && (
                <ul className="mt-3 space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-stone-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <p className="mt-8 rounded-2xl border border-gold/30 bg-gold/5 p-5 text-sm leading-relaxed text-stone-400">
          {p.templateNote}
        </p>

        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            <ArrowLeft className={`h-4 w-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            {p.back}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

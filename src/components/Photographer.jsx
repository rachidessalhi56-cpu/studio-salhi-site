import { CalendarCheck } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'
// ?inline → la photo est intégrée en base64 dans le JS : le build reste
// un seul fichier index.html autonome (requis pour le déploiement).
import radwanePhoto from '../assets/radwane.jpg?inline'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Photographer() {
  const { t } = useLang()
  const p = t.photographer

  return (
    <section id="photographe" className="scroll-mt-24 bg-ink py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionDivider />
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/40 shadow-2xl shadow-gold/10">
            <img
              src={radwanePhoto}
              alt={p.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="text-start">
            <Eyebrow>{p.eyebrow}</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              {p.title}
            </h2>
            <p className="mt-5 font-display text-2xl font-bold text-gold">{p.name}</p>
            <p className="mt-1 text-stone-400">{p.role}</p>
            <p className="mt-4 leading-relaxed text-stone-300">{p.bio1}</p>
            <p className="mt-2 leading-relaxed text-stone-400">{p.bio2}</p>
            <button
              onClick={() => scrollTo('reservation')}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-base font-bold text-ink shadow-xl shadow-gold/20 transition-transform hover:scale-105"
            >
              <CalendarCheck className="h-5 w-5" />
              {p.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Camera, ImagePlus } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import { SITE } from '../data/site.js'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

// ─────────────────────────────────────────────────────────────
//  GALERIE — emplacements élégants en attendant les vraies photos.
//  Pour ajouter une photo : remplacez le <div> décoratif par une
//  balise <img src="..." /> (voir README, section Personnalisation).
// ─────────────────────────────────────────────────────────────
const SLOTS = [
  { key: 'mariage', tone: 'from-amber-950/80 via-ink-soft to-ink' },
  { key: 'fiancailles', tone: 'from-stone-800/70 via-ink-soft to-ink' },
  { key: 'soiree', tone: 'from-yellow-950/60 via-ink-soft to-ink' },
  { key: 'evenement', tone: 'from-neutral-800/70 via-ink-soft to-ink' },
  { key: 'seance', tone: 'from-amber-900/60 via-ink-soft to-ink' },
  { key: 'drone', tone: 'from-stone-900/80 via-ink-soft to-ink' },
]

export default function Gallery() {
  const { t } = useLang()
  // Libellés des emplacements = libellés des types d'événement traduits
  const labelFor = (key) => t.eventTypes.find((e) => e.key === key)?.label || key

  return (
    <section id="galerie" className="scroll-mt-24 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t.gallery.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-stone-400">{t.gallery.sub}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SLOTS.map(({ key, tone }) => {
            const label = labelFor(key)
            return (
              <figure
                key={key}
                className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br ${tone}`}
              >
                {/* Cadre décoratif — remplacez ce bloc par <img> pour vos photos */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-gold/50 bg-black/30">
                    <Camera className="h-7 w-7 text-gold/70" />
                  </span>
                  <p className="font-display text-xl text-stone-200">{label}</p>
                  <p className="flex items-center gap-1.5 text-xs tracking-wide text-stone-500">
                    <ImagePlus className="h-3.5 w-3.5" />
                    {t.gallery.yourPhoto}
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                <figcaption className="absolute bottom-4 start-5 font-display text-lg text-white/90">
                  {label}
                </figcaption>
              </figure>
            )
          })}
        </div>

        <p className="mt-8 text-center text-sm text-stone-500">
          {t.gallery.noteStart}{' '}
          <bdi className="text-gold">{SITE.instagramHandle}</bdi> {t.gallery.noteEnd}
        </p>
      </div>
    </section>
  )
}

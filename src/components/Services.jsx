import { Gem, Heart, Sparkles, CalendarCheck, Camera, Clapperboard, FileText, PenTool } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

const ICONS = {
  mariage: Gem,
  fiancailles: Heart,
  soirees: Sparkles,
  evenements: CalendarCheck,
  seance: Camera,
  drone: Clapperboard,
  ecrivain: FileText,
  design: PenTool,
}

export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="scroll-mt-24 bg-ink-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{t.services.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t.services.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-stone-400">{t.services.sub}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map(({ key, title, text }) => {
            const Icon = ICONS[key] || Camera
            return (
              <article
                key={key}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.05]"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 transition-colors group-hover:bg-gold/20">
                  <Icon className="h-7 w-7 text-gold" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-stone-400">{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

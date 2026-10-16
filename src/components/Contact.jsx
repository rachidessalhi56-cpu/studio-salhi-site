import { Phone, MessageCircle, Instagram, MapPin, ExternalLink } from 'lucide-react'
import { SITE } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

export default function Contact() {
  const { t, lang } = useLang()
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(t.contact.waHello)}`

  const byKey = Object.fromEntries(t.contact.cards.map((c) => [c.key, c]))

  const cards = [
    {
      icon: Phone,
      title: byKey.phone.title,
      value: SITE.phoneDisplay,
      valueDir: 'ltr',
      href: `tel:+${SITE.whatsapp}`,
      cta: byKey.phone.cta,
    },
    {
      icon: MessageCircle,
      title: byKey.whatsapp.title,
      value: byKey.whatsapp.value,
      href: waUrl,
      cta: byKey.whatsapp.cta,
    },
    {
      icon: Instagram,
      title: byKey.instagram.title,
      value: SITE.instagramHandle,
      isHandle: true,
      href: SITE.instagram,
      cta: byKey.instagram.cta,
    },
    {
      icon: MapPin,
      title: byKey.zone.title,
      value: byKey.zone.value,
      href: SITE.mapsUrl,
      cta: byKey.zone.cta,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t.contact.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-stone-400">{t.contact.zoneDetail}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, value, valueDir, isHandle, href, cta }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all hover:-translate-y-1 hover:border-gold/50"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                <Icon className="h-6 w-6 text-gold" />
              </span>
              <h3
                className={`mt-4 text-sm font-bold text-stone-400 ${
                  lang === 'ar' ? '' : 'tracking-widest uppercase'
                }`}
              >
                {title}
              </h3>
              <p className="mt-2 font-display text-xl text-white" dir={valueDir}>
                {isHandle ? <bdi>{value}</bdi> : value}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                {cta}
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

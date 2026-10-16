import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarCheck, MessageCircle, CheckCircle2 } from 'lucide-react'
import { SITE, BOOKINGS_KEY } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

const inputCls =
  'w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-white placeholder:text-stone-500 outline-none transition-colors focus:border-gold'

export default function Booking() {
  const { t } = useLang()
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    typeKey: t.eventTypes[0].key,
    date: '',
    ville: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const typeLabel = (key) => t.eventTypes.find((e) => e.key === key)?.label || key

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.nom.trim() || !form.telephone.trim() || !form.date) {
      setError(t.booking.error)
      return
    }

    // 1) Sauvegarde locale (visible dans l'« Espace pro » /admin)
    const booking = {
      id: Date.now(),
      nom: form.nom,
      telephone: form.telephone,
      typeKey: form.typeKey,
      date: form.date,
      ville: form.ville,
      message: form.message,
      status: 'new',
      createdAt: new Date().toISOString(),
    }
    try {
      const existing = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]')
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify([booking, ...existing]))
    } catch {
      /* stockage indisponible : on continue vers WhatsApp */
    }

    // 2) Ouverture de WhatsApp avec le récapitulatif pré-rempli (langue active)
    const text = t.booking.waBooking({ ...form, typeLabel: typeLabel(form.typeKey) })
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')

    setSent(true)
  }

  const reset = () => {
    setSent(false)
    setForm({ nom: '', telephone: '', typeKey: t.eventTypes[0].key, date: '', ville: '', message: '' })
  }

  return (
    <section id="reservation" className="scroll-mt-24 bg-ink-soft py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{t.booking.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {t.booking.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-stone-400">{t.booking.sub}</p>
        </div>

        <div className="mt-12 rounded-3xl border border-gold/25 bg-white/[0.03] p-6 sm:p-10">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
              <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                {t.booking.successTitle}
              </h3>
              <p className="mx-auto mt-3 max-w-md text-stone-400">{t.booking.successText}</p>
              <button
                onClick={reset}
                className="mt-6 rounded-full border border-gold/50 px-6 py-3 font-semibold text-gold hover:bg-gold/10"
              >
                {t.booking.another}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className="mb-2 block text-sm font-semibold text-stone-300">
                  {t.booking.name}
                </label>
                <input
                  id="nom"
                  type="text"
                  value={form.nom}
                  onChange={(e) => update('nom', e.target.value)}
                  placeholder={t.booking.phName}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="tel" className="mb-2 block text-sm font-semibold text-stone-300">
                  {t.booking.phone}
                </label>
                <input
                  id="tel"
                  type="tel"
                  value={form.telephone}
                  onChange={(e) => update('telephone', e.target.value)}
                  placeholder={t.booking.phPhone}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="type" className="mb-2 block text-sm font-semibold text-stone-300">
                  {t.booking.type}
                </label>
                <select
                  id="type"
                  value={form.typeKey}
                  onChange={(e) => update('typeKey', e.target.value)}
                  className={`${inputCls} appearance-none`}
                >
                  {t.eventTypes.map((e) => (
                    <option key={e.key} value={e.key} className="bg-ink">
                      {e.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-2 block text-sm font-semibold text-stone-300">
                  {t.booking.date}
                </label>
                <input
                  id="date"
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="ville" className="mb-2 block text-sm font-semibold text-stone-300">
                  {t.booking.city}
                </label>
                <input
                  id="ville"
                  type="text"
                  value={form.ville}
                  onChange={(e) => update('ville', e.target.value)}
                  placeholder={t.booking.phCity}
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="msg" className="mb-2 block text-sm font-semibold text-stone-300">
                  {t.booking.message}
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder={t.booking.phMessage}
                  className={`${inputCls} resize-none`}
                />
              </div>

              {error && (
                <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300 sm:col-span-2">
                  {error}
                </p>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-ink shadow-xl shadow-gold/20 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-5 w-5" />
                  {t.booking.submit}
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-stone-500">
                  <CalendarCheck className="h-4 w-4" />
                  {t.booking.note}
                </p>
                <p className="mt-3 text-center text-xs leading-relaxed text-stone-500">
                  {t.booking.consentStart}
                  <Link
                    to="/privacy"
                    className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {t.booking.consentLink}
                  </Link>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

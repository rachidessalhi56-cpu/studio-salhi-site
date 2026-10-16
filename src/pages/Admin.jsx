import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Trash2,
  CalendarDays,
  Phone,
  MapPin,
  Inbox,
  Paperclip,
  Copy,
  FileText,
} from 'lucide-react'
import { SITE, BOOKINGS_KEY, DOCS_KEY } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from '../components/Eyebrow.jsx'

// Clés de statut internes (indépendantes de la langue)
const BOOKING_STATUS = ['new', 'confirmed', 'done']
const DOC_STATUS = ['new', 'preparing', 'ready']

const STATUS_STYLE = {
  new: 'bg-sky-500/15 text-sky-300 border-sky-500/40',
  confirmed: 'bg-gold/15 text-gold border-gold/40',
  done: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
  preparing: 'bg-gold/15 text-gold border-gold/40',
  ready: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40',
}

// Normalise les anciennes données démo (statuts FR / libellés de type FR)
const LEGACY_STATUS = { nouveau: 'new', confirmé: 'confirmed', terminé: 'done' }

const fmtSize = (b) => {
  if (!b && b !== 0) return '—'
  return b >= 1048576
    ? `${(b / 1048576).toFixed(1)} Mo`
    : `${Math.max(1, Math.round(b / 1024))} Ko`
}

const fmtDate = (iso) => {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return '—'
  }
}

export default function Admin() {
  const { t, lang } = useLang()
  const [tab, setTab] = useState('bookings')
  const [bookings, setBookings] = useState([])
  const [docs, setDocs] = useState([])

  const typeLabel = (b) => {
    if (b.typeKey) return t.eventTypes.find((e) => e.key === b.typeKey)?.label || b.typeKey
    return b.type || '—' // compat : anciennes entrées démo en français
  }

  const docTypeLabel = (d) =>
    t.docServices.docTypes.find((e) => e.key === d.docTypeKey)?.label || d.docTypeKey

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(BOOKINGS_KEY) || '[]')
      setBookings(
        raw.map((b) => ({
          ...b,
          status: LEGACY_STATUS[b.status] || (BOOKING_STATUS.includes(b.status) ? b.status : 'new'),
        }))
      )
    } catch {
      setBookings([])
    }
    try {
      const raw = JSON.parse(localStorage.getItem(DOCS_KEY) || '[]')
      setDocs(
        raw.map((d) => ({
          ...d,
          status: DOC_STATUS.includes(d.status) ? d.status : 'new',
        }))
      )
    } catch {
      setDocs([])
    }
  }, [])

  const persistBookings = (next) => {
    setBookings(next)
    try {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(next))
    } catch {
      /* stockage indisponible */
    }
  }

  const persistDocs = (next) => {
    setDocs(next)
    try {
      localStorage.setItem(DOCS_KEY, JSON.stringify(next))
    } catch {
      /* stockage indisponible */
    }
  }

  const removeBooking = (id) => {
    if (window.confirm(t.admin.confirmDelete)) {
      persistBookings(bookings.filter((b) => b.id !== id))
    }
  }

  const removeDoc = (id) => {
    if (window.confirm(t.admin.confirmDelete)) {
      persistDocs(docs.filter((d) => d.id !== id))
    }
  }

  const bookingCounts = BOOKING_STATUS.map((s) => [s, bookings.filter((b) => b.status === s).length])
  const docCounts = DOC_STATUS.map((s) => [s, docs.filter((d) => d.status === s).length])

  const tabBtn = (key, label) => (
    <button
      key={key}
      onClick={() => setTab(key)}
      className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
        tab === key ? 'bg-gold text-ink' : 'border border-white/15 text-stone-400 hover:text-gold'
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-ink font-body text-stone-200">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-400 hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t.admin.back}
        </Link>

        <div className="mt-6">
          <Eyebrow>{t.admin.eyebrow}</Eyebrow>
          <h1 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
            {tab === 'bookings' ? t.admin.title : t.docAdmin.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-400">
            {t.admin.demoNote}
          </p>
        </div>

        {/* Onglets */}
        <div className="mt-8 flex flex-wrap gap-3">
          {tabBtn('bookings', t.docAdmin.tabBookings)}
          {tabBtn('docs', t.docAdmin.tabDocs)}
        </div>

        {tab === 'bookings' ? (
          <>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {bookingCounts.map(([s, n]) => (
                <div
                  key={s}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="font-display text-3xl font-bold text-gold">{n}</p>
                  <p
                    className={`mt-1 text-xs text-stone-400 ${
                      lang === 'ar' ? '' : 'tracking-widest uppercase'
                    }`}
                  >
                    {t.admin.statuses[s]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {bookings.length === 0 && (
                <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/15 py-16 text-center">
                  <Inbox className="h-12 w-12 text-stone-600" />
                  <p className="mt-4 font-semibold text-stone-300">{t.admin.emptyTitle}</p>
                  <p className="mt-1 max-w-sm text-sm text-stone-500">{t.admin.emptyText}</p>
                </div>
              )}

              {bookings.map((b) => (
                <article
                  key={b.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{b.nom}</h3>
                      <p className="mt-1 text-sm text-gold">{typeLabel(b)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <select
                        value={b.status}
                        onChange={(e) =>
                          persistBookings(
                            bookings.map((x) => (x.id === b.id ? { ...x, status: e.target.value } : x))
                          )
                        }
                        aria-label={t.admin.statusAria}
                        className={`rounded-full border px-3 py-1.5 text-xs font-bold outline-none ${STATUS_STYLE[b.status] || STATUS_STYLE.new}`}
                      >
                        {BOOKING_STATUS.map((s) => (
                          <option key={s} value={s} className="bg-ink text-white">
                            {t.admin.statuses[s]}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeBooking(b.id)}
                        aria-label={t.admin.deleteAria}
                        className="rounded-full border border-red-500/40 p-2 text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-stone-400 sm:grid-cols-3">
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0 text-gold" />{' '}
                      <bdi>{b.date || '—'}</bdi>
                    </span>
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-gold" /> <bdi>{b.telephone}</bdi>
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-gold" /> {b.ville || '—'}
                    </span>
                  </div>
                  {b.message && (
                    <p className="mt-3 rounded-xl bg-black/30 p-4 text-sm leading-relaxed text-stone-300">
                      {b.message}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {docCounts.map(([s, n]) => (
                <div
                  key={s}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="font-display text-3xl font-bold text-gold">{n}</p>
                  <p
                    className={`mt-1 text-xs text-stone-400 ${
                      lang === 'ar' ? '' : 'tracking-widest uppercase'
                    }`}
                  >
                    {t.docAdmin.statuses[s]}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              {docs.length === 0 && (
                <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/15 py-16 text-center">
                  <FileText className="h-12 w-12 text-stone-600" />
                  <p className="mt-4 font-semibold text-stone-300">{t.docAdmin.emptyTitle}</p>
                  <p className="mt-1 max-w-sm text-sm text-stone-500">{t.docAdmin.emptyText}</p>
                </div>
              )}

              {docs.map((d) => (
                <article
                  key={d.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{d.nom}</h3>
                      <p className="mt-1 text-sm text-gold">{docTypeLabel(d)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <select
                        value={d.status}
                        onChange={(e) =>
                          persistDocs(
                            docs.map((x) => (x.id === d.id ? { ...x, status: e.target.value } : x))
                          )
                        }
                        aria-label={t.admin.statusAria}
                        className={`rounded-full border px-3 py-1.5 text-xs font-bold outline-none ${STATUS_STYLE[d.status] || STATUS_STYLE.new}`}
                      >
                        {DOC_STATUS.map((s) => (
                          <option key={s} value={s} className="bg-ink text-white">
                            {t.docAdmin.statuses[s]}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeDoc(d.id)}
                        aria-label={t.admin.deleteAria}
                        className="rounded-full border border-red-500/40 p-2 text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-stone-400 sm:grid-cols-3">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4 shrink-0 text-gold" /> <bdi>{d.telephone}</bdi>
                    </span>
                    <span className="flex items-center gap-2">
                      <Copy className="h-4 w-4 shrink-0 text-gold" /> {t.docAdmin.copiesLabel}:{' '}
                      <bdi>{d.copies}</bdi>
                    </span>
                    <span className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0 text-gold" />{' '}
                      <bdi>{fmtDate(d.createdAt)}</bdi>
                    </span>
                  </div>

                  {d.files && d.files.length > 0 && (
                    <div className="mt-3 rounded-xl bg-black/30 p-4">
                      <p className="text-xs font-bold text-stone-400">{t.docAdmin.filesLabel}</p>
                      <ul className="mt-2 space-y-1.5">
                        {d.files.map((f, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-stone-300">
                            <Paperclip className="h-4 w-4 shrink-0 text-gold" />
                            <bdi className="truncate">{f.name}</bdi>
                            <span className="shrink-0 text-xs text-stone-500">
                              ({fmtSize(f.size)})
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {d.notes && (
                    <p className="mt-3 rounded-xl bg-black/30 p-4 text-sm leading-relaxed text-stone-300">
                      <span className="text-xs font-bold text-stone-400">
                        {t.docAdmin.notesLabel}:{' '}
                      </span>
                      {d.notes}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </>
        )}

        <p className="mt-10 text-center text-xs text-stone-600">
          {SITE.name} — {t.admin.footerNote}
        </p>
      </div>
    </div>
  )
}

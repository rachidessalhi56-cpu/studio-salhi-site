import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle, CheckCircle2, Paperclip, FileText } from 'lucide-react'
import { SITE, DOCS_KEY } from '../data/site.js'
import { useLang } from '../i18n/LanguageContext.jsx'
import Eyebrow from './Eyebrow.jsx'
import SectionDivider from './SectionDivider.jsx'

const inputCls =
  'w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-white placeholder:text-stone-500 outline-none transition-colors focus:border-gold'

// Taille lisible (Ko / Mo) — unités comprises au Maroc
const fmtSize = (b) => {
  if (!b && b !== 0) return '—'
  return b >= 1048576
    ? `${(b / 1048576).toFixed(1)} Mo`
    : `${Math.max(1, Math.round(b / 1024))} Ko`
}

export default function DocServices() {
  const { t } = useLang()
  const d = t.docServices
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    docTypeKey: d.docTypes[0].key,
    files: [],
    copies: 1,
    notes: '',
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const typeLabel = (key) => d.docTypes.find((e) => e.key === key)?.label || key

  const handleFiles = (e) => {
    update('files', Array.from(e.target.files || []))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.nom.trim() || !form.telephone.trim() || form.files.length === 0) {
      setError(d.error)
      return
    }

    // 1) Métadonnées seulement (noms + tailles, jamais les blobs) → « Espace pro » /admin
    const filesMeta = form.files.map((f) => ({ name: f.name, size: f.size }))
    const req = {
      id: Date.now(),
      nom: form.nom,
      telephone: form.telephone,
      docTypeKey: form.docTypeKey,
      files: filesMeta,
      copies: form.copies,
      notes: form.notes,
      status: 'new',
      createdAt: new Date().toISOString(),
    }
    try {
      const existing = JSON.parse(localStorage.getItem(DOCS_KEY) || '[]')
      localStorage.setItem(DOCS_KEY, JSON.stringify([req, ...existing]))
    } catch {
      /* stockage indisponible : on continue vers WhatsApp */
    }

    // 2) WhatsApp avec le récapitulatif (langue active).
    //    Les pièces jointes ne passent pas par un lien : l'utilisateur les joint dans le chat.
    const text = d.waDoc({
      nom: form.nom,
      telephone: form.telephone,
      typeLabel: typeLabel(form.docTypeKey),
      files: filesMeta.map((f) => `${f.name} (${fmtSize(f.size)})`).join(', '),
      copies: form.copies,
      notes: form.notes,
    })
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')

    setSent(true)
  }

  const reset = () => {
    setSent(false)
    setForm({ nom: '', telephone: '', docTypeKey: d.docTypes[0].key, files: [], copies: 1, notes: '' })
  }

  return (
    <section id="ecrivain" className="scroll-mt-24 bg-ink py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionDivider />
        <div className="text-center">
          <Eyebrow>{d.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
            {d.title}
          </h2>
          <div className="gold-rule mx-auto mt-6 w-24" />
          <p className="mx-auto mt-6 max-w-2xl text-stone-400">{d.sub}</p>
        </div>

        {/* 3 étapes */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {d.steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-display text-xl font-bold text-gold">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-400">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Formulaire */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-gold/25 bg-white/[0.03] p-6 sm:p-10">
          <h3 className="text-center font-display text-2xl font-semibold text-white">
            {d.formTitle}
          </h3>
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto h-16 w-16 text-gold" />
              <h4 className="mt-5 font-display text-2xl font-semibold text-white">
                {d.successTitle}
              </h4>
              <p className="mx-auto mt-3 max-w-md text-stone-400">{d.successText}</p>
              <button
                onClick={reset}
                className="mt-6 rounded-full border border-gold/50 px-6 py-3 font-semibold text-gold hover:bg-gold/10"
              >
                {d.another}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="doc-nom" className="mb-2 block text-sm font-semibold text-stone-300">
                  {d.name}
                </label>
                <input
                  id="doc-nom"
                  type="text"
                  value={form.nom}
                  onChange={(e) => update('nom', e.target.value)}
                  placeholder={d.phName}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="doc-tel" className="mb-2 block text-sm font-semibold text-stone-300">
                  {d.phone}
                </label>
                <input
                  id="doc-tel"
                  type="tel"
                  value={form.telephone}
                  onChange={(e) => update('telephone', e.target.value)}
                  placeholder={d.phPhone}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="doc-type" className="mb-2 block text-sm font-semibold text-stone-300">
                  {d.docType}
                </label>
                <select
                  id="doc-type"
                  value={form.docTypeKey}
                  onChange={(e) => update('docTypeKey', e.target.value)}
                  className={`${inputCls} appearance-none`}
                >
                  {d.docTypes.map((e) => (
                    <option key={e.key} value={e.key} className="bg-ink">
                      {e.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="doc-copies" className="mb-2 block text-sm font-semibold text-stone-300">
                  {d.copies}
                </label>
                <input
                  id="doc-copies"
                  type="number"
                  min={1}
                  max={999}
                  value={form.copies}
                  onChange={(e) => update('copies', Math.max(1, parseInt(e.target.value, 10) || 1))}
                  className={inputCls}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="doc-files" className="mb-2 block text-sm font-semibold text-stone-300">
                  {d.files}
                </label>
                <input
                  id="doc-files"
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleFiles}
                  className={`${inputCls} cursor-pointer file:me-3 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-bold file:text-ink`}
                />
                <p className="mt-2 text-xs text-stone-500">{d.filesHint}</p>
                {form.files.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {form.files.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-stone-300"
                      >
                        <Paperclip className="h-4 w-4 shrink-0 text-gold" />
                        <bdi className="truncate">{f.name}</bdi>
                        <span className="shrink-0 text-xs text-stone-500">({fmtSize(f.size)})</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="doc-notes" className="mb-2 block text-sm font-semibold text-stone-300">
                  {d.notes}
                </label>
                <textarea
                  id="doc-notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder={d.phNotes}
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
                  {d.submit}
                </button>
                <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-semibold text-gold/90">
                  <FileText className="h-4 w-4" />
                  {d.attachHint}
                </p>
                <p className="mt-3 text-center text-xs leading-relaxed text-stone-500">
                  {d.consentStart}
                  <Link
                    to="/privacy"
                    className="underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold"
                  >
                    {d.consentLink}
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

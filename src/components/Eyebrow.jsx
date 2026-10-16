import { useLang } from '../i18n/LanguageContext.jsx'

// Petit sur-titre doré des sections.
// En arabe : pas d'interlettrage (il casserait les liaisons cursives)
// et pas de capitales (inexistantes en arabe).
export default function Eyebrow({ children, className = '' }) {
  const { lang } = useLang()
  const ar = lang === 'ar'
  return (
    <p
      className={`text-xs font-bold text-gold sm:text-sm ${
        ar ? '' : 'tracking-[0.35em] uppercase'
      } ${className}`}
    >
      {children}
    </p>
  )
}

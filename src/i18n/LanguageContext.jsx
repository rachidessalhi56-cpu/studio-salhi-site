import { createContext, useContext, useEffect, useState } from 'react'
import { STRINGS } from './translations.js'

const LanguageContext = createContext(null)

// Clé localStorage pour la langue (défaut : arabe)
export const LANG_KEY = 'studio-salhi-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(LANG_KEY) || 'ar'
    } catch {
      return 'ar'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      /* stockage indisponible */
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: STRINGS[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang doit être utilisé dans <LanguageProvider>')
  return ctx
}

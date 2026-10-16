import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ─────────────────────────────────────────────────────────────
//  Mise à jour automatique : si une nouvelle version du site est
//  déployée, la page se recharge seule avec la version fraîche.
//  Le visiteur n'a JAMAIS besoin de vider son cache manuellement.
// ─────────────────────────────────────────────────────────────
;(function autoUpdate() {
  try {
    var hasV = new URLSearchParams(location.search).has('v')
    setTimeout(function () {
      fetch('version.json?_=' + Date.now(), { cache: 'no-store' })
        .then(function (r) { return r.ok ? r.json() : null })
        .then(function (d) {
          if (d && d.v && d.v !== __BUILD_V) {
            // Nouvelle version dispo → recharge avec un paramètre unique
            // (le paramètre force le navigateur à ignorer son cache).
            var url = new URL(location.href)
            url.searchParams.set('v', d.v)
            location.replace(url.toString())
          } else if (hasV) {
            // Page déjà fraîche → nettoie le ?v= de l'URL affichée.
            var clean = new URL(location.href)
            clean.searchParams.delete('v')
            history.replaceState(null, '', clean.toString())
          }
        })
        .catch(function () {})
    }, 1500)
  } catch (e) {}
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

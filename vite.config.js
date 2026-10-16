import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

// base: './' → le site fonctionne sur n'importe quel hébergeur statique
// (et même ouvert en local), sans configuration de réécriture d'URL.

// Version du build (AAAAMMJJHHMM) : injectée dans le HTML et écrite dans
// dist/version.json. Le site compare les deux au chargement : si une
// nouvelle version est déployée, la page se recharge seule — le visiteur
// (client non technique) n'a jamais besoin de vider son cache.
const BUILD_V = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12)

function versionFile() {
  return {
    name: 'version-file',
    writeBundle() {
      fs.writeFileSync(path.resolve('dist/version.json'), JSON.stringify({ v: BUILD_V }))
    },
  }
}

export default defineConfig({
  base: './',
  define: { __BUILD_V: JSON.stringify(BUILD_V) },
  plugins: [viteSingleFile(), react(), tailwindcss(), versionFile()],
})

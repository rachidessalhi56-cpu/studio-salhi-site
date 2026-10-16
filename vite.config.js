import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' → le site fonctionne sur n'importe quel hébergeur statique
// (et même ouvert en local), sans configuration de réécriture d'URL.
export default defineConfig({
  base: './',
  plugins: [viteSingleFile(), react(), tailwindcss()],
})

// ─────────────────────────────────────────────────────────────
//  FICHIER DE CONFIGURATION — c'est ici que l'on personnalise
//  le template : identité, numéro WhatsApp, liens, zones.
//  Les TEXTES traduisibles (AR/FR) sont dans src/i18n/translations.js.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Studio Salhi',
  // Nom arabe affiché sous le logo (touche d'identité marocaine)
  arabicName: 'استوديو الصالحي للتصوير الرقمي',
  owner: 'Radwane Esalhi',

  // Téléphone affiché sur le site (format lisible)
  phoneDisplay: '06 72 88 95 03',
  // Numéro WhatsApp au format international SANS "+" ni espaces.
  // ✅ Confirmé par le photographe le 2026-10-16 (visible sur son logo).
  whatsapp: '212672889503',

  instagram: 'https://instagram.com/studio_salhi',
  instagramHandle: '@studio_salhi',

  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lotissement+Zitoune+221+Attaouia+Maroc',
}

// Clé localStorage utilisée pour les réservations (démo du template)
export const BOOKINGS_KEY = 'studio-salhi-bookings'
// Clé localStorage pour les demandes de documents (écrivain public) — démo du template.
// Seules les métadonnées sont stockées (noms + tailles des fichiers, jamais les blobs).
export const DOCS_KEY = 'studio-salhi-doc-requests'

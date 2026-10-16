# Studio Salhi — Site vitrine (template)

Site one-page professionnel pour **Studio Salhi**, photographe mariage & événements au Maroc.
Construit avec **React + Vite + Tailwind CSS + React Router + Lucide** (aucun WordPress, aucun backend).

## Contenu du site

| Route | Contenu |
|---|---|
| `/` | Accueil (hero plein écran) · Services (8 : photo/vidéo + **écrivain public** + **design print**) · Galerie · Tarifs · **Écrivain public** (3 étapes + formulaire d'envoi de documents) · Avis clients · **Réservation en ligne** · Contact · Pied de page |
| `/#/privacy` | **Politique de confidentialité** (AR + FR) : données collectées, usage, stockage local, droits — lien dans le pied de page et sous chaque formulaire |
| `/#/admin` | **Espace pro** à 2 onglets : **Réservations** (statuts nouveau / confirmé / terminé) et **Demandes de documents** (statuts nouveau / en préparation / prêt) — suppression incluse |

**Réservation :** le formulaire enregistre la demande localement **et** ouvre WhatsApp avec un message pré-rempli contenant tous les détails. Aucune fausse soumission.

## ✍️ Écrivain public (كاتب عمومي)

- **Section dédiée** (entre Tarifs et Avis) : explication en 3 étapes + formulaire d'envoi de documents
  (nom, téléphone, type de document, **fichiers multiples** — PDF/JPG/PNG/DOC —, nombre de copies, notes).
- **À l'envoi :** seules les **métadonnées** (noms + tailles des fichiers, jamais les blobs) sont
  enregistrées localement (`localStorage`, clé `studio-salhi-doc-requests`), **et** WhatsApp s'ouvre
  avec un récapitulatif pré-rempli **dans la langue active**. Les liens WhatsApp ne pouvant pas
  transporter de pièces jointes, un message honnête sous le formulaire invite l'utilisateur à
  **joindre ses fichiers directement dans la conversation WhatsApp**.
- **Espace pro** (`/#/admin`, onglet « Demandes de documents ») : liste les demandes (fichiers,
  copies, notes, date) avec statuts *nouveau / en préparation / prêt* et suppression.
- Textes AR + FR dans `src/i18n/translations.js` → clés `docServices` et `docAdmin` ;
  types de documents dans `docServices.docTypes`.

## 🌍 Langues : arabe (défaut) + français

- **Langue par défaut : l'arabe.** Au premier chargement, le site s'affiche en arabe
  (`<html lang="ar" dir="rtl">`).
- **Sélecteur AR/FR** dans la barre de navigation (et dans le menu mobile) : il traduit
  **tout** le site instantanément — navigation, hero, services, galerie, tarifs, avis,
  formulaire de réservation (y compris le message WhatsApp pré-rempli), contact,
  pied de page **et** l'Espace pro `/admin`. Le choix est mémorisé (`localStorage`,
  clé `studio-salhi-lang`).
- **Tous les textes traduisibles sont centralisés** dans `src/i18n/translations.js`
  (objets `ar` et `fr`). Pour modifier un texte, cherchez sa clé dans ce fichier —
  inutile de toucher aux composants.
- **Direction RTL automatique** : quand l'arabe est actif, `dir="rtl"` est appliqué et
  toute la mise en page utilise des propriétés logiques (pas de `left`/`right` en dur).
- **Polices** : arabe → *Aref Ruqaa* (titres) + *Cairo* (texte) ; français → *Playfair Display*
  + *Manrope* (Google Fonts, avec replis système). La bascule est automatique via
  `src/index.css` (`html[lang="ar"] …`). ⚠️ N'appliquez **jamais** d'interlettrage
  (`tracking-*`) ni de capitales à du texte arabe : cela casse les liaisons cursives —
  le composant `src/components/Eyebrow.jsx` gère déjà cette règle.
- Les données non textuelles (nom, téléphone, WhatsApp, Instagram, carte) restent dans
  `src/data/site.js`.

## ⚠️ À vérifier avant livraison

- **Numéro WhatsApp** : configuré sur `212672889503` (dérivé du 06 72 88 95 03).
  Confirmez auprès du photographe que ce numéro possède bien WhatsApp, puis ajustez-le dans
  `src/data/site.js` (champ `whatsapp`, format international sans `+` ni espaces).

## Déploiement gratuit (3 étapes)

Le dossier `dist/` est un site statique : il fonctionne sur n'importe quel hébergeur.

**Option A — Netlify (le plus simple)**
1. Allez sur [app.netlify.com](https://app.netlify.com) → *Add new site* → *Deploy manually*.
2. Glissez-déposez le dossier `dist/` dans la zone prévue.
3. Le site est en ligne (URL du type `studio-salhi.netlify.app`).

**Option B — Vercel**
1. Sur [vercel.com](https://vercel.com) : *Add New* → *Project* → *Upload*.
2. Importez le dossier du projet (ou `dist/`).
3. Déployez — aucune configuration nécessaire.

**Option C — Cloudflare Pages**
1. Sur [dash.cloudflare.com](https://dash.cloudflare.com) → *Workers & Pages* → *Create* → *Pages* → *Upload assets*.
2. Glissez-déposez le dossier `dist/`.
3. Déployez.

## Personnalisation (où modifier quoi)

| Besoin | Fichier exact |
|---|---|
| Nom, téléphone, WhatsApp, Instagram, zones | `src/data/site.js` (tout est centralisé ici) |
| **Tous les textes (AR + FR)** — services, tarifs, avis, formulaire, etc. | `src/i18n/translations.js` (objets `ar` / `fr` — cherchez la clé, modifiez la valeur) |
| Photos de la galerie | `src/components/Gallery.jsx` — remplacez chaque bloc décoratif par `<img src="…" alt="…" className="h-full w-full object-cover" />` (mettez vos images dans `public/images/`) |
| **Photo du photographe** (section « Rencontrez le photographe ») | `src/assets/radwane.jpg` — remplacez le fichier (même nom). ⚠️ Importée avec `?inline` dans `src/components/Photographer.jsx` : elle est intégrée en base64 dans le HTML, le build reste **un seul fichier** `dist/index.html` autonome. Textes de la section : `src/i18n/translations.js` → `photographer` |
| Témoignages clients | `src/i18n/translations.js` → `testimonials.reviews` (pensez à retirer la mention « exemples » / « على سبيل المثال ») |
| Types d'événements du formulaire | `src/i18n/translations.js` → `eventTypes` (clés stables, libellés traduits) |
| Types de documents (écrivain public) | `src/i18n/translations.js` → `docServices.docTypes` |
| Textes de la page Confidentialité | `src/i18n/translations.js` → `privacy` (objets `ar` / `fr` : `sections[]`, `templateNote`…) |
| Couleurs / polices | `src/index.css` (bloc `@theme` : `--color-gold`, `--font-display`, `--font-display-ar`…) |

Après chaque modification : `npm run build` (le dossier `dist/` est régénéré), puis redéployez.

## Développement local

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # génère dist/
```

## Notes techniques

- Routeur en `HashRouter` (`/#/admin`) : le site fonctionne même ouvert depuis un fichier ou
  sans règles de réécriture côté hébergeur.
- L'« Espace pro » stocke les réservations **et** les demandes de documents dans le `localStorage`
  du navigateur (démo du template ; pour les documents : métadonnées uniquement, jamais les fichiers).
  Pour une gestion multi-appareils : branchez un backend, un Google Sheet ou un outil type Formspree.
- Polices : Playfair Display + Manrope (français), Aref Ruqaa + Cairo (arabe) — Google Fonts,
  avec polices système en repli. Bascule automatique selon `lang` (voir `src/index.css`).

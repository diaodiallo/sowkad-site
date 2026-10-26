# Site Sowkad

Site vitrine de **Sowkad**, cabinet de conseil en santé numérique (Conakry, Guinée).
Construit avec [Astro](https://astro.build) : un site statique, rapide sur les connexions lentes et sans maintenance de sécurité.

## Travailler en local

Prérequis : Node.js 22.12 ou plus récent.

```bash
npm install      # une seule fois
npm run dev      # aperçu sur http://localhost:4321
npm run build    # génère le site final dans dist/
```

## Où modifier quoi

Le site existe en français (`/`) et en anglais (`/en/`). Chaque page est un modèle unique dans `src/views/`, qui contient ses textes dans les deux langues.

| Contenu | Fichier |
| --- | --- |
| Coordonnées, RCCM, NIF, liens LinkedIn | `src/data/site.ts` |
| Domaines d'expertise et méthode | `src/data/expertise.ts` (FR) et `expertise.en.ts` (EN) |
| Missions, pays, organisations partenaires | `src/data/references.ts` (FR) et `references.en.ts` (EN) |
| Textes des pages | `src/views/*.astro` (bloc `copy`, une partie `fr` et une partie `en`) |
| Menu, pied de page, adresses des pages | `src/i18n/index.ts` |
| Couleurs, polices, styles communs | `src/styles/global.css` |
| Photos | `src/assets/photos/` (optimisées automatiquement en WebP au build) |
| Formulaires (envoi des e-mails) | `public/envoi.php` |

Les éléments entre crochets `[...]` restent à compléter : adresse de LWS, durée de conservation des données, crédit photo. Le RCCM et le NIF seront ajoutés après l’immatriculation.

**CV téléchargeable** : déposer le PDF dans `public/cv-mamadou-diao-diallo.pdf` ; le bouton apparaît automatiquement sur la page du fondateur. Utiliser une version sans les coordonnées des personnes de référence.

## Mise en ligne sur LWS

Chaque modification poussée sur la branche `main` est construite puis envoyée automatiquement par FTP (`.github/workflows/deploy.yml`).

À configurer une fois dans GitHub, **Settings → Secrets and variables → Actions** :

- Secrets : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (dans l'espace client LWS, rubrique FTP)
- Variable facultative : `FTP_SERVER_DIR`. Par défaut `./`, car le compte FTP LWS s'ouvre déjà dans le dossier `htdocs` du site.

Tant que les secrets ne sont pas renseignés, le workflow construit le site sans l'envoyer.

### Après la première mise en ligne

1. Créer dans LWS les adresses `contact@sowkad.com` (réception) et `site@sowkad.com` (expéditeur des formulaires), ou adapter `public/envoi.php`.
2. Activer le certificat SSL gratuit, puis décommenter la redirection HTTPS dans `public/.htaccess`.
3. Vérifier `site` dans `astro.config.mjs` (URL définitive du domaine).
4. Tester les deux formulaires (contact et candidature).

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

| Contenu | Fichier |
| --- | --- |
| Coordonnées, RCCM, NIF, liens LinkedIn | `src/data/site.ts` |
| Domaines d'expertise et méthode | `src/data/expertise.ts` |
| Missions, pays, organisations partenaires | `src/data/references.ts` |
| Pages | `src/pages/*.astro` |
| Couleurs, polices, styles communs | `src/styles/global.css` |
| Photos | `src/assets/photos/` (optimisées automatiquement en WebP au build) |
| Formulaires (envoi des e-mails) | `public/envoi.php` |

Les éléments entre crochets `[...]` restent à compléter (adresse, téléphone, forme juridique, RCCM, NIF, durée de conservation des données).

**CV téléchargeable** : déposer le PDF dans `public/cv-mamadou-diao-diallo.pdf`. Utiliser une version sans les coordonnées des personnes de référence.

## Mise en ligne sur LWS

Chaque modification poussée sur la branche `main` est construite puis envoyée automatiquement par FTP (`.github/workflows/deploy.yml`).

À configurer une fois dans GitHub, **Settings → Secrets and variables → Actions** :

- Secrets : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (dans l'espace client LWS, rubrique FTP)
- Variable : `FTP_SERVER_DIR`, le dossier racine du site chez LWS (par défaut `./htdocs/`, à vérifier dans l'espace client)

Tant que les secrets ne sont pas renseignés, le workflow construit le site sans l'envoyer.

### Après la première mise en ligne

1. Créer dans LWS les adresses `contact@sowkad.com` (réception) et `site@sowkad.com` (expéditeur des formulaires), ou adapter `public/envoi.php`.
2. Activer le certificat SSL gratuit, puis décommenter la redirection HTTPS dans `public/.htaccess`.
3. Vérifier `site` dans `astro.config.mjs` (URL définitive du domaine).
4. Tester les deux formulaires (contact et candidature).

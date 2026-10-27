export interface Stat {
  value: string;
  label: string;
}

export interface Mission {
  id: string;
  /** Libellé court pour la liste de l'accueil */
  period: string;
  /** Pays et période pour la page Références */
  meta: string;
  title: string;
  /** Sous-titre court sur l'accueil */
  where: string;
  homeText: string;
  text?: string;
  ongoing?: boolean;
  bullets?: string[];
  stats?: Stat[];
  tags?: string;
  /** Titre sur l'accueil, si différent */
  homeTitle?: string;
  /** Afficher sur l'accueil */
  home?: boolean;
}

export const missions: Mission[] = [
  {
    id: 'strides',
    period: 'En cours',
    meta: 'Maroc · 2026',
    title: 'FHI 360 — Projet STRIDES',
    where: 'Maroc · Ministère de la Santé et de la Protection sociale',
    ongoing: true,
    home: true,
    homeText:
      "Évaluation, validation et passage à l'échelle d'une application nationale de surveillance épidémiologique ; numérisation de l'outil d'évaluation des risques et renforcement des capacités.",
    text: "Pour le ministère de la Santé et de la Protection sociale : évaluation de l'application nationale de surveillance épidémiologique, recueil des besoins du niveau national aux établissements, priorisation des exigences et tests d'acceptation, numérisation de l'outil d'évaluation des risques, appui au pilote et au passage à l'échelle, puis formation et procédures.",
    bullets: [
      "Rapport d'évaluation et cartographie des flux",
      'Exigences priorisées et résultats de recette',
      'Supports de formation et procédures',
    ],
    tags: 'Évaluation · Surveillance · UAT · Renforcement de capacités',
  },
  {
    id: 'preses',
    period: 'Depuis 2025',
    meta: 'Guinée · Depuis 2025 · Financement Banque mondiale',
    title: "Projet PReSeS-AOC — Surveillance à base d'événements (EBS)",
    homeTitle: 'Projet PReSeS-AOC',
    where: 'Guinée · financement Banque mondiale',
    ongoing: true,
    home: true,
    homeText:
      "Déploiement national de la surveillance à base d'événements (EBS) et communautaire (CEBS) : conception du Tracker EBS One Health dans DHIS2, couvrant la santé humaine, animale, environnementale et la sécurité.",
    text: "Appui au déploiement national de la surveillance à base d'événements et communautaire. Conception du Tracker DHIS2 One Health avec formulaires de signaux, circuits de vérification et de triage, et escalade selon le risque. Coordination des secteurs santé humaine, services vétérinaires et environnement.",
    bullets: [
      '4 flux de signaux : humain, animal, environnement, sécurité',
      'Normes de gouvernance et dictionnaires de métadonnées',
      'Tableaux de bord et indicateurs de performance',
    ],
    tags: 'One Health · SBE/SBC · DHIS2 Tracker · Africa CDC',
  },
  {
    id: 'chtf',
    period: 'En cours',
    meta: 'Réseau mondial · 2026 — 2027',
    title: 'Child Health Task Force — Site web',
    homeTitle: 'Child Health Task Force',
    where: 'Réseau mondial · Secrétariat hébergé par Save the Children',
    ongoing: true,
    home: true,
    homeText:
      "Maintenance et support technique du site childhealthtaskforce.org (Drupal, Pantheon) et formation de l'équipe à la publication de contenus.",
    text: "Maintenance et support technique de childhealthtaskforce.org, réseau mondial pour la santé de l'enfant dont le secrétariat est hébergé par Save the Children : mises à jour Drupal, gestion de l'environnement Pantheon et formation de l'équipe à la publication.",
    tags: 'Drupal · Pantheon · Formation',
  },
  {
    id: 'anss',
    period: '2026',
    meta: 'Guinée · 2026',
    title: "ANSS — Prédiction des alertes épidémiques par l'IA",
    homeTitle: 'ANSS Guinée',
    where: 'Guinée · Recherche appliquée',
    home: true,
    homeText:
      'Système de prédiction des alertes épidémiques (AUC 0,902) sur 19 maladies prioritaires et 38 districts, avec tableau de bord et application DHIS2 native.',
    text: "Développement et validation d'un système d'apprentissage automatique qui anticipe les dépassements de seuils épidémiques par district et par semaine. Chaîne de données intégrant DHIS2, données climatiques NASA POWER et démographie sur huit ans, avec explicabilité de chaque alerte et une application DHIS2 native pour l'ANSS.",
    stats: [
      { value: '0,902', label: 'AUC-ROC' },
      { value: '58,6 %', label: 'alertes détectées 7 jours avant' },
      { value: '19', label: 'maladies prioritaires' },
      { value: '38', label: 'districts sanitaires' },
    ],
  },
  {
    id: 'madiro-madagascar',
    period: '2026',
    meta: 'Madagascar · 2026',
    title: 'Madiro — Interopérabilité surveillance et vaccination',
    homeTitle: 'Madiro',
    where: 'Madagascar · Burundi',
    home: true,
    homeText:
      "Flux OpenFn entre DHIS2, CommCare et KoboCollect pour la vaccination et le MPOX ; interopérabilité dossier patient VIH, laboratoire et DHIS2 jusqu'à la validation formelle.",
    text: "Conception et mise en œuvre de flux OpenFn entre les systèmes nationaux pour la surveillance épidémique et le rapportage vaccinal, avec tests fonctionnels, d'intégration et recette auprès des équipes nationales avant la mise en production.",
    bullets: [
      'DHIS2 Vaccination vers DHIS2 MPOX',
      'CommCare et KoboCollect vers DHIS2 Surveillance',
      'Moins de saisie manuelle, rapports plus rapides',
    ],
    tags: 'OpenFn · DHIS2 · CommCare · KoboCollect',
  },
  {
    id: 'madiro-burundi',
    period: '2026',
    meta: 'Burundi · 2026',
    title: 'Madiro — VIH, laboratoire et DHIS2',
    where: 'Burundi',
    homeText: '',
    text: "Interopérabilité entre SIDAInfo (dossier patient VIH), IBIPIMO (système d'information de laboratoire) et DHIS2. Cycle complet conduit avec le ministère et les partenaires : exigences, spécifications, cas de test, recette et validation formelle, avec intégration continue sur OpenFn Lightning.",
    bullets: [
      'Rapportage VIH automatisé',
      'Demandes et résultats de charge virale échangés automatiquement',
      "Adaptateurs développés avec l'équipe OpenFn",
    ],
    tags: 'OpenFn · CI/CD · VIH · Laboratoire',
  },
  {
    id: 'jsi-multi',
    period: '2016 — 2025',
    meta: 'Multi-pays · 2021 — 2025',
    title: 'JSI — Outils de données pour le paludisme, la TB et la planification familiale',
    homeTitle: 'JSI Research & Training Institute',
    where: 'Guinée · Multi-pays',
    home: true,
    homeText:
      'Déploiement national de DHIS2 en Guinée ; outil RDQA paludisme adopté dans 5 pays, classé dans le top 3 des applications à la conférence DHIS2 2022.',
    text: "Spécialiste des systèmes de santé numériques : outil Android RDQA paludisme, application DHIS2 d'automatisation des bulletins, tableaux de bord de suivi pour la tuberculose et la planification familiale, portails de suivi-évaluation alimentés par DHIS2.",
    stats: [
      { value: '5', label: "pays utilisant l'outil RDQA" },
      { value: '−95 %', label: 'de délai sur les bulletins paludisme' },
      { value: '32', label: 'pays sur les tableaux de bord TB' },
      { value: 'Top 3', label: 'applications, conférence DHIS2 2022' },
    ],
    tags: 'DHIS2 · Android · Drupal · Paludisme · TB · DMPA-SC',
  },
  {
    id: 'jsi-guinee',
    period: '2016 — 2018',
    meta: 'Guinée · 2016 — 2018',
    title: 'JSI — Déploiement national de DHIS2',
    where: 'Guinée',
    homeText: '',
    text: "Direction du déploiement national de DHIS2 pour le ministère de la Santé : intégration des programmes, registre national des structures, appui à OpenLMIS et à la plateforme de surveillance, et mise en place de l'infrastructure informatique du ministère.",
    stats: [
      { value: '500+', label: 'structures en rapportage mensuel' },
      { value: '200+', label: 'utilisateurs formés' },
      { value: '15', label: 'districts équipés en réseau' },
      { value: '3', label: 'programmes intégrés : VIH, palu, SMI' },
    ],
    tags: 'DHIS2 · Registre des structures · OpenLMIS · Infrastructure',
  },
];

export const homeOrder = ['strides', 'preses', 'chtf', 'madiro-madagascar', 'anss', 'jsi-multi'];
export const referencesOrder = [
  'strides',
  'preses',
  'chtf',
  'madiro-madagascar',
  'madiro-burundi',
  'anss',
  'jsi-multi',
  'jsi-guinee',
];

export const earlyMissions = [
  { org: 'Digital Square', text: 'intégration du registre national des structures (GOFR) à DHIS2, Guinée' },
  { org: 'Niger', text: 'feuille de route DHIS2 2019–2022 du ministère de la Santé' },
  { org: 'CRS', text: 'Tracker DHIS2 du programme VIH avec rappels de rendez-vous, Guinée' },
  { org: 'GIZ', text: 'plateforme de soumission des protocoles du CNERS, Guinée' },
  { org: 'ICF', text: "profil du système d'information paludisme, Guinée" },
  { org: 'JSI', text: 'évaluation des dossiers patients VIH, Burundi' },
];

export const countries = [
  'Guinée',
  'Sénégal',
  'Maroc',
  'Burundi',
  'Madagascar',
  'Niger',
  "Côte d'Ivoire",
  'Burkina Faso',
  'Sierra Leone',
  'Mali',
  'Kenya',
  'Tanzanie',
  'Mozambique',
];

export const partners: { name: string; url?: string }[] = [
  { name: 'Projet PReSeS-AOC · financement Banque mondiale' },
  { name: 'FHI 360', url: 'https://www.fhi360.org' },
  { name: 'Save the Children', url: 'https://www.savethechildren.org' },
  { name: 'JSI', url: 'https://www.jsi.com' },
  { name: 'Madiro', url: 'https://www.madiro.org' },
  { name: 'GIZ', url: 'https://www.giz.de' },
  { name: 'ICF' },
  { name: 'ANSS Guinée' },
];

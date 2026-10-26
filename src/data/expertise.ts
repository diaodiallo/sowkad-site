export interface Domain {
  id: string;
  icon: 'grid' | 'network' | 'pulse' | 'chart' | 'check' | 'people';
  title: string;
  summary: string;
  intro: string;
  tags: string;
  items: string[];
  example: { where: string; text: string };
}

export const domains: Domain[] = [
  {
    id: 'dhis2',
    icon: 'grid',
    title: 'Architecture DHIS2 & déploiements nationaux',
    summary:
      'Configuration Tracker et agrégé, registres de structures, tableaux de bord, applications natives, administration serveur.',
    intro:
      "Conception et mise en place de plateformes DHIS2 à l'échelle d'un pays, de la configuration des métadonnées à l'administration du serveur.",
    tags: 'DHIS2 · Tracker · Maps/SIG · DataStore · Linux',
    items: [
      'Configuration des données agrégées et du Tracker',
      'Registre national des structures sanitaires',
      'Applications DHIS2 natives et tableaux de bord analytiques',
      'Administration, sécurisation et sauvegarde des serveurs',
      'Feuilles de route nationales DHIS2 (évaluation, ressources, budget)',
    ],
    example: {
      where: 'Guinée',
      text: 'Déploiement national de DHIS2 : rapportage mensuel de plus de 500 structures et intégration des programmes VIH, paludisme et santé maternelle et infantile.',
    },
  },
  {
    id: 'interoperabilite',
    icon: 'network',
    title: 'Interopérabilité des systèmes',
    summary:
      'Échanges automatisés entre dossiers patients, laboratoires, logistique et surveillance, avec tests et intégration continue.',
    intro:
      'Faire circuler automatiquement les données entre dossiers patients, laboratoires, logistique et surveillance, pour supprimer les doubles saisies.',
    tags: 'OpenFn · HL7 FHIR · OpenHIE · HAPI FHIR · REST',
    items: [
      "Architecture d'échange alignée sur les principes OpenHIE",
      'Flux OpenFn et adaptateurs sur mesure',
      'Harmonisation des métadonnées et correspondances sémantiques',
      'Intégration continue avec tests automatisés',
      'Documentation technique et transfert de compétences',
    ],
    example: {
      where: 'Burundi',
      text: 'Connexion de SIDAInfo, IBIPIMO et DHIS2 : rapports VIH et échanges de charges virales automatisés, validés par le ministère avant la mise en production.',
    },
  },
  {
    id: 'surveillance',
    icon: 'pulse',
    title: 'Surveillance & alerte précoce One Health',
    summary:
      "Surveillance à base d'événements et communautaire (SBE/SBC), triage des signaux, escalade selon le risque, alignée Africa CDC et OMS.",
    intro:
      "Des dispositifs de détection des signaux qui relient santé humaine, animale et environnementale, conformes aux orientations d'Africa CDC et de l'OMS.",
    tags: 'EBS · CEBS · DHIS2 Tracker · One Health',
    items: [
      "Conception de la surveillance à base d'événements et communautaire",
      "Circuits de vérification, de triage et d'escalade selon le risque",
      'Définitions de signaux partagées entre secteurs',
      'Normes de gouvernance, dictionnaires de métadonnées, règles de validation',
      'Indicateurs de performance et tableaux de bord',
    ],
    example: {
      where: 'Guinée',
      text: 'Tracker EBS national One Health pour le projet PReSeS-AOC (financement Banque mondiale), couvrant quatre flux de signaux : humain, animal, environnement et sécurité.',
    },
  },
  {
    id: 'ia',
    icon: 'chart',
    title: 'IA appliquée à la santé publique',
    summary:
      'Modèles de prédiction des alertes épidémiques intégrant données climatiques et démographiques, avec explicabilité pour les agents de district.',
    intro:
      'Des modèles prédictifs utiles sur le terrain : validés dans le temps, explicables, et intégrés aux outils que les équipes utilisent déjà.',
    tags: 'Python · LightGBM · SHAP · Power BI',
    items: [
      'Chaînes de données DHIS2, climat et démographie',
      'Modèles de prédiction avec validation temporelle',
      'Explicabilité de chaque alerte pour les agents de district',
      'Tableaux de bord web et applications DHIS2 natives',
    ],
    example: {
      where: 'ANSS Guinée',
      text: 'Prédiction des dépassements de seuils épidémiques (AUC 0,902) : 58,6 % des vraies alertes détectées sept jours à l’avance, sur 19 maladies et 38 districts.',
    },
  },
  {
    id: 'evaluation',
    icon: 'check',
    title: "Évaluation & validation d'applications",
    summary:
      'Audit fonctionnel, analyse des écarts, priorisation des exigences, tests d’acceptation utilisateurs et feuilles de route.',
    intro:
      "Un regard indépendant sur un outil existant : ce qui marche, ce qui manque, et ce qu'il faut prioriser pour l'utiliser durablement.",
    tags: 'Évaluation · Exigences · Recette UAT',
    items: [
      "Évaluation des fonctionnalités, de l'ergonomie et des flux de données",
      'Recueil des besoins aux niveaux national, régional et local',
      'Exigences priorisées et analyse des écarts',
      "Tests d'acceptation utilisateurs jusqu'à la validation formelle",
      "Évaluations rapides de chaînes d'approvisionnement",
    ],
    example: {
      where: 'Maroc',
      text: "Évaluation et validation d'une application nationale de surveillance épidémiologique pour FHI 360 (STRIDES), avec numérisation de l'outil d'évaluation des risques.",
    },
  },
  {
    id: 'formation',
    icon: 'people',
    title: 'Formation & plateformes web',
    summary:
      'Formation des utilisateurs, procédures et guides, portails de connaissances et maintenance de sites institutionnels.',
    intro: 'Des équipes autonomes et des plateformes de connaissances qui restent en ligne et à jour.',
    tags: 'Formation · SOP · Drupal · Pantheon',
    items: [
      'Formation des utilisateurs et des formateurs',
      "Procédures opérationnelles et guides d'utilisation",
      'Portails de suivi-évaluation alimentés par DHIS2',
      'Maintenance et support de sites institutionnels',
    ],
    example: {
      where: 'Kenya, Tanzanie, Mozambique',
      text: 'Portail SCDataUse : tableaux de bord de suivi-évaluation sous Drupal, intégrant les données DHIS2 de trois pays.',
    },
  },
];

export const steps = [
  { title: 'Diagnostic', text: "Comprendre l'existant, les acteurs et les besoins à chaque niveau." },
  { title: 'Conception', text: 'Spécifications fonctionnelles validées avec les parties prenantes.' },
  { title: 'Développement', text: 'Configuration, intégration et tests automatisés.' },
  { title: 'Validation', text: "Recette avec les utilisateurs jusqu'à l'approbation formelle." },
  { title: 'Transfert', text: "Déploiement, formation et documentation pour l'autonomie des équipes." },
];

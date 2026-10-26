import type { Mission } from './references';

export const missions: Mission[] = [
  {
    id: 'strides',
    period: 'Ongoing',
    meta: 'Morocco · 2026',
    title: 'FHI 360 — STRIDES project',
    where: 'Morocco · Ministry of Health and Social Protection',
    ongoing: true,
    homeText:
      'Assessment, validation and scale-up of a national epidemiological surveillance application; digitisation of the risk assessment tool and capacity building.',
    text: "For the Ministry of Health and Social Protection: assessment of the national epidemiological surveillance application, user needs gathered from national to facility level, requirement prioritisation and acceptance testing, digitisation of the risk assessment tool, support for the pilot and scale-up, then training and SOPs.",
    bullets: [
      'Assessment report and data flow mapping',
      'Prioritised requirements and UAT results',
      'Training materials and SOPs',
    ],
    tags: 'Assessment · Surveillance · UAT · Capacity building',
  },
  {
    id: 'preses',
    period: 'Since 2025',
    meta: 'Guinea · Since 2025 · World Bank funding',
    title: 'PReSeS-AOC project — Event-based surveillance (EBS)',
    homeTitle: 'PReSeS-AOC project',
    where: 'Guinea · World Bank funding',
    ongoing: true,
    homeText:
      'National rollout of event-based (EBS) and community-based (CEBS) surveillance: design of the One Health EBS Tracker in DHIS2, covering human, animal and environmental health and security events.',
    text: 'Support for the national rollout of event-based and community-based surveillance. Design of the One Health DHIS2 Tracker with signal forms, verification and triage workflows, and risk-based escalation. Coordination of the human health, veterinary and environment sectors.',
    bullets: [
      '4 signal streams: human, animal, environmental, security',
      'Governance standards and metadata dictionaries',
      'Dashboards and performance indicators',
    ],
    tags: 'One Health · EBS/CEBS · DHIS2 Tracker · Africa CDC',
  },
  {
    id: 'chtf',
    period: 'Ongoing',
    meta: 'Global network · 2026 — 2027',
    title: 'Child Health Task Force — Website',
    homeTitle: 'Child Health Task Force',
    where: 'Global network · Secretariat hosted by Save the Children',
    ongoing: true,
    homeText:
      'Maintenance and technical support for childhealthtaskforce.org (Drupal, Pantheon), and training the team to publish content.',
    text: "Maintenance and technical support for childhealthtaskforce.org, the global child health network whose secretariat is hosted by Save the Children: Drupal updates, Pantheon environment management and training the team to publish content.",
    tags: 'Drupal · Pantheon · Training',
  },
  {
    id: 'anss',
    period: '2026',
    meta: 'Guinea · 2026',
    title: 'ANSS — AI-based epidemic alert prediction',
    homeTitle: 'ANSS Guinea',
    where: 'Guinea · Applied research',
    homeText:
      'Epidemic alert prediction system (AUC 0.902) covering 19 priority diseases and 38 districts, with a dashboard and a native DHIS2 app.',
    text: "Development and validation of a machine learning system that anticipates epidemic threshold exceedances by district and week. Data pipeline combining DHIS2, NASA POWER climate data and demographics over eight years, with an explanation for every alert and a native DHIS2 app for ANSS.",
    stats: [
      { value: '0.902', label: 'AUC-ROC' },
      { value: '58.6%', label: 'of alerts detected 7 days ahead' },
      { value: '19', label: 'priority diseases' },
      { value: '38', label: 'health districts' },
    ],
  },
  {
    id: 'madiro-madagascar',
    period: '2026',
    meta: 'Madagascar · 2026',
    title: 'Madiro — Surveillance and immunisation interoperability',
    homeTitle: 'Madiro',
    where: 'Madagascar · Burundi',
    homeText:
      'OpenFn workflows between DHIS2, CommCare and KoboCollect for immunisation and MPOX; interoperability between HIV patient records, the laboratory system and DHIS2 through to formal sign-off.',
    text: 'Design and implementation of OpenFn workflows between national systems for epidemic surveillance and immunisation reporting, with functional, integration and acceptance testing alongside national teams before going live.',
    bullets: [
      'DHIS2 Immunisation to DHIS2 MPOX',
      'CommCare and KoboCollect to DHIS2 Surveillance',
      'Less manual data entry, faster reporting',
    ],
    tags: 'OpenFn · DHIS2 · CommCare · KoboCollect',
  },
  {
    id: 'madiro-burundi',
    period: '2026',
    meta: 'Burundi · 2026',
    title: 'Madiro — HIV, laboratory and DHIS2',
    where: 'Burundi',
    homeText: '',
    text: 'Interoperability between SIDAInfo (HIV patient records), IBIPIMO (laboratory information system) and DHIS2. Full cycle run with the Ministry and partners: requirements, specifications, test cases, acceptance testing and formal sign-off, with continuous integration on OpenFn Lightning.',
    bullets: [
      'Automated HIV reporting',
      'Viral load requests and results exchanged automatically',
      'Adaptors developed with the OpenFn team',
    ],
    tags: 'OpenFn · CI/CD · HIV · Laboratory',
  },
  {
    id: 'jsi-multi',
    period: '2016 — 2025',
    meta: 'Multi-country · 2021 — 2025',
    title: 'JSI — Data tools for malaria, TB and family planning',
    homeTitle: 'JSI Research & Training Institute',
    where: 'Guinea · Multi-country',
    homeText:
      'National DHIS2 rollout in Guinea; malaria RDQA tool adopted in 5 countries and ranked among the top 3 apps at the 2022 DHIS2 Annual Conference.',
    text: 'Digital health systems specialist: Android malaria RDQA tool, DHIS2 app automating malaria bulletins, monitoring dashboards for tuberculosis and family planning, and monitoring and evaluation portals powered by DHIS2.',
    stats: [
      { value: '5', label: 'countries using the RDQA tool' },
      { value: '−95%', label: 'malaria bulletin turnaround time' },
      { value: '32', label: 'countries on the TB dashboards' },
      { value: 'Top 3', label: 'apps, DHIS2 Annual Conference 2022' },
    ],
    tags: 'DHIS2 · Android · Drupal · Malaria · TB · DMPA-SC',
  },
  {
    id: 'jsi-guinee',
    period: '2016 — 2018',
    meta: 'Guinea · 2016 — 2018',
    title: 'JSI — National DHIS2 rollout',
    where: 'Guinea',
    homeText: '',
    text: "Led the national DHIS2 rollout for the Ministry of Health: programme integration, the national master facility registry, support for OpenLMIS and the surveillance platform, and setting up the Ministry's IT infrastructure.",
    stats: [
      { value: '500+', label: 'facilities reporting monthly' },
      { value: '200+', label: 'users trained' },
      { value: '15', label: 'districts networked' },
      { value: '3', label: 'programmes integrated: HIV, malaria, MCH' },
    ],
    tags: 'DHIS2 · Facility registry · OpenLMIS · Infrastructure',
  },
];

export const earlyMissions = [
  { org: 'Digital Square', text: "integrating Guinea's national facility registry (GOFR) into DHIS2" },
  { org: 'Niger', text: "the Ministry of Health's 2019–2022 DHIS2 roadmap" },
  { org: 'CRS', text: 'DHIS2 Tracker for the HIV programme with appointment reminders, Guinea' },
  { org: 'GIZ', text: 'protocol submission platform for the national ethics committee (CNERS), Guinea' },
  { org: 'ICF', text: 'malaria routine health information system profile, Guinea' },
  { org: 'JSI', text: 'HIV electronic medical record assessment, Burundi' },
];

export const countries = [
  'Guinea',
  'Senegal',
  'Morocco',
  'Burundi',
  'Madagascar',
  'Niger',
  "Côte d'Ivoire",
  'Burkina Faso',
  'Sierra Leone',
  'Mali',
  'Kenya',
  'Tanzania',
  'Mozambique',
];

export const partners: { name: string; url?: string }[] = [
  { name: 'PReSeS-AOC project · World Bank funding' },
  { name: 'FHI 360', url: 'https://www.fhi360.org' },
  { name: 'Save the Children', url: 'https://www.savethechildren.org' },
  { name: 'JSI', url: 'https://www.jsi.com' },
  { name: 'Madiro', url: 'https://www.madiro.org' },
  { name: 'GIZ', url: 'https://www.giz.de' },
  { name: 'ICF' },
  { name: 'ANSS Guinea' },
];

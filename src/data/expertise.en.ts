import type { Domain } from './expertise';

export const domains: Domain[] = [
  {
    id: 'dhis2',
    icon: 'grid',
    title: 'DHIS2 architecture & national rollouts',
    summary:
      'Tracker and aggregate configuration, facility registries, dashboards, native apps and server administration.',
    intro:
      'Designing and setting up DHIS2 platforms at national scale, from metadata configuration to server administration.',
    tags: 'DHIS2 · Tracker · Maps/GIS · DataStore · Linux',
    items: [
      'Aggregate and Tracker configuration',
      'National master facility registry',
      'Native DHIS2 apps and analytics dashboards',
      'Server administration, security and backups',
      'National DHIS2 roadmaps (assessment, resources, budget)',
    ],
    example: {
      where: 'Guinea',
      text: 'National DHIS2 rollout: monthly reporting from more than 500 health facilities, integrating the HIV, malaria and maternal and child health programmes.',
    },
  },
  {
    id: 'interoperability',
    icon: 'network',
    title: 'Health system interoperability',
    summary:
      'Automated exchanges between patient records, laboratories, logistics and surveillance, with automated tests and continuous integration.',
    intro:
      'Making data flow automatically between patient records, laboratories, logistics and surveillance systems, so nothing is entered twice.',
    tags: 'OpenFn · HL7 FHIR · OpenHIE · HAPI FHIR · REST',
    items: [
      'Exchange architecture aligned with OpenHIE principles',
      'OpenFn workflows and custom adaptors',
      'Metadata harmonisation and semantic mapping',
      'Continuous integration with automated tests',
      'Technical documentation and knowledge transfer',
    ],
    example: {
      where: 'Burundi',
      text: 'Connecting SIDAInfo, IBIPIMO and DHIS2: automated HIV reporting and viral load exchanges, signed off by the Ministry before going live.',
    },
  },
  {
    id: 'surveillance',
    icon: 'pulse',
    title: 'One Health surveillance & early warning',
    summary:
      'Event-based and community-based surveillance (EBS/CEBS), signal triage and risk-based escalation, aligned with Africa CDC and WHO guidance.',
    intro:
      'Signal detection systems that connect human, animal and environmental health, in line with Africa CDC and WHO guidance.',
    tags: 'EBS · CEBS · DHIS2 Tracker · One Health',
    items: [
      'Design of event-based and community-based surveillance',
      'Verification, triage and risk-based escalation workflows',
      'Signal definitions shared across sectors',
      'Governance standards, metadata dictionaries and validation rules',
      'Performance indicators and dashboards',
    ],
    example: {
      where: 'Guinea',
      text: 'National One Health EBS Tracker for the PReSeS-AOC project (World Bank funding), covering four signal streams: human, animal, environmental and security.',
    },
  },
  {
    id: 'ai',
    icon: 'chart',
    title: 'AI for public health',
    summary:
      'Epidemic alert prediction models that combine climate and demographic data, with explanations district health officers can use.',
    intro:
      'Predictive models that are useful in the field: validated over time, explainable, and built into the tools teams already use.',
    tags: 'Python · LightGBM · SHAP · Power BI',
    items: [
      'Data pipelines combining DHIS2, climate and demographic data',
      'Prediction models with walk-forward temporal validation',
      'An explanation for every alert, for district health officers',
      'Web dashboards and native DHIS2 apps',
    ],
    example: {
      where: 'ANSS Guinea',
      text: 'Predicting epidemic threshold exceedances (AUC 0.902): 58.6% of true alerts detected seven days ahead, across 19 diseases and 38 districts.',
    },
  },
  {
    id: 'assessment',
    icon: 'check',
    title: 'Application assessment & validation',
    summary:
      'Functional audits, gap analysis, requirement prioritisation, user acceptance testing and roadmaps.',
    intro:
      'An independent look at an existing tool: what works, what is missing, and what to prioritise so it can be used for the long term.',
    tags: 'Assessment · Requirements · UAT',
    items: [
      'Assessment of functionality, usability and data flows',
      'User needs gathered at national, regional and facility level',
      'Prioritised requirements and gap analysis',
      'User acceptance testing through to formal sign-off',
      'Rapid supply chain assessments',
    ],
    example: {
      where: 'Morocco',
      text: 'Assessment and validation of a national epidemiological surveillance application for FHI 360 (STRIDES), including digitisation of the risk assessment tool.',
    },
  },
  {
    id: 'training',
    icon: 'people',
    title: 'Training & web platforms',
    summary: 'User training, SOPs and guides, knowledge portals and maintenance of institutional websites.',
    intro: 'Self-sufficient teams, and knowledge platforms that stay online and up to date.',
    tags: 'Training · SOPs · Drupal · Pantheon',
    items: [
      'Training for users and trainers',
      'Standard operating procedures and user guides',
      'Monitoring and evaluation portals powered by DHIS2',
      'Maintenance and support for institutional websites',
    ],
    example: {
      where: 'Kenya, Tanzania, Mozambique',
      text: 'SCDataUse portal: Drupal-based monitoring and evaluation dashboards integrating DHIS2 data from three countries.',
    },
  },
];

export const steps = [
  { title: 'Assessment', text: 'Understand the current system, the stakeholders and the needs at every level.' },
  { title: 'Design', text: 'Functional specifications validated with stakeholders.' },
  { title: 'Build', text: 'Configuration, integration and automated tests.' },
  { title: 'Validation', text: 'User acceptance testing through to formal approval.' },
  { title: 'Handover', text: 'Deployment, training and documentation so teams can run it themselves.' },
];

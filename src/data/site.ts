// Informations générales du site.
export const site = {
  name: 'Sowkad',
  email: 'contact@sowkad.com',
  phones: ['+224 662 256 106', '+224 623 909 413'],
  address: { fr: 'Kipé, Ratoma, Conakry, Guinée', en: 'Kipé, Ratoma, Conakry, Guinea' },
  legalForm: { fr: 'SARLU', en: 'SARLU (single-member limited liability company)' },
  capital: '[montant]', // [À COMPLÉTER] capital social en GNF
  // RCCM et NIF : à ajouter ici (et dans src/views/Legal.astro) après l'immatriculation.
  founder: 'Mamadou Diao Diallo',
  linkedin: 'https://www.linkedin.com/in/mamadou-diao-diallo-7705b8a7',
  github: 'https://github.com/diaodiallo',
  cv: '/cv-mamadou-diao-diallo.pdf', // déposer le PDF dans public/
};

/** Numéro au format tel: (sans espaces) */
export const telHref = (n: string) => `tel:${n.replace(/\s+/g, '')}`;

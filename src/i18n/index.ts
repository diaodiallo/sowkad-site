export type Lang = 'fr' | 'en';
export type PageKey = 'home' | 'expertise' | 'references' | 'founder' | 'team' | 'contact' | 'legal' | 'notFound';

/** Adresse de chaque page dans chaque langue. */
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  expertise: { fr: '/expertise/', en: '/en/expertise/' },
  references: { fr: '/references/', en: '/en/references/' },
  founder: { fr: '/fondateur/', en: '/en/founder/' },
  team: { fr: '/equipe/', en: '/en/team/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
  notFound: { fr: '/', en: '/en/' },
};

export const ui = {
  fr: {
    skip: 'Aller au contenu',
    homeLabel: 'Sowkad — accueil',
    mainNav: 'Navigation principale',
    menu: 'Menu',
    nav: { expertise: 'Expertise', references: 'Références', founder: 'Le fondateur', team: 'Équipe' },
    cta: "Discuter d'un projet",
    legal: 'Mentions légales',
    switchTo: 'English',
    switchLabel: 'Read this page in English',
    current: 'Français',
    city: 'Conakry, Guinée',
    form: {
      ok: 'Merci, votre message a bien été envoyé. Nous vous répondrons rapidement.',
      error: "L'envoi n'a pas abouti. Vérifiez les champs obligatoires ou écrivez-nous directement par e-mail.",
      name: 'Nom complet',
      email: 'E-mail',
      message: 'Message',
      honeypot: 'Ne pas remplir',
    },
  },
  en: {
    skip: 'Skip to content',
    homeLabel: 'Sowkad — home',
    mainNav: 'Main navigation',
    menu: 'Menu',
    nav: { expertise: 'Expertise', references: 'Track record', founder: 'Founder', team: 'Team' },
    cta: 'Discuss a project',
    legal: 'Legal notice',
    switchTo: 'Français',
    switchLabel: 'Lire cette page en français',
    current: 'English',
    city: 'Conakry, Guinea',
    form: {
      ok: 'Thank you, your message has been sent. We will get back to you shortly.',
      error: 'Your message could not be sent. Please check the required fields or email us directly.',
      name: 'Full name',
      email: 'Email',
      message: 'Message',
      honeypot: 'Leave empty',
    },
  },
} as const;

export function navItems(lang: Lang) {
  const t = ui[lang].nav;
  return [
    { key: 'expertise' as PageKey, label: t.expertise },
    { key: 'references' as PageKey, label: t.references },
    { key: 'founder' as PageKey, label: t.founder },
    { key: 'team' as PageKey, label: t.team },
  ].map((i) => ({ ...i, href: routes[i.key][lang] }));
}

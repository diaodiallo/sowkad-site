import type { Lang } from '../i18n';
import * as expertiseFr from './expertise';
import * as expertiseEn from './expertise.en';
import * as referencesFr from './references';
import * as referencesEn from './references.en';

export function expertise(lang: Lang) {
  return lang === 'en' ? expertiseEn : expertiseFr;
}

export function references(lang: Lang) {
  const d = lang === 'en' ? referencesEn : referencesFr;
  const byId = (id: string) => d.missions.find((m) => m.id === id)!;
  return {
    ...d,
    byId,
    home: referencesFr.homeOrder.map(byId),
    list: referencesFr.referencesOrder.map(byId),
  };
}

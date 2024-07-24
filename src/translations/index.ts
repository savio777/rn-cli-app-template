import {I18n} from 'i18n-js';

import en from './locales/en';
import pt from './locales/pt';

const i18n = new I18n({
  pt,
  en,
});

i18n.defaultLocale = 'pt';

export default i18n;

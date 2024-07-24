import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import i18n from '../translations';
import {TranslateOptions} from 'i18n-js';

interface Props {
  children: ReactNode;
}

type ILocales = 'en' | 'pt';

interface ITranslation {
  locale: ILocales;
  t: (scope: string, options?: TranslateOptions) => string;
  changeLocale: () => void;
}

export const TranslationContext = createContext<ITranslation>(
  {} as ITranslation,
);

export const TranslationProvider = ({children}: Props) => {
  const [locale, setLocale] = useState<ILocales>('pt');

  const t = (scope: string, options?: TranslateOptions): string =>
    i18n.t(scope, {locale, ...options});

  const changeLocale = useCallback(() => {
    setLocale(oldValue => (oldValue === 'en' ? 'pt' : 'en'));
  }, []);

  return (
    <TranslationContext.Provider value={{t, changeLocale, locale}}>
      {children}
    </TranslationContext.Provider>
  );
};

export const usei18n = () => useContext(TranslationContext);

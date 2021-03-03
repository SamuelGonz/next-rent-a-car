import { useLocale } from "./useLocale";

export const useTranslate = () => {
   const { locale } = useLocale();
   const lang = require(`../lang/${locale}.json`);

   return lang;
};

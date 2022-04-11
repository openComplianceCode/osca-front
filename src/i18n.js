import { createI18n } from "vue-i18n";

import en from "vuetify/lib/locale/en";
import myEn from "@/locales/en.json";

const messages = {
  en: {
    ...myEn,
    $vuetify: en,
  },
};

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});

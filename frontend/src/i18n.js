import { createI18n } from "vue-i18n";
import * as ENG from "./assets/translations/en.json";
import * as FR from "./assets/translations/fr.json";
import * as NL from "./assets/translations/nl.json";
import * as AR from "./assets/translations/ar.json";

const i18n = createI18n({
  legacy: false,
  locale: "ENG",
  globalInjection: true,
  messages: {
    ENG: { ...ENG },
    FR: { ...FR },
    NL: { ...NL },
    عربي: { ...AR },
  },
});
export default i18n;

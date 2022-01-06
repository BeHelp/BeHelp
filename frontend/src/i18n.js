import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ENG",
  globalInjection: true,
  messages: {
    ENG: {
      about: "About",
      volunteers: "Volunteers",
      contactus: "Contact Us",
    },
    FR: {
      about: "À propos",
      volunteers: "Bénévoles",
      contactus: "Contactez-nous",
    },
    NL: {
      about: "Over ons",
      volunteers: "Vrijwilligers",
      contactus: "Contacteer Ons",
    },
  },
});
export default i18n;

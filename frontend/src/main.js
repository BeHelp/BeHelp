import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from "./assets/js/font-awesome";
import vSelect from "vue-select";
import i18n from "./i18n";
import Notifications from "@kyvg/vue3-notification";

createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .use(Notifications)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("v-select", vSelect)
  .mount("#app");

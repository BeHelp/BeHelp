import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from './assets/js/font-awesome';
import vSelect from 'vue-select';

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('v-select', vSelect)
  .mount('#app');


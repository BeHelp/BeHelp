import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from './assets/js/font-awesome';
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('v-select', vSelect)
  .mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

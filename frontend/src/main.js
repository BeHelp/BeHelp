import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from './assets/js/font-awesome';
import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');

import 'bootstrap/dist/js/bootstrap.js';

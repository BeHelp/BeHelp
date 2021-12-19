import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

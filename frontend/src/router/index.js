import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Volunteers from '../views/Volunteers.vue';

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
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: Volunteers,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

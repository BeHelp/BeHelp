import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contacts from "../views/Contacts.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Volunteers from "../views/Volunteers.vue";
import Thankyou from "../views/Thankyou.vue";
import VolunteerContact from "../views/VolunteerContact.vue";
import Myprofile from "../views/Myprofile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/volunteers",
    name: "Volunteers",
    component: Volunteers,
  },
  {
    path: "/volunteer/:_id",
    name: "VolunteerContact",
    component: VolunteerContact,
  },
  {
    path: "/myprofile",
    name: "My Profile",
    component: Myprofile,
  },
  {
    path: "/thankyou",
    name: "Thank you",
    component: Thankyou,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

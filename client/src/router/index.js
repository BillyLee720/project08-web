import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import ForgetPassword from '../components/ForgetPassword.vue';
import Lodd from '../views/lodd.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/lodd',
    name: 'Lodd',
    component: Lodd,
  },
  {
    path: '/loginView',
    name: 'LoginView',
    component: LoginView,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'forgetPassword',
        name: 'ForgetPassword',
        component: ForgetPassword,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

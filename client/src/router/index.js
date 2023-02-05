import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import Login from '../components/Login/Login.vue';
import Register from '../components/Login/Register.vue';
import ForgetPassword from '../components/Login/ForgetPassword.vue';
import Captcha from '../components/Login/Captcha.vue';

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
      {
        path: 'captcha',
        name: 'Captcha',
        component: Captcha,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

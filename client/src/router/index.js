import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import Login from '../components/Login/Login.vue';
import Register from '../components/Login/Register.vue';
import ForgetPassword from '../components/Login/ForgetpasswordView.vue';
import Captcha from '../components/Login/Captcha.vue';
import Calculator from '../views/CalculatorView.vue';
import MemberView from '@/views/MemberView.vue';
import ShopView from '../views/ShopView.vue';
import ErrorView from '../views/ErrorView.vue';

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
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/loginView',
    name: 'LoginView',
    component: LoginView,
    children: [
      {
        path: 'captcha',
        name: 'Captcha',
        component: Captcha,
      },
    ],
  },
  {
    path: '/Calculator',
    name: 'Calculator',
    component: Calculator,
  },
  {
    path: '/Member',
    name: 'MemberView',
    component: MemberView,
  },
  {
    path: '/Shop',
    name: 'ShopView',
    component: ShopView,
  },
  {
    path: '/Error',
    name: 'ErrorView',
    component: ErrorView,
  },
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

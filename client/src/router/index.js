import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/index.vue';
import AboutView from '../views/AboutView.vue';
import Login from '../components/Login/Login.vue';
import Register from '../components/Login/Register.vue';
import ForgetPassword from '../components/Login/ForgetpasswordView.vue';
import Captcha from '../components/Login/Captcha.vue';
import Calculator from '../views/CalculatorView.vue';
import MemberView from '@/views/MemberView.vue';
import ShopView from '../views/ShopView.vue';
import ErrorView from '../views/ErrorView.vue';
import RecordView from '../views/RecordView.vue';
import ChangePasswordView from '../views/ChangePasswordView.vue';
import { store } from '@/store/store';

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
    meta: { requiresGuest: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresGuest: true },
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
  {
    path: '/Record',
    name: 'RecordView',
    component: RecordView,
  },
  {
    path: '/changepassword',
    name: 'ChangePasswordView',
    component: ChangePasswordView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

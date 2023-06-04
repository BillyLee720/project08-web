import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

// window.addEventListener('load', function () {
//   document.onkeydown = function (event) {
//     if (event && event.key === 'F5') {
//       event.preventDefault();
//     }
//   };
// });

const app = createApp(App);

const savedToken = localStorage.getItem('token');
if (savedToken) {
  store.dispatch('setToken', savedToken);
  store.dispatch('setUserLoggedIn', true);
}
app.use(router);
app.use(store);
app.mount('#app');

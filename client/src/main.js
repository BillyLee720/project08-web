import { createApp } from 'vue';
import App from './App.vue';
import Vue from 'vue';
import router from './router';
import { sync } from 'vuex-router-sync';
import store from '@/store/store';

// createApp(App).use(router).mount('#app');
// sync(store, router);
const app = createApp(App).use(store).use(router);
app.mount('#app');
// new Vue({
//   router,
//   components: { App },
// }).$mount('#app');

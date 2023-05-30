import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store';
// import elementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';

// createApp(App).use(router).mount('#app');
// sync(store, router);
const app = createApp(App);
app.use(router);
app.use(store);
// Vue.use(elementPlus);
app.mount('#app');
// new Vue({
//   router,
//   components: { App },
// }).$mount('#app');

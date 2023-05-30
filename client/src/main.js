import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// createApp(App).use(router).mount('#app');
// sync(store, router);
const app = createApp(App);
app.use(router);
app.use(store);
// Vue.use(ElementUI);
app.mount('#app');
// new Vue({
//   router,
//   components: { App },
// }).$mount('#app');

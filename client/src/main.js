import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Vue.prototype.$http = axios;
// Vue.prototype.$axios = axios;
// //設定請求的根路徑
// axios.defaults.baseURL = '/api';
createApp(App).use(router).mount('#app');
// Vue.config.productionTip = false;
// Vue.use(VueAxios, axios);

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount('#app');

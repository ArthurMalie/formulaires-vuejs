import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import Bootstrap from 'bootstrap-vue';
import routes from './routes';

import 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Bootstrap);

const router = new VueRouter({mode: 'history', routes});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
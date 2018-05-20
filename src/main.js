// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import store from './store';
import svgIcon from './icons';
import ElementUI from 'element-ui';
import animateLine from '@/directives/animateLine';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(svgIcon);
Vue.use(ElementUI);
Vue.use(animateLine);

/* eslint-disable no-new */
new Vue({
	router,
    store
}).$mount('#app');

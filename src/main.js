import { createApp } from 'vue';
import lodash from 'lodash';
import App from './App.vue';
import util from './utils';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'virtual:svg-icons-register';
import SvgIcon from './components/SvgIcon.vue';
import { createPinia } from 'pinia';
import Vue3Tour from 'vue3-tour';
import 'vue3-tour/dist/vue3-tour.css';
import router from './router';

console.log('util', util);

const app = createApp(App);
app.component('SvgIcon', SvgIcon);
app.use(router);
app.use(store);
app.use(Vue3Tour);
app.use(ElementPlus);
app.use(createPinia());
app.config.globalProperties.lodash = lodash;
app.config.globalProperties.msg = 'hello';
app.mount('#app');

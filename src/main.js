import { createApp } from 'vue';
import App from './App.vue';
import util from './utils';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'virtual:svg-icons-register';
import SvgIcon from './components/SvgIcon.vue';
import { createPinia } from 'pinia';

console.log('util', util);

const app = createApp(App);
app.component('SvgIcon', SvgIcon);
app.use(store);
app.use(ElementPlus);
app.use(createPinia());

app.mount('#app');

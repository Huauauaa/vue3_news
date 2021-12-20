import { createApp } from 'vue';
import App from './App.vue';
import util from './utils';
import store from './store';

console.log('util', util);

const app = createApp(App);
app.use(store);

app.mount('#app');

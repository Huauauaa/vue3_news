import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import TestPage from './pages/TestPage.vue';
import HTodoPage from './pages/HTodoPage.vue';
import GraphPage from './pages/GraphPage.vue';
import VuejsOrg from './pages/VuejsOrg.vue';

import VueTourDemo from './components/demo/VueTourDemo.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/test', component: TestPage },
  { path: '/h-todo', component: HTodoPage },
  { path: '/tour', component: VueTourDemo },
  { path: '/graph', component: GraphPage },
  { path: '/Essentials', component: VuejsOrg },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;

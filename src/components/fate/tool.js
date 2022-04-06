import { defineAsyncComponent } from 'vue';

export const com = () => import('./FateButton.vue');
export const com1 = defineAsyncComponent(() => import('./FateButton.vue'));

export const coms = [
  {
    name: 'button',
    component: defineAsyncComponent(() => import('./FateButton.vue')),
  },
  {
    name: 'input',
    component: defineAsyncComponent(() => import('./FateInput.vue')),
  },
];

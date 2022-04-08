import { defineAsyncComponent } from 'vue';

export const com = () => import('./CompositionButton.vue');
export const com1 = defineAsyncComponent(() =>
  import('./CompositionButton.vue'),
);

export const coms = [
  {
    name: 'button',
    component: defineAsyncComponent(() => import('./CompositionButton.vue')),
  },
  {
    name: 'input',
    component: defineAsyncComponent(() => import('./FateInput.vue')),
  },
];

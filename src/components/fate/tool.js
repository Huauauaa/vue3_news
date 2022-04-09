import { defineAsyncComponent } from 'vue';

export const com = () => import('./CompositionButton.vue');
export const com1 = defineAsyncComponent(() =>
  import('./CompositionButton.vue'),
);

export const coms = [
  {
    component: defineAsyncComponent(() => import('./FateGroup.vue')),
    options: {
      component: defineAsyncComponent(() => import('./OptionalButton.vue')),
      name: 'Button',
      label: 'form coms',
      onFoo: () => {
        console.log('onFoo', 'coms');
      },
    },
  },
  {
    name: 'button',
    component: defineAsyncComponent(() => import('./OptionalButton.vue')),
  },
  {
    name: 'input',
    component: defineAsyncComponent(() => import('./FateInput.vue')),
  },
];

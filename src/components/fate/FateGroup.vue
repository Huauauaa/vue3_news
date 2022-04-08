<script setup>
import { defineAsyncComponent, h } from 'vue';
import CompositionButton from './CompositionButton.vue';

import FateInput from './FateInput.vue';
const props = defineProps({
  name: { type: String, required: true },
  options: { type: Object, default: () => ({}) },
});

const OptionalButton = defineAsyncComponent(() =>
  import('./OptionalButton.vue'),
);
console.log('FateGroup options', props.options, props.options.label);

const Com = () => {
  switch (props.name || props.options.name) {
    case 'Input':
      return h(FateInput);
    case 'Button':
      console.log('FateGroup OptionalButton', OptionalButton);
      return h(OptionalButton, {
        label: 'mock group',
        // on + 首字母大写,才能emit
        onFoo: () => {
          console.log('foo click foo');
        },
        ...props.options,
      });

    default:
      return h('div', {}, 'No Data');
  }
};
</script>
<template>
  <fieldset>
    <legend>group</legend>
    <Com />
  </fieldset>
</template>
<style scoped></style>

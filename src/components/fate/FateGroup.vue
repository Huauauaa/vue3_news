<script setup>
import { h } from 'vue';
import FateButton from './FateButton.vue';
import FateInput from './FateInput.vue';
const props = defineProps({ name: { type: String, required: true } });

console.log(props);

const Com = () => {
  switch (props.name) {
    case 'Input':
      return h(FateInput);
    case 'Button':
      return h(FateButton);

    default:
      return h('div');
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

<script setup>
// https://v3.vuejs.org/guide/component-custom-events.html#handling-v-model-modifiers
import { reactive } from 'vue';

const state = reactive({
  value: '',
  trimValue: '',
  numberValue: null,
});
</script>

<template>
  <fieldset>
    <legend>Modifiers</legend>
    {{ state }}
    <div>value: <input v-model="state.value" /></div>
    <div>trim: <input v-model.trim="state.trimValue" /></div>
    <div>number: <input v-model.number="state.numberValue" /></div>
  </fieldset>
</template>

<style scoped></style>

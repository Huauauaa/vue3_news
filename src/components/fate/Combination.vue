<script setup>
import CompositionButton from './CompositionButton.vue';
import { com, com1, coms } from './tool';

console.log(com, typeof com);
console.log(com1, typeof com1);
</script>
<template>
  <component :is="CompositionButton"></component>
  <hr />
  <component :is="com"></component>
  <hr />
  <component :is="com1"></component>
  <hr />
  <h2>coms list</h2>
  <component
    v-for="item in coms"
    :key="item.name"
    :options="item.options"
    :is="item.component"
  ></component>
  <h2>coms list</h2>
</template>
<style scoped></style>

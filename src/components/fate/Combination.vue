<script setup>
import FateButton from './FateButton.vue';
import { com, com1, coms } from './tool';

console.log(com, typeof com);
console.log(com1, typeof com1);
</script>
<template>
  <component :is="FateButton"></component>
  <hr />
  <component :is="com"></component>
  <hr />
  <component :is="com1"></component>
  <hr />
  <component
    v-for="item in coms"
    :key="item.name"
    :is="item.component"
  ></component>
</template>
<style scoped></style>

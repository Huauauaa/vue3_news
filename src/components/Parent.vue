<script setup>
import Child from './Child.vue';
import { ref } from 'vue';

const childRef = ref();
const onDecrease = () => {
  childRef.value.count--;
};
</script>
<template>
  <fieldset>
    <legend>Parent</legend>
    <button @click="onDecrease">-</button>
    <Child ref="childRef" />
  </fieldset>
</template>
<style scoped></style>

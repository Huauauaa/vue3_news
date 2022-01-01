<script setup>
import Child from './Child.vue';
import { ref } from 'vue';

const childRef = ref();
const onDecrease = () => {
  childRef.value.count--;
};

function onSay(val) {
  console.log('onSay', val);
}
</script>
<template>
  <fieldset>
    <legend>Parent</legend>
    <button @click="onDecrease">-</button>
    <Child ref="childRef" @say="onSay" name="c" />
  </fieldset>
</template>
<style scoped></style>

<script setup>
import { ref, defineExpose } from 'vue';
const count = ref(0);

defineExpose({ count });
</script>
<template>
  <fieldset>
    <legend>Child</legend>
    {{ count }}
    <button @click="count++">+</button>
  </fieldset>
</template>
<style scoped></style>

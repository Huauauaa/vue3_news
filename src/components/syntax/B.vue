<script setup>
import { ref, onActivated, onDeactivated } from 'vue';
const content = ref('');

onActivated(() => {
  console.log('B onActivated');
});

onDeactivated(() => {
  console.log('B onDeactivated');
});
</script>

<template>
  <fieldset>
    <legend>B</legend>
    content: {{ content }}<input v-model="content" />
  </fieldset>
</template>

<style scoped></style>

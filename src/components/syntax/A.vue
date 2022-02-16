<script setup>
import { ref, onActivated, onDeactivated } from 'vue';

const count = ref(0);

onActivated(() => {
  console.log('A onActivated');
});

onDeactivated(() => {
  console.log('A onDeactivated');
});
</script>

<template>
  <fieldset>
    <legend>A</legend>
    count: {{ count }}
    <button
      @click="
        () => {
          count++;
        }
      "
    >
      +
    </button>
  </fieldset>
</template>

<style scoped></style>

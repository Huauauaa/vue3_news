<script setup>
import { computed } from 'vue';

const foo = computed(() => localStorage.getItem('foo'));
</script>

<template>
  <fieldset>
    <legend>Computed Watch</legend>
    {{ foo }}
  </fieldset>
</template>

<style scoped></style>

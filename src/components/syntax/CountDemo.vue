<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <fieldset>
    <legend>CountDemo</legend>
    <button @click="count++">{{ count }}</button>
  </fieldset>
</template>

<style scoped></style>

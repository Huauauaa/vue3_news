<script setup>
import { inject } from 'vue';
const id = 1;
const className = 'submit-button';
const author = inject('author');
console.log({ author });
</script>

<template>
  <!-- fallback content -->
  <button type="submit">
    <slot :id="id" :class-name="className">submit</slot>
  </button>
</template>

<style scoped></style>

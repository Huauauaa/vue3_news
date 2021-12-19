<template>
  <fieldset>
    <legend>DOG API</legend>
    <img :src="avatar" alt="a dog" width="100" />
  </fieldset>
</template>

<script setup>
import { ref } from 'vue';

const avatar = ref('');

const response = await fetch('https://dog.ceo/api/breeds/image/random');
const { message } = await response.json();
avatar.value = message;
</script>

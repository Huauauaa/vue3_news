<script setup>
const props = defineProps(['name']);
const emits = defineEmits(['changeName', 'change-id']);
</script>
<template>
  {{ name }}
  <input v-model="name" @input="$emit('change')" />
  <button @click="() => emits('changeName')">changeName</button>
  <button @click="() => emits('change-id')">change-id</button>
</template>

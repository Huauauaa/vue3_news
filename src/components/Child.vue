<script setup>
import { ref, getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
const count = ref(0);

defineExpose({ count });
const emits = defineEmits(['say']);
</script>
<template>
  <fieldset>
    <legend>Child</legend>
    {{ $attrs }}
    {{ count }}
    <button @click="count++">+</button>
    <button @click="() => emits('say', 'hello')">echo</button>
  </fieldset>
</template>
<style scoped></style>

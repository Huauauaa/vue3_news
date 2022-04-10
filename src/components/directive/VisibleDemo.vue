<script setup>
import { ref } from 'vue';
let visible = ref(true);

function onToggle() {
  visible.value = !visible.value;
}
</script>
<template>
  <p v-show="visible">hi</p>
  {{ visible }}
  <button @click="onToggle">Toggle</button>
</template>
<style scoped></style>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'btn',
  },
});

const emits = defineEmits(['click']);

function onClick(...args) {
  // emits('click', ...args);
}
</script>
<template>
  <button @click="onClick">{{ props.label }}</button>
</template>
<style scoped></style>

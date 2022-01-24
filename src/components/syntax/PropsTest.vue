<script setup>
const props = defineProps({
  name: { type: String, required: true },
  value: { type: String, required: true },
  value1: { type: String, required: false, default: 'default' },
});
</script>

<template>
  <fieldset>
    <legend>{{ props.name }}</legend>
    value: {{ props.value }}------value1: {{ props.value1 }}
  </fieldset>
</template>

<style scoped></style>

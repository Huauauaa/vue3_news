<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  ref,
} from 'vue';

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});
onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});
onUpdated(() => {
  console.log('onUpdated');
});
onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});
onUnmounted(() => {
  console.log('onUnmounted');
});
onActivated(() => {
  console.log('onActivated');
});
onDeactivated(() => {
  console.log('onDeactivated');
});

const count = ref(0);
function onCount() {
  count.value++;
}
</script>
<template>
  <button @click="onCount">{{ count }}</button>
</template>
<style scoped></style>

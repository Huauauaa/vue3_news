<script setup>
import { computed, ref } from 'vue';

console.log('this', this);

const count = ref(0);

const plusOne = computed(() => count.value + 1, {
  onTrack(e) {
    console.log('onTrack', e);
  },
  onTrigger(e) {
    console.log('onTrigger', e);
  },
});

const countOne = computed({
  get() {
    return count.value + 1;
  },
  set(val) {
    count.value = val - 1;
  },
});
</script>
<template>
  <input v-model.number="count" />
  <ol>
    <li>
      Write operation failed: computed value is readonly
      <input v-model.number="plusOne" />
    </li>
    <li> <input v-model.number="countOne" /></li>
  </ol>
</template>
<style scoped></style>

<script setup>
const props = defineProps({
  active: { type: Boolean, default: true },
});
</script>

<template>
  <figure :class="{ active }">
    <slot></slot>
  </figure>
</template>

<style scoped lang="scss">
figure {
  &.active {
    filter: grayscale(0);
  }
  filter: grayscale(1);
}
</style>

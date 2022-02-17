<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const level = computed(() => props.data.label.split('-').length);
</script>
<template>
  <div :style="{ textIndent: `${level}rem` }">
    {{ props.data.label }}
    <template v-if="props.data.children && props.data.children.length > 0">
      <Leaf
        v-for="item in props.data.children"
        :key="item.label"
        :data="item"
      ></Leaf>
    </template>
  </div>
</template>
<style scoped></style>

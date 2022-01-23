<script setup>
import { computed } from 'vue';
import { randomHexColorCode } from '../utils/color';

const props = defineProps({
  data: {
    required: true,
    type: Array,
  },
  fractionDigits: {
    required: false,
    type: Number,
    default: 1,
  },
});

const total = computed(() => {
  return props.data.reduce((result, current) => {
    result += current.value;
    return result;
  }, 0);
});

const items = computed(() => {
  return props.data.map((item) => {
    return {
      percentage: `${((item.value / total.value) * 100).toFixed(
        props.fractionDigits,
      )}%`,
      value: item.value,
      label: item.label,
      backgroundColor: item.backgroundColor || randomHexColorCode(),
    };
  });
});
</script>

<template>
  <fieldset>
    <legend>ProgressBar</legend>
    <slot name="legend"></slot>
    <el-popover trigger="hover">
      <div class="tip-content">
        <div v-for="(item, index) in items" :key="index">
          {{ item.label }}:{{ item.value }} ({{ item.percentage }})
        </div>
      </div>
      <template #reference>
        <div class="progress-bar-wrapper">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="item"
            :style="{
              width: item.percentage,
              backgroundColor: item.backgroundColor,
            }"
          />
          {{ total }}
        </div>
      </template>
    </el-popover>
  </fieldset>
</template>

<style scoped>
.progress-bar-wrapper {
  height: 20px;
  display: flex;
}
</style>

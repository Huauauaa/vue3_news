<script setup>
import { inject, onMounted, reactive } from 'vue';
const state = reactive({ label: '' });

const getGraph = inject('getGraph');
const getNode = inject('getNode');

onMounted(() => {
  const node = getNode();
  console.log({ node });
  const { type, role, label } = node.store.data.data;
  state.type = type;
  state.role = role;
  state.label = label;
  node.on('change:data', (...args) => {
    console.log(args);
  });
});
</script>

<template>
  <div class="wrapper" :class="{ [state.role]: true, [state.type]: true }">
    <div>
      {{ state.label }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.step {
  background: rgba(67, 118, 255, 0.05);
  border: 1px solid rgba(67, 118, 255, 0.3);
}
.wrapper {
  width: 266px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 8px 14px 0px rgba(50, 91, 183, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.host {
    color: #2f78ffff;
  }
  &.guest {
    color: #00c7beff;
  }

  &.reader {
    @extend .step;
    border-radius: 11px;
  }

  &.dataio {
    @extend .step;
  }

  &.scale {
    @extend .step;
    transform: skewX(-15deg);
  }
  &.evaluation {
    @extend .step;
    border-radius: 21px;
  }
}
</style>

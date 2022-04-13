<script setup>
import { ref } from 'vue';
import GraphViewer from '../components/GraphViewer.vue';

const GraphViewerRef = ref();
function onAdd() {
  GraphViewerRef.value.add();
}
function onClickNode(...args) {
  console.log(...args);
}
</script>
<template>
  <div>
    <button @click="onAdd">add</button>
  </div>
  <GraphViewer ref="GraphViewerRef" @clickNode="onClickNode"></GraphViewer>
</template>
<style scoped></style>

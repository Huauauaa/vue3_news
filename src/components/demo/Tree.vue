<script setup>
import Leaf from './Leaf.vue';
const treeData = [
  { label: '1', children: [{ label: '1-1' }] },
  { label: '2', children: [] },
  { label: '3', children: [{ label: '3-1', children: [{ label: '3-1-1' }] }] },
];
</script>
<template>
  <fieldset>
    <legend>tree</legend>
    <div class="tree-wrapper">
      <Leaf v-for="item in treeData" :key="item.label" :data="item"></Leaf>
    </div>
  </fieldset>
</template>
<style scoped>
.tree-wrapper {
  text-align: left;
}
</style>

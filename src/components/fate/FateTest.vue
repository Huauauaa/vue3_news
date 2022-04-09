<script setup>
import FateGroup from './FateGroup.vue';
import FateGroup2 from './FateGroup2.vue';
import FateGroup3 from './FateGroup3.vue';
import RefGroup from './RefGroup.vue';
</script>
<template>
  <fieldset>
    <legend>Fate Test</legend>
    <FateGroup name="Button"></FateGroup>
    <FateGroup name="Input"></FateGroup>
    <FateGroup2 name="Button"></FateGroup2>
    <hr />
    <FateGroup3></FateGroup3>
    <hr />
    <hr />
    <RefGroup></RefGroup>
  </fieldset>
</template>
<style scoped></style>

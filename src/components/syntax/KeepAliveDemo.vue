<script setup>
import { shallowRef } from 'vue';
import A from './A.vue';
import B from './B.vue';
const componentName = shallowRef(A);
</script>

<template>
  <fieldset>
    <legend>KeepAliveDemo</legend>
    <label>
      <input type="radio" v-model="componentName" :value="A" name="flag" />A
    </label>
    <label>
      <input type="radio" v-model="componentName" :value="B" name="flag" />B
    </label>

    <component :is="componentName" />
    KeepAlive
    <KeepAlive>
      <component :is="componentName" />
    </KeepAlive>
  </fieldset>
</template>

<style scoped></style>

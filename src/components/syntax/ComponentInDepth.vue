<script setup>
import { ref } from 'vue';
import ChildVue from './Child.vue';

const text = ref('');

function onChildChange() {
  console.log('onChildChange');
}
function onChildChangeName() {
  console.log('onChildChangeName');
}
function onChildChangeId() {
  console.log('onChildChangeId');
}
</script>
<template>
  <input v-model="text" />
  <ChildVue
    :name="text"
    @change="onChildChange"
    @change-name="onChildChangeName"
    @changeId="onChildChangeId"
  />
</template>
<style scoped></style>

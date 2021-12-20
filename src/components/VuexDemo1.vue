<script setup>
import { useStore } from 'vuex';

import { mapState, mapMutations } from '../hooks/useMapStore';

const store = useStore();

const { log } = mapState();
const { 'log/UPDATE_READ': UPDATE_READ } = mapMutations();
function onClick() {
  // store.commit('log/UPDATE_READ', ++log.value.read);
  UPDATE_READ(++log.value.read);
}
</script>

<template>
  <fieldset>
    <legend>VuexDemo1</legend>
    <div>read: {{ log.read }} <button @click="onClick">+</button></div>
  </fieldset>
</template>

<style scoped></style>

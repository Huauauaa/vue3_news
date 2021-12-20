<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import { mapState, mapMutations } from '../hooks/useMapStore';

const { count: c, log } = mapState();
const store = useStore();

const count = computed(() => store.state.count);
const { 'log/UPDATE_READ': UPDATE_READ } = mapMutations();

function onClick() {
  store.commit('increment');
}

function onAddRead() {
  UPDATE_READ(--log.value.read);
}
</script>

<template>
  <fieldset>
    <legend>VuexDemo</legend>
    <div>
      {{ c }}--{{ count }} <button @click="onClick">{{ count }}</button>
    </div>
    <div>read: {{ log.read }} <button @click="onAddRead">-</button></div>
  </fieldset>
</template>

<style scoped></style>

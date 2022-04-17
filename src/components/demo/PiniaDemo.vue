<script setup>
import useCounterStore from '../../stores/counter.store';

const counter = useCounterStore();

counter.$subscribe(
  (mutation, state) => {
    console.log(mutation, state);
  },
  // this subscription will be kept after the component is unmounted
  { detached: true },
);

function onClick() {
  counter.$patch({ count: counter.count + 1 });
}
function onReset() {
  counter.$reset();
}
</script>

<template>
  <fieldset>
    <legend>PiniaDemo</legend>
    {{ counter.count }}
    <button @click="onClick">+</button>
    <button @click="onReset">reset</button>
  </fieldset>
</template>

<style scoped></style>

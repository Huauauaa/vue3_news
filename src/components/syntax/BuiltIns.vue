<script setup>
import { ref } from 'vue';
const message = ref({ name: 'foo' });
const show = ref(false);
const a = 'a';
const foo = { name: 'foo' };

const props = defineProps({ data: { type: Object }, id: { type: String } });

console.log({ props }, props.data);
</script>
<template>
  <fieldset>
    <legend>Built-ins</legend>
    // TODO
    <div .someProperty="foo">11</div>
    <div :test.attr="a">Lorem, ipsum dolor.</div>
    <!-- <div ^test="a">Lorem, ipsum dolor.</div> -->
    <div v-cloak>
      {{ message }}
    </div>
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">hello</p>
    </Transition>
  </fieldset>
</template>
<style scoped>
[v-cloak] {
  display: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

<script>
import { defineAsyncComponent } from 'vue';
import FateGroup from './FateGroup.vue';
import CompositionButton from './CompositionButton.vue';
import OptionalButton from './OptionalButton.vue';

const FateInput = defineAsyncComponent(() => import('./FateInput.vue'));

export default {
  name: 'FateTest2',
  methods: {
    bar() {
      console.log('bar 22222222');
    },
    onFoo() {
      console.log('fffffffoooooooo');
    },
  },
};
</script>

<template>
  <fieldset>
    <legend>Fate Test222</legend>
    <FateGroup name="Button"></FateGroup>
    <hr />
    <FateInput></FateInput>
    <hr />
    <keep-alive>
      <CompositionButton label="2" @click="bar"></CompositionButton>
    </keep-alive>
    <OptionalButton
      label="OptionalButton"
      @click="bar"
      @foo="onFoo"
    ></OptionalButton>
  </fieldset>
</template>
<style scoped></style>

<script setup>
import { ref } from 'vue';
import Modifiers from './Modifiers.vue';
import PropsTest from './PropsTest.vue';
import KeepAliveDemo from './KeepAliveDemo.vue';
import ComputedWatch from './ComputedWatch.vue';
import ComputedTest from './ComputedTest.vue';
import AccessingProps from './AccessingProps.vue';
const legendColor = 'red';
const count = ref(10);
</script>

<template>
  <fieldset>
    <legend>VueSyntax</legend>
    <input v-model.number="count" />
    <AccessingProps title="accessing props" :count="count"></AccessingProps>
    <ComputedTest></ComputedTest>
    <ComputedWatch></ComputedWatch>
    <KeepAliveDemo></KeepAliveDemo>
    <Modifiers></Modifiers>
    <PropsTest name="null" :value="null" :value1="null" />
    <PropsTest name="undefined" :value="undefined" :value1="undefined" />
    <PropsTest name="normal" value="foo" value1="foo" />
    <PropsTest name="empty" />
  </fieldset>
</template>

<style scoped>
legend {
  color: v-bind(legendColor);
}
</style>

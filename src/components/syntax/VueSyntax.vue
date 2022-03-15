<script setup>
import Modifiers from './Modifiers.vue';
import PropsTest from './PropsTest.vue';
import KeepAliveDemo from './KeepAliveDemo.vue';
import ComputedWatch from './ComputedWatch.vue';
const legendColor = 'red';
</script>

<template>
  <fieldset>
    <legend>VueSyntax</legend>
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

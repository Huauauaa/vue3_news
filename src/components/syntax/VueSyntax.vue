<script setup>
import { ref, defineAsyncComponent } from 'vue';
import Modifiers from './Modifiers.vue';
import PropsTest from './PropsTest.vue';
import KeepAliveDemo from './KeepAliveDemo.vue';
import ComputedWatch from './ComputedWatch.vue';
import ComputedTest from './ComputedTest.vue';
import BuiltIns from './BuiltIns.vue';
import AccessingProps from './AccessingProps.vue';
import TemplateDemo from './template-demo';

const CountDemo = defineAsyncComponent(() => import('./CountDemo.vue'));

const legendColor = 'red';
const count = ref(10);
</script>

<template>
  <fieldset>
    <legend>VueSyntax</legend>
    <component :is="CountDemo" />
    <CountDemo></CountDemo>
    <TemplateDemo></TemplateDemo>
    <component :is="BuiltIns" />
    <BuiltIns></BuiltIns>
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

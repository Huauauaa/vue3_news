<script setup>
import { ref, onMounted } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import DraggableDemo from '../components/DraggableDemo.vue';
import DraggableDemo1 from '../components/DraggableDemo1.vue';
import Demo from '../components/Demo.vue';
import Parent from '../components/Parent.vue';
import Dog from '../components/Dog.vue';
import VuexDemo from '../components/VuexDemo.vue';
import VuexDemo1 from '../components/VuexDemo1.vue';
import variables from '../styles/variables';
import IDBDemo from '../components/IDBDemo.vue';
import ClassDemo from '../components/ClassDemo.vue';
import AddLine from '../components/AddLine.vue';
import PiniaDemo from '../components/demo/PiniaDemo.vue';
import DayjsDemo from '../components/demo/DayjsDemo.vue';
import AntVX6 from '../components/demo/AntVX6.vue';
import ProgressBar from '../components/ProgressBar.vue';
import ElementDemo from '../components/element/ElementDemo.vue';
import HTMLSandbox from '../components/html/HTMLSandbox.vue';
import VueSyntax from '../components/syntax/VueSyntax.vue';
import Tree from '../components/demo/Tree.vue';
import OrgStructure from '../components/demo/OrgStructure.vue';

import IconDemo from '../components/demo/IconDemo.vue';
import ColorIconDemo from '../components/demo/ColorIconDemo.vue';
import CustomComponent from '../components/custom/CustomComponent.vue';
import FateTest from '../components/fate/FateTest.vue';
import FateTest2 from '../components/fate/FateTest2.vue';
import DirectiveDashboard from '../components/directive/DirectiveDashboard.vue';

const isShowDemo = ref(true);

function say() {
  console.log('say some words');
}

function onSwitchDemo() {
  isShowDemo.value = !isShowDemo.value;
}

onMounted(async () => {
  try {
    const response = await fetch('/api/getRoleById?id=2');
    const response1 = await fetch('/api/user');
    const data = await response.json();
    const data1 = await response1.json();
    console.log('mock data', data, data1);
  } catch (error) {
    console.error(error);
  }
});
</script>
<template>
  <div :style="variables">
    <DirectiveDashboard></DirectiveDashboard>

    <fieldset>
      <legend>Fate</legend>

      <FateTest2></FateTest2>

      <FateTest></FateTest>
      <!-- <Combination></Combination> -->
      <CustomComponent></CustomComponent>
    </fieldset>

    <ColorIconDemo></ColorIconDemo>
    <IconDemo></IconDemo>
    <OrgStructure></OrgStructure>

    <Tree></Tree>
    <VueSyntax></VueSyntax>
    <HTMLSandbox />
    <ElementDemo />

    <ProgressBar
      :data="[
        { label: 'a', value: 0 },
        { label: 'b', value: 2 },
        { label: 'c', value: 3 },
        { label: 'd', value: 4 },
      ]"
    >
      <template #legend> 1 </template>
    </ProgressBar>

    <AntVX6 />
    <DayjsDemo />
    <PiniaDemo />
    <SvgIcon name="like" />

    <AddLine />
    <ClassDemo />
    <suspense><IDBDemo /></suspense>

    <VuexDemo1 />
    <VuexDemo />
    <suspense>
      <Dog />
    </suspense>

    <DraggableDemo1 />
    <DraggableDemo />

    <Parent data-name="Parent" />
    <HelloWorld msg="Hello Vue 3 + Vite" @say="say">
      <template #name>
        <span>Component: HelloWorld.vue</span>
      </template>
      <template #version>
        <p>Version: 1.0.1</p>
      </template>
    </HelloWorld>
    <button @click="onSwitchDemo">{{ isShowDemo ? 'hide' : 'show' }}</button>

    <Demo v-if="isShowDemo" />
  </div>
</template>
<style scoped></style>

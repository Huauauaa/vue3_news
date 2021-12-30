<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import DraggableDemo from './components/DraggableDemo.vue';
import DraggableDemo1 from './components/DraggableDemo1.vue';
import Demo from './components/Demo.vue';
import Parent from './components/Parent.vue';
import Dog from './components/Dog.vue';
import VuexDemo from './components/VuexDemo.vue';
import VuexDemo1 from './components/VuexDemo1.vue';
import variables from './styles/variables';
import IDBDemo from './components/IDBDemo.vue';
import ClassDemo from './components/ClassDemo.vue';
import AddLine from './components/AddLine.vue';

const isShowDemo = ref(true);

function say() {
  console.log('say some words');
}

function onSwitchDemo() {
  isShowDemo.value = !isShowDemo.value;
}
</script>

<template>
  <div :style="variables">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

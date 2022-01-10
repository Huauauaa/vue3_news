<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, onMounted } from 'vue';
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
import PiniaDemo from './components/demo/PiniaDemo.vue';
import DayjsDemo from './components/demo/DayjsDemo.vue';

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

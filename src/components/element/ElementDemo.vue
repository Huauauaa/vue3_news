<script setup>
import { ref } from 'vue';
import SwitchDemo from './SwitchDemo.vue';
import DatePickerDemo from './DatePickerDemo.vue';
import DialogDemo from './DialogDemo.vue';

const visible = ref(false);

function onOpen() {
  visible.value = true;
}

function onClose() {
  visible.value = false;
}
</script>

<template>
  <fieldset>
    <legend>Element plus</legend>
    <button @click="onOpen">open dialog</button>
    <DialogDemo :visible="visible" @close="onClose"></DialogDemo>
    <SwitchDemo />
    <DatePickerDemo />
  </fieldset>
</template>

<style scoped></style>

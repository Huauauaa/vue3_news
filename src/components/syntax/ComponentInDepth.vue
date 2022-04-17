<script setup>
import { ref } from 'vue';
import ChildVue from './Child.vue';
import SubmitButton from './cases/SubmitButton.vue';

const text = ref('');

function onChildChange() {
  console.log('onChildChange');
}
function onChildChangeName() {
  console.log('onChildChangeName');
}
function onChildChangeId() {
  console.log('onChildChangeId');
}
</script>
<template>
  <fieldset>
    <legend>slot</legend>
    msg:{{ msg }}
    <SubmitButton />
    <SubmitButton>
      <!-- Scoped Slots -->
      <template #default="{ id, className }">
        SUBMIT {{ id }} {{ className }}
      </template>
    </SubmitButton>
  </fieldset>

  <input v-model="text" />
  <ChildVue
    :name="text"
    @change="onChildChange"
    @change-name="onChildChangeName"
    @changeId="onChildChangeId"
  />
</template>
<style scoped></style>

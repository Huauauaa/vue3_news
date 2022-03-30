<script setup>
import { ref } from 'vue';
import IconLike from '~icons/my-icons/like';
import IconOrg from '~icons/my-icons/org';

const isActive = ref(false);

function onSwitch() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <fieldset>
    <legend>ColorIcon</legend>
    <button @click="onSwitch">switch</button>
    <ColoredIcon :active="isActive">
      <IconLike />
    </ColoredIcon>
    <ColoredIcon :active="isActive">
      <IconOrg />
    </ColoredIcon>
  </fieldset>
</template>

<style scoped></style>

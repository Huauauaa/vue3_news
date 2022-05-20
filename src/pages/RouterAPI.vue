<script setup>
import { onMounted } from 'vue';
import {
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
  useRouter,
  useRoute,
} from 'vue-router';

console.log('aa');

const router = useRouter();
const route = useRoute();

onMounted(() => {
  console.log('onMounted');
});

onBeforeRouteUpdate((to, from) => {
  console.log('onBeforeRouteUpdate', to, from);
});

onBeforeRouteLeave((to, from) => {
  console.log(to, from);
});

function onClick(id) {
  router.push({ name: route.name, params: { id } });
}
</script>

<template>
  <fieldset>
    <legend>RouterAPI</legend>
    <button @click="onClick(1)">1</button>
    <button @click="onClick(2)">2</button>
  </fieldset>
</template>

<style scoped></style>

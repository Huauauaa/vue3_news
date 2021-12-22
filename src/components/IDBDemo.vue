<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import idb from '../utils/idb';

const catList = ref([]);
const dogList = ref([]);

async function fetchCatList() {
  const response = await idb.getCats();

  catList.value = response;
}

async function fetchDogList() {
  const response = await idb.getDogs();

  dogList.value = response;
}

onMounted(() => {
  fetchCatList();
  fetchDogList();
});

async function addCat() {
  await idb.saveCat({ name: Date.now() });
  fetchCatList();
}

async function addDog() {
  await idb.saveDog({ name: Math.random() });
  fetchDogList();
}

async function onDeleteCat(item) {
  await idb.deleteCat(item);
  fetchCatList();
}
async function onDeleteDog(item) {
  await idb.deleteDog(item);
  fetchDogList();
}
</script>

<template>
  <fieldset>
    <legend>indexedDB</legend>
    <button @click="addCat">add cat</button>
    <div v-for="item in catList" :key="item.id">
      {{ item.name }}<button @click="onDeleteCat(item)">-</button>
    </div>
    <hr />
    <button @click="addDog">add dog</button>
    <div v-for="item in dogList" :key="item.id">
      {{ item.name }}<button @click="onDeleteDog(item)">-</button>
    </div>
  </fieldset>
</template>

<style scoped></style>

<script setup>
import { onMounted, ref } from 'vue';
import idb from '../utils/idb';

const catList = ref([]);
const dogList = ref([]);

async function fetchCatList() {
  const response = await idb.getAll({ storeName: 'cats' });

  catList.value = response;
}

async function fetchDogList() {
  const response = await idb.getAll({ storeName: 'dogs' });

  dogList.value = response;
}

onMounted(() => {
  fetchCatList();
  fetchDogList();
});

async function addDog() {
  await idb.saveDog({ storeName: 'dogs', item: { name: Math.random() } });
  fetchDogList();
}

async function onDeleteCat(id) {
  if (!confirm()) {
    return;
  }
  await idb.delete({ storeName: 'cats', id });
  fetchCatList();
}
async function onDeleteDog(id) {
  await idb.deleteDog({ storeName: 'dogs', id });
  fetchDogList();
}

async function onAddCat(e) {
  await idb.add({ storeName: 'cats', item: { name: e.target.value } });
  e.target.value = '';
  fetchCatList();
}

async function onClearCat() {
  if (!confirm()) {
    return;
  }
  await idb.clear('cats');
  fetchCatList();
}

async function onSave(id, e) {
  await idb.put({ storeName: 'cats', item: { name: e.target.value, id } });
  fetchCatList();
}
</script>

<template>
  <fieldset>
    <legend>indexedDB</legend>
    <input @keydown.enter="onAddCat" /><button @click="onClearCat">
      clear
    </button>

    <div v-for="item in catList" :key="item.id">
      {{ item.id }}
      <input
        v-if="item.editing"
        :value="item.name"
        @blur="
          () => {
            item.editing = false;
          }
        "
        @keydown.enter="(...args) => onSave(item.id, ...args)"
      />
      <span v-else>{{ item.name }}</span>
      <button @click="onDeleteCat(item.id)">-</button>
      <button
        @click="
          () => {
            item.editing = true;
          }
        "
      >
        edit
      </button>
    </div>
    <hr />
    <button @click="addDog">add dog</button>
    <div v-for="item in dogList" :key="item.id">
      {{ item.name }}<button @click="onDeleteDog(item.id)">-</button>
    </div>
  </fieldset>
</template>

<style scoped></style>

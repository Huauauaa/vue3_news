<script setup>
import draggable from 'vuedraggable';
import { reactive } from 'vue';

const list1 = reactive([
  { name: 'John', id: 1 },
  { name: 'Joao', id: 2 },
  { name: 'Jean', id: 3 },
  { name: 'Gerard', id: 4 },
]);

const list2 = reactive([
  { name: 'Juan', id: 5 },
  { name: 'Edgard', id: 6 },
  { name: 'Johnson', id: 7 },
]);

function log(...args) {
  console.log(args);
}
</script>

<template>
  <fieldset>
    <legend>draggable demo 1</legend>
    <div class="wrapper">
      <div class="item origin">
        <draggable
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="log"
          item-key="name"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
        <hr />
        <draggable
          class="dragArea list-group"
          :list="list1"
          :group="{ name: 'people', pull: 'clone', put: false }"
          @change="log"
          item-key="name"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </div>
      <div class="item target">
        <draggable
          class="dragArea list-group"
          :list="list2"
          group="people"
          @change="log"
          item-key="name"
        >
          <template #item="{ element }">
            <div class="list-group-item">
              {{ element.name }}
            </div>
          </template>
        </draggable>
      </div>
    </div>
    {{ list2 }}
  </fieldset>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 1rem;
}

.wrapper .item {
  border: 1px solid #000;
  /* cursor: pointer; */
}
.target {
  cursor: move;
}

.list-group-item {
  border: 1px solid lightgray;
}
</style>

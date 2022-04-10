<script setup>
import { reactive } from 'vue';
const arrayItems = reactive([
  { id: 1, label: '一' },
  { id: 2, label: '二' },
]);

const objectItems = { id: 1, name: 'a' };

const numberItems = 3;
const stringItems = 'foo';
</script>
<template>
  <ul>
    <li v-for="(item, index) in arrayItems" :key="item.id"
      >{{ index }}:{{ item.label }}
    </li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in objectItems" :key="key"
      >{{ key }}:{{ value }} {{ index }}
    </li>
  </ul>
  <ul>
    <li v-for="(item, index) in numberItems" :key="item"
      >{{ index }}:{{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="(item, index) in stringItems" :key="item"
      >{{ index }}:{{ item }}
    </li>
  </ul>
</template>
<style scoped></style>

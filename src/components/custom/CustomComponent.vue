<script setup>
import { h } from 'vue';
import CCTable from './CCTable.vue';

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const header = { header: [{ prop: 'id', label: '序号' }] };
const CCTableDemo = h(CCTable, { data, header, pageSize: 2 });
</script>

<template>
  <fieldset>
    <legend>CustomComponent</legend>
    <CCTableDemo></CCTableDemo>
  </fieldset>
</template>

<style scoped></style>

<template>
  <el-table :data="props.tableData">
    <el-table-column v-for="column in props.columns" :key="column.prop" v-bind="column"></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { TableProps } from './table'
const props = defineProps<TableProps>()
</script>

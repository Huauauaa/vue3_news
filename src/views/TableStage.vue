<template>
  <ElTableDemo :tableData="tableData" />
  <TsxTable :tableData="tableData" :columns="columns"></TsxTable>
  <VueTable :tableData="tableData" :columns="columns"></VueTable>
</template>

<script setup lang="ts">
import VueTable from '@/components/tables/VueTable.vue'
import TsxTable from '@/components/tables/TsxTable'
import ElTableDemo from './ElTableDemo'
import { ElButton, TableColumnCtx } from 'element-plus'
import { h } from 'vue'

export interface User {
  date: string
  name: string
  address: string
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  console.log(row, column)
  return h(ElButton, { type: 'primary' }, 'button')
}

const columns: Partial<TableColumnCtx<User>>[] = [
  { prop: 'date', label: 'Date' },
  { prop: 'name', label: 'Name' },
  { prop: 'address', label: 'Address', formatter },
]

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

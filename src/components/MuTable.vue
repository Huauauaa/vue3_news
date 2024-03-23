<script setup lang="ts">
interface Column {
  label: string
  key: string
}

defineOptions({ name: 'MuTable' })
const props = withDefaults(
  defineProps<{
    data?: any[]
    columns: Column[]
  }>(),
  {
    data: () => [],
  },
)
</script>

<template>
  <table border>
    <tr>
      <td v-for="column in props.columns">{{ column.label }}</td>
    </tr>
    <tr v-for="item in props.data" :key="item.id">
      <td v-for="column in props.columns">
        {{ item[column.key] }}
      </td>
    </tr>
  </table>
</template>

<style scoped></style>

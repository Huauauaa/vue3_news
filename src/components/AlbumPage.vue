<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MuTable from '@/components/MuTable.vue'
import apis from '@/apis'

defineOptions({ name: 'AlbumPage' })

const data = ref<Album[]>([])

onMounted(async () => {
  const resp = await apis.album.getAlbums()

  data.value = resp
})
</script>

<template>
  <fieldset>
    <legend>AlbumPage</legend>
    <MuTable
      :data="data"
      :columns="[
        { label: 'ID', key: 'id' },
        { label: 'Title', key: 'title' },
      ]"
    ></MuTable>
  </fieldset>
</template>

<style scoped></style>

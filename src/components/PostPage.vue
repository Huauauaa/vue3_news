<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MuTable from '@/components/MuTable.vue'
import apis from '@/apis'

defineOptions({ name: 'PostPage' })

const data = ref<Post[]>([])

onMounted(async () => {
  const resp = await apis.post.getPosts()

  data.value = resp
})
</script>

<template>
  <fieldset>
    <legend>PostPage</legend>
    <MuTable
      :data="data"
      :columns="[
        { label: 'ID', key: 'id' },
        { label: 'Title', key: 'title' },
        { label: 'User', key: 'userId' },
        { label: 'Content', key: 'body' },
      ]"
    ></MuTable>
  </fieldset>
</template>

<style scoped></style>

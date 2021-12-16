<script setup>
import { ref, reactive, watch, defineEmits, watchEffect } from 'vue';
import variables from '../styles/variables';

console.log(variables['--primary']);

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['say']);

const data = ref({
  video: {
    title: 'learn vue3',
    likes: 231,
  },
});

const data1 = reactive({
  video: {
    title: 'learn vue3',
    likes: 231,
  },
});

const changeName = () => {
  data.value.video.title += '*';
  data.value.video.likes += 1;

  // data1.video.title += '$';
  // data1.video.likes -= 1;
  console.log(emit);
  emit('say');
};

// WARNING: `deep` must be true, or NOT WORK
watch(
  data,
  (val, oldVal) => {
    console.log('data', val, oldVal);
  },
  { deep: true },
);

watch(data1, (val, oldVal) => {
  console.log('data1', val, oldVal);
});

watch(data1.video, (val, oldVal) => {
  console.log('data1.video', val, oldVal);
});

// triggered when use
watchEffect(() => {
  const a = data.value.video.title;
  console.log('watchEffect');
});
</script>

<template>
  <slot name="name"></slot>
  <slot name="version"></slot>
  <p class="msg">msg: {{ msg }}</p>
  <div>title: {{ data.video.title }}</div>
  <div>likes: {{ data.video.likes }}</div>
  <hr />
  <div>title: {{ data1.video.title }}</div>
  <div>likes: {{ data1.video.likes }}</div>
  <button @click="changeName">update</button>
</template>

<style scoped lang="scss">
.msg {
  color: $primary;
  background-color: var(--bg);
}
</style>

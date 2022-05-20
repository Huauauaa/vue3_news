<template>{{ text }}</template>

<script>
export default {
  name: 'vue2',
  data() {
    return {
      text: 'vue2',
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeRouteEnter(to, from) {
    console.log('beforeRouteEnter', to, from);
  },
  beforeRouteUpdate(to, from) {
    console.log('beforeRouteUpdate', to, from);
  },
  beforeRouteLeave(to, from) {
    console.log('beforeRouteLeave', to, from);
  },
};
</script>

<style></style>

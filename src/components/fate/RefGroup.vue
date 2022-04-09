<template>
  <fieldset>
    <legend>Refs</legend>
    <OptionalButton
      v-for="(item, i) in list"
      :ref="
        (el) => {
          refs[i] = el;
        }
      "
      :key="item.id"
      :label="item.label"
    ></OptionalButton>
  </fieldset>
</template>

<script>
const OptionalButton = import('./Combination.vue');

export default {
  data() {
    return {
      list: [
        { id: 1, label: 'A' },
        { id: 2, label: 'B' },
      ],
      refs: [],
    };
  },
  mounted() {
    console.log('refs', this.refs);
  },
};
</script>

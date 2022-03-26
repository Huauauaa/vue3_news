<template>
  <fieldset>
    <legend>{{ title }}</legend>
    <ul>
      <li><input v-model.number="count" /> {{ count }}</li>
    </ul>
  </fieldset>
</template>

<script>
import { toRefs } from 'vue';

export default {
  props: {
    title: String,
    count: Number,
  },
  setup(props) {
    // console.log('this', this);
    // console.log('props', props);
    // const { count } = props;
    const { count } = toRefs(props);
    console.log('count', count);
    // return { count1 };
  },
};
</script>

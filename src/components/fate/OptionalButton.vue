<template>
  <div
    @click.stop="foo"
    style="border: 3px solid #00f; display: inline-block; padding: 0 5px"
  >
    {{ label }}
  </div>
</template>

<script>
import fooMixin from './foo.mixin';
export default {
  name: 'OptionalButton',
  mixins: [fooMixin],
  props: {
    label: {
      type: String,
      default: 'btn',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    console.log('options', this.options);
  },
  methods: {
    foo() {
      console.log('OptionalButton click');
      // this.$emit('foo');
      this.bla();
    },
  },
};
</script>

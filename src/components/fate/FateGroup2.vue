<script>
import { defineAsyncComponent, h } from 'vue';
import CompositionButton from './CompositionButton.vue';

const FateTable = defineAsyncComponent(() => import('./FateTable.vue'));

export default {
  name: 'FateGroup2',
  components: {
    CompositionButton,
    FateInput: defineAsyncComponent(() => import('./FateInput.vue')),
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    console.log({ props });
    return () =>
      h('div', { style: { backgroundColor: 'lightblue' } }, [
        h(CompositionButton),
        h('FateInput'),
        h(CompositionButton),
        h(FateTable),
        h(CompositionButton),
        // h(FateInput),
        h('FateTable'),
      ]);
  },
};
</script>

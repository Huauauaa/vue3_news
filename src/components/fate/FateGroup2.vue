<script>
import { defineAsyncComponent, h } from 'vue';
import FateButton from './FateButton.vue';

const FateTable = defineAsyncComponent(() => import('./FateTable.vue'));

export default {
  name: 'FateGroup2',
  components: {
    FateButton,
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
        h(FateButton),
        h('FateInput'),
        h(FateButton),
        h(FateTable),
        h(FateButton),
        // h(FateInput),
        h('FateTable'),
      ]);
  },
};
</script>

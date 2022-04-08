<script>
import { h, defineAsyncComponent } from 'vue';

const CompositionButton = defineAsyncComponent(() =>
  import('./CompositionButton.vue'),
);

export default {
  name: 'FateGroup3',
  render() {
    return h('div', {}, [
      'group 3',
      h(CompositionButton, {
        label: 'test bind event',
        onclick: () => {
          console.log('custom onclick lower case');
        },
        onClick: () => {
          console.log('custom onClick ');
        },
        click: () => {
          console.log('custom click');
        },
      }),
      h('hr'),
    ]);
  },
};
</script>

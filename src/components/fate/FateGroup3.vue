<script>
import { h, defineAsyncComponent } from 'vue';

const FateButton = defineAsyncComponent(() => import('./FateButton.vue'));

export default {
  name: 'FateGroup3',
  render() {
    return h('div', {}, ['group 3', h(FateButton), h('hr')]);
  },
};
</script>

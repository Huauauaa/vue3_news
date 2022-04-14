<script>
import { h, onMounted, ref } from 'vue';
import { Graph } from '@antv/x6';
import { register, registerFlagBearer } from '../../hooks/userGraphViewer';

register();
registerFlagBearer();

export default {
  name: 'GraphViewer',
  setup(props, { emit, expose }) {
    const ContainerRef = ref();
    let graph;

    expose({ add });

    function add(...args) {
      const existNodes = graph.getNodes();
      const target = graph.addNode({
        x: 100,
        y: 100,
        shape: 'flagBearer',
        data: {
          label: 'host',
          role: 'host',
        },
      });

      if (existNodes.length > 0) {
        graph.addEdge({
          source: { cell: existNodes.at(-1), port: 'out1' },
          target: { cell: target, port: 'in1' },
          attrs: {
            line: {
              stroke: '#f00',
            },
          },
        });
      }
    }
    onMounted(() => {
      graph = new Graph({
        container: ContainerRef.value,
        grid: true,
        connecting: {
          router: {
            name: 'manhattan',
            args: {
              padding: 1,
            },
          },
          connector: {
            name: 'rounded',
            args: {
              radius: 8,
            },
          },
          anchor: 'center',
          connectionPoint: 'anchor',
          allowBlank: false,
          snap: {
            radius: 20,
          },
          validateConnection({ targetMagnet }) {
            return !!targetMagnet;
          },
        },
      });

      graph.on('node:click', (...args) => {
        emit('clickNode', ...args);
      });
    });
    return () => h('div', { class: 'container', ref: ContainerRef }, '1');
  },
};
</script>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  min-height: 800px;
}
</style>

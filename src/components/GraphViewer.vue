<script>
import { h, onMounted, ref } from 'vue';
import { Graph } from '@antv/x6';

const ports = {
  items: [
    { group: 'in', id: 'in1' },
    { group: 'out', id: 'out1' },
  ],
  groups: {
    in: {
      position: { name: 'top' },
      zIndex: 1,
    },
    out: {
      position: { name: 'bottom' },
      zIndex: 1,
    },
  },
};

Graph.registerNode(
  'locomotive',
  {
    inherit: 'rect',
    width: 200,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#0f0',
        fill: '#aaa',
      },
      text: {
        fontSize: 12,
        fill: '#ddd',
      },
    },
    ports: { ...ports },
  },
  true
);

Graph.registerNode(
  'compartment',
  {
    inherit: 'rect',
    width: 200,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#0f0',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
    ports: { ...ports },
  },
  true
);

export default {
  name: 'GraphViewer',
  setup(props, { emit, expose }) {
    const ContainerRef = ref();
    let graph;

    expose({ add });

    function add(...args) {
      const existNodes = graph.getNodes();
      const target = graph.addNode({
        x: 0,
        y: 0,
        shape: 'locomotive',
        label: 'foo',
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

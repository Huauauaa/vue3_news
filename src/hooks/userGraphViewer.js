import { Graph } from '@antv/x6';
import '@antv/x6-vue-shape';
import GraphNode from '../components/graph-viewer/GraphNode.vue';

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

const nodeWidth = 200;
const nodeHeight = 40;

export function register() {
  registerNode();
}

export function registerFlagBearer() {
  Graph.registerNode(
    'flagBearer',
    {
      inherit: 'vue-shape',
      width: nodeWidth,
      height: nodeHeight,
      component: {
        template: `<GraphNode />`,
        components: { GraphNode },
      },
      ports: { ...ports },
    },
    true,
  );
}

export function registerNode() {
  Graph.registerNode(
    'locomotive',
    {
      inherit: 'rect',
      width: nodeWidth,
      height: nodeHeight,
      attrs: {
        body: {
          strokeWidth: 1,
          stroke: '#0f0',
          fill: '#fff',
        },
        text: {
          fontSize: 12,
          fill: '#ddd',
        },
      },
      ports: { ...ports },
    },
    true,
  );

  Graph.registerNode(
    'compartment',
    {
      inherit: 'rect',
      width: nodeWidth,
      height: nodeHeight,
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
    true,
  );
}

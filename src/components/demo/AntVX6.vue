<script setup>
import { Graph, Shape, Addon, Cell } from '@antv/x6';
import insertCss from 'insert-css';
import { onMounted, reactive } from 'vue';

let graph = reactive({});
let stencil = reactive({});

const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'bottom',
    },
  ],
};

Graph.registerNode(
  'custom-rect',
  {
    inherit: 'rect',
    width: 160,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
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

Graph.registerNode(
  'custom-polygon',
  {
    inherit: 'polygon',
    width: 66,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
    ports: {
      ...ports,
      items: [
        {
          group: 'top',
        },
        {
          group: 'bottom',
        },
      ],
    },
  },
  true,
);

Graph.registerNode(
  'custom-circle',
  {
    inherit: 'circle',
    width: 45,
    height: 45,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
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

Graph.registerNode(
  'custom-image',
  {
    inherit: 'rect',
    width: 52,
    height: 52,
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        stroke: '#5F95FF',
        fill: '#5F95FF',
      },
      image: {
        width: 26,
        height: 26,
        refX: 13,
        refY: 16,
      },
      label: {
        refX: 3,
        refY: 2,
        textAnchor: 'left',
        textVerticalAnchor: 'top',
        fontSize: 12,
        fill: '#fff',
      },
    },
    ports: { ...ports },
  },
  true,
);

function onZoomIn() {
  graph.zoom(0.1);
}

function onZoomOut() {
  graph.zoom(-0.1);
}

function onZoomReset() {
  graph.zoomTo(1);
}

function onZoomAuto() {
  graph.zoomToFit();
}

function onUndo() {
  if (graph.history.canUndo()) {
    graph.history.undo();
  }
}

function onRedo() {
  if (graph.history.canRedo()) {
    graph.history.redo();
  }
}

function onClear() {
  graph.clearCells();
  graph.history.clean();
}

function onSave() {
  console.log(graph.getNodes().map((item) => item.label));
}

function showPorts(ports, show) {
  for (let i = 0, len = ports.length; i < len; i = i + 1) {
    ports[i].style.visibility = show ? 'visible' : 'hidden';
  }
}

function preWork() {
  const container = document.getElementById('container');
  const stencilContainer = document.createElement('div');
  stencilContainer.id = 'stencil';
  const graphContainer = document.createElement('div');
  graphContainer.id = 'graph-container';
  container.appendChild(stencilContainer);
  container.appendChild(graphContainer);

  insertCss(`
    #container {
      height: 100vh;
      display: flex;
      border: 1px solid #dfe3e8;
      position: relative;
      box-sizing: border-box;
    }
    #stencil {
      width: 180px;
      height: 100%;
      position: relative;
      border-right: 1px solid #dfe3e8;
      box-sizing: border-box;
    }
    #graph-container {
      width: calc(100% - 180px);
      height: 100%;
    }
    .x6-widget-transform {
      margin: -1px 0 0 -1px;
      padding: 0px;
      border: 1px solid #239edd;
    }
    .x6-widget-transform > div {
      border: 1px solid #239edd;
    }
    .x6-widget-transform > div:hover {
      background-color: #3dafe4;
    }
    .x6-widget-transform-active-handle {
      background-color: #3dafe4;
    }
    .x6-widget-transform-resize {
      border-radius: 0;
    }
    .x6-widget-selection-inner {
      border: 1px solid #239edd;
    }
    .x6-widget-selection-box {
      opacity: 0;
    }
  `);
}

const imageShapes = [
  {
    label: 'Client',
    image:
      'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
  },
  {
    label: 'Http',
    image:
      'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
  },
  {
    label: 'Api',
    image:
      'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
  },
  {
    label: 'Sql',
    image:
      'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
  },
  {
    label: 'Clound',
    image:
      'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
  },
  {
    label: 'Mq',
    image:
      'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
  },
];
onMounted(() => {
  preWork();

  graph = new Graph({
    container: document.getElementById('graph-container'),
    grid: true,
    history: true,
    keyboard: true,
    panning: true,
    autoResize: true,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
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
      createEdge() {
        return new Shape.Edge({
          attrs: {
            line: {
              stroke: '#A2B1C3',
              strokeWidth: 2,
              targetMarker: {
                name: 'block',
                width: 12,
                height: 8,
              },
            },
          },
          zIndex: 0,
        });
      },
      validateConnection({
        targetMagnet,
        sourceMagnet,
        targetPort,
        targetCell,
        sourceCell,
        sourcePort,
      }) {
        if (sourceMagnet.getAttribute('port-group') === 'top') {
          return false;
        }

        if (
          !targetMagnet ||
          targetMagnet.getAttribute('port-group') === 'bottom'
        ) {
          return false;
        }

        const targetPortCell = targetCell.getPort(targetPort);
        if (targetPortCell && targetPortCell.connected) {
          return false;
        }

        const sourcePortCell = sourceCell.getPort(sourcePort);
        if (sourcePortCell && sourcePortCell.connected) {
          return false;
        }
        return true;
      },
    },
    highlighting: {
      magnetAdsorbed: {
        name: 'stroke',
        args: {
          attrs: {
            fill: '#5F95FF',
            stroke: '#5F95FF',
          },
        },
      },
    },
    selecting: {
      enabled: true,
      rubberband: true,
      showNodeSelectionBox: true,
    },
    snapline: true,
    clipboard: true,
  });

  stencil = new Addon.Stencil({
    search: (cell, keyword) => {
      if (keyword) {
        return cell.label.includes(keyword);
      }
      return true;
    },
    title: '项目构建',
    placeholder: '搜索',
    target: graph,
    stencilGraphWidth: 180,
    stencilGraphHeight: 300,
    groups: [
      {
        title: '基础流程图',
        name: 'group1',
      },
      {
        title: '系统设计图',
        name: 'group2',
        graphHeight: 250,
        layoutOptions: {
          rowHeight: 70,
        },
      },
      {
        title: '基础流程图',
        name: 'group3',
      },
      {
        title: '基础流程图',
        name: 'group4',
      },
    ],
    layoutOptions: {
      columns: 1,
      columnWidth: 160,
      rowHeight: 55,
    },
  });
  document.getElementById('stencil').appendChild(stencil.container);

  graph.bindKey(['meta+c', 'ctrl+c'], () => {
    const cells = graph.getSelectedCells();
    if (cells.length) {
      graph.copy(cells);
    }
    return false;
  });
  graph.bindKey(['meta+x', 'ctrl+x'], () => {
    const cells = graph.getSelectedCells();
    if (cells.length) {
      graph.cut(cells);
    }
    return false;
  });
  graph.bindKey(['meta+v', 'ctrl+v'], () => {
    if (!graph.isClipboardEmpty()) {
      const cells = graph.paste({ offset: 32 });
      graph.cleanSelection();
      graph.select(cells);
    }
    return false;
  });

  graph.bindKey(['meta+a', 'ctrl+a'], () => {
    const nodes = graph.getNodes();
    if (nodes) {
      graph.select(nodes);
    }
  });

  graph.bindKey('backspace', () => {
    const cells = graph.getSelectedCells();
    if (cells.length) {
      graph.removeCells(cells);
    }
  });

  graph.on('node:mouseenter', () => {
    const container = document.getElementById('graph-container');
    const ports = container.querySelectorAll('.x6-port-body');
    showPorts(ports, true);
  });
  graph.on('node:mouseleave', () => {
    const container = document.getElementById('graph-container');
    const ports = container.querySelectorAll('.x6-port-body');
    showPorts(ports, false);
  });

  graph.on('node:click', ({ e, x, y, node, view }) => {
    console.log('click', node.label);
  });

  graph.on('edge:connected', ({ currentCell, currentPort, isNew, edge }) => {
    currentCell.setPortProp(currentPort, 'connected', true);
    if (isNew) {
      const sourceCell = edge.getSourceCell();
      sourceCell.setPortProp(edge.source.port, 'connected', true);
    }
  });

  const r1 = graph.createNode({
    shape: 'custom-rect',
    label: '开始',
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
  });
  const r2 = graph.createNode({
    shape: 'custom-rect',
    label: '过程',
  });
  const r3 = graph.createNode({
    shape: 'custom-rect',
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
    },
    label: '可选过程',
  });
  const r4 = graph.createNode({
    shape: 'custom-polygon',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
      },
    },
    label: '决策',
  });
  const r5 = graph.createNode({
    shape: 'custom-polygon',
    attrs: {
      body: {
        refPoints: '10,0 40,0 30,20 0,20',
      },
    },
    label: '数据',
  });
  const r6 = graph.createNode({
    shape: 'custom-circle',
    label: '连接',
  });
  stencil.load([r1, r2, r3, r4, r5, r6], 'group1');
  stencil.load([r1, r2, r3, r4, r5, r6], 'group3');
  stencil.load([r1, r2, r3, r4, r5, r6], 'group4');

  const imageNodes = imageShapes.map((item) =>
    graph.createNode({
      shape: 'custom-image',
      label: item.label,
      attrs: {
        image: {
          'xlink:href': item.image,
        },
      },
    }),
  );
  stencil.load(imageNodes, 'group2');
});
</script>

<template>
  <fieldset>
    <legend>AntVX6</legend>
    <div id="container">
      <div class="tool-area">
        <button @click="onZoomIn">缩小</button>
        <button @click="onZoomOut">放大</button>
        <button @click="onZoomReset">重置</button>
        <button @click="onZoomAuto">自动</button>
        <button @click="onUndo">撤回</button>
        <button @click="onRedo">重做</button>
        <button @click="onClear">清空</button>
        <button @click="onSave">保存</button>
      </div>
    </div>
  </fieldset>
</template>

<style scoped>
.tool-area {
  position: absolute;
  z-index: 1;
  bottom: 10rem;
  right: 0;
  display: flex;
  gap: 5px;
}
</style>

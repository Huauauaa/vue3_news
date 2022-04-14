import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';
import Icons from 'unplugin-icons/vite';
import { promises as fs } from 'fs';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

// https://vitejs.dev/config/

export default ({ mode, command }) => {
  const { VITE_PROD_MOCK, VITE_DEV_MOCK } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: './',
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
        {
          find: '@antv/x6',
          replacement: '@antv/x6/lib',
        },
        {
          find: '@antv/x6-vue-shape',
          replacement: '@antv/x6-vue-shape/lib',
        },
      ],
    },
    plugins: [
      vue(),
      viteSvgIcons({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: './src/mock',
        supportTs: false,
        localEnabled: VITE_DEV_MOCK === 'on',
        prodEnabled: VITE_PROD_MOCK === 'on',
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      }),
      Icons({
        scale: 3,
        defaultStyle: 'width: 100px;color:pink;',
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          'my-icons': {
            like: () => fs.readFile('./src/assets/icons/like.svg', 'utf-8'),
            org: () => fs.readFile('./src/assets/org.svg', 'utf-8'),
          },
          'my-yet-other-icons': FileSystemIconLoader('./src/assets', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
        iconCustomizer(collection, icon, props) {
          console.log(collection);
          // const name = `${collection}:${icon}`
          // if (name === 'inline:async' || name === 'carbon:app-connectivity' || name === 'custom:car-a') {
          // props.width = '3em';
          // props.height = '3em';
          //   props.color = 'skyblue'
          // }
        },
      }),
      Components({
        dts: true,
        resolvers: [
          IconsResolver({
            customCollections: ['cmy-my-icons', 'my-yet-other-icons'],
          }),
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/styles/variables.scss";`,
        },
      },
    },
    build: {
      sourcemap: true,
    },
  });
};

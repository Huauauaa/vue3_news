import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import viteSvgIcons from 'vite-plugin-svg-icons';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/

export default ({ mode, command }) => {
  const { VITE_PROD_MOCK, VITE_DEV_MOCK } = loadEnv(mode, process.cwd());

  return defineConfig({
    base: './',
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
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

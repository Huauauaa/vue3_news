import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.globEager('./mock/*.js');

export function setupProdMockServer() {
  createProdMockServer(Object.keys(modules).map((key) => modules[key].default));
}

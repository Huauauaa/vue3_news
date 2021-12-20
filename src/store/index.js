import { createStore } from 'vuex';
import log from './modules/log.store';

export default createStore({
  modules: { log },
  state() {
    return {
      count: 1,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

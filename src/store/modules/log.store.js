const state = {
  read: 11,
};
const mutations = {
  UPDATE_READ(state, data) {
    state.read = data;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};

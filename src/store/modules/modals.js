const state = {
  globalModalActivator: false,
};

const mutations = {
  setGlobalModal(state, bool) {
    state.globalModalActivator = bool;
  },
};

const actions = {
  setGlobalModal({ commit }, bool) {
    commit('setGlobalModal', bool);
  },
};

const getters = {
  globalModalActivator: (state) => state.globalModalActivator,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

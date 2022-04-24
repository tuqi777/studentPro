import getters from './getters'
const types = {
  CHANGE_NAME: "CHANGE_NAME",
  CHANGE_NUM: "CHANGE_NUM",
};

export default {
  // namespaced: true,
  state: {
    name: "lplplpl",
    screen: "301",
    num: 1,
  },
  getters: {
    ...getters,
  },
  mutations: {
    [types.CHANGE_NAME](state, val) {
      state.name = val;
    },
    [types.CHANGE_NUM](state, val) {
      state.num = val;
    },
  },
  actions: {
    change_name({ commit }, val) {
      commit("CHANGE_NAME", val);
    },
    change_num({ commit }, val) {
      commit("CHANGE_NUM", val);
    },
  },
};

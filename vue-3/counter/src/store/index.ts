import { createLogger, createStore } from "vuex";
export type State = {
  counter: number;
};
const state: State = {
  counter: 0,
};
const mutations = {
  increment(state, payload) {
    state.counter++;
  },
};
const getters = {
  counter(state) {
    return state.counter;
  },
};
const actions = {
  increment({ commit }) {
    commit("increment");
  },
};
const modules = {};
export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [createLogger()],
});

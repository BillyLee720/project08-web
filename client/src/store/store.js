import { createStore } from 'vuex';
import axios from 'axios';
export default createStore({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
    isUserEdit: false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
    setUser(state, user) {
      state.user = user;
    },
    updateUser(state, userData) {
      state.user = userData;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    updateUser({ commit }, userData) {
      commit('updateUser', userData);
    },
  },
});

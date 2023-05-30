import { createStore } from 'vuex';
import axios from 'axios';

let user = null;
const userJson = localStorage.getItem('user');
if (userJson) {
  try {
    user = JSON.parse(userJson);
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
  }
}

export default createStore({
  strict: true,
  state: {
    token: localStorage.getItem('token') || null,
    user: user,
    isUserLoggedIn: false,
    isUserEdit: false,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
        localStorage.setItem('token', token);
      } else {
        state.isUserLoggedIn = false;
        localStorage.removeItem('token');
      }
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    updateUser(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
    },
    clearData(state) {
      state.token = null;
      state.user = null;
      state.isUserLoggedIn = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
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
    clearData({ commit }) {
      commit('clearData');
    },
    fetchUserData(context) {
      const { user, token } = response;

      context.commit('setUser', user);
      context.commit('setToken', token);
    },
  },
});

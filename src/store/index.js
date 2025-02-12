import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthenticated: state => !!state.user, // ✅ Ensures it always returns true/false
    user: state => state.user || {} // ✅ Avoids undefined errors
  }
});

export default store;

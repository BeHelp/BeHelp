import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state() {
    return {
      isLoggedIn: '',
      user: {},
    };
  },
  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    readUser(state, user) {
      state.user = user.jwtData;
    },
  },
});

export default store;

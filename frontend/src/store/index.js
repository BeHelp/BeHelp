import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      user: {},
    };
  },
  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    readUser(state, user) {
      state.user = user;
    },
  },
});

export default store;

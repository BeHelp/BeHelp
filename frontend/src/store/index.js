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
      filterQuery: {},
      filterResult: {},
    };
  },
  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
    },
    readUser(state, user) {
      state.user.userId = user.jwtData[0];
      state.user.email = user.jwtData[1];
      state.user.firstName = user.jwtData[2];
      state.user.lastName = user.jwtData[3];
      state.user.photoURL = user.jwtData[4];
    },
    setFilterQuery(state, filterQuery) {
      state.filterQuery = Object.assign({}, state.filterQuery, filterQuery);
    },
  },
});

export default store;

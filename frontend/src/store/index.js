import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      user: {},
      filterQuery: {},
      filterResult: {},
    };
  },
  mutations: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    readUser(state, user) {
      state.user = user;
    },
    setFilterQuery(state, filterQuery) {
      state.filterQuery = Object.assign({}, state.filterQuery, filterQuery);
    },
  },
});

export default store;

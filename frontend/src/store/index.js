import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";

const store = createStore({
  // plugins: [
  //   createPersistedState({
  //     storage: window.sessionStorage,
  //   }),
  // ],
  state() {
    return {
      isLoggedIn: "",
      user: {},
      filterLanguages: "",
      filterCities: "",
      filterSkills: "",
      searchResult: [],
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
    updateLanguages(state, message) {
      state.filterLanguages = message;
    },
    updateCities(state, message) {
      state.filterCities = message;
    },
    updateSkills(state, message) {
      state.filterSkills = message;
    },
    searchResult(state, message) {
      state.searchResult = message;
    },
    updatePhotoURL(state, message) {
      state.user.photoURL = message;
    },
  },
});

export default store;

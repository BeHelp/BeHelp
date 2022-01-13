<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      hidden: true,
      locale: "ENG",
      activeToggle: false,
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  methods: {
    logout() {
      const token = localStorage.getItem("token");
      const userId = this.user.userId;
      fetch(`${import.meta.env.VITE_API}/logout/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          localStorage.removeItem("token");
          this.$store.commit("loggedOut");
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/"
        ><img
          class="header__nav-logo"
          src="../assets/logos/Logo_wb.svg"
          alt="logo"
      /></router-link>
      <ul class="header__nav-list">
        <li class="header__nav-list item">
          <router-link
            v-if="$route.name !== 'Home'"
            to="/"
            class="header__nav-list link"
            >{{ $t("about") }}</router-link
          >
          <a v-else href="#about" class="header__nav-list link">{{
            $t("about")
          }}</a>
        </li>
        <li class="header__nav-list item">
          <router-link to="/volunteers" class="header__nav-list link">{{
            $t("volunteers")
          }}</router-link>
        </li>
        <li class="header__nav-list item">
          <router-link to="/contacts" class="header__nav-list link">{{
            $t("contactus")
          }}</router-link>
        </li>
      </ul>
      <ul class="header__nav-features">
        <li class="header__nav-features select">
          <select v-model="locale">
            <option class="header__nav-features option">ENG</option>
            <option class="header__nav-features option">FR</option>
            <option class="header__nav-features option">NL</option>
            <option class="header__nav-features option">ESP</option>
            <option class="header__nav-features option">عربي</option>
          </select>
        </li>
        <li v-if="isLoggedIn !== true" class="header__nav-features signup">
          <router-link to="/signup"
            ><button class="header__nav-features btn-signup">
              {{ $t("signup") }}
            </button></router-link
          >
        </li>
        <li v-if="isLoggedIn !== true" class="header__nav-features login">
          <router-link to="/login"
            ><button class="header__nav-features btn-login">
              {{ $t("login") }}
            </button></router-link
          >
        </li>

        <li
          v-if="isLoggedIn === true"
          @click="hidden = !hidden"
          class="header__nav-features"
        >
          <p class="header__nav-features p-username" id="header-username">
            {{ user.firstName }}
          </p>
        </li>
        <li v-if="isLoggedIn === true" class="header__nav-features usermenu">
          <img
            @click="hidden = !hidden"
            :src="user.photoURL"
            class="header__nav-features img-username"
          />
          <div
            id="usermenu-list"
            class="usermenu-list"
            :class="{ 'foo-hover': hidden }"
          >
            <router-link
              to="/myprofile"
              class="usermenu-a"
              id="usermenu-profile"
              >My profile</router-link
            ><br />
            <a @click="logout" href="#" class="usermenu-a" id="usermenu-logout"
              >Logout</a
            >
          </div>
        </li>
      </ul>
    </nav>
    <div class="mobilemenu">
      <ul class="nav-menu" :class="{ active: activeToggle }">
        <li class="nav-item">
          <router-link v-if="$route.name !== 'Home'" to="/" class="nav-link">{{
            $t("about")
          }}</router-link>
          <a v-else href="#about" class="nav-link">{{ $t("about") }}</a>
        </li>
        <li class="nav-item">
          <router-link to="/volunteers" class="nav-link">{{
            $t("volunteers")
          }}</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contacts" class="nav-link">{{
            $t("contactus")
          }}</router-link>
        </li>
      </ul>
    </div>

    <div class="mobileheader">
      <router-link to="/"
        ><img
          class="header__nav-logo"
          src="../assets/logos/Logo_wb.svg"
          alt="logo"
      /></router-link>

      <li class="header__nav-features select">
        <select v-model="locale">
          <option class="header__nav-features option">ENG</option>
          <option class="header__nav-features option">FR</option>
          <option class="header__nav-features option">NL</option>
          <option class="header__nav-features option">ESP</option>
          <option class="header__nav-features option">عربي</option>
        </select>
      </li>

      <div
        @click="activeToggle = !activeToggle"
        class="hamburger"
        :class="{ active: activeToggle }"
      >
        <span class="bar" :class="{ active: activeToggle }"></span>
        <span class="bar" :class="{ active: activeToggle }"></span>
        <span class="bar" :class="{ active: activeToggle }"></span>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_header.scss";
</style>

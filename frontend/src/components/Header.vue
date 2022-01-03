<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['isLoggedIn', 'user']),
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
            >About</router-link
          >
          <a v-else href="#about" class="header__nav-list link">About</a>
        </li>
        <li class="header__nav-list item">
          <router-link to="/volunteers" class="header__nav-list link"
            >Volunteers</router-link
          >
        </li>
        <li class="header__nav-list item">
          <router-link to="/contacts" class="header__nav-list link"
            >Contact Us</router-link
          >
        </li>
      </ul>
      <ul class="header__nav-features">
        <li class="header__nav-features select">
          <select>
            <option class="header__nav-features option">ENG</option>
            <option class="header__nav-features option">FR</option>
            <option class="header__nav-features option">NL</option>
          </select>
        </li>
        <li class="header__nav-features signup">
          <router-link to="/signup"
            ><button class="header__nav-features btn-signup">
              Sign Up
            </button></router-link
          >
        </li>
        <li v-if="isLoggedIn !== true" class="header__nav-features login">
          <router-link to="/login"
            ><button class="header__nav-features btn-login">
              Log In
            </button></router-link
          >
        </li>

        <li class="header__nav-features">
          <p class="header__nav-features p-username" id="header-username">
            {{ user.firstName }}
          </p>
        </li>
        <li v-if="isLoggedIn === true" class="header__nav-features usermenu">
          <img :src="user.photoURL" class="header__nav-features img-username" />
          <div id="usermenu-list" class="usermenu-list none">
            <a href="#" class="usermenu-a" id="usermenu-profile">My Profile</a
            ><br />
            <a href="#" class="usermenu-a" id="usermenu-messages">Messages</a
            ><br />
            <a href="#" class="usermenu-a" id="usermenu-logout">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_header.scss';
</style>

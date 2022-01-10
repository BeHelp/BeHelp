<script>
export default {
  data() {
    return {
     hideMenu: true,
    }
  }
}
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

      <ul class="header__nav-list active">
        <li class="header__nav-list item">
        <router-link v-if="$route.name !== 'Home'" to="/" class="header__nav-list link">About</router-link>
        <a v-else href="#about" class="header__nav-list link">About</a>
        </li>

          <li><button @click="hideMenu = !hideMenu">TESTING</button></li>
        <li class="header__nav-list item">
          <router-link to="/volunteers" v-if="hideMenu"  :class="{ 'foo-hover':hideMenu }" class="header__nav-list link"
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
        <li class="header__nav-features login">
          <router-link to="/login"
            ><button class="header__nav-features btn-login">
              Log In
            </button></router-link
          >
          </li>

        <li class="header__nav-features"><p class = "header__nav-features p-username none" id = "header-username">Username</p></li>
        <li class = "header__nav-features usermenu none">
        <img src="../assets/fas/user-circle-solid.svg" class = "header__nav-features img-username none">
        <div id = "usermenu-list" class = "usermenu-list none">
          <a href="#" class = "usermenu-a" id = "usermenu-profile">My Profile</a><br>
          <a href="#" class = "usermenu-a" id = "usermenu-messages">Messages</a><br>
          <a href="#" class = "usermenu-a" id = "usermenu-logout">Logout</a>
          </div>
          </li>
      </ul>
      <!-- //!Adding Hamburger Menu -->
        <div  @click="hidden = !hidden"
       
            :class="{ 'hamburger':hideMenu }"
         class="hamburger active">
          <span class="hamburger-bar "></span>
          <span class="hamburger-bar "></span>
          <span class="hamburger-bar "></span>
        </div>

    </nav>
  </header>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_headerScreen.scss';


.foo-hover {
  display: none;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__logos">
      <img
        class="footer__logos-behelp"
        src="../assets/logos/Logo_wb_orange.svg"
        alt="logo"
        height="53.02px"
      />

      <img
        class="footer__logos-hyf"
        src="../assets/hyf_logo.png"
        alt="HYF"
        height="53.02px"
      />
    </div>

    <div class="footer__cont2">
      <div class="footer__cont2-text">
        <p>
          Project from the students of HYF <br />
          info@behelp.be <br />
          1000 Bruxelles
        </p>
      </div>
      <div class="footer__cont2-icons">
        <a href="#"><img src="../assets/fas/facebook.svg" class="fa" /></a>
        <!-- <a href="#"><img src="../assets/fas/facebook.svg" class="fa" /></a> -->
        <a href="#"> <img src="../assets/fas/twitter.svg" class="fa" /></a>
        <!-- <a href="#"><img src="../assets/fas/twitter.svg" class="fa" /></a> -->
        <a href="#"><img src="../assets/fas/instagram.svg" class="fa" /></a>
        <!-- <a href="#"><img src="../assets/fas/instagram.svg" class="fa" /></a> -->
      </div>
    </div>
  </footer>
  <div>
    <div id="sign" class="sign">
      <ul class="sign__element">
        <li v-if="isLoggedIn !== true" class="sign__element-signup">
          <router-link to="/signup"
            ><button class="sign__elements-login btn-signup">
              Sign Up
            </button></router-link
          >
        </li>
        <li v-if="isLoggedIn !== true" class="sign__element-login">
          <router-link to="/login"
            ><button class="sign__elements-login btn-login">
              Log In
            </button></router-link
          >
        </li>

        <li
          v-if="isLoggedIn === true"
          @click="hidden = !hidden"
          class="footer__nav-features"
        >
          <p class="footer__nav-features p-username" id="header-username">
            {{ user.firstName }}
          </p>
        </li>
        <li v-if="isLoggedIn === true" class="footer__nav-features usermenu">
          <img
            @click="hidden = !hidden"
            :src="user.photoURL"
            class="footer__nav-features img-username"
          />
          <div
            id="usermenu-list"
            class="usermenu-list"
            :class="{ 'foo-hover': hidden }"
            v-if="hidden === false"
          >
            <router-link
              to="/myprofile"
              class="usermenu-a"
              id="usermenu-profile"
              @click.prevent="hidden = true"
              >My profile</router-link
            ><br />
            <a @click="logout" href="#" class="usermenu-a" id="usermenu-logout"
              >Logout</a
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_footer.scss";
</style>

<template>
  <div>
    <div class="sign">
      <ul class="sign__element">
        <li v-if="isLoggedIn !== true" class="sign__element-login">
          <router-link to="/login"
            ><button class="sign__elements-login btn-login">
              Log In
            </button></router-link
          >
        </li>
        <li v-if="isLoggedIn !== true" class="sign__element-login-signup">
          <router-link to="/signup"
            ><button class="sign__elements-login btn-signup">
              Sign Up
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
    </div>
  </div>

  <footer class="footer">
    <div class="footer__logos">
      <img
        class="footer__logos-behelp"
        src="../assets/logos/Logo_wb_orange.svg"
        alt="logo"
        height="53.02px"
      />
      <div>
        <img
          class="footer__logos-hyf"
          src="../assets/hyf_logo.png"
          alt="HYF"
          height="53.02px"
        />
      </div>
    </div>

    <div class="footer__text">
      <p class="footer__text-p">
        Project from the students of HYF <br />
        info@behelp.be <br />
        1000 Bruxelles
      </p>
    </div>
    <div class="footer__icons">
      <a href="#"><img src="../assets/fas/facebook.svg" class="fa" /></a>
      <a href="#"><img src="../assets/fas/twitter.svg" class="fa" /></a>
      <a href="#"><img src="../assets/fas/instagram.svg" class="fa" /></a>
    </div>
  </footer>
</template>
<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_footer.scss";
</style>

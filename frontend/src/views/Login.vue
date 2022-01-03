<template>
  <div class="login">
    <div class="login__page">
      <h1 class="sign__text">Log in</h1>
      <br />
      <form class="form__group" @submit.prevent="submit">
        <input
          v-model="this.email"
          type="email"
          class="email__box"
          placeholder="E-mail"
          required
        />

        <input
          v-model="this.password"
          type="password"
          class="password__box"
          placeholder="Password"
          autocomplete="off"
          required
        /><br />
        <button class="login__btn" @click="login" type="submit">LOG IN</button>

        <p class="p1">
          You don't have an account?
          <a class="signup__text" href="/Signup">Sign Up</a>
        </p>
        <p class="p2"><a href="#">forgot your password?</a></p>
      </form>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode';
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          user: this.email,
          pass: this.password,
        },
      })
        .then((res) => {
          localStorage.setItem(
            'token',
            res.headers.get('authorization').split(' ')[1]
          );
          this.$store.commit('loggedIn');
          this.$store.commit(
            'readUser',
            VueJwtDecode.decode(localStorage.getItem('token'))
          );
          alert(`Hi ${this.$store.state.user.jwtData[2]}! Login Successful!`);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_login.scss';
</style>

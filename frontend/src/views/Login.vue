<template>
  <div id="app">
    <div class="login__page">
      <h1 class="sign__text">Log in</h1>
      <br />
      <form class="form__group" @submit.prevent="submit">
        <input
          v-model="data.email"
          type="email"
          class="email__box"
          placeholder="E-mail"
          required
        />

        <input
          v-model="data.password"
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
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();
    const submit = async () => {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      if (!response.ok) {
        alert("password or email is wrong");
        throw new Error(`HTTP error! status:${response.status}`);
      }
      await router.push("/volunteers");
    };
    return {
      data,
      submit,
    };
  },
};
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_signin.scss";
</style>

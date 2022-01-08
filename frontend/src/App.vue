<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
    <notifications
      position="top center"
      width="100%"
      classes="my-notification"
    />
  </div>
</template>

<style lang="scss">
@import "../src/components/styles/style.scss";
</style>

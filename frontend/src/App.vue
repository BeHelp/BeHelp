<script setup>
<<<<<<< HEAD
import HeaderScreen from './components/HeaderScreen.vue';
import FooterScreen from './components/FooterScreen.vue';
=======
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
>>>>>>> 34c7514a27e3f1092499ae68d9c7cd1125034b6c
</script>

<template>
  <div class="app">
    <HeaderScreen />
    <router-view></router-view>
<<<<<<< HEAD
    <FooterScreen />
=======
    <Footer />
    <notifications
      position="top center"
      width="100%"
      classes="my-notification"
    />
>>>>>>> 34c7514a27e3f1092499ae68d9c7cd1125034b6c
  </div>
</template>

<style lang="scss">
@import "../src/components/styles/style.scss";
</style>

<script setup>
import Header from './components/Header.vue';
<<<<<<< HEAD
import Search from './components/Search.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Thankyou from './components/Thankyou.vue';
=======
>>>>>>> 0f18cf8bf30bf34df4fb4093661e1ef23d30b6b7
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
@import '../src/components/styles/style.scss';
</style>

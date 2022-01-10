<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<style lang="scss">
@import "../src/components/styles/style.scss";
</style>

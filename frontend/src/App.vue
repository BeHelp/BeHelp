<script setup>
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="app">
    <Header />
    <Search />
    <About />
    <Services />
    <Footer />
  </div>
</template>

<style lang="scss">
@import '../src/components/styles/style.scss';
</style>

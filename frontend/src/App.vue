<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue';
import Search from './components/Search.vue';
import About from './components/About.vue';
</script>

<template>
  <div class="app">
    <Header />
    <Search />
    <About />
  </div>
</template>

<style lang="scss">
@import '../src/components/styles/style.scss';
</style>

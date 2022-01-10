<script setup>
import HeaderScreen from './components/HeaderScreen.vue';
import FooterScreen from './components/FooterScreen.vue';
</script>

<template>
  <div class="app">
    <HeaderScreen />
    <router-view></router-view>
    <FooterScreen />
  </div>
</template>

<style lang="scss">
@import '../src/components/styles/style.scss';
</style>

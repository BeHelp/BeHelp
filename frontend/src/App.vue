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

.my-notification {
  // styling
  border-radius: 20px;
  margin: 20px 5px 5px;
  padding: 20px;
  font-size: 12px;
  color: #ffffff;

  // default (blue)
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  // types (green, amber, red)
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
    text-align: center;
  }

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
    text-align: center;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
    text-align: center;
  }
}
</style>

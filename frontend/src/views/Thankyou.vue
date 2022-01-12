<template>
  <div class="thankyou">
    <div class="thankyou__logo">
      <img src="../assets/logos/Logo_small_orange.svg" alt="logo" />
    </div>
    <div class="thankyou__msg">
      <h2 class="thankyou__msg-hdr">Thank You!</h2>
      <p class="thankyou__msg-txt">
        We have received your request. <br />A volunteer will contact you
        <br />as soon as possible.
      </p>
    </div>
    <div class="thankyou__wrapper">
      <!-- href link replaced with router-view -->
      <router-link to="/">
        <button class="thankyou__wrapper-btn">Main Page</button></router-link
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_thankyou.scss";
</style>

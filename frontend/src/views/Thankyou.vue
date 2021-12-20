<template>
   <div class="thankyou">
      <div class="thankyou__logo">
        <img src="../assets/logos/Logo_small_orange.svg" alt="logo" />
      </div>
      <div class="thankyou__msg">
        <h2 class="thankyou__msg-hdr">Thank You!</h2>
        <p class="thankyou__msg-txt">
          We have received your request. a volunteer will contact you as soon as
          possible.
        </p>
      </div>
      <div class="thankyou__wraper">
        <!-- href link replaced with router-view -->
        <router-link to="/" > <button class="thankyou__wraper-btn">Main Page</button></router-link>
      </div>
    </div>
</template>
<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_thankyou.scss';
</style>


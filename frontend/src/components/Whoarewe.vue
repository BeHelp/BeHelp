<template>
  <section class="home__about" id="about">
    <div class="home__about-card">
      <div class="home__about-container">
        <div class="home__about-header-div">
          <h1 class="home__about-h1">BeHelp</h1>
          <h2 class="home__about-h2">{{ $t("whoarewe") }}</h2>
        </div>
        <div class="home__about-logo-div">
          <img
            class="home__about-logo"
            src="../assets/logos/Logo_Belgium.svg"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <p class="home__about-text">
          {{ $t("aboutbehelp1") }}
          <br />
          <br />
          {{ $t("aboutbehelp2") }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/layout/_about.scss";
</style>

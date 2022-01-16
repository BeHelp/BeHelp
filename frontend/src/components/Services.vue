<template>
  <section class="services">
    <div class="services__left">
      <h2 class="services__left-hdr">{{ $t("ourservices") }}</h2>

      <p class="services__left-txt">
        {{ $t("ourservices2") }}
      </p>
    </div>
    <div class="services__right">
      <h2 class="services__right-hdr">{{ $t("howcanwehelp") }}</h2>
      <ul class="services__list">
        <li class="services__list-item">
          <span>
            <a href="#"
              ><img src="../assets/fas/briefcase.svg" class="fa"
            /></a> </span
          >{{ $t("legalassistance") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"
              ><img src="../assets/fas/bullhorn.svg" class="fa"
            /></a> </span
          >{{ $t("translations") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"
              ><img src="../assets/fas/user.svg" class="fa"
            /></a> </span
          >{{ $t("mentalhealth") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"
              ><img src="../assets/fas/house.svg" class="fa"
            /></a> </span
          >{{ $t("hostfamilies") }}
        </li>
        <li class="services__list-item">
          <span class="service__list-icon">
            <a href="#"
              ><img src="../assets/fas/archway.svg" class="fa"
            /></a> </span
          >{{ $t("educationservices") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"
              ><img src="../assets/fas/thumbs-up.svg" class="fa"
            /></a> </span
          >{{ $t("socialassistance") }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_services.scss";
</style>

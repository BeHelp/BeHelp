<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

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
              ><Icon class="fa" icon="mdi-light:briefcase" />
            </a> </span
          >{{ $t("legalassistance") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"><Icon class="fa" icon="mdi-light:bullhorn" /></a> </span
          >{{ $t("translations") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"><Icon class="fa" icon="mdi-light:account" /></a> </span
          >{{ $t("mentalhealth") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"><Icon class="fa" icon="mdi-light:home" /></a> </span
          >{{ $t("hostfamilies") }}
        </li>
        <li class="services__list-item">
          <span class="service__list-icon">
            <a href="#"><Icon class="fa" icon="mdi-light:bank" /></a> </span
          >{{ $t("educationservices") }}
        </li>
        <li class="services__list-item">
          <span>
            <a href="#"><Icon class="fa" icon="mdi-light:thumb-up" /></a> </span
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

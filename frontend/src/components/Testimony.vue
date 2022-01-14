<template>
  <section class="testimony">
    <h2>
      {{ $t("comments") }}<br />
      {{ $t("howwework") }}
    </h2>
    <Splide :options="{ rewind: true }">
      <SplideSlide>
        <div class="testimony-content">
          <img
            class="testimony-img"
            src="../assets/testimonies/kidane.jpeg"
            alt="Kidane"
          />
          <div class="testimony-text">
            <h3>Kidane, Eritrea</h3>
            <p class="testimony-p">{{ $t("kidane") }}</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="testimony-content">
          <img
            class="testimony-img"
            src="../assets/testimonies/levi.jpeg"
            alt="Levi"
          />
          <div class="testimony-text">
            <h3>Levi, Belgium</h3>
            <p class="testimony-p">
              {{ $t("levi") }}
            </p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="testimony-content">
          <img
            class="testimony-img"
            src="../assets/testimonies/abdel.jpeg"
            alt="Abdel"
          />
          <div class="testimony-text">
            <h3>Abdel, Palestine</h3>
            <p class="testimony-p">
              {{ $t("abdel") }}
            </p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default defineComponent({
  components: { Splide, SplideSlide },
});
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/layout/_testimony.scss";
</style>

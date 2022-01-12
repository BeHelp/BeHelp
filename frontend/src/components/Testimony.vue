<template>
  <section class="testimony">
    <h2>
      COMMENTS: <br />
      HOW WE WORK
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
            <p class="testimony-p">
              BeHelp made me believe again. After fleeing from Eritrea, I had a
              very hard time and needed psychological help which I could hardly
              afford. On this platform, I could find a volunteer psychotherapist
              that renders aid to people like me. She even spoke Tigrinya! Our
              sessions allowed me to see new opportunities and live a more
              fulfilling life, even though it remains challenging to adapt to
              the new country.
            </p>
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
              The drama of refugees fleeing out their countries has always
              touched me, also because my father was a refugee once! Before, I
              was simply donating money to fundraising movements, and BeHelp
              gave me an excellent opportunity to contribute in a more personal
              way. Being a French teacher, I give language classes and serve as
              an interpreter from Arabic, the language that I master from my
              childhood.
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
              Having left my country behind, I faced extreme complexity of the
              Belgian legal system. All these papers and offices … hard to deal
              with if you don’t speak Dutch! So I registered on BeHelp and found
              competent volunteers that explained me how to smoothen the process
              of legalization. Now I am returning all support I have received
              here, by helping people who came to Belgium, like me, and need
              help of a professional psychologist.
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

<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/layout/_testimony.scss";
</style>

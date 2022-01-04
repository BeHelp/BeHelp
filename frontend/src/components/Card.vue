<template>
  <div class="container__fluid">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card mb-3" style="max-width: 540px h-100">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/img/volunteer-1.svg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Jasmin</h5>
                <p class="card-text">
                  I can help with french language for person who speaks arabiс
                  language
                </p>
              </div>
              <div> 
                <img
                  class="geo__logo"
                  src="../assets/logos/geo__logo.svg"
                  alt="geo logo"
                />Location
              </div>
            </div>
            <div class="card__footer">
              <small
                ><a class="btn btn-primary" href="#" role="button"
                  >CONTACT ME</a
                >
              </small>
            </div>
          </div>
        </div>
      </div>
      <div class="card mb-3" style="max-width: 540px h-100 ">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/img/volunteer-2.svg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Will</h5>
                <p class="card-text">
                  I will be happy to help with interpretation for medical visits from french/dutch to portuguese, english african and spanish 
                </p>
              </div>
              <div> 
                <img
                  class="geo__logo"
                  src="../assets/logos/geo__logo.svg"
                  alt="geo logo"
                />Location
              </div>
            </div>
            <div class="card__footer">
              <small
                ><a class="btn btn-primary" href="#" role="button"
                  >CONTACT ME</a
                >
              </small>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Card",
  components: {},
};
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_card.scss";
</style>

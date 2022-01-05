<template>
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
          <h5 class="card-title">{{ name }}</h5>
          <p class="card-text">
            {{ volunteerDescription }}
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
          ><a class="btn btn-primary" href="#" role="button">CONTACT ME</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["name", "volunteerDescription"],
  components: {},
};
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_card.scss";
</style>

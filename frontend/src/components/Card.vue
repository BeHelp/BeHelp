<template>
  <div class="card mb-3" style="max-width: 540px h-100">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          v-bind:src="volunteer.photoURL"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ volunteer.firstName }} {{ volunteer.lastName }}
          </h5>
          <p class="card-text">
            {{ volunteer.description }}
          </p>
        </div>
        <div>
          <img
            class="geo__logo"
            src="../assets/logos/geo__logo.svg"
            alt="geo logo"
          />
          {{ volunteer.location[1] }}
        </div>
      </div>
      <div class="card__footer">
        <small
          ><a class="btn btn-primary" v-bind:href="'/volunteer/' + volunteer._id" role="button">CONTACT ME</a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["volunteer"],
  components: {},
};
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_card.scss";
</style>

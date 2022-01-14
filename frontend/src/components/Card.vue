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
      <a class="card__contact-btn" 
v-bind:href="'/volunteer/' + volunteer._id" role="button">CONTACT ME</a>
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

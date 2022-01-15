<script>
import { mapState } from "vuex";

export default {
  name: "Card",
  props: ["volunteer"],
  components: {},
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    accessBtn() {
      if (this.isLoggedIn !== true) {
        this.$notify({
          title:
            "Please login to access the full profile and to write a message",
          type: "error",
        });
      } else {
        this.$router.push(`/volunteer/` + this.volunteer._id);
      }
    },
  },
};
</script>

<template>
  <div class="cards">
    <div class="cards__picture">
      <img v-bind:src="volunteer.photoURL" alt="volunteer-profile-picture" />
    </div>
    <div class="card__body">
      <h5 class="card__title">
        {{ volunteer.firstName }} {{ volunteer.lastName }}
      </h5>
      <p class="card__text">
        {{ volunteer.description }}
      </p>
      <div class="geo__text">
        <img
          class="geo__logo"
          src="../assets/logos/geo__logo.svg"
          alt="geo logo"
        />
        {{ volunteer.location[1] }}
      </div>
      <a class="card__contact-btn" @click="accessBtn" role="button"
        >CONTACT ME</a
      >
    </div>
  </div>
</template>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_card.scss";
</style>

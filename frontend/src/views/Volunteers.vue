<script>
import Search from "../components/Search.vue";
import Card from "../components/Card.vue";
import { mapState } from "vuex";

export default {
  components: {
    Search,
    Card,
  },
  computed: {
    ...mapState(["searchResult"]),
  },
};
</script>

<template>
  <div>
      <Search />
      <div class="volunteers">
      <div class="volunteers__container">
        <div class="volunteers__searchresults">
          <div class="volunteers__searchresults-h1"></div>

          <div class="cards__columns">
            <Card
              v-for="volunteer in searchResult"
              v-bind:volunteer="volunteer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_card.scss";
</style>

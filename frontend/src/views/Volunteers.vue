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
  // methods: {
  //   searchCompleted: function (results) {
  //     this.volunteers = searchResult;
  //     console.log(results);
  //   },
  // },
};
</script>

<template>
  <div>
    <div class="volunteers">
      <Search v-on:searchCompleted="searchCompleted" />
      <div class="volunteers__container">
        <div class="volunteers__searchresults">
          <div class="volunteers__searchresults-h1">Results:</div>
          <pre id="json">
          <!-- {{ this.results }} -->
          
        </pre>
          <Card
            v-for="volunteer in searchResult"
            v-bind:volunteer="volunteer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../components/styles/abstract/_variables.scss";
</style>

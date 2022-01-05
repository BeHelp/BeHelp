<script>
import Search from "../components/Search.vue";
import Card from "../components/Card.vue";

export default {
  data() {
    return {
      volunteers: [],
    };
  },
  components: {
    Search,
    Card,
  },

  methods: {
    searchCompleted: function (results) {
      this.volunteers = results;
      console.log(results);
    },
  },
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
          <Card v-for="volunteer in volunteers" v-bind:volunteer="volunteer" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_filter.scss";

.btn__card {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>

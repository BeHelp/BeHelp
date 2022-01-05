<script>
import Search from '../components/Search.vue';

export default {
  components: {
    Search,
  },
};
</script>

<template>
  <div>
    <div class="volunteers">
      <Search />
      <div class="volunteers__container">
        <div class="volunteers__searchresults">
          <div class="volunteers__searchresults-h1">Results:</div>
          <pre id="json">
          <!-- {{ this.results }} -->
        </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_filter.scss';
</style>

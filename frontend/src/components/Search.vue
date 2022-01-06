<script>
import languages from "../assets/jsondata/languages.json";
import cities from "../assets/jsondata/cities.json";
import skills from "../assets/jsondata/skills.json";

export default {
  data() {
    return {
      results: "",
      languageOptions: languages,
      cityOptions: cities,
      skillOptions: skills,
      filterLanguages: [],
      filterCities: [],
      filterSkills: [],
      filterGenders: [],
    };
  },

  methods: {
    async filterBtn() {
      try {
        const filter = {
          skills: this.filterSkills[0].name,
          location: this.filterCities[0]["city"],
          languages: this.filterLanguages[0]["name"],
        };
        console.log(
          JSON.stringify({
            skills: filter.skills,
            location: filter.location,
            languages: filter.languages,
          })
        );
        // if (
        //   filter.skills.length === undefined ||
        //   filter.locations.length === undefined ||
        //   filter.languages.length === undefined ||
        //   filter.skills.length === 0 ||
        //   filter.locations.length === 0 ||
        //   filter.languages.length === 0
        // ) {
        //   alert('Please select at least one filter for each category');
        //   return;
        // }
        const res = await fetch("http://localhost:5000/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skills: filter.skills,
            location: filter.location,
            languages: filter.languages,
            genders: filter.genders,
          }),
        });
        const searchResult = await res.json();
        // this.results = searchResult[0].firstName;
        // alert(this.results);
        this.$emit("searchCompleted", searchResult);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <section class="search">
    <div class="search__background">
      <img
        v-if="$route.name === 'Home'"
        src="../assets/homepage-search.png"
        class="search__background-img"
      />
      <img
        v-else
        src=""
        style="margin-top: 200px"
        class="search__background-img"
      />
      <div class="search__background-decor">
        <h1 v-if="$route.name === 'Home'">FIND YOUR VOLUNTEER</h1>
        <h1 v-else>VOLUNTEERS WHO CAN HELP</h1>

        <div class="search__background-panel">
          <div class="search__dropdown">
            <div>
              <v-select
                class="style-chooser"
                multiple
                v-model="filterSkills"
                :options="skillOptions"
                :placeholder="'Skills'"
                label="name"
              />
            </div>
          </div>
          <div class="search__dropdown">
            <div>
              <v-select
                class="style-chooser"
                multiple
                v-model="filterCities"
                :options="cityOptions"
                :placeholder="'Cities'"
                label="city"
              />
            </div>
          </div>
          <div class="search__dropdown">
            <div>
              <v-select
                class="style-chooser"
                multiple
                v-model="filterLanguages"
                :options="languageOptions"
                :placeholder="'Languages'"
                label="name"
              />
            </div>
          </div>

          <button @click="filterBtn" class="search-btn">
            <img src="../assets/fas/search-solid.svg" class="search-icon" />
          </button>
          <span class="flare"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/layout/_search.scss';
@import '../components/styles/layout/_dropdown.scss';
@import 'vue-select/src/scss/vue-select.scss';
</style>

<script>
import languages from "../assets/jsondata/languages.json";
import cities from "../assets/jsondata/cities.json";
import skills from "../assets/jsondata/skills.json";

export default {
  data() {
    return {
      languageOptions: languages,
      cityOptions: cities,
      skillOptions: skills,
    };
  },
  computed: {
    filterLanguages: {
      get() {
        return this.$store.state.filterLanguages;
      },
      set(value) {
        this.$store.commit("updateLanguages", value);
      },
    },
    filterCities: {
      get() {
        return this.$store.state.filterCities;
      },
      set(value) {
        this.$store.commit("updateCities", value);
      },
    },
    filterSkills: {
      get() {
        return this.$store.state.filterSkills;
      },
      set(value) {
        this.$store.commit("updateSkills", value);
      },
    },
  },
  methods: {
    async filterBtn() {
      try {
        if (
          this.filterSkills === "" ||
          this.filterLanguages === "" ||
          this.filterCities === "" ||
          this.filterSkills === null ||
          this.filterLanguages === null ||
          this.filterCities === null
        ) {
          alert("Please select one filter for each category");
          return;
        }
        const filter = {
          skills: this.filterSkills.name,
          location: this.filterCities.city,
          languages: this.filterLanguages.name,
        };
        console.log(
          JSON.stringify({
            skills: filter.skills,
            location: filter.location,
            languages: filter.languages,
          })
        );

        const res = await fetch(`${import.meta.env.VITE_API}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skills: filter.skills,
            location: filter.location,
            languages: filter.languages,
          }),
        });
        const searchResults = await res.json();
        if (this.$route.fullPath === "/") {
          this.$router.push("/volunteers");
          this.$store.commit("searchResult", searchResults);
        }
        this.$store.commit("searchResult", searchResults);
        // results = searchResult[0].firstName;
        // console.log(results);
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
      <div
        v-else
        style="margin-top: 200px"
        class="search__background-img"
      ></div>
      <div class="search__background-decor">
        <h1 v-if="$route.name === 'Home'">{{ $t("findyourvolunteer") }}</h1>
        <h1 v-else>{{ $t("volunteerswhocanhelp") }}</h1>

        <div class="search__background-panel">
          <div class="search__dropdown">
            <div>
              <v-select
                class="style-chooser"
                v-model="filterSkills"
                :options="skillOptions"
                :placeholder="$t('skill')"
                label="name"
              />
            </div>
          </div>
          <div class="search__dropdown">
            <div>
              <v-select
                class="style-chooser"
                v-model="filterCities"
                :options="cityOptions"
                :placeholder="$t('city')"
                label="city"
              />
            </div>
          </div>
          <div class="search__dropdown">
            <div>
              <v-select
                class="style-chooser"
                v-model="filterLanguages"
                :options="languageOptions"
                :placeholder="$t('language')"
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

<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/layout/_search.scss";
@import "../components/styles/layout/_dropdown.scss";
@import "vue-select/src/scss/vue-select.scss";
</style>

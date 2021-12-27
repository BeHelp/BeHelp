<script>
export default {
  data: function () {
    return {
      results: '',
      languages: [
        'English',
        'French',
        'Dutch',
        'German',
        'Arabic',
        'Russian',
        'Spanish',
        'Hindi',
        'Chinese',
        'Italian',
        'Other',
      ],
      skills: [
        'Legal assistance',
        'Translation',
        'Mental health',
        'Host families',
        'Education services',
        'Language classes',
        'Social assistance',
      ],
      filterLocation: [],
      filterLanguages: [],
      filterSkills: [],
    };
  },
  methods: {
    async filterBtn() {
      try {
        const filter = {
          location: JSON.parse(JSON.stringify(this.filterLocation)),
          languages: JSON.parse(JSON.stringify(this.filterLanguages)),
          skills: JSON.parse(JSON.stringify(this.filterSkills)),
        };
        const res = await fetch('http://localhost:5000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: filter.location,
            languages: filter.languages,
            skills: filter.skills,
          }),
        });
        const searchResult = await res.json();
        this.results = searchResult[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="volunteers">
    <div class="volunteers__h1">Volunteers who can help</div>
    <div class="volunteers__container">
      <div class="volunteers__filterbar">
        <div class="volunteers__filterbar-h1">Filters</div>
        <div class="volunteers__filterbar-h2">Languages</div>
        <ul>
          <li v-for="lang in languages" class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              :id="lang"
              :value="lang"
              v-model="filterLanguages"
            />
            <label class="checkbox__text" for="languages">{{ lang }}</label>
          </li>
        </ul>
        <div class="volunteers__filterbar-h2">Skills</div>
        <ul>
          <li v-for="skill in skills" class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              :id="skill"
              unchecked
            />
            <label class="checkbox__text" for="languages">{{ skill }}</label>
          </li>
        </ul>
        <div class="volunteers__filterbar-h2">Postcode</div>
        <div class="volunteers__filterbar-postcode">
          <div class="dropdown">
            <button
              class="
                btn btn-secondary btn-sm
                dropdown-toggle dropdown-toggle-split
              "
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="button"
              id="dropdownMenuButton"
            >
              1000/6010/6000
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">1111</a>
              <a class="dropdown-item" href="#">2222</a>
              <a class="dropdown-item" href="#">3333</a>
            </div>
          </div>
        </div>

        <button @click="filterBtn" class="btn-filter">Filter</button>
      </div>
      <div class="volunteers__searchresults">
        <div class="volunteers__searchresults-h1">Search Results</div>
        <pre id="json">
          {{ filterLanguages }}
          {{ this.results }}
        </pre>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_filter.scss';
</style>

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
        'translation',
        'Mental health',
        'Host families',
        'Education services',
        'Language classes',
        'Social assistance',
      ],
      locations: [
        'Brussels',
        'Ghent',
        'Namur',
        'Antwerp',
        'Charleroi',
        'Liége',
        'Bruges',
        'Leuven',
        'Mons',
        'Mechelen',
      ],
      filterLanguages: [],
      filterSkills: [],
      filterLocations: [],
    };
  },
  methods: {
    async filterBtn() {
      try {
        const filter = {
          locations: JSON.parse(JSON.stringify(this.filterLocations)),
          languages: JSON.parse(JSON.stringify(this.filterLanguages)),
          skills: JSON.parse(JSON.stringify(this.filterSkills)),
        };
        if (
          filter.locations.length === 0 ||
          filter.languages.length === 0 ||
          filter.skills.length === 0
        ) {
          alert('Please select at least one filter for each category');
          return;
        }
        const res = await fetch('http://localhost:5000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: filter.locations,
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
              :value="skill"
              v-model="filterSkills"
            />
            <label class="checkbox__text" for="languages">{{ skill }}</label>
          </li>
        </ul>
        <div class="volunteers__filterbar-h2">Locations</div>
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
              Select city
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <ul>
                <li v-for="loc in locations" class="checkbox">
                  <input
                    class="checkbox__box"
                    type="checkbox"
                    :id="loc"
                    :value="loc"
                    v-model="filterLocations"
                  />
                  <label class="checkbox__text" for="locations">{{
                    loc
                  }}</label>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button @click="filterBtn" class="btn-filter">Filter</button>
      </div>
      <div class="volunteers__searchresults">
        <div class="volunteers__searchresults-h1">Filters:</div>
        <pre id="json">
          {{ filterLanguages }}
          {{ filterSkills }}
          {{ filterLocations }}
        </pre>
        <div class="volunteers__searchresults-h1">Results:</div>
        <pre id="json">
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

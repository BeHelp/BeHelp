<script>
export default {
  data: () => {
    return { results: '' };
  },
  methods: {
    async filterBtn() {
      try {
        const res = await fetch('http://localhost:5000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            languages: 'Arabic',
          }),
        });
        const searchResult = await res.json();
        console.log(searchResult);
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
        <div class="volunteers__filterbar-languages">
          <div class="checkbox">
            <input class="checkbox__box" type="checkbox" id="English" checked />
            <label class="checkbox__text" for="languages">English</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="French"
              unchecked
            />
            <label class="checkbox__text" for="languages">French</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Russian</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Spanish</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Dutch</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Arabic</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Hindi</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Chinese</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Italian</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="Russian"
              unchecked
            />
            <label class="checkbox__text" for="languages">Other</label>
          </div>
        </div>
        <div class="volunteers__filterbar-h2">Skills</div>
        <div class="volunteers__filterbar-skills">
          <div class="checkbox">
            <input class="checkbox__box" type="checkbox" id="English" checked />
            <label class="checkbox__text" for="languages"
              >Legal assistance</label
            >
          </div>
          <div class="checkbox">
            <input class="checkbox__box" type="checkbox" id="French" checked />
            <label class="checkbox__text" for="languages">Translation</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="French"
              unchecked
            />
            <label class="checkbox__text" for="languages">Mental health</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="French"
              unchecked
            />
            <label class="checkbox__text" for="languages">Host families</label>
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="French"
              unchecked
            />
            <label class="checkbox__text" for="languages"
              >Education services</label
            >
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="French"
              unchecked
            />
            <label class="checkbox__text" for="languages"
              >Language classes</label
            >
          </div>
          <div class="checkbox">
            <input
              class="checkbox__box"
              type="checkbox"
              id="French"
              unchecked
            />
            <label class="checkbox__text" for="languages"
              >Social assistance</label
            >
          </div>
        </div>
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

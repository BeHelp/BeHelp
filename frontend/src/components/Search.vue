<script></script>

<template>
  <section class="search">
  <div class = "search__background">
  <img src ="../assets/homepage-search.png" class = "search__background-img">
  <div class = "search__background-decor">
  <h1>FIND YOUR VOLUNTEER</h1>

      <div class = "search__background-panel">
        
        <div class="dropdown">
          <button class="btn btn-secondary btn-lg dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false" type="button" id="dropdownMenuButton">
          Skills
          </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Translation</a>
            <a class="dropdown-item" href="#">Medical</a>
            <a class="dropdown-item" href="#">Job offer</a>
            </div>
          </div>

          <div class="dropdown">
          <button class="btn btn-secondary btn-lg dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false" type="button" id="dropdownMenuButton">
          City
          </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Brussels</a>
            <a class="dropdown-item" href="#">Ghent</a>
            <a class="dropdown-item" href="#">Louvain</a>
            </div>
          </div>

          <div class="dropdown">
          <button class="btn btn-secondary btn-lg dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false" type="button" id="dropdownMenuButton">
          Language
          </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">English</a>
            <a class="dropdown-item" href="#">Spanish</a>
            <a class="dropdown-item" href="#">Arabic</a>
            </div>
          </div>

        <button class = "search-btn">
        <img src = "../assets/fas/search-solid.svg" class = "search-icon">
        </button>
      </div>
      </div>
  </div>

  </section>
</template>

<style lang="scss">

@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/layout/_search.scss';

</style>

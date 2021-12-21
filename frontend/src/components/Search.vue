<script></script>

<template>
  <section class="search">
  <div class = "search__background">
  <img src ="../assets/homepage-search.png" class = "search__background-img">
  <div class = "search__background-decor">
  <h1>FIND YOUR VOLUNTEER</h1>
        <div class = "search__background-panel">
        
        <div class = "search__background-criteria">
        <button class="btn btn-secondary btn-lg" type="button">Skills</button>
        <button 
          class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">Translation/Interpretation</a>
          </li>
          <li><a class="dropdown-item" href="#">Medical</a></li>
          <li><a class="dropdown-item" href="#">Job offer</a></li>
        </ul>
        </div>

        <div class = "search__background-criteria">
        <button class="btn btn-secondary btn-lg" type="button">City</button>
        <button
          type="button"
          class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Brussels</a></li>
          <li><a class="dropdown-item" href="#">Ghent</a></li>
          <li><a class="dropdown-item" href="#">Louvain</a></li>
        </ul>
        </div>

        <div class = "search__background-criteria">
        <button class="btn btn-secondary btn-lg" type="button">Language</button>
        <button
          type="button"
          class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">French</a></li>
          <li><a class="dropdown-item" href="#">Dutch</a></li>
          <li><a class="dropdown-item" href="#">English</a></li>
        </ul>
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

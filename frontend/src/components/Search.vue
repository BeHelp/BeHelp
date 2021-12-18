<template>
  <div class="search-image">
    <img
      src="/BeHelp/design/homepage-search.png"
      alt="Snow"
      style="width: 100%"
    />
    <div class="search-container">
      <div class="btn-group">
        <button class="btn btn-secondary btn-lg" type="button">Skills</button>
        <button
          type="button"
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
        <button class="btn btn-secondary btn-lg" type="button">
          Post code
        </button>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<style>
.search-image {
  position: relative;
}

.search-container {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.search-container .dropdown-toggle {
  margin-right: 1em;
}
.dropdown-item {
  overflow: show;
}

.btn {
  width: auto;
}
</style>

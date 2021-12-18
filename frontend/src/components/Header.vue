<script></script>

<template>
  <header class="header">
    <nav class="header__nav">
      <img
        class="header__nav-logo"
        src="../assets/logos/Logo_wb.svg"
        alt="logo"
      />
      <ul class="header__nav-list">
        <li class="header__nav-list item">
          <a href="#" class="header__nav-list link">About</a>
        </li>
        <li class="header__nav-list item">
          <a href="volunteers.html" class="header__nav-list link">Volunteers</a>
        </li>
        <li class="header__nav-list item">
          <a href="#" class="header__nav-list link">Contacts</a>
        </li>
      </ul>
      <ul class="header__nav-features">
        <li class="header__nav-features select">
          <select>
            <option class="header__nav-features option">ENG</option>
            <option class="header__nav-features option">FR</option>
            <option class="header__nav-features option">NL</option>
          </select>
        </li>
        <li class="header__nav-features signup">
          <button href="#" class="header__nav-features btn-signup">
            Sign Up
          </button>
        </li>
        <li class="header__nav-features login">
          <button href="#" class="header__nav-features btn-login">
            Log In
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_header.scss';
</style>

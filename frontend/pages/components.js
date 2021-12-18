class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/BeHelp/frontend/styles/scss/style.css">
      <title></title>
    </head>
    
    <body>
      <header class="header">
        <nav class="header__nav">
          <img class="header__nav-logo" src="/BeHelp/design/Logos/Logo_wb.svg" alt="logo"></a>
          <ul class="header__nav-list">
            <li class="header__nav-list item"><a href="#" class="header__nav-list link">About</a></li>
            <li class="header__nav-list item"><a href="volunteers.html" class="header__nav-list link">Volunteers</a></li>
            <li class="header__nav-list item"><a href="#" class="header__nav-list link">Contacts</a></li>
          </ul>
          <ul class="header__nav-features">
            <li class="header__nav-features select"><select>
                <option class="header__nav-features option">ENG</option>
                <option class="header__nav-features option">FR</option>
                <option class="header__nav-features option">NL</option>
              </select></li>
            <li class="header__nav-features signup"><button href="#" class="header__nav-features btn-signup">Sign
                Up</button></li>
            <li class="header__nav-features login"><button href="#" class="header__nav-features btn-login">Log In</button>
            </li>
          </ul>
        </nav>
      </header>
    </body>
    
    </html>`;
  }
}
class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="utf-8" />
          <meta name="author" content="Team HYF" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="stylesheet" href="/BeHelp/frontend/styles/css/about.css" />
          <title>BeHelp</title>
        </head>
        
        <body>
          <section class="home__about">
            <div class="home__about-card">
              <div class="home__about-container">
                <div class="home__about-header-div">
                  <h1 class="home__about-h1">BeHelp</h1>
                  <h2 class="home__about-h2">WHO ARE WE?</h2>
                </div>
                <div class="home__about-logo-div">
                  <img class="home__about-logo" src="/BeHelp/frontend/img/logo_Be.png" alt="logo" />
                </div>
              </div>
              <div>
                <p class="home__about-text">
                  BeHelp is a service that connects refugees and asylum seekers to
                  local volunteers who are willing to share their expertise and skills
                  pro bono. <br />
                  <br />
                  On BeHelp, you can find helpers from all around Belgium.
                </p>
              </div>
            </div>
          </section>
        </body>
        
        </html>`;
  }
}
class HomepageSearch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<!doctype html>
    <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="/BeHelp/frontend/styles/scss/homepage-search.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0/css/bootstrap.min.css"
            integrity="sha512-NZ19NrT58XPK5sXqXnnvtf9T5kLXSzGQlVZL9taZWeTBtXoN3xIfTdxbkQh6QSoJfJgpojRqMfhyqBAAEeiXcA=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    
        <title></title>
    </head>
    
    
    <body>
        <div class="search-image">
            <img src="/BeHelp/design/homepage-search.png" alt="Snow" style="width:100%;">
            <div class="search-container">
    
                <div class="btn-group">
                    <button class="btn btn-secondary btn-lg" type="button">
                        Skills
                    </button>
                    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Translation/Interpretation</a></li>
                        <li><a class="dropdown-item" href="#">Medical</a></li>
                        <li><a class="dropdown-item" href="#">Job offer</a></li>
                    </ul>
                    <button class="btn btn-secondary btn-lg" type="button">
                        Post code
                    </button>
                    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Brussels</a></li>
                        <li><a class="dropdown-item" href="#">Ghent</a></li>
                        <li><a class="dropdown-item" href="#">Louvain</a></li>
                    </ul>
                    <button class="btn btn-secondary btn-lg" type="button">
                        Language
                    </button>
                    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">French</a></li>
                        <li><a class="dropdown-item" href="#">Dutch</a></li>
                        <li><a class="dropdown-item" href="#">English</a></li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
    
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0/js/bootstrap.bundle.min.js"
                integrity="sha512-Tkt/sYlAym9X81DPqqbCjU6bMl9HmsehhtxjnZu0K1TN9Ygu8h2D7jZbn59lbDNbbIG7DUukGkjKJbp/wDpKGg=="
                crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </body>
    
    </html>`;
  }
}
customElements.define('app-header', Header);
customElements.define('app-about', About);
customElements.define('app-homepage-search', HomepageSearch);

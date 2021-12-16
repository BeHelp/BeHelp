# Development strategy

> FONTS:
> H1 - Montserrat BOLD 70 
> H2 - Montserrat BOLD 40 
> Text - Montserrat Regular 20
> Filters - Montserrat Regular 12
> Cards mini - Montserrat Regular 16
> Cards big - Montserrat Regular 20

### Header
> The code should be developed at `ii-header` branch
> The code should be merged into `main`

 **HTML**
- header: class = "header" 
- logo: class = "header__logo", src, alt = "logo"
- nav-bar (nav): class "header_nav"
    - ul: class "header__list"
    - li 'About': class "header__list-item", links to the About section
    - li 'Volunteers': class "header__list-item", link to the Volunteers page
    - contacts: class "header__list-item", link to the footer
    - btn "Sign up": class "header__btn-signup", leads to the registration page (/signup)
    - btn "Login": class "header__btn-login", opens the login popup (/login)

 **CSS**
- See Figma file

### Footer
> The code should be developed at `iii-footer` branch
> The code should be merged into `main` branch

- footer: class = "footer"
- div: class = "footer__logos"
- img: class = "footer__logos-behelp"
- img: class = "footer__logos-hyf"
- div: class = "footer__div"
- p: "footer__div-text"

### Login form
(has to be done on Figma)

**HTML**

**CSS**

**Javascript**

## Home page
> The code should be developed at `i-homepage` branch
> The code should be merged into `main` branch

### Search Section

**HTML**
- main: class = "home"
- section: class = "home__search"
- figure: class = "home__search-figure"
- img: class = "home__search-img"
- div: class = "home__search-form"
- h1: class = "home__search-form h1"
- div: class = "home__search-skills"
- select: class = "home__search-skills select"
- div: class = "home__search city"
- select: class = "home__search-city-select"
- div: class = "home__search-lang"
- select: class = "home__search-lang-select"
- button: class = "home__search-btn"

**CSS**
See Figma

**Javascript**
Need to connect the search options to the database

### About Section

**HTML**
- section: class = "home__about"
- div: class = "home__about-card"
- h1: class = "home__about-h1"
- h2: class = "home__about-h2"
- img: class = "home__about-logo"
- p: class = "home__about-text" (needs to be changed)

**CSS**

### Services Section

- div: class = "home__services"
- h2: class = "home__services-h2"
- p: class = "home__services-text"
- div: class = "home__services-wecanhelp"
- h2: class = "home__services-wecanhelp-h2"
- ul: class = "home__services-ul"
- li: class = "home__services-li"
- img: class = "home__services-icon" (icons)

## Registration page
**HTML**
- main: class = "register"
- div: class = "register__container"
- img: class = "register__img"
- h2: class = "register__h2"

**CSS**

**Javascript**

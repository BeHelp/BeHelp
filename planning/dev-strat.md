# Development strategy

> FONTS:
> 
> Cards big - Montserrat Regular 20

### Header
> The code should be developed at `ii-header` branch
> The code should be merged into `main`

 **HTML**
- header: class = "header" 
- logo: class = "header_logo", src, alt = "logo"
- nav-bar (nav): class "header_nav"
    - ul: class "header_list"
    - li 'About': class "header_list-item", links to the About section
    - li 'Volunteers': class "header_list-item", link to the Volunteers page
    - contacts: class "header_list-item", link to the footer
    - btn "Sign up": class "header_btn-signup", leads to the registration page (/signup)
    - btn "Login": class "header_btn-login", opens the login popup (/login)

 **CSS**
- See Figma file

### Footer
> The code should be developed at `iii-footer` branch
> The code should be merged into `main` branch

- footer: class = "footer"
- div: class = "footer_logos"
- img: class = "footer_logos-behelp"
- img: class = "footer_logos-hyf"
- div: class = "footer_div-text"
- p: "footer_text"

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
- section: class = "home_search"
- figure: class = "home_search-figure"
- img: class = "home_search-img"
- div: class = "home_search-form"
- h1: class = "home_search-form_h1"
- div: class = "home_search-skills"
- select: class = "home_search-skills-select"
- div: class = "home_search-city"
- select: class = "home_search-city-select"
- div: class = "home_search-lang"
- select: class = "home_search-lang-select"
- button: class = "home_search-btn"

**CSS**
See Figma

**Javascript**
Need to connect the search options to the database

### About Section

**HTML**
- section: class = "home_about"
- div: class = "home_about-card"
- h1: class = "home_about-h1"
- h2: class = "home_about-h2"
- img: class = "home_about-logo"
- p: class = "home_about-text" (needs to be changed)

**CSS**

### Services Section

- div: class = "home_services"
- h2: class = "home_services-h2"
- p: class = "home_services-text"
- div: class = "home_services-wecanhelp"
- h2: class = "home_services-wecanhelp-h2"
- ul: class = "home_services-ul"
- li: class = "home_services-li"
- img: class = "home_services-icon" (icons)

## Registration page
**HTML**
- main: class = "register"
- div: class = "register_container"
- img: class = "register_img"
- h2: class = "register_h2"

**CSS**

**Javascript**
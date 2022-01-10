# Services for newcomers

## BeHelp

Our final project app at HYF Belgium

The application connects international protection seekers with volunteers and organizations that can help them with adaptation and integration into society.

## Table of contents

- [Services for newcomers](#services-for-newcomers)
  - [BeHelp](#behelp)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Screenshots](#screenshots)
  - [Tools and Technologies](#tools-and-technologies)
    - [UX/UI](#uxui)
    - [Frontend](#frontend)
    - [Backend](#backend)
    - [Devops](#devops)
  - [Setup](#setup)
  - [API routes](#api-routes)
  - [Sample Vue code](#sample-vue-code)
  - [Inspiration](#inspiration)
      - [Projects and websites](#projects-and-websites)
      - [Articles](#articles)
  - [Authors](#authors)
      - [Project manager](#project-manager)
      - [Wireframes/Design/UX](#wireframesdesignux)
      - [Frontend](#frontend-1)
      - [Backend](#backend-1)
      - [Full stack (Backend/Frontend)](#full-stack-backendfrontend)
      - [Devops](#devops-1)

## General info

When a newcomer arrives in Belgium, he/she may face a need for various services and have a problem with a language barrier and/or lack of financial resources to afford such services. We will create an application that connects refugees and asylum seekers to volunteers who are ready to help with providing the following services:

- translation
- legal advice
- psychotherapists/coaches
- host families for refugees
- education services (language classes, etc.)
- social assistance (medical assistance, services)

The application will include the search tool that will filter available volunteers by service, geographical region, language. It will also include the tool to contact the chosen volunteer via the website.

---

## Screenshots

[Our project prototype on FIGMA](https://www.figma.com/file/cv6SW8QHlObVd6a8PUas2k/HYF_GR2_refugee)

## Tools and Technologies

### UX/UI

- Figma

### Frontend

- Vue 3
- Vue Router
- Vite build tool
- Vuex state management
- i18n JSON localization
- Cloudinary photo upload
- SCSS with BEM naming conventions

### Backend

- Node
- Express
- MongoDB Atlas
- Mongoose ORM
- Sendgrid email service
- Postman & Thundercat API testing
- JWT authentication tokens & bcrypt hashing

### Devops

- Heroku

## Setup

To run the app, type `npm run behelp` in the CLI, which will run backend and frontend simultaneously
(localhost:3000 for frontend and localhost:5000 for backend).
In addition, create a .env file in the root directory with the following variables:

```
MONGO_URI=
ACCESS_TOKENSECRET=
REFRESH_TOKENSECRET=
SENDGRID_API_KEY=
```

## API routes

The backend server is using separate endpoints for registration, login, logout, authentication, user queries, email services and refresh/reset token management.

## Sample Vue code

The frontend is using Vue 3 single page components. Here is a look at the script tag for the header:

```js
import { mapState } from "vuex";

export default {
  data() {
    return {
      hidden: true,
      locale: "ENG",
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  methods: {
    async logout() {
      try {
        const token = localStorage.getItem("token");
        const userId = this.user.userId;
        const res = await fetch(
          `http://localhost:5000/users/logout/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        localStorage.removeItem("token");
        this.$store.commit("loggedOut");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
```

## Inspiration

#### Projects and websites

- [VoxBox – a platform connecting volunteers and refugees, created by HYF students](https://github.com/gelilaa/VoxBox/)
- [HELPY – a project by students of class 11-12 HYF Belgium with a similar idea](https://github.com/final-project-org/HELPY)
- [We can help / J'ai besoin d'aide – Belgian website to search for help by category, city, language](http://wecanhelp.be/en/ineedhelp)
- [REFUNITE – a humanitarian organization helping to find missing family members (access only for registered users)](https://m.refunite.org/landing/)
- [Doctor Any Time – a platform to find a doctor with good search and filtering tools](https://www.doctoranytime.be/)
- [Caritas International BE – a Belgian branch of international NGO](https://www.caritasinternational.be/en/)
- [KOLOGA – organization that helps refugees to settle in shared houses or flats in Brussels](http://www.kologa.org/en/)

#### Articles

- ["An app to find when and where to volunteer — A UX/UI design challenge" on MEDIUM](https://medium.com/@marinecampa/supporting-social-and-intellectual-wellness-with-volunteering-a-ux-ui-design-challenge-573cc2c35325)
- [How to help migrants in Belgium – list of organizations with contacts](https://www.cire.be/publication/comment-aider-les-migrants-en-belgique-voici-idees-concretes/)

## Authors

#### Project manager

- [Ekaterina](https://github.com/katsmamina)
- [Daniel (tech lead)](https://github.com/danielhalasz)

#### Wireframes/Design/UX

- [Katia (lead)](https://github.com/Dabrytskaya)
- [Francis](https://github.com/Osimef849)
- [Walter](https://github.com/WalterAlvar)

#### Frontend

- [Emely (lead)](https://github.com/emelysalmeron)
- [Daniel (Vue lead)](https://github.com/danielhalasz)

#### Backend

- [Daniel (lead)](https://github.com/danielhalasz)

#### Full stack (Backend/Frontend)

- [Tugba](https://github.com/yildiztugba)
- [Senait](https://github.com/Senait-coding)
- [Tatsiana](https://github.com/TatsianaRud)
- [Ekaterina](https://github.com/katsmamina)
- [Francis](https://github.com/Osimef849)
- [Michael](https://github.com/Mika215)
- [Deepa](https://github.com/deepa-thomas)
- [Walter](https://github.com/WalterAlvar)

#### Devops

- [Tugba](https://github.com/yildiztugba)
- [Daniel](https://github.com/danielhalasz)
- [Anthony Meirlaen](https://github.com/Toinne)

---

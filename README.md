# Services for newcomers

## BeHelp

Our final project app at HYF Belgium

The application connects international protection seekers with volunteers and organizations that can help them with adaptation and integration into society.

## Table of contents

- [Services for newcomers](#services-for-newcomers)
  - [BeHelp](#behelp)
  - [Table of contents](#table-of-contents)
  - [General info](#general-info)
  - [Design protoype](#design-protoype)
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

## Design protoype

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
BASE_URL=
```

## API routes

The backend server is using separate endpoints for registration, login, logout, authentication, user queries, email services and refresh/reset token management.

## Sample Vue code

The frontend is using Vue 3 single page components. Here is a look at the script tag for the header:

```js
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      hidden: true,
      locale: "ENG",
      activeToggle: false,
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
    logout() {
      const token = localStorage.getItem("token");
      const userId = this.user.userId;
       fetch(`${import.meta.env.VITE_API}/users/logout/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          console.log(res);
          localStorage.removeItem("token");
          this.$store.commit("loggedOut");
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
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

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/2686028?v=4">

- [Anthony](https://github.com/Toinne) // Coach

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/78535490?v=4">

- [Daniel](https://github.com/danielhalasz) // Manager, Frontend, Backend & DevOps

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/78304222?v=4">

- [Ekaterina](https://github.com/katsmamina) // Manager & Frontend

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/78135546?v=4">

- [Tugba](https://github.com/yildiztugba) // Backend & DevOps

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/66687378?v=4">

- [Emely](https://github.com/emelysalmeron) // Frontend & Research

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/77326649?v=4">

- [Senait](https://github.com/Senait-coding) // Frontend & Backend

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/78364046?v=4">

- [Deepa](https://github.com/deepa-thomas) // Frontend & Backend

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/78484923?v=4">

- [Tatsiana](https://github.com/TatsianaRud) // Frontend & Backend & Research

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/75224973?v=4">

- [Michael](https://github.com/Mika215) // Frontend & Backend

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/77118418?v=4">

- [Katia](https://github.com/Dabrytskaya) // Lead Design - UX/UI

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/77468682?v=4">

- [Francis](https://github.com/Osimef849) // UX/UI

<img style="border-radius: 50%; width: 100px; margin-left: 2rem" src="https://avatars.githubusercontent.com/u/78143706?v=4">

- [Walter](https://github.com/WalterAlvar) // UX/UI

---

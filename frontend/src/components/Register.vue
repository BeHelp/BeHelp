<script>
import languages from "../assets/jsondata/languages.json";
import cities from "../assets/jsondata/cities.json";
import skills from "../assets/jsondata/skills.json";
import genders from "../assets/jsondata/genders.json";

export default {
  data() {
    return {
      errors: [],
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      password: "",
      nationality: "",
      selected: "",
      picked: "",
      filterCities: "",
      filterLanguages: "",
      filterSkills: "",
      description: "",
      languageOptions: languages,
      cityOptions: cities,
      skillOptions: skills,
      genderOptions: genders,
      photoURL: "",
    };
  },

  methods: {
    async submit() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            firstName: this.firstname,
            lastName: this.lastname,
            gender: this.gender,
            nationality: this.nationality,
            userType: this.picked,
            location: this.filterCities.city,
            skills: this.filterSkills.name,
            languages: this.filterLanguages.name,
            description: this.description,
            photoURL: this.photoURL,
          }),
        });

        const body = await res.json();
        console.log(body.json);
        if (res.status === 400) {
          this.$notify({
            title: body.message,
            type: "error",
          });
          return;
        } else if (res.status === 201) {
          this.$notify({
            title: "You have successfully registered!",
            type: "success",
          });
        }
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    uploadImage(event) {
      const URL = "https://api.cloudinary.com/v1_1/behelp/image/upload";

      let data = new FormData();
      data.append("file", event.target.files[0]);
      data.append("upload_preset", "behelp_web");

      fetch(URL, {
        method: "POST",
        body: data,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data["secure_url"]);
          this.photoURL = data["secure_url"];
          return data["secure_url"];
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="container__signup">
      <div class="container__signup-img">
        <img src="../assets/signup-img.png" alt="signup" class="img" />
      </div>
      <div class="container__signup-content">
        <form class="register-form" id="register-form">
          <h2>REGISTRATION FORM</h2>
          <div class="container__first">
            <div class="left" v-if="!this.photoURL">
              <input
                type="file"
                accept="image/*"
                id="file-input"
                @change="uploadImage($event)"
                class="button-icon"
                required
              />
              <div class="left-icon"></div>
              <p>
                Upload your <br />
                profile picture
              </p>
            </div>
            <div v-if="this.photoURL" class="afterimage">
              <button v-on:click="this.photoURL = null">X</button>
              <img v-bind:src="this.photoURL" />
            </div>
            <div class="right">
              <div class="container__group">
                <input
                  type="text"
                  placeholder="First name*"
                  name="firstname"
                  v-model="firstname"
                  id="firstname"
                  required
                />
              </div>
              <div class="container__group">
                <input
                  type="text"
                  placeholder="Last name*"
                  name="lastname"
                  v-model="lastname"
                  id="lastname"
                  required
                />
              </div>

              <div class="container__city">
                <v-select
                  class="style-chooser"
                  v-model="filterCities"
                  :options="cityOptions"
                  :placeholder="'City'"
                  label="city"
                  required
                />
              </div>
            </div>
          </div>

          <div class="container__radio">
            <label for="usertype" class="radio-label">Status*</label>
            <div class="container__radio-item1">
              <input
                type="radio"
                v-model="picked"
                name="status"
                value="newcomer"
                id="newcomer"
                checked
              />
              <label for="newcomer">Newcomer</label>
              <span class="container__radio-check"></span>
            </div>

            <div class="container__radio-item1">
              <input
                type="radio"
                v-model="picked"
                name="status"
                value="volunteer"
                id="volunteer"
              />
              <label for="volunteer">Volunteer</label>
              <span class="container__radio-check"></span>
            </div>
          </div>

          <div class="container__group">
            <input
              type="email"
              placeholder="E-mail*"
              name="email"
              v-model="email"
              id="email"
              required
            />
          </div>
          <div class="container__group">
            <input
              type="password"
              placeholder="Password*"
              name="password"
              v-model="password"
              id="password"
              required
            />
          </div>

          <div class="container__group">
            <div class="container__select">
              <v-select
                class="style-chooser"
                v-model="gender"
                :options="genderOptions"
                :placeholder="'Gender*'"
                label="name"
                required
              />
            </div>
          </div>

          <div class="container__group">
            <input
              type="text"
              placeholder="Nationality"
              v-model="nationality"
              name="nationality"
              id="nationality"
              required
            />
          </div>

          <div class="container__group">
            <div class="container__select">
              <v-select
                class="style-chooser"
                multiple
                v-model="filterLanguages"
                :options="languageOptions"
                :placeholder="'Languages'"
                label="name"
                required
              />
            </div>
          </div>
          <div class="container__group">
            <div class="container__select">
              <v-select
                class="style-chooser"
                multiple
                v-model="filterSkills"
                :options="skillOptions"
                :placeholder="'Skills'"
                label="name"
              />
            </div>
          </div>

          <textarea
            class="container__description"
            placeholder="Description"
            v-model="description"
          ></textarea>

          <div class="container__submit">
            <button
              class="submit"
              name="submit"
              id="submit"
              type="submit"
              @click.stop.prevent="submit()"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_register.scss";
@import "../components/styles/layout/_dropdown.scss";
@import "vue-select/src/scss/vue-select.scss";
</style>

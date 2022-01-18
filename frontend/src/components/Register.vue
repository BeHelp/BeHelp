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
      filterCities: [],
      filterLanguages: [],
      filterSkills: [],
      description: "",
      languageOptions: languages,
      cityOptions: cities,
      skillOptions: skills,
      genderOptions: genders,
      photoURL: "",
      languageArray: [],
      skillsArray: [],
    };
  },

  methods: {
    async submit() {
      try {
        this.languageArray = this.filterLanguages.map((a) => a.name);
        this.skillsArray = this.filterSkills.map((a) => a.name);

        if (this.picked === "volunteer") {
          if (this.skillsArray.length === 0) {
            this.$notify({
              title: "skills are required",
              type: "error",
            });
          }
          return;
        }
        if (this.picked === "volunteer") {
          if (!this.description) {
            this.$notify({
              title: "Description should be at least 6 characters!",
              type: "error",
            });
          }
          return;
        }

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
            skills: this.skillsArray,
            languages: this.languageArray,
            description: this.description,
            photoURL: this.photoURL,
          }),
        });

        const body = await res.json();
        console.log(body);

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
          <h2>{{ $t("registrationform") }}</h2>
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
              <p>{{ $t("profilephoto") }}</p>
            </div>
            <div v-if="this.photoURL" class="afterimage">
              <button v-on:click="this.photoURL = null">X</button>
              <img v-bind:src="this.photoURL" />
            </div>
            <div class="right">
              <div class="container__group">
                <input
                  type="text"
                  :placeholder="$t('firstname_')"
                  name="firstname"
                  v-model="firstname"
                  id="firstname"
                  required
                />
              </div>
              <div class="container__group">
                <input
                  type="text"
                  :placeholder="$t('lastname_')"
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
                  :placeholder="$t('city_')"
                  label="city"
                  required
                />
              </div>
            </div>
          </div>

          <div class="container__radio">
            <label for="usertype" class="radio-label">{{
              $t("status_")
            }}</label>
            <div class="container__radio-item1">
              <input
                type="radio"
                v-model="picked"
                name="status"
                value="newcomer"
                id="newcomer"
                checked
              />
              <label for="newcomer">{{ $t("newcomer") }}</label>
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
              <label for="volunteer">{{ $t("volunteer") }}</label>
              <span class="container__radio-check"></span>
            </div>
          </div>

          <div class="container__group">
            <input
              type="email"
              :placeholder="$t('email_')"
              name="email"
              v-model="email"
              id="email"
              required
            />
          </div>
          <div class="container__group">
            <input
              type="password"
              :placeholder="$t('password_')"
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
                :placeholder="$t('gender_')"
                label="name"
                required
              />
            </div>
          </div>

          <div class="container__group">
            <input
              type="text"
              :placeholder="$t('nationality')"
              v-model="nationality"
              name="nationality"
              id="nationality"
            />
          </div>

          <div class="container__group">
            <div class="container__select">
              <v-select
                class="style-chooser"
                multiple
                v-model="filterLanguages"
                :options="languageOptions"
                :placeholder="$t('languages_')"
                label="name"
                required
              />
            </div>
          </div>
          <div class="container__group" v-if="this.picked === 'volunteer'">
            <div class="container__select">
              <v-select
                class="style-chooser"
                multiple
                v-model="filterSkills"
                :options="skillOptions"
                :placeholder="$t('skills_')"
                label="name"
              />
            </div>
          </div>

          <textarea
            v-if="this.picked === 'volunteer'"
            class="container__description"
            :placeholder="$t('description')"
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
              {{ $t("send") }}
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

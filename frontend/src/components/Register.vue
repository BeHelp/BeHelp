<script>
import languages from '../assets/jsondata/languages.json';
import cities from '../assets/jsondata/cities.json';
import skills from '../assets/jsondata/skills.json';

export default {
  data() {
    return {
      selected: '',
      languageOptions: languages,
      cityOptions: cities,
      skillOptions: skills,
    };
  },
  methods: {
    uploadImage(event) {
      const URL = 'https://api.cloudinary.com/v1_1/behelp/image/upload';

      let data = new FormData();
      data.append('file', event.target.files[0]);
      data.append('upload_preset', 'behelp_web');

      fetch(URL, {
        method: 'POST',
        body: data,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data['secure_url']);
          return data['secure_url'];
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
        <form method="POST" class="register-form" id="register-form">
          <h2>REGISTRATION FORM</h2>

          <div class="container__first">
            <div class="left">
              <input
                type="file"
                accept="image/*"
                id="file-input"
                @change="uploadImage($event)"
                class="button-icon"
              />
              <div class="left-icon"></div>
              <p>
                Upload your <br />
                profile picture
              </p>
            </div>
            <div class="right">
              <div class="container__group">
                <input
                  type="text"
                  placeholder="First name*"
                  name="firstname"
                  id="firstname"
                  required
                />
              </div>
              <div class="container__group">
                <input
                  type="text"
                  placeholder="Last name*"
                  name="lastname"
                  id="lastname"
                  required
                />
              </div>

              <div class="container__city">
                <v-select
                  class="style-chooser"
                  multiple
                  v-model="filterCities"
                  :options="cityOptions"
                  :placeholder="'City'"
                  label="city"
                />
              </div>
            </div>
          </div>

          <div class="container__radio">
            <label for="usertype" class="radio-label">Status*</label>
            <div class="container__radio-item1">
              <input type="radio" name="status" id="newcomer" checked />
              <label for="newcomer">Newcomer</label>
              <span class="container__radio-check"></span>
            </div>

            <div class="container__radio-item1">
              <input type="radio" name="status" id="volunteer" />
              <label for="volunteer">Volunteer</label>
              <span class="container__radio-check"></span>
            </div>
          </div>

          <div class="container__group">
            <input
              type="email"
              placeholder="E-mail*"
              name="email"
              id="email"
              required
            />
          </div>
          <div class="container__group">
            <input
              type="password"
              placeholder="Password*"
              name="password"
              id="password"
              required
            />
          </div>

          <div class="container__group">
            <div class="container__select">
              <select name="Gender" id="gender" required>
                <option value="Gender" disabled selected>Gender*</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span class="container__select-icon"
                ><i class="zmdi zmdi-chevron-down"></i
              ></span>
            </div>
          </div>

          <div class="container__group">
            <input
              type="text"
              placeholder="Nationality"
              name="nationality"
              id="nationality"
            />
          </div>

          <div class="container__group">
            <div class="container__select">
              <label for="languages">Languages</label>
              <select name="languages" id="languages" multiple>
                <option value="English">English</option>
                <option value="Dutch">Dutch</option>
                <option value="French">French</option>
                <option value="Russian">Russian</option>
                <option value="Spanish">Spanish</option>
                <option value="Arabic">Arabic</option>
                <option value="Hindu">Hindu</option>
                <option value="Chinese">Chinese</option>
                <option value="Italian">Italian</option>
              </select>
              <span class="container__select-icon"
                ><i class="zmdi zmdi-chevron-down"></i
              ></span>
            </div>
          </div>
          <div class="container__group">
            <div class="container__select">
              <select name="skills" id="skills">
                <option value="Skills" disabled selected>Skills</option>
                <option value="Translator">Legal assistance</option>
                <option value="Translator">Translations</option>
                <option value="Host">Mental health</option>
                <option value="assistant">Host family</option>
                <option value="assistant">Education services</option>
                <option value="assistant">Language classes</option>
                <option value="assistant">Social assistance</option>
              </select>
              <span class="container__select-icon"
                ><i class="zmdi zmdi-chevron-down"></i
              ></span>
            </div>
          </div>

          <textarea
            class="container__description"
            placeholder="Description"
          ></textarea>

          <div class="container__submit">
            <input
              type="submit"
              value="SEND"
              class="submit"
              name="submit"
              id="submit"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_register.scss';
@import '../components/styles/layout/_dropdown.scss';
@import 'vue-select/src/scss/vue-select.scss';
</style>

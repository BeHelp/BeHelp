<script>
import languages from "../assets/jsondata/languages.json";
import cities from "../assets/jsondata/cities.json";
import skills from "../assets/jsondata/skills.json";
import genders from "../assets/jsondata/genders.json";
import { mapState } from "vuex";

export default {
  data: function () {
    return {
      result: "",
      selected: "",
      languageOptions: languages,
      cityOptions: cities,
      skillOptions: skills,
      genderOptions: genders,
      isDisabled: true,
      isHidden: true,
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  methods: {
    async deleteProfile() {
      try {
        if (confirm("Are you sure you want to delete your profile?")) {
          if (confirm("Please confirm to delete your profile.")) {
            const userId = this.user.userId;
            const res = await fetch(`http://localhost:5000/users/${userId}`, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            });
            alert("Profile deleted");
            localStorage.removeItem("token");
            this.$store.commit("loggedOut");
            this.$router.push("/");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getUser() {
      try {
        const token = localStorage.getItem("token");
        const userId = this.user.userId;
        this.email = this.user.email;
        const res = await fetch(`http://localhost:5000/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.result = await res.json();
        this.result.location = this.result.location[1];
        this.result.languages = this.result.languages;
        this.result.skills = this.result.skills;
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
          return data["secure_url"];
        });
    },
  },
  beforeMount() {
    this.getUser();
  },
};
</script>

<template>
  <div class="container">
    <div class="container__profile">
      <form method="POST" class="register-form" id="register-form">
        <h2>MY PROFILE</h2>
        <div class="container__firstset">
          <div class="leftside">
            <img :src="user.photoURL" />
            <div class="left-icon" v-if="!isHidden">
              <input
                type="file"
                accept="image/*"
                id="file-input"
                @change="uploadImage($event)"
                class="button-icon"
              />
            </div>
          </div>
          <div class="right">
            <div class="container__group">
              <input
                v-bind:value="result.firstName"
                type="text"
                placeholder="First name*"
                name="firstname"
                id="firstname"
                required
                :disabled="isDisabled"
              />
            </div>
            <div class="container__group">
              <input
                v-bind:value="result.lastName"
                type="text"
                placeholder="Last name*"
                name="lastname"
                id="lastname"
                required
                :disabled="isDisabled"
              />
            </div>

            <div class="container__city">
              <v-select
                class="style-chooser"
                v-model="result.location"
                :options="cityOptions"
                :placeholder="'City'"
                label="city"
                :disabled="isDisabled"
              />
            </div>
          </div>
        </div>

        <div class="container__group">
          <div class="container__select">
            <select
              name="Status"
              id="status"
              placeholder="Status*"
              required
              :disabled="isDisabled"
            >
              <option value="Status" selected>
                {{ result.userType }}
              </option>
              <option value="Newcomer">Newcomer</option>
              <option value="Volunteer">Volunteer</option>
            </select>
            <span class="container__select-icon"
              ><i class="zmdi zmdi-chevron-down"></i
            ></span>
          </div>
        </div>

        <div class="container__group">
          <input
            v-bind:value="this.email"
            type="email"
            placeholder="E-mail*"
            name="email"
            id="email"
            required
            :disabled="isDisabled"
          />
        </div>

        <div class="container__password">
          <div class="container__password-text">
            <input
              type="password"
              placeholder="***********"
              name="password"
              id="password"
              required
              disabled
            />
          </div>
          <div class="container__password-button">
            <button
              class="changepassword-button"
              v-if="!isHidden"
              name="changepassword"
            >
              Change Password
            </button>
          </div>
        </div>

        <div class="container__group">
          <div class="container__select">
            <select name="Gender" id="gender" required :disabled="isDisabled">
              <option value="Gender" selected>
                {{ result.gender }}
              </option>
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
            v-bind:value="result.nationality"
            type="text"
            placeholder="Nationality"
            name="nationality"
            id="nationality"
            :disabled="isDisabled"
          />
        </div>

        <div class="container__group">
          <div class="container__select">
            <v-select
              class="style-chooser"
              multiple
              v-model="result.languages"
              :options="languageOptions"
              :placeholder="'Languages'"
              label="name"
              :disabled="isDisabled"
            />
            <span class="container__select-icon"
              ><i class="zmdi zmdi-chevron-down"></i
            ></span>
          </div>
        </div>
        <div class="container__group">
          <div class="container__select">
            <v-select
              class="style-chooser"
              multiple
              v-model="result.skills"
              :options="skillOptions"
              :placeholder="'Skills'"
              label="name"
              :disabled="isDisabled"
            />
            <span class="container__select-icon"
              ><i class="zmdi zmdi-chevron-down"></i
            ></span>
          </div>
        </div>
        <textarea
          v-bind:value="result.description"
          class="container__description"
          placeholder="Description"
          :disabled="isDisabled"
        ></textarea>

        <div class="container__modify">
          <div class="container__modify-delete">
            <button
              @click="deleteProfile"
              class="container__modify-delete-button"
            >
              Delete My Profile
            </button>
          </div>
          <div class="container__modify-edit">
            <button
              @click="
                isDisabled = false;
                isHidden = false;
              "
              class="edit-button"
              name="edit"
            >
              EDIT
            </button>
          </div>
          <div class="container__modify-save">
            <button class="save-button" name="save">SAVE</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_profile.scss";
@import "../components/styles/layout/_dropdown.scss";
@import "vue-select/src/scss/vue-select.scss";
</style>

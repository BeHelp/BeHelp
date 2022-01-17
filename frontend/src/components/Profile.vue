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
      firstName: "",
      lastName: "",
      filterCities: [],
      userType: "",
      email: "",
      password: "",
      gender: "",
      nationality: "",
      filterLanguages: [],
      filterSkills: [],
      description: "",
      photoURL: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async updateProfile() {
      try {
        const userId = this.user.userId;
        const languageArray = this.filterLanguages.map((a) => {
          if (!a.name) {
            return a;
          } else {
            return a.name;
          }
        });
        const skillsArray = this.filterSkills.map((a) => {
          if (!a.name) {
            return a;
          } else {
            return a.name;
          }
        });
        const res = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            oldEmail: this.user.email,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            nationality: this.nationality,
            userType: this.userType,
            location: this.filterCities.city,
            skills: skillsArray,
            languages: languageArray,
            description: this.description,
            photoURL: this.photoURL,
          }),
        });
        const body = await res.json();
        if (res.status === 400) {
          this.$notify({
            title: body.message,
            type: "error",
          });
        } else if (res.status === 201) {
          this.$notify({
              title: "Profile is updated successfully",
              type: "success",
            });
          localStorage.removeItem("token");
          this.$store.commit("loggedOut");
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteProfile() {
      try {
        if (confirm("Are you sure you want to delete your profile?")) {
          if (confirm("Please confirm to delete your profile.")) {
            const userId = this.user.userId;
            const res = await fetch(
              `${import.meta.env.VITE_API}/users/${userId}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            alert("Profile deleted");
            localStorage.removeItem("token");
            this.$store.commit("loggedOut");
            this.$router.push("/");
          }
        } else {
          return;
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
        const res = await fetch(`${import.meta.env.VITE_API}/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.result = await res.json();
        this.firstName = this.result.firstName;
        this.lastName = this.result.lastName;
        this.userType = this.result.userType;
        this.filterCities = this.result.location;
        this.gender = this.result.gender;
        this.nationality = this.result.nationality;
        this.filterLanguages = this.result.languages;
        this.filterSkills = this.result.skills;
        this.description = this.result.description;
        this.photoURL = this.result.photoURL;
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
            <button v-on:click="this.photoURL = null" v-if="!isHidden">
              X
            </button>
            <img v-bind:src="this.photoURL" />
          </div>
          <div class="right">
            <div class="container__group">
              <input
                v-model="this.firstName"
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
                v-model="this.lastName"
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
                v-model="this.filterCities"
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
            <v-select
              class="style-chooser"
              v-model="this.userType"
              :options="['newcomer', 'volunteer']"
              :placeholder="'Status*'"
              label="status"
              :disabled="isDisabled"
            />
            <span class="container__select-icon"
              ><i class="zmdi zmdi-chevron-down"></i
            ></span>
          </div>
        </div>
        <div class="container__group">
          <input
            v-model="this.email"
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
              v-model="this.password"
              type="password"
              placeholder="***********"
              name="password"
              id="password"
              :disabled="isDisabled"
            />
          </div>
        </div>
        <div class="container__group">
          <div class="container__select">
            <v-select
              class="style-chooser"
              v-model="this.gender"
              :options="genderOptions"
              :placeholder="'Gender*'"
              label="name"
              :disabled="isDisabled"
            />
          </div>
        </div>
        <div class="container__group">
          <input
            v-model="this.nationality"
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
              v-model="this.filterLanguages"
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
              v-model="this.filterSkills"
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
          v-model="this.description"
          class="container__description"
          placeholder="Description"
          :disabled="isDisabled"
        ></textarea>
        <div class="container__modify">
          <div class="container__modify-delete">
            <button
              @click.prevent="deleteProfile"
              class="container__modify-delete-button"
            >
              Delete My Profile
            </button>
          </div>
          <div class="container__modify-edit">
            <button
              @click.prevent="
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
            <button
              @click.prevent="updateProfile"
              class="save-button"
              name="save"
              :disabled="isDisabled"
            >
              SAVE
            </button>
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
.left {
  background-color: chartreuse;
}
</style>

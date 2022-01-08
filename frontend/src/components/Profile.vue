<script>
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      result: "",
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  methods: {
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
        this.result.location = this.result.location.join(", ");
        this.result.languages = this.result.languages.join(", ");
        this.result.skills = this.result.skills.join(", ");
      } catch (error) {
        console.log(error);
      }
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
                v-bind:value="result.firstName"
                type="text"
                placeholder="First name*"
                name="firstname"
                id="firstname"
                required
                disabled
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
                disabled
              />
            </div>

            <div class="container__city">
              <select name="City" id="city" disabled required>
                <option
                  value="City"
                  v-bind:value="result.location"
                  selected
                >
                  {{ result.location }}
                </option>
                <option value="Brussels">Brussels</option>
                <option value="Leuven">Leuven</option>
                <option value="Namur">Namur</option>
                <option value="Antwerp">Antwerp</option>
                <option value="Liège">Liège</option>
                <option value="Ghent">Ghent</option>
                <option value="Brugge">Brugge</option>
                <option value="Eupen">Eupen</option>
                <option value="Arlon">Arlon</option>
              </select>
              <span class="container__select-icon"
                ><i class="zmdi zmdi-chevron-down"></i
              ></span>
            </div>
          </div>
        </div>

        <div class="container__group">
          <div class="container__select">
            <select name="Status" id="status" required disabled>
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
            disabled
          />
        </div>

        <div class="container__password">
          <div class="container__password-text">
            <input
              type="password"
              placeholder="password123"
              name="password"
              id="password"
              required
            />
          </div>
          <div class="container__password-button">
            <button class="changepassword-button none" name="changepassword">
              Change Password
            </button>
          </div>
        </div>

        <div class="container__group">
          <div class="container__select">
            <select name="Gender" id="gender" required disabled>
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
            v-bind:value="this.result.nationality"
            type="text"
            placeholder="Nationality"
            name="nationality"
            id="nationality"
            disabled
          />
        </div>

        <div class="container__group">
          <div class="container__select">
            <select name="languages" id="languages" disabled>
              <option value="Language" selected>
                {{ result.languages }}
              </option>
              <option value="French">English</option>
              <option value="Dutch">Dutch</option>
              <option value="English">French</option>
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
            <select name="skills" id="skills" disabled>
              <option value="Skills" selected>
                {{ result.skills }}
              </option>
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
          v-bind:value="result.description"
          class="container__description"
          placeholder="Description"
          disabled
        ></textarea>

        <div class="container__modify">
          <div class="container__modify-delete">
            <button class="container__modify-delete-button">
              Delete My Profile
            </button>
          </div>
          <div class="container__modify-edit">
            <button class="edit-button" name="edit">EDIT</button>
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
</style>

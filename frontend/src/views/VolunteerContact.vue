<script>
import emailjs from "@emailjs/browser";
import { mapState } from "vuex";
export default {
  data() {
    return {
      result: undefined,
      message: "",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API}/users/${this.$route.params._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        this.result = await res.json();
        console.log(this.result.firstName);
      } catch (error) {
        console.log(error);
      }
    },
    async getVolunteerEmail() { 
          const result = await fetch(
            `${import.meta.env.VITE_API}/users/contactinfo/${this.$route.params._id}`,
          {
              method: "GET",
              headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const jsonResult = await result.json();
          return jsonResult;
    },
    async sendEmail() {
      const emailParams = {
        volunteer: this.result.firstName,
        volunteer_email: await this.getVolunteerEmail(this.result),
        user: this.user.firstName,
        user_email: this.user.email,
        message: this.message,
      };
      try {
        const emailResult = await emailjs.
        send(
          "service_0xqmyuc", 
          "template_lgf3xs6", 
          emailParams,
          "user_bqOiafJ3RyGJLlBUxuy6A");
        console.log(emailResult);
        this.$router.push("/thankyou");
      } catch(err){
        console.log(err);
      }
    }
  }
}
</script>

<template>
<div v-if="result" class="container">
    <div class="container__volunteer">
    <h2 class="container__volunteer-h2">{{ result.firstName }}</h2>
      <div class="container__volunteer-top">
        <img v-bind:src="result.photoURL" class="container__volunteer-photo" />
        <div class="container__volunteer-profile">
          <p><b>Nationality: </b>{{ result.nationality }}</p>
          <p><b>City:</b> {{ result.city}}</p>
          <p><b>Languages: </b>
          <ul>
          <li v-for="lang in result.languages"> {{ lang }} </li>
          </ul></p>
        </div>
      </div>
      <div class="container__volunteer-text">
        <p><b>Skills: </b>
        <ul>
        <li v-for="skill in result.skills"> {{ skill }} </li>
        </ul></p>
        <p><b>Description: </b>{{ result.description }}</p>
      </div>
    </div>

    <div class="container__contact">
      <div class="container__contact-messagebox">
        <form class="container__contact-form" @submit.prevent="sendEmail">
          <h2 class="container__contact-h2">CONTACT THIS VOLUNTEER</h2>
          <div class="container__contact-logo">
            <img src="../assets/logos/Logo_small_blue.svg" alt="logo" />
          </div>

          <textarea
            class="container__contact-message"
            name="message"
            cols="30"
            rows="8"
            v-model="message"
            placeholder="Message"
          >
          </textarea>
          <div class = container__contact-button>
          <button class="container__contact-btn">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </template>

<style scoped lang="scss">
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_volunteerContact.scss";
</style>

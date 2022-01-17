<script>
import emailjs from "@emailjs/browser";
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async sendEmail() {
      const emailParams = {
        name: this.name,
        email: this.email,
        message: this.message,
      };
      console.log(emailParams);
      await emailjs
        .send(
          "service_0xqmyuc",
          "template_zxk95fi",
          emailParams,
          "user_bqOiafJ3RyGJLlBUxuy6A"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        )
        .then(() => {
          this.$notify({
            title: "Message sent successfully!",
            type: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          this.$notify({
            title: "There was an error sending the message!",
            type: "error",
          });
        });
    },
  },
};
</script>

<template>
  <div class="contactUs">
    <div class="contactUs__content">
      <div class="contactUs__content-leftcontainer">
        <h1>
          Do you have questions?<br />
          Contact Us:
        </h1>
        <div class="contactUs__content-image">
          <img
            src="../assets/img/5d8d941e933874bb0b403ffc5ac47e08.jpeg"
            alt="img"
          />
        </div>
      </div>

      <div class="contactUs__content-rightcontainer">
        <form
          class="contactUs__content-rightcontainer-form"
          @submit.prevent="sendEmail"
        >
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
          >
          </textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/abstract/_base.scss";
@import "../components/styles/layout/_contact.scss";
</style>

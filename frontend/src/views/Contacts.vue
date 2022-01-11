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
        <p>
          We want to hear from you!
          <br />
          <br />

          Kindly reach out to us via our CONTACT FORM or any of our media
          channels below
        </p>

        <form
          class="contactUs__content-rightcontainer-form"
          @submit="sendEmail"
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
            placeholder="Message"
          >
          </textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

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
    sendEmail() {
      try {
        const emailParams = {
          name: this.name,
          email: this.email,
          message: this.message,
        };

        emailjs.send(
          "service_0xqmyuc",
          "template_zxk95fi",
          emailParams,
          "user_bqOiafJ3RyGJLlBUxuy6A"
        );
        alert("Message sent successfully!");
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_contact.scss";
</style>

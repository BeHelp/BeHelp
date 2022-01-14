<script>
export default {
  data() {
    return {
      result: undefined,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/users/${this.$route.params._id}`,
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
  },
};
</script>

<template>
  <div v-if="result" class="container__volunteer-contact">
    <div class="volunteer__box">
    
      <img v-bind:src="result.photoURL" class="volunteer__img" />
      <div class="profile__detail-text">
      
        <h2 class="volunteer__name">{{ result.firstName }}</h2>
        <p><b>Nationality: </b>{{ result.nationality }}</p>
        <p><b>City:</b> {{ result.location[1]}}</p>
        <p><b>Languages: </b>
        
         <ul class="lang__list">
         <li v-for="lang in result.languages"> {{ lang }} </li>
         </ul>>
        </P>
      </div>
      <div class="profile__text">
        <p><b>Skills: </b>
        
          <ul>
          <li v-for="skill in result.skills"> {{ skill }} </li>
          </ul>
        </p>

        <p><b>Description:</b>{{ result.description }}</p>
      </div>
    </div>
  
    <div class="volunteer__box">
    
      <p class="contact__text">CONTACT THIS VOLUNTEER</p>

      <img class="logo__img" src="../assets/logos/Logo_small_blue.svg" alt="profile logo" />
        <form @submit.prevent="sendEmail">
          <input
            class="subject__box"
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
          />

          <textarea
            class="message__box"
            name="message"
            v-model="message"
            placeholder="Message"
          >
          </textarea>
          <input
            class="user__email-box"
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
          />
          <input class="message__button" type="submit" value="Send" />
        </form>
        
      </div>
    </div>

</template>

<style  lang="scss" scoped>
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_volunteerContact.scss";
</style>

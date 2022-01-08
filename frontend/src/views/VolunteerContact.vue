<script>
</script>
<template>
    <div class="container__volunteer-contact">
    <div class="volunteer__box">
    <div class="volunteer__profile-box">
      <div class="profile__img">
        <img src="../assets/img.png" alt="profile" class="img" />
     </div>     
    </div>
    </div>
     <div class="volunteer__box">
     <div class="volunteer__message-box">
        <form  @submit.prevent="sendEmail">
       
        <p class="contact__text">HERE YOU CAN CONTACT WITH YOUR VOLUNTEER</p>
         <div class="behelp__logo">
        <img src="../assets/logos/Logo_small_blue.svg" alt="logo" />
      </div>
          <input class="subject__box"
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          
          <textarea class= "message__box"
            name="message"
            v-model="message"
            
            placeholder="Message">
          </textarea>
          <input class="user__email-box"
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <input class="message__button" type="submit" value="Send">
        </form>
     </div>
     </div> 
     </div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_volunteerContact.scss';
@import 'vue-select/src/scss/vue-select.scss';
</style>

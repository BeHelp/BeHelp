<template>
  
    <div class="contactUs">
      <div class="contact__content">
         <div class="contactUs__text"><h1>Do you have questions?<br> Contact Us:</h1></div>
    <div class="contactUs__img"><img src="../assets/img/5d8d941e933874bb0b403ffc5ac47e08.jpeg" alt="img"></div>
      </div>
     
    
     <div class="contactUs__page">
       <p class="contact__text">We want to hear you! 
         <br>
         <br>

         Kindly reach out to us via our CONTACT FORM or any of our media channels below
</p>

        <form class="form" @submit.prevent="sendEmail">
         
         
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
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
     </div>
    </div>
  
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_lzyi0s6', 'template_y7zrvwv', e.target, 'user_6RSzucdIUsj0oQzdwj3VZ', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        alert("Message sended")
      } catch (error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>


<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_contact.scss';
</style>

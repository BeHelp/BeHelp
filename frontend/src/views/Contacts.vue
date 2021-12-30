
<template>
 
    <div class="container">
     
        <form @submit.prevent="sendEmail">
          <h1>CONTACT US</h1>
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
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
<script>
import axios from 'axios';
export default {
    name: "Forgot",
    data: function () {
        return {
            email: '',
            }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('forgot', {
                email: this.email
            });
        console.log(response);
        }
    }
}
</script>

<template>
<div class="forgot">
<div class = "forgot__page">
    <h2 class="forgot__page-text">Reset Password</h2>
    <p> Enter your email to reset password </p>
    <form @submit.prevent="handleSubmit" class="forgot__page-form">
            <input 
                v-model="this.email" 
                type="email" 
                class="forgot__page-emailbox" 
                placeholder="E-mail"
                required
            />
            <button class="forgot__page-btn" type="submit">RESET</button>
        </form>
</div>
</div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/layout/_forgot.scss';
</style>

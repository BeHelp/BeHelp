<script>
import axios from 'axios'

export default {
    name: 'Forgot',
    data() {
        return {
            email: ''
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
    <form @submit.prevent="handleSubmit" class="forgot__form">
        <h3 class="forgot__text">Reset password</h3>
            <label>Email</label>
            <input v-model="email" type="email" class="email__box" placeholder="E-mail"/>
            <button class="forgot__btn" type="submit">RESET</button>
        </form>
</div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/layout/_forgot.scss';
</style>

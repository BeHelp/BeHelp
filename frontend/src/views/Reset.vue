<script>
import axios from 'axios'

export default {
    name: 'Reset',
    data() {
        return {
            password: '',
            password_confirm: ''
            }
    },
    methods: {
        async handleSubmit() {
            const response = await axios.post('reset', {
                password: this.password,
                password_confirm: this.password_confirm,
            });
            console.log(response);
        }
    }
}
</script>

<template>
<div class="reset">
    <form @submit.prevent="handleSubmit" class="reset__form">
        <h3 class="reset__h3">Reset password</h3>
            <div class = reset__form-part>
                <label>New Password</label>
                <input type="password" class="reset__password-box" v-model="password" placeholder="New password"/>
            </div>
            <div class = reset__form-part>
                <label>Confirm Password</label>
                <input type="password" class="reset__password-box" v-model="password_confirm" placeholder="Confirm password"/>
            </div>
            <button class="forgot__btn" type="submit">Submit</button>
        </form>
</div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_reset.scss';
</style>
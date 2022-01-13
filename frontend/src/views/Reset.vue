<script>
export default {
    name: "Reset",
    data() {
        return {
            password: '',
            password_confirm: ''
            }
    },
    methods: {
        async reset() {
            const res = fetch(`${import.meta.env.VITE_API}/passwordReset?token=${}&id={}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    password: this.password,
                    password_confirm: this.password_confirm,
                    })
                })
                    .then(() => {
                        this.$notify({
                        title: "Password is updated!",
                        type: "success",
                    })
                })
                    .catch((err) => {
                        this.$notify({
                        title: "Error requesting password reset",
                        type: "error",
                    })
                })
        }
    }
}
</script>

<template>
<div class="reset">
    <form @submit.prevent="reset" class="reset__form">
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
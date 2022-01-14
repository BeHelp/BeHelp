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
            const res = fetch(`${import.meta.env.VITE_API}/${this.$route.token}`, {
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
<div class = "reset__page">
<h2 class="reset__page-h3">Reset password</h2>
    <form @submit.prevent="reset" class="reset__page-form">
            <div class = reset__form-part>
            <label>New password</label>
                <input  
                    v-model="password"
                    type="password"
                    class="reset__page-pass"
                    required 
                />
            </div>
            <div class = reset__form-part>
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    class="reset__page-pass" 
                    v-model="password_confirm"
                    required
                />
            </div>
            <button class="forgot__btn" type="submit">Submit</button>
        </form>
    </div>
</div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_reset.scss';
</style>
<script>

export default {
    name: "Forgot",
    data() {
        return {
            email: '',
            }
        },
    methods: {
    async forgot() {
        const res = await fetch(`${import.meta.env.VITE_API}/forgot-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
        body: JSON.stringify({
            recipient: this.email,
            })
        })
            .then(() => {
                this.$notify({
                    title: "Reset password link is sent!",
                    type: "success",
                })
            })
            .catch((err) => {
                this.$notify({
                    title: "Error requesting password reset",
                    type: "error",
                })
            });
        }
    }
}
</script>

<template>
<div class="forgot">
<div class = "forgot__page">
    <h2 class="forgot__page-h2">Reset Password</h2>
    <p> Enter your email to reset password </p>
    <form @submit.prevent="forgot" class="forgot__page-form">
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

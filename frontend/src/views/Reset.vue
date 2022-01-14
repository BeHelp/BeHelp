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
            const res = await fetch(`${import.meta.env.VITE_API}/forgot-password/reset/${this.$route.params.token}/${this.$route.params.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "id": this.id,
                    "token": this.token,
                    },
                body: JSON.stringify({
                    newPassword: this.password,
                    confirmPassword: this.passconfirm,
                    })
                })
                    .then(() => {
                        this.$notify({
                        title: "Password is updated!",
                        type: "success",
                    })
                })
                .then(() => {
                    this.$router.push("/");
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
<h2 class="reset__page-h2">Reset password</h2>
    <form @submit.prevent="reset" class="reset__page-form">
            <div class = reset__page-part>
            <label>New password</label>
            <br>
                <input  
                    v-model="password"
                    type="password"
                    class="reset__page-pass"
                    required 
                />
            </div>
            <div class = reset__page-part>
                <label>Confirm Password</label>
                <br>
                <input 
                    type="password" 
                    class="reset__page-pass" 
                    v-model="passconfirm"
                    required
                />
            </div>
            <button class="reset__page-btn" type="submit">Submit</button>
        </form>
    </div>
</div>
</template>

<style lang="scss">
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_reset.scss';
</style>
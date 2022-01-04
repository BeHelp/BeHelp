<template>
<div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
        <div class="card mb-3 card h-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/img/volunteer-1.svg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Jasmin</h5>
                        <p class="card-text">
                            I am an enthusiastic volunteer willing to help you with translate document from arabic
                            to dutch and french.
                        </p>
                        <p class="card-text">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col">
        <div class="card mb-3 card h-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="../assets/img/volunteer-2.svg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">William</h5>
                        <p class="card-text">
                            I can help you with interpretation or any translation from portuguese to french.
                        </p>
                         <div class="card-text">
                  <div class="geo-card d-grid gap-2 col-8 mx-auto">
                    <img
                      class="geo__logo"
                      src="../assets/logos/geo-alt-fill.svg"
                      alt="geo logo"
                    />
                    <small class="text-muted">Location</small>
                  </div>
                </div>
                <button type="button" class="btn btn-outline-warning btn-light">
                  CONTACT ME
                </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Button from "./Button.vue";

export default {
    name: "Card",
    components: {
        Button,
    },
};
</script>

<style lang="scss">
@import "../components/styles/abstract/_variables.scss";
@import "../components/styles/layout/_card.scss";
</style>

<template>
  <div class="row">
    <div class="col-xl-6">Jasmin</div>
    <div class="volunteer__pic">
      <img
        alt="volunteer-1"
        src="../assets/img/volunteer-1.svg"
        id="volunteer-card"
      />
      <p>
        I can help with french language for person who speaks arabic language
      </p>
      <div>
      <button>CONTACT ME</button>
      </div>
    </div>

    <div class="col-xl-6">Will</div>
  </div>
</template>

<script>
import Button from './Button.vue';
export default {
  components: { Button },};
</script>

<style scoped>
.img{
  width: 130px;
  height: 350px;
}
</style>



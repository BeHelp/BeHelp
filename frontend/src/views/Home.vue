<script>
import Search from "../components/Search.vue";
import Whoarewe from "../components/Whoarewe.vue";
import Services from "../components/Services.vue";
import Testimony from "../components/Testimony.vue";

export default {
  name: "Home",
  components: {
    Search,
    // Whoarewe,
    // Services,
    // Testimony,
  },
};
</script>

<template>
  <div>
    <Search />
    <Whoarewe />
    <Services />
    <Testimony />
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";

export default {
  components: { Profile },

  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "../src/assets/js/cloudinary.js");
    plugin.async = true;
    document.head.appendChild(plugin);
  },
};
</script>

<template>
  <div><Profile /></div>
</template>

<script>
import Search from '../components/Search.vue';
import Whoarewe from '../components/Whoarewe.vue';
import Services from '../components/Services.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Whoarewe,
    Services,
  },
};
</script>

<template>
  <div>
    <Search />
    <whoarewe />
    <Services />
  </div>
</template>

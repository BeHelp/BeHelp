<script>
import Search from '../components/Search.vue';
import Whoarewe from '../components/Whoarewe.vue';
import ServicesScreen from '../components/ServicesScreen.vue'; //!this also should renamed back

export default {
  name: 'Home',
  components: {
    Search,
    Whoarewe,
    ServicesScreen,//!this should be renamed as Services only
  },
};
</script>

<template>
  <div>
    <Search />
    <whoarewe />
    <ServicesScreen />
  </div>
</template>

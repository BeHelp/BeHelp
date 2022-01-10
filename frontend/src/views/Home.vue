<script>
import Search from '../components/Search.vue';
import Whoarewe from '../components/Whoarewe.vue';
<<<<<<< HEAD
import ServicesScreen from '../components/ServicesScreen.vue'; //!this also should renamed back
=======
import Services from '../components/Services.vue';
import Testimony from '../components/Testimony.vue';
>>>>>>> 34c7514a27e3f1092499ae68d9c7cd1125034b6c

export default {
  name: 'Home',
  components: {
    Search,
    Whoarewe,
<<<<<<< HEAD
    ServicesScreen,//!this should be renamed as Services only
=======
    Services,
    Testimony,
>>>>>>> 34c7514a27e3f1092499ae68d9c7cd1125034b6c
  },
};
</script>

<template>
  <div>
    <Search />
<<<<<<< HEAD
    <whoarewe />
    <ServicesScreen />
=======
    <Whoarewe />
    <Services />
    <Testimony />
>>>>>>> 34c7514a27e3f1092499ae68d9c7cd1125034b6c
  </div>
</template>

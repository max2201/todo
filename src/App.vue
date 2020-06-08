<template>
  <v-app >
    <Navbar ></Navbar>
    <v-container>
      <router-view/>
    </v-container>
  </v-app>
</template>

<style>
</style>
<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar },
};
</script>

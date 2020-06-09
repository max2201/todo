<template>
  <div>
    <v-app-bar
      color="blue darken-3"
      dense
      class="px-2"
      dark
    >
        <router-link to="/">
           <v-img src="@/assets/vuetify.svg" height="3rem" width="3rem"></v-img>
        </router-link>

      <v-spacer></v-spacer>

      <v-btn
        to="/"
        tag="li"
        exact
        active-class="active"
      >
        Create
      </v-btn>

      <v-btn
        to="/list"
        tag="li"
        active-class="active"
      >
        List
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>

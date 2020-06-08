<template>
  <div>
    <v-app-bar
      color="blue darken-3"
      dense
      class="px-2"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>

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

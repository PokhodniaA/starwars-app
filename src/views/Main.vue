<template>
  <div class="main">
    <Navbar />

    <v-main v-if="padawans.length">
      <Cards :padawans="padawans" />
    </v-main>
    <v-skeleton-loader v-else type="image"></v-skeleton-loader>

    <Footer class="mt-footer" :class="sm" />

    <v-snackbar v-model="snackbar.show" :timeout="2000">{{
      snackbar.text
    }}</v-snackbar>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cards from "../components/Cards.vue";
import Footer from "../components/Footer.vue";

import snackbar from "../mixins/snackbar.js";
import stylesGetters from "../mixins/stylesGetters";

export default {
  data: () => ({
    padawans: [],
  }),

  components: {
    Navbar,
    Footer,
    Cards,
  },
  mixins: [snackbar, stylesGetters],
  // get array of padawans
  async mounted() {
    try {
      const padawans = await (
        await fetch("https://swapi.dev/api/people/")
      ).json();

      this.padawans = padawans.results;
    } catch (error) {
      this.showSnackbar("Sorry, server don't work =(");
    }
  },
};
</script>

<style lang="scss" scoped>
.mt-footer {
  margin-top: 80px;

  &.sm {
    margin-top: 112px;
  }
}
</style>

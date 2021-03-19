<template>
  <div class="main">
    <Navbar />

    <v-main v-if="padawans.length">
      <Cards :padawans="padawans" />
    </v-main>
    <v-skeleton-loader v-else type="image"></v-skeleton-loader>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Cards from "./Cards";
import Footer from "./Footer.vue";

export default {
  data: () => ({
    padawans: [],
  }),
  methods: {},
  components: {
    Navbar,
    Footer,
    Cards,
  },
  async mounted() {
    try {
      const padawans = await (
        await fetch("https://swapi.dev/api/people/")
      ).json();

      this.padawans = padawans.results;

      console.log(this.padawans, "padawans");
    } catch (error) {
      alert("Sorry, server don't work =(");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
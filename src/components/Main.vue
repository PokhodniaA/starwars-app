<template>
  <div class="main">
    <Navbar />

    <v-main>
      <Cards :padawans="padawans" />
    </v-main>

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
  async created() {
    try {
      const padawans = await (
        await fetch("https://swapi.dev/api/people/")
      ).json();

      this.padawans = padawans.results;

      console.log(this.padawans);
    } catch (error) {
      alert("Sorry, server don't work =(");
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
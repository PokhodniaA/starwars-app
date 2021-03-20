<template>
  <div class="main">
    <Navbar />

    <v-main v-if="padawans.length">
      <Cards :padawans="padawans" />
    </v-main>
    <v-skeleton-loader v-else type="image"></v-skeleton-loader>

    <Footer :class="marginFooter" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cards from "../components/Cards.vue";
import Footer from "../components/Footer.vue";

export default {
  data: () => ({
    padawans: [],
  }),
  computed: {
    marginFooter() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? "mt-footer-xs" : "mt-footer-sm";
    },
  },
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
.main {
  &__footer {
    margin-top: 112px;
  }
}

.mt-footer-sm {
  margin-top: 112px;
}

.mt-footer-xs {
  margin-top: 80px;
}
</style>

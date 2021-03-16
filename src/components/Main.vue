<template>
  <div class="main">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  data: () => ({
    padawans: [],
  }),
  methods: {},
  components: {
    Navbar,
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
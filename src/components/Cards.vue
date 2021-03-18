<template>
  <v-container class="cards mt-0">
    <!-- Поменять размер текста -->
    <h4 class="text-h4 mt-13">Cards</h4>

    <!-- Toolbar -->

    <FilterBar class="cards__toolbar" :filter="filter" :padawans="padawans" />

    <!-- Cards -->

    <v-row class="mt-12">
      <v-col
        cols="12"
        md="6"
        class="pa-2"
        v-for="padawan in padawans"
        :key="padawan.name"
      >
        <Card :padawan="padawan" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from "./Card.vue";
import FilterBar from "./FilterBar.vue";

export default {
  data: () => ({
    filter: {
      eyes: "",
      height: {
        max: null,
        min: null,
        range: [],
      },
      age: {
        max: null,
        min: null,
        range: [],
      },
    },
  }),
  computed: {},
  props: {
    padawans: Array,
  },
  components: { Card, FilterBar },
  mounted() {
    const height = this.filter.height;
    const age = this.filter.age;

    this.padawans.forEach((padawan) => {
      const padawanHeight = parseInt(padawan.height) || 0;
      const padawanAge = parseInt(padawan.birth_year) || 0;

      if (padawanHeight > height.max || height.max === null) {
        height.max = padawanHeight;
      } else if (padawanHeight < height.min || height.min === null) {
        height.min = padawanHeight;
      }

      if (padawanAge > age.max || height.max === null) {
        age.max = padawanAge;
      } else if (padawanAge < age.min || age.min === null) {
        age.min = padawanAge;
      }
    });

    (height.range[0] = height.min), (height.range[1] = height.max);
    (age.range[0] = age.min), (age.range[1] = age.max);
  },
};
</script>

<style lang="scss" scoped>
.cards {
  &__toolbar {
    padding: 0 16px;
    margin-top: 24px;
  }
}
</style>
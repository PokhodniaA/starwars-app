<template>
  <v-container class="cards mt-0">
    <!-- Поменять размер текста -->
    <h4 class="text-h4 mt-13">Cards</h4>

    <!-- Toolbar -->

    <FilterBar class="cards__toolbar" :filter="filter" :padawans="padawans" />

    <!-- Cards -->

    <transition-group name="cards" tag="div" class="row mt-12">
      <v-col
        cols="12"
        md="6"
        class="pa-2"
        v-for="padawan in filtredPadawans"
        :key="padawan.name"
      >
        <Card :padawan="padawan" />
      </v-col>
    </transition-group>
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
  computed: {
    filtredPadawans() {
      const eyes = this.filter.eyes;
      const height = this.filter.height;
      const age = this.filter.age;

      const maxHeight = height.range[1],
        minHeight = height.range[0];

      const maxAge = age.range[1],
        minAge = age.range[0];

      return this.padawans.filter((padawan) => {
        const birthYear = parseInt(padawan.birth_year) || 0;

        const eyesFilter = eyes ? padawan.eye_color == eyes : true;
        const heightFilter =
          padawan.height <= maxHeight && padawan.height >= minHeight;
        const ageFilter = birthYear <= maxAge && birthYear >= minAge;

        return eyesFilter && heightFilter && ageFilter;
      });
    },
  },
  props: {
    padawans: Array,
  },
  components: { Card, FilterBar },
  created() {
    const height = this.filter.height;
    const age = this.filter.age;

    const ages = [];
    const heights = [];

    this.padawans.forEach((padawan) => {
      heights.push(parseInt(padawan.height) || 0);
      ages.push(parseInt(padawan.birth_year) || 0);
    });

    // Max and min heights of padawans
    height.max = Math.max.apply(null, heights);
    height.min = Math.min.apply(null, heights);

    // Max and min ages of padawans
    age.max = Math.max.apply(null, ages);
    age.min = Math.min.apply(null, ages);

    // Range of params padawans.
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

// Animations

.cards-move {
  transition: 0.2s ease-in-out;
  opacity: 0.8;
}
</style>
<template>
  <v-container class="cards mt-0 py-0 px-4 px-sm-0">
    <!-- Поменять размер текста -->
    <h4 class="cards__title" :class="sm">People</h4>

    <!-- Toolbar -->

    <FilterBar
      class="cards__toolbar"
      :class="sm"
      :filter="filter"
      :padawans="padawans"
    />

    <!-- Cards -->

    <transition-group name="cards" tag="div" class="row mt-6 mt-sm-12">
      <v-col
        cols="12"
        md="6"
        class="cards__cards"
        :class="sm"
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

import stylesGetters from "../mixins/stylesGetters";

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
      sort: "default",
    },
  }),
  methods: {
    pushQuery(eyes, minHeight, maxHeight, minAge, maxAge) {
      this.$router
        .replace({
          name: "Main",
          query: {
            color_eyes: eyes || "none",
            height_min: minHeight,
            height_max: maxHeight,
            age_min: minAge,
            age_max: maxAge,
            sort_by: this.filter.sort,
          },
        })
        .catch((error) => {
          if (error.name != "NavigationDuplicated") {
            throw error;
          }
        });
    },
  },
  computed: {
    filtredPadawans() {
      // Filtering params by filter data.
      const eyes = this.filter.eyes;
      const height = this.filter.height;
      const age = this.filter.age;

      // Heights
      const maxHeight = height.range[1],
        minHeight = height.range[0];

      // Ages
      const maxAge = age.range[1],
        minAge = age.range[0];

      // Filtering
      const filteredData = this.padawans.filter((padawan) => {
        const birthYear = parseInt(padawan.birth_year) || 0;

        const eyesFilter = eyes ? padawan.eye_color == eyes : true;
        const heightFilter =
          padawan.height <= maxHeight && padawan.height >= minHeight;
        const ageFilter = birthYear <= maxAge && birthYear >= minAge;

        return eyesFilter && heightFilter && ageFilter;
      });

      // Push query
      this.pushQuery(eyes, minHeight, maxHeight, minAge, maxAge);

      return filteredData;
    },
  },
  props: {
    padawans: Array,
  },
  components: { Card, FilterBar },
  mixins: [stylesGetters],

  created() {
    // Fill filter data fields
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
    margin-top: 0;

    &.sm {
      margin-top: 13px;
    }
  }

  &__title {
    margin-top: 32px;
    font-size: 28px;
    &.sm {
      margin-top: 64px;
      margin-left: 3px;
      font-size: 32px;
    }
  }

  &__cards {
    padding: 0 16px 8px;

    &.sm {
      &:nth-child(odd) {
        padding: 0 4px 8px 8px;
      }

      &:nth-child(even) {
        padding: 0 8px 8px 4px;
      }
    }
  }
}

// Animations

.cards-move {
  transition: 0.2s ease-in-out;
  opacity: 0.8;
}
</style>

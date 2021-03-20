<template>
  <v-row class="filters">
    <!-- Eye color -->

    <v-menu offset-y left transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-on="on"
          v-bind="attrs"
          class="filters__button mr-6 mr-sm-14 px-0 text-capitalize font-weight-regular"
        >
          <span color="text" class="text-none">Eye color</span>
          <v-icon color="text" size="14">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list width="101">
        <v-list-item
          v-for="(color, index) in getEyesColor"
          :key="index"
          @click="filterByColor(color)"
        >
          <v-list-item-title class="filters__item">{{
            color
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- Height -->

    <v-menu
      offset-y
      left
      nudge-right="84"
      :close-on-content-click="false"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-on="on"
          v-bind="attrs"
          class="filters__button mr-6 mr-sm-14 px-0 navbar__buttons text-capitalize font-weight-regular"
        >
          <span color="text" class="text-none">Height</span>
          <v-icon color="text" size="14">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card flat width="249" height="138">
        <div class="filters__inputRow d-flex justify-space-between">
          <input
            type="number"
            class="filters__filterInput"
            v-model.lazy="filter.height.range[0]"
          />
          <input
            type="number"
            class="filters__filterInput"
            v-model.lazy="filter.height.range[1]"
          />
        </div>
        <div class="filters__inputSlider">
          <div class="d-flex justify-space-between">
            <span>{{ filter.height.range[0] }}cm</span>
            <span>{{ filter.height.range[1] }}cm</span>
          </div>
          <v-range-slider
            v-model="filter.height.range"
            :max="filter.height.max"
            :min="filter.height.min"
            height="15"
            color="accent"
          ></v-range-slider>
        </div>
      </v-card>
    </v-menu>

    <!-- Age -->

    <v-menu
      offset-y
      left
      nudge-right="84"
      :close-on-content-click="false"
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-on="on"
          v-bind="attrs"
          class="filters__button px-0 navbar__buttons text-capitalize font-weight-regular"
        >
          <span color="text" class="text-none">Age</span>
          <v-icon color="text" size="14">mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-card flat width="249" height="138">
        <div class="filters__inputRow d-flex justify-space-between">
          <input
            type="number"
            class="filters__filterInput"
            v-model.lazy="filter.age.range[0]"
          />
          <input
            type="number"
            class="filters__filterInput"
            v-model.lazy="filter.age.range[1]"
          />
        </div>
        <div class="filters__inputSlider">
          <div class="d-flex justify-space-between">
            <span>{{ filter.age.range[0] }}BBY</span>
            <span>{{ filter.age.range[1] }}BBY</span>
          </div>
          <v-range-slider
            v-model="filter.age.range"
            :max="filter.age.max"
            :min="filter.age.min"
            height="15"
            color="accent"
          ></v-range-slider>
        </div>
      </v-card>
    </v-menu>

    <v-spacer></v-spacer>

    <!-- Sort by -->

    <v-menu offset-y transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-on="on"
          v-bind="attrs"
          class="filters__button px-0 navbar__buttons text-capitalize font-weight-regular"
          min-width="26"
        >
          <span color="text" class="text-none d-none d-sm-flex">Sort by</span>
          <v-icon color="text" size="14" class="d-none d-sm-flex"
            >mdi-chevron-down</v-icon
          >
          <v-img
            src="@/assets/icons/clarity_sort-by-line.svg"
            alt="Sort"
            class="d-flex d-sm-none"
            position="center top"
          />
        </v-btn>
      </template>

      <v-list width="101">
        <v-list-item
          v-for="(sort, index) in sortBy"
          :key="index"
          @click="sortPadawans(sort)"
        >
          <v-list-item-title>{{ sort }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    sortBy: ["age", "mass", "height"],
  }),
  methods: {
    filterByColor(color) {
      const filterColor = this.filter.eyes;

      this.filter.eyes = filterColor == color ? "" : color;
    },
    sortPadawans(sort) {
      if (sort == "age") sort = "birth_year";

      this.padawans.sort((a, b) => {
        const padawanA = parseInt(a[sort]) || 0;
        const padawanB = parseInt(b[sort]) || 0;
        return padawanA - padawanB;
      });

      this.filter.sort = sort;
    },
  },
  computed: {
    getEyesColor() {
      const eyes = new Set();
      this.padawans.forEach((padawan) => eyes.add(padawan.eye_color));
      return eyes;
    },
  },
  props: {
    padawans: Array,
    filter: Object,
  },
};
</script>

<style lang="scss" scoped>
.filters {
  &__button {
    &::before {
      background: none;
    }
  }

  &__item {
    font-size: 14px;
    font-weight: 100;
  }

  &__inputRow {
    padding: 20px 20px 0;
  }

  &__inputSlider {
    padding: 8px 20px 0;
    height: 70px;

    font-weight: 100;
    font-size: 14px;
    line-height: 25px;

    overflow: hidden;
  }

  &__filterInput {
    width: 100px;
    height: 42px;
    padding: 8px 12px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 6px;

    font-weight: 100;
    font-size: 14px;
    line-height: 25px;

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
}

.v-menu__content {
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04) !important;
}
</style>

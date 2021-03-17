<template>
  <v-container class="cards mt-0">
    <!-- Поменять размер текста -->
    <h4 class="text-h4 mt-13">Cards</h4>

    <!-- Toolbar -->

    <v-row class="cards__toolbar">
      <!-- Eye color -->

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-on="on"
            v-bind="attrs"
            class="mr-14 px-0 navbar__buttons text-capitalize font-weight-regular d-none d-sm-flex"
          >
            <span color="text" class="text-none">Eye color</span>
            <v-icon color="text" size="14">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(lang, index) in test" :key="index">
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Height -->

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-on="on"
            v-bind="attrs"
            class="mr-14 px-0 navbar__buttons text-capitalize font-weight-regular d-none d-sm-flex"
          >
            <span color="text" class="text-none">Height</span>
            <v-icon color="text" size="14">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(lang, index) in test" :key="index">
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Age -->

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-on="on"
            v-bind="attrs"
            class="px-0 navbar__buttons text-capitalize font-weight-regular d-none d-sm-flex"
          >
            <span color="text" class="text-none">Age</span>
            <v-icon color="text" size="14">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(lang, index) in test" :key="index">
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>

      <!-- Sort by -->

      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-on="on"
            v-bind="attrs"
            class="px-0 navbar__buttons text-capitalize font-weight-regular d-none d-sm-flex"
          >
            <span color="text" class="text-none">Sort by</span>
            <v-icon color="text" size="14">mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(lang, index) in test" :key="index">
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>

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

export default {
  data: () => ({
    test: [1, 2, 3, 4, 5],
  }),
  props: {
    padawans: Array,
  },
  components: { Card },
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
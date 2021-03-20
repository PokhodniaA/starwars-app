<template>
  <div class="footer">
    <v-footer app absolute :height="footerHeight" class="footer__footer">
      <v-container
        class="footer__container d-flex flex-column justify-space-between"
      >
        <!-- First row -->

        <!-- Поправить margin px -->
        <v-row align="start" class="mt-3 mt-sm-9 flex-column flex-sm-row">
          <v-app-bar-title>
            <img
              src="@/assets/icons/StarWars.svg"
              alt="Star Wars"
              :width="logo.width"
            />
          </v-app-bar-title>

          <v-spacer class="d-none d-sm-flex"></v-spacer>

          <!-- Buttons -->

          <div class="mt-5 mt-sm-0">
            <v-btn
              depressed
              class="px-0 mr-4"
              color="accent"
              :width="icons.size"
              :height="icons.size"
              min-width="0"
            >
              <img src="@/assets/icons/facebook.svg" alt="Facebook" />
            </v-btn>

            <v-btn
              depressed
              class="px-0"
              color="accent"
              :width="icons.size"
              :height="icons.size"
              min-width="0"
            >
              <img src="@/assets/icons/instagram.svg" alt="Facebook" />
            </v-btn>
          </div>
        </v-row>

        <!-- Second row -->

        <v-row align="end" class="mb-4">
          <span
            color="text"
            class="footer__text font-weight-thin text-capitalize"
            >All rights Reserved.</span
          >

          <v-spacer></v-spacer>

          <span
            color="text"
            class="footer__text font-weight-thin text-capitalize"
            >Privacy Policy</span
          >
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  computed: {
    footerHeight() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? 198 : 195;
    },
    logo() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? { width: 82 } : { width: 136 };
    },
    icons() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? { size: 32 } : { size: 40 };
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  &__footer {
    padding-left: 18px;
    padding-right: 18px;
  }

  &__container {
    height: 100%;
    padding-bottom: 0;
  }

  &__text {
    font-size: 14px;
  }
}
</style>

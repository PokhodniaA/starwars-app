<template>
  <div class="footer">
    <v-footer app absolute :height="footerHeight" class="footer__main">
      <v-container
        class="footer__container d-flex flex-column justify-space-between"
      >
        <!-- First row -->

        <!-- Поправить margin px -->
        <v-row align="start" class="mt-3 mt-sm-6 flex-column flex-sm-row">
          <!-- Title -->

          <v-app-bar-title class="footer__title" :class="xs">
            <img
              src="@/assets/icons/StarWars.svg"
              alt="Star Wars"
              :width="logo.width"
            />
          </v-app-bar-title>

          <v-spacer class="d-none d-sm-flex"></v-spacer>

          <!-- Buttons -->

          <div class="footer__buttons" :class="sm">
            <v-btn
              depressed
              class="px-0 mr-3"
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

        <v-row align="end" class="footer__second-row">
          <span
            color="text"
            class="footer__text font-weight-thin text-capitalize"
            id="reserved"
            >All rights Reserved.</span
          >

          <v-spacer></v-spacer>

          <span
            color="text"
            class="footer__text font-weight-thin text-capitalize"
            id="privacy"
            >Privacy Policy</span
          >
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import stylesGetters from "../mixins/stylesGetters";

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
  mixins: [stylesGetters],
};
</script>

<style lang="scss" scoped>
.footer {
  #reserved {
    letter-spacing: -0.2px;
  }

  #privacy {
    letter-spacing: 0.5px;
  }

  &__main {
    padding-left: 18px;
    padding-right: 18px;
  }

  &__container {
    height: 100%;
    padding-bottom: 0;
  }

  &__title {
    &.xs {
      margin-top: 2px;
    }
  }

  &__buttons {
    margin-top: 14px;

    &.sm {
      margin-top: 0;
    }
  }

  &__text {
    font-size: 14px;
  }

  &__second-row {
    margin-bottom: 15px;
  }
}
</style>

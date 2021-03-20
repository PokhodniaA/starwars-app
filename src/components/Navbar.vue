<template>
  <nav class="navbar" :class="sm" app>
    <!-- Убрать пэдинги боковые-->
    <v-app-bar flat :color="appBar.color" :height="appBar.height">
      <v-container>
        <v-row align="center">
          <!-- Title -->

          <v-app-bar-title class="navbar__title" :class="sm">
            <img
              src="@/assets/icons/StarWars.svg"
              alt="Star Wars"
              :width="logo.width"
            />
          </v-app-bar-title>

          <v-spacer></v-spacer>
          <!-- Language -->

          <v-menu offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                width="35"
                v-on="on"
                v-bind="attrs"
                class="navbar__buttons text-capitalize font-weight-regular d-none d-sm-flex"
                :class="sm"
              >
                <span color="text" class="text-capitalize">{{
                  currentLang.title
                }}</span>
                <v-icon color="text" size="14">mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(lang, index) in languages"
                :key="index"
                @click="currentLang = lang"
              >
                <v-list-item-title>{{ lang.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- Log in -->

          <v-btn
            text
            width="35"
            class="navbar__buttons text-none font-weight-regular d-none d-sm-flex"
            :class="sm"
            >Log in</v-btn
          >
          <!-- Sign up -->

          <v-btn
            :depressed="singInBtn.depress"
            :text="singInBtn.text"
            :width="singInBtn.width"
            height="48"
            :color="singInBtn.color"
            class="navbar__buttons text-none font-weight-regular"
            :class="[sm, signUp]"
            >Sign up</v-btn
          >
          <!-- xs Nav icon -->

          <v-app-bar-nav-icon
            @click="drawer = !drawer"
            class="navbar__nav-icon d-flex d-sm-none"
            :class="xs"
            ><img src="@/assets/icons/menu.svg" alt="menu" />
          </v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Drawer -->
    <v-navigation-drawer
      app
      fixed
      right
      disable-resize-watcher
      v-model="drawer"
      class="d-flex d-sm-none"
    >
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-capitalize">{{
              currentLang.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Log in</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import stylesGetters from "../mixins/stylesGetters";

export default {
  data: () => ({
    languages: [{ title: "en" }, { title: "ru" }, { title: "ua" }],
    currentLang: { title: "en" },
    drawer: false,
  }),
  computed: {
    appBar() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs"
        ? { color: "primary", height: 62 }
        : { color: "secondary", height: 80 };
    },
    signUp() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? "sign-up" : "";
    },
    logo() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? { width: "82px" } : { width: "" };
    },
    singInBtn() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs"
        ? { depress: false, text: true, width: "", color: "text" }
        : { depress: true, text: false, width: "162", color: "accent" };
    },
  },
  mixins: [stylesGetters],
};
</script>

<style lang="scss" scoped>
.navbar {
  padding-top: 3px;

  &.sm {
    padding-top: 0;
  }

  &__title {
    &.sm {
      margin-right: 2px;
      margin-top: 3px;
    }
  }

  &__buttons {
    font-size: 14px;

    &.sm {
      letter-spacing: 0;
    }

    &.sign-up {
      margin-right: 28px;
      margin-bottom: 5px;

      letter-spacing: 0;
    }
  }

  &__nav-icon {
    width: 36px !important;
    height: 36px !important;

    &.xs {
      margin: -2px;
      margin-bottom: 3px;
    }
  }
}

.v-menu__content {
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04) !important;
}
</style>

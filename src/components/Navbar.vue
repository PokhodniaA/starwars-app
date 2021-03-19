<template>
  <nav class="navbar" app>
    <!-- Убрать пэдинги боковые-->
    <v-app-bar flat :color="appBar.color" :height="appBar.height">
      <v-container>
        <v-row align="center">
          <v-app-bar-title>
            <img
              src="@/assets/icons/StarWars.svg"
              alt="Star Wars"
              :width="logo.width"
            />
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <v-menu offset-y transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                width="35"
                v-on="on"
                v-bind="attrs"
                class="mr-14 navbar__buttons text-capitalize font-weight-regular d-none d-sm-flex"
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

          <v-btn
            text
            width="35"
            class="navbar__buttons mr-11 text-none font-weight-regular d-none d-sm-flex"
            >Log in</v-btn
          >

          <v-btn
            :depressed="singInBtn.depress"
            :text="singInBtn.text"
            :width="singInBtn.width"
            height="48"
            :color="singInBtn.color"
            class="navbar__buttons text-none font-weight-regular"
            >Sign up</v-btn
          >

          <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-sm-none"
            ><img src="@/assets/icons/menu.svg" alt="menu" />
          </v-app-bar-nav-icon>
        </v-row>
      </v-container>
    </v-app-bar>

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
export default {
  data: () => ({
    languages: [{ title: "en" }, { title: "ru" }, { title: "ua" }],
    currentLang: { title: "en" },
    drawer: false
  }),
  computed: {
    appBar() {
      const breakpoint = this.$vuetify.breakpoint.name;
      console.log(this.$vuetify);
      return breakpoint === "xs"
        ? { color: "primary", height: 62 }
        : { color: "secondary", height: 80 };
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
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  &__buttons {
    font-size: 14px;
  }
}

.v-menu__content {
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.04) !important;
}
</style>

<template>
  <v-card flat class="card">
    <v-img
      height="410"
      gradient="180deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.08) 100%"
      class="card__img"
      :src="imageSrc"
    >
      <div class="card__title primary--text" :class="titleCard">
        <p class="card__birth mb-4">{{ padawan.birth_year }}</p>
        <p class="card__name mb-2">{{ padawan.name }}</p>
        <p class="card__data font-weight-thin">
          <span class="mr-6">Eye color: {{ padawan.eye_color }}</span>
          <span class="mr-6">Height: {{ padawan.height }}</span>
          <span>Mass: {{ padawan.mass }}</span>
        </p>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  computed: {
    imageSrc() {
      const padawan = this.padawan.name;
      return require(`@/assets/images/${padawan}.jpg`);
    },
    titleCard() {
      const breakpoint = this.$vuetify.breakpoint.name;
      return breakpoint === "xs" ? "tittle-bottom" : "tittle-top";
    }
  },
  props: {
    padawan: Object
  }
};
</script>

<style lang="scss" scoped>
.card {
  &__img {
    position: relative;
  }

  &__title {
    position: absolute;
    font-size: 14px;
  }

  &__birth {
    opacity: 0.8;
  }

  &__name {
    font-size: 24px;
  }
}

.tittle-top {
  top: 21px;
  left: 24px;
}

.tittle-bottom {
  bottom: 24px;
  left: 20px;
}
</style>

<template>
  <v-card flat class="card">
    <v-img
      height="410"
      gradient="180deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.08) 100%"
      class="card__img"
      :src="imageSrc"
    >
      <div class="card__title primary--text" :class="sm">
        <p class="card__birth">{{ padawan.birth_year }}</p>
        <p class="card__name" :class="sm">{{ padawan.name }}</p>
        <p class="font-weight-thin">
          <span class="card__data">Eye color: {{ padawan.eye_color }}</span>
          <span class="card__data">Height: {{ padawan.height }}</span>
          <span>Mass: {{ padawan.mass }}</span>
        </p>
      </div>
    </v-img>
  </v-card>
</template>

<script>
import stylesGetters from "../mixins/stylesGetters";

export default {
  computed: {
    imageSrc() {
      const padawan = this.padawan.name;
      return require(`@/assets/images/${padawan}.jpg`);
    },
  },
  props: {
    padawan: Object,
  },
  mixins: [stylesGetters],
};
</script>

<style lang="scss" scoped>
.card {
  &__img {
    position: relative;
  }

  &__title {
    position: absolute;
    bottom: 16px;
    left: 22px;

    font-size: 14px;

    &.sm {
      top: 21px;
      left: 24px;
    }
  }

  &__birth {
    margin-bottom: 14px;
    opacity: 0.8;
  }

  &__name {
    margin-bottom: 9px;
    font-size: 24px;
    &.sm {
      margin-bottom: 6px;
    }
  }

  &__data {
    margin-right: 16px;
    letter-spacing: 0.3px;
  }
}
</style>

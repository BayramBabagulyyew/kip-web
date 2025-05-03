<template>
  <div class="representative-items">
    <a
      :href="representative.website"
      class="representative-items__item"
      v-for="representative in representatives"
      :key="representative?.partnerId"
    >
      <img :src="`${imageURL}${representative?.fileUrl}`" />
    </a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    representatives: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(["imageURL"]),
  },
};
</script>

<style lang="scss" scoped>
.representative-items {
  display: flex;
  align-items: center;
  gap: 14px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }

  &__item {
    cursor: pointer;
    width: 100px;
    height: 80px;
    &:first-child {
      img {
        object-fit: contain;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 479px) {
      width: 60px;
      height: 35px;
    }
  }
}
</style>

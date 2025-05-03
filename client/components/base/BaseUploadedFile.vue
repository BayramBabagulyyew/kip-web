<template>
  <div class="base-uploaded-file">
    <div class="base-uploaded-file__image">
      <img :src="`${imageURL}${image}`" alt="" />
    </div>
    <div v-if="positionNumber" class="base-uploaded-file__icon-position">
      {{ positionNumber }}
    </div>
    <base-icon
      class="base-uploaded-file__icon-left"
      v-if="imgUpload"
      @clicked="$emit('itemEdit')"
      icon="imgUpload"
    />
    <base-icon
      class="base-uploaded-file__icon-right"
      v-if="adminCrash"
      @clicked="$emit('itemDelete')"
      icon="adminCrash"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  emits: ["itemDelete", "itemEdit"],
  props: {
    imgUpload: {
      type: Boolean,
      default: () => null,
    },
    positionNumber: {
      type: [String, Number],
      default: () => "",
    },
    adminCrash: {
      type: Boolean,
      default: () => null,
    },
    image: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    ...mapGetters(["imageURL"]),
  },
};
</script>

<style lang="scss" scoped>
.base-uploaded-file {
  position: relative;
  &__image {
    height: 200px;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.2);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__icon-position {
    padding: 4px;
    position: absolute;
    top: 14px;
    left: 14px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.2s;
    z-index: 2;
    font-size: 16px;
    text-align: center;
    color: var(--text4);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon-left {
    padding: 4px;
    position: absolute;
    bottom: 14px;
    left: 14px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.2s;
    z-index: 2;
    &:hover {
      transform: scale(1.07);
    }
  }

  &__icon-right {
    padding: 4px;
    position: absolute;
    z-index: 2;
    bottom: 14px;
    right: 14px;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.07);
    }
  }
}
</style>

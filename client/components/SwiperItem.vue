<template>
  <div class="swiper-block">
    <div v-swiper:mySwiper="options" class="swiper-block__swiper swiper">
      <h1 class="swiper-block__title">{{ $t("gallery") }}</h1>
      <div class="swiper-block__wrapper swiper-wrapper">
        <div
          class="swiper-block__slide swiper-slide"
          v-for="photo in photos"
          :key="photo.galleryId"
        >
          <div v-if="photo.image" class="swiper-block__image">
            <img :src="`${imageURL}${photo?.image}`" />
          </div>
        </div>
      </div>
      <div class="swiper-block__navigations">
        <div class="swiper-block__prev-navigation swiper-button-prev">
          <base-icon icon="prevNavigation" />
        </div>
        <div class="swiper-block__next-navigation swiper-button-next">
          <base-icon icon="nextNavigation" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
    photos: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(["imageURL"]),
  },
  mounted() {},
  data() {
    return {
      options: {
        slidesPerView: 1,
        speed: 200,
        spaceBetween: 4,
        autoplay: {
          delay: 4000,
        },
        navigation: {
          nextEl: ".swiper-block__next-navigation",
          prevEl: ".swiper-block__prev-navigation",
        },
        breakpoints: {
          320: {
            speed: 1000,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-block {
  width: 100%;
  position: relative;

  &__swiper {
    width: 100%;
    overflow: hidden;
  }

  &__title {
    color: var(--red);
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }

  &__wrapper {
    display: flex;
    width: fit-content;
    border-radius: 10px;
  }

  &__circle {
    width: 35px;
    height: 35px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 33px;
    left: 0;
    z-index: 10;
  }

  &__box {
    position: absolute;
    left: 0;
    top: 33px;
    width: 45px;
    height: 45px;
    border-radius: 0 0 10px 0;
    background-color: var(--primary);
    z-index: 3;
  }

  &__slide {
    position: relative;
  }

  &__image {
    width: 100%;
    height: 18vh;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }

  &__title-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 100%;
    border-radius: 0px 0px 10px 10px;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    padding: 7px 20px;
    z-index: 2;
  }

  &__slide-title {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: var(--red);
      top: 50%;
      transform: translateY(-50%);
      left: -12px;
    }
  }

  &__navigations {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    gap: 6px;
    padding: 4px 6px;
    background-color: var(--primary);
    border-radius: 10px 0 0 0;
    z-index: 10;
    &:deep() {
      .swiper-button-disabled {
        transition: 0.1s all;
        background-color: transparent !important;
        cursor: auto;
        &:active {
          transform: scale(1);
        }
        svg {
          color: #fff !important;
          cursor: auto;
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        background-color: #fff;
        transition: 0.1s all;
        cursor: pointer;
        svg {
          color: #000;
        }
      }
    }
  }

  &__prev-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 1px solid #fff;
    border-radius: 50%;

    &:active {
      transform: scale(1.2);
    }
  }

  &__next-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border: 1px solid #fff;
    border-radius: 50%;

    &:active {
      transform: scale(1.2);
    }
  }
}
</style>

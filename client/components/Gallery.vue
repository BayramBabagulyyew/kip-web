<template>
  <div class="gallery" ref="aos">
    <div class="gallery__row">
      <div class="gallery__title-wrapper">
        <h1 class="gallery__title">{{ $t("gallery") }}</h1>
      </div>
      <gallery-popup
        v-if="isImage"
        :items="gallery"
        :initialSlide="currentSlideIndex"
        @clicked="closeGallery"
        ref="galleryPopup"
      />
      <div class="gallery__images" ref="images">
        <div
          v-for="(item, index) in gallery"
          :key="item.galleryId"
          class="gallery__image"
          @click="showGallery(index)"
        >
          <img :src="`${imageURL}${item?.image}`" alt="" />
        </div>
      </div>
      <div class="gallery__button-wrapper">
        <button
          @click="$router.push(localeLocation('/gallery'))"
          class="gallery__button"
        >
          {{ $t("seeAll") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["imageURL"]),
  },
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlideIndex: 0,
      observer: null,
      isImage: false,
    };
  },
  mounted() {
    if (this.$refs.aos) {
      const options = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.4,
      };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting) {
            this.$refs.images.classList.add("aos");
          }
        });
      }, options);
      this.observer.observe(this.$refs.aos);
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    showGallery(index) {
      this.currentSlideIndex = index;
      document.body.classList.add("no-scroll");
      this.isImage = true;
    },
    closeGallery() {
      document.body.classList.remove("no-scroll");
      this.isImage = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  width: 100%;
  height: 100%;
  @media (max-width: 767px) {
    height: 100%;
  }
  &__title-wrapper {
    margin: 90px 0 40px 0;
    flex: 1 1 auto;

    @media (max-width: 767px) {
      margin: 70px 0 20px;
      flex: 0 0 0%;
    }
  }

  &__title {
    position: relative;
    padding-bottom: 7px;
    color: var(--text2);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.33px;
    text-transform: capitalize;

    &::after {
      content: "";
      bottom: 0;
      left: 0;
      width: 120%;
      height: 1px;
      background-color: var(--red);
      position: absolute;
      animation: titleAnimate 2s linear infinite;
      @keyframes titleAnimate {
        0% {
          width: 0%;
        }
        100% {
          width: 120%;
          opacity: 0;
        }
      }
    }

    @media (max-width: 767px) {
      font-size: 24px;
    }
  }

  &__row {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 100px 20px 100px;
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 0 20px 15px;
      gap: 14px;
    }
  }

  &__image {
    height: 220px;
    cursor: pointer;
    // &:first-child {
    //   height: 220px;
    //   grid-column: 1 / span 2;
    // }
    // &:nth-child(2) {
    //   grid-row: span 2;
    //   height: 100%;
    //   img {
    //     height: 100%;
    //   }
    // }
    // &:nth-child(3) {
    //   grid-column: 1 / span 1;
    // }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 767px) {
      height: 230px !important;

      &:first-child {
        grid-column: 1 / span 2;
      }
      &:nth-child(2) {
        grid-column: span 1;
        grid-row: span 1;
        height: 100%;
        img {
          object-fit: cover;
          object-position: center;
        }
      }
      &:nth-child(3) {
        grid-column: span 1;
      }
      &:nth-child(4) {
        grid-column: span 2;
      }
    }
    @media (max-width: 479px) {
      height: 180px !important;
    }
  }
  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
    margin: 0 100px 0;
    width: calc(100% - 300px);
    @media (max-width: 767px) {
      margin: 0 20px 0;
      width: calc(100% - 20px);
    }
  }

  &__button {
    text-align: right;
    padding: 10px;
    border-radius: 6px;
    color: var(--red);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background-color: transparent;
    transition: 0.2s all;
    cursor: pointer;
    @media (max-width: 767px) {
      cursor: none;
    }
    &:hover {
      transform: scale(1.04);
    }
  }
}
</style>

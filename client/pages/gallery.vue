<template>
  <div class="gallery-page" ref="aos">
    <gallery-popup
      v-if="isImage"
      :items="gallery"
      :initialSlide="currentSlideIndex"
      @clicked="closeGallery"
      ref="galleryPopup"
    />
    <div class="gallery-page__container">
      <div class="gallery-page__back">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.back(localeLocation(-1))"
        />
        <h1 class="gallery-page__title">
          {{ $t("gallery") }}
        </h1>
      </div>
      <div class="gallery-page__images" ref="images">
        <div
          class="gallery-page__image"
          v-for="(item, index) in gallery"
          :key="item.galleryId"
          @click="showGallery(index)"
        >
          <img :src="`${imageURL}${item?.image}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { GET_GALLERY } from "../api/home.api";

export default {
  computed: {
    ...mapGetters(["imageURL"]),
  },
  data() {
    return {
      currentSlideIndex: 0,

      currentImage: Number,
      isImage: false,
      gallery: {
        type: Array,
        default: () => [],
      },
    };
  },

  async created() {
    await this.fetchGallery();
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
    // showGallery(imageId) {
    //   if (document.querySelector(".wrapper").classList.contains("_lock")) {
    //     document.querySelector(".wrapper").classList.remove("_lock");
    //   } else {
    //     document.querySelector(".wrapper").classList.add("_lock");
    //   }
    //   this.isImage = !this.isImage;
    //   this.$nextTick(() => {
    //     // Find the index of the clicked image
    //     const index = this.gallery.findIndex(
    //       (item) => item.galleryId === imageId
    //     );
    //     if (index !== -1 && this.$refs.swiperTop?.swiper) {
    //       this.$refs.swiperTop.swiper.slideTo(index);
    //     }
    //   });
    // },
    closeGallery() {
      document.body.classList.remove("no-scroll");
      this.isImage = false;
    },
    async fetchGallery() {
      try {
        const { data, statusCode } = await GET_GALLERY();
        if (statusCode) {
          this.gallery = data || [];
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-page {
  padding: 80px 0 40px;
  @media (max-width: 767px) {
    padding: 30px 0;
  }

  &__back {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 30px;
    .project-icon {
      transition: 0.3s;
      border-radius: 50%;
      animation: arrowAnimate 2s infinite linear alternate;
      padding: 6px;
      width: 50px;
      height: 50px;
      &:hover {
        transform: scale(1.1);
        background-color: rgb(0, 0, 0, 0.1);
      }
      @keyframes arrowAnimate {
        0% {
          transform: translateX(10px);
        }

        100% {
          transform: translateX(0px);
        }
      }
    }
    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      margin-left: 0;
      margin-bottom: 20px;
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  &__title {
    color: var(--red);
    font-size: 30px;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media (max-width: 479px) {
      font-size: 24px;
    }
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    @media (min-width: 767px) {
      transition: 1s all;
      transform: translateY(120px);
      opacity: 0;
      &.aos {
        opacity: 1;
        transform: translateY(0px);
        transition: 1s all;
      }
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 479px) {
      grid-template-columns: 1fr;
      gap: 14px;
    }
  }

  &__image {
    height: 280px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }
    @media (max-width: 479px) {
      height: 240px;
    }
  }
}
</style>

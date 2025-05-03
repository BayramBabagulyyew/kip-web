<template>
  <div class="representative" ref="aos">
    <div class="representative__columns" ref="images">
      <div class="representative__title-wrapper">
        <h1 class="representative__title">{{ $t("achievements") }}</h1>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">{{ $t("dealership") }}</div>
        <div v-swiper:mySwiper="options" class="representative__swiper swiper">
          <div class="representative__images swiper-wrapper">
            <a
              v-for="item in main.dealership"
              :key="item.partnerId"
              :href="item.website"
              target="_blank"
              class="representative__image swiper-slide"
            >
              <img :src="`${imageURL}${item?.fileUrl}`" alt="" />
            </a>
          </div>
          <div class="representative__swiper-navigations">
            <div
              class="representative__swiper-prev-navigation swiper-button-prev"
            >
              <base-icon icon="prevNavigation" />
            </div>
            <div
              class="representative__swiper-next-navigation swiper-button-next"
            >
              <base-icon icon="nextNavigation" />
            </div>
          </div>
        </div>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">{{ $t("ourClients") }}</div>
        <div v-swiper:mySwiper4="options" class="representative__swiper swiper">
          <div class="representative__images swiper-wrapper">
            <a
              v-for="item in main.clients"
              :key="item.partnerId"
              :href="item.website"
              target="_blank"
              class="representative__image swiper-slide"
            >
              <img :src="`${imageURL}${item?.fileUrl}`" alt="" />
            </a>
          </div>
          <div class="representative__swiper-navigations">
            <div
              class="representative__swiper-prev-navigation swiper-button-prev"
            >
              <base-icon icon="prevNavigation" />
            </div>
            <div
              class="representative__swiper-next-navigation swiper-button-next"
            >
              <base-icon icon="nextNavigation" />
            </div>
          </div>
        </div>
      </div>
      <div class="representative__column">
        <div class="representative__subtitle">{{ $t('ourProjects') }}</div>
        <div v-swiper:mySwiper1="options" class="representative__swiper swiper">
          <div class="representative__images swiper-wrapper">
            <a
              v-for="item in main.projects"
              :key="item.partnerId"
              :href="item.website"
              target="_blank"
              class="representative__image swiper-slide"
            >
              <img :src="`${imageURL}${item?.fileUrl}`" alt="" />
            </a>
          </div>
          <div class="representative__swiper-navigations">
            <div
              class="representative__swiper-prev-navigation swiper-button-prev"
            >
              <base-icon icon="prevNavigation" />
            </div>
            <div
              class="representative__swiper-next-navigation swiper-button-next"
            >
              <base-icon icon="nextNavigation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    main: {
      dealership: [],
      clients: [],
      projects: [],
    },
  },
  computed: {
    ...mapGetters(["imageURL"]),
  },
  data() {
    return {
      observer: null,
      options: {
        slidesPerView: 6,
        speed: 1000,
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
          speed: 1000,
        },
        navigation: {
          nextEl: ".representative__swiper-next-navigation",
          prevEl: ".representative__swiper-prev-navigation",
        },
        breakpoints: {
          320: {
            speed: 1000,
            slidesPerView: 2,
          },
          479: {
            speed: 1000,
            slidesPerView: 2,
          },
          767: {
            speed: 1000,
            slidesPerView: 6,
          },
        },
      },
    };
  },
  mounted() {
    if (this.$refs.aos) {
      const options =
        {
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.4,
        } || {};
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting) {
            this.$refs.images.classList.add("aos");
            const elemAos = document.querySelectorAll(".aos");
          }
        });
      }, options);
    }
    this.observer.observe(this.$refs.aos);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style lang="scss" scoped>
//   .swiper-wrapper {
//     transition-timing-function: linear !important;
//   }
.representative {
  width: 100%;
  height: 100%;
  padding-top: 30px;
  &__title-wrapper {
    flex: 1 1 auto;
    margin-top: 50px;
    display: inline-block;
    text-align: center;
    @media (max-width: 767px) {
      margin-top: 30px;
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
    display: inline-block;

    &::after {
      content: "";
      bottom: 0;
      left: 0;
      width: 110%;
      height: 1px;
      background-color: var(--red);
      position: absolute;
      animation: titleAnimate 2s linear infinite;
      @keyframes titleAnimate {
        0% {
          width: 0%;
        }
        100% {
          width: 80%;
          opacity: 0;
        }
      }
    }
  }

  &__columns {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 150px;
    padding-bottom: 80px;
    justify-content: center;
    height: 100%;
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      margin: 0 50px;
    }
  }

  &__column {
    @media (max-width: 767px) {
    }
  }

  &__subtitle {
    color: #000;
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  &__swiper {
    width: 100%;
    position: relative;
    padding: 0 40px;
    overflow: hidden;

    &-navigations {
    }

    &-prev-navigation {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #fff;
      transition: 0.2s all;
      &:deep() {
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }

    &-next-navigation {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #fff;
      &:deep() {
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  &__images {
    display: flex;
    width: fit-content;
  }

  &__image {
    width: 100%;
    height: 160px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.3s;
    }
    @media (max-width: 767px) {
      height: 90px;
    }
  }
}
</style>

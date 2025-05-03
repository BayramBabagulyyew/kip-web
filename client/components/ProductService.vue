<template>
  <div class="services" ref="aos">
    <h1 class="services__title">{{ $t("productsServices") }}</h1>
    <div class="services__row" ref="images">
      <div
        class="services__item"
        v-for="item in items?.services"
        :key="item?.id"
        @click="$router.push(localeLocation(`/products-services/${item?.id}`))"
      >
        <!-- <div class="services__image">
          <img :src="`${imageURL}${item?.images[0]}`" alt="" />
        </div> -->
        <div class="services__content">
          <div class="services__content-logo">
            <img :src="`${imageURL}${item?.logo}`" alt="" />
          </div>
          <p style="color: #183a60; font-size: large; font-weight: 600">
            {{ translateName(item) }}
          </p>
        </div>
      </div>
      <div
        class="services__item"
        v-for="item in items?.products"
        :key="item?.id"
        @click="$router.push(localeLocation(`/products-services/${item?.id}`))"
      >
        <!-- <div class="services__image">
          <img :src="`${imageURL}${item?.images[0]}`" alt="" />
        </div> -->
        <div class="services__content">
          <div class="services__content-logo">
            <img :src="`${imageURL}${item?.logo}`" alt="" />
          </div>
          <!-- <p>{{ translateName(item) }}</p> -->
          <!-- <h2>{{ translateName(item) }}</h2> -->
          <p style="color: #183a60; font-size: large; font-weight: 600">
            {{ translateName(item) }}
          </p>
        </div>
      </div>
    </div>
    <div class="services__button-wrapper">
      <button
        class="services__button"
        @click="$router.push(localeLocation('/products-services'))"
      >
        {{ $t("seeAll") }}
      </button>
    </div>
    <div class="relative mobile-button-circle-white">
      <BaseButtonProducts
        :url="'http://119.235.121.50:8090/kip/dshbrd/2.pdf'"
        primary
      >
        {{ $t("downloadFile") }}
      </BaseButtonProducts>
      <!-- <base-icon icon="circleCursor" class="circle-cursor" /> -->
      <div class="button-arrow-title">
        <h2 class="button-arrow-title__text">{{ $t("pdfDownloadFile") }}</h2>
        <base-icon icon="workBlackArrowMini" class="black-arrow-mini" />
      </div>
    </div>
  </div>
</template>

<script>
import translate from "@/mixins/translate";
import { mapGetters } from "vuex";
export default {
  mixins: [translate],
  computed: {
    ...mapGetters(["imageURL"]),
  },
  props: {
    items: {
      products: {
        type: Array,
        default: () => null,
      },
      services: {
        type: Array,
        default: () => null,
      },
    },
  },
  data() {
    return {
      observer: null,
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
.services {
  padding: 80px 100px 20px 100px;
  position: relative;
  @media (max-width: 767px) {
    padding: 50px 20px 0;
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
    text-align: center;
    margin-bottom: 30px;
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }

  &__item {
    cursor: pointer;
    &:hover {
      .services__image {
        transform: scale(1.02);
      }
    }
  }

  &__image {
    min-width: 50%;
    height: 160px;
    box-shadow: 0.1px 0.1px 2px 2px rgba(0, 0, 0, 0.2);
    transition: 0.2s all;
    text-align: center;
    img {
      max-width: 100%;
      width: auto;
      max-height: 100%;
      height: auto;
      object-fit: cover;
      display: inline-block;
      object-position: center;
    }
    @media (max-width: 767px) {
      width: 200px;
    }
    @media (max-width: 479px) {
      width: 100%;
    }
  }

  &__content {
    p {
      color: #000;
      font-size: 16px;
      font-weight: 300;
      text-transform: capitalize;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__content-logo {
    width: 250px;
    height: 125px;
    border-radius: 10px;
    border: 1px solid #bab8b8;
    background: #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    img {
      max-width: 80%;
      width: auto;
      height: auto;
      max-height: 80%;
      object-fit: cover;
      border-radius: 10px;
    }
    @media (max-width: 479px) {
      width: 100%;
      height: 130px;
    }
  }

  &__button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    @media (max-width: 767px) {
      margin-right: 10px;
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
  }
}
.mobile-button-circle-white {
  position: absolute;
  bottom: -3%;
  right: 10%;
}
.button-arrow-title {
  position: absolute;
  bottom: -30px;
  right: 50%;
  display: flex;
  align-items: flex-end;
  gap: 12px;

  &.left {
    right: auto;
    right: 56%;
  }
  .arrow-mobile {
    display: none;
  }
  @media (max-width: 767px) {
    bottom: auto;
    bottom: -40px;
    right: 70%;
    .arrow {
      display: none;
    }
    .arrow-mobile {
      display: block;
    }
  }
  &__text {
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    &.white {
      color: #fff;
    }
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }
}
.black-arrow-mini {
}
</style>

<template>
  <div class="about" ref="aos">
    <div class="about__left" />
    <div class="about__row" @click.stop="closeDropdown">
      <div class="about__logo">
        <img
          class="about__logo-image"
          src="@/assets/img/fb.svg"
          alt=""
          ref="image"
        />
      </div>
      <div class="about__content" ref="content">
        <h1 class="about__title">
          {{ translateTitle(aboutUs) }}
        </h1>
        <p class="about__description" v-html="translateContent(aboutUs)"></p>
        <div class="about__button-wrapper">
          <button
            @click="$router.push(localeLocation('/about'))"
            class="about__button"
          >
            {{ $t("readMore") }}
          </button>
        </div>
      </div>
      <div class="about__information-button" @click.stop>
        <div class="relative">
          <div
            @click.stop
            :class="['information-button-dropdown', { open: isVisible }]"
          >
            <div class="information-button-dropdown__items">
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="flag" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">
                    {{ aboutUs?.information?.info1.count }}
                  </p>
                  <h2 class="information-button-dropdown__title">
                    {{ translateTitle(aboutUs?.information?.info1) }}
                  </h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="twoGuy" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">
                    {{ aboutUs?.information?.info2.count }}
                  </p>
                  <h2 class="information-button-dropdown__title">
                    {{ translateTitle(aboutUs?.information?.info2) }}
                  </h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="guy" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">
                    {{ aboutUs?.information?.info3.count }}
                  </p>
                  <h2 class="information-button-dropdown__title">
                    {{ translateTitle(aboutUs?.information?.info3) }}
                  </h2>
                </div>
              </div>
              <div class="information-button-dropdown__item">
                <div class="information-button-dropdown__icon">
                  <base-icon icon="projects" />
                </div>
                <div class="information-button-dropdown__content">
                  <p class="information-button-dropdown__number">
                    {{ aboutUs?.information?.info4?.count }}
                  </p>
                  <h2 class="information-button-dropdown__title">
                    {{ translateTitle(aboutUs?.information?.info4) }}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <base-button-circle primary @clicked="isVisible = !isVisible">
            {{ $t("information") }}
          </base-button-circle>
          <div class="button-arrow-title">
            <base-icon icon="workBlackArrow" class="arrow" />
            <base-icon icon="arrowLeftMini" class="arrow-mobile" />
            <h2 class="button-arrow-title__text">
              {{ $t("informationAboutUs") }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import translate from "@/mixins/translate";
export default {
  props: {
    aboutUs: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [translate],
  data() {
    return {
      isVisible: false,
      isFullText: false,
      observer: null,
    };
  },

  methods: {
    closeDropdown() {
      this.isVisible = false;
    },
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
            this.$refs.image.classList.add("aos");
            this.$refs.content.classList.add("aos");
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
.about {
  position: relative;
  height: 100vh;
  @media (max-width: 767px) {
    height: 100%;
  }

  &__left {
    position: absolute;
    left: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background-color: var(--primary);
    z-index: -1;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 100%;
    position: relative;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__logo {
    max-width: 400px;
    height: 400px;
    margin-left: calc(25% - 20px);
    position: relative;
    img {
      width: 100%;
      height: 100%;
      transition: 1s all;
      transform: translateX(-80px);
      opacity: 0;
      &.aos {
        opacity: 1;
        transform: translateX(0px);
        transition: 1s all;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 550px;
      height: 550px;
      border-radius: 50%;
      left: -70px;
      top: -70px;
      border: 1px solid #e4e4e4;
      z-index: -2;
    }
    &::after {
      content: "";
      position: absolute;
      width: 650px;
      height: 650px;
      border-radius: 50%;
      left: -120px;
      top: -120px;
      border: 1px solid #e4e4e4;
      z-index: -2;
    }
    @media (max-width: 767px) {
      max-width: 180px;
      height: 180px;
      margin-left: calc(9% - 20px);
      margin-top: 40px;
      &::after,
      &::before {
        display: none;
      }
    }
  }

  &__content {
    margin-bottom: 30%;
    max-width: 627px;
    transition: 1s all;
    transform: translateY(80px);
    opacity: 1;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }

    @media (max-width: 767px) {
      max-width: 100%;
      margin: 0 10px;
      padding: 10px 20px;
      background-color: #fff;
    }
  }

  &__title {
    color: var(--text2);
    font-size: 30px;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: 0.45px;
    text-transform: capitalize;
    position: relative;
    padding-bottom: 7px;
    margin-bottom: 16px;
    display: inline-block;
    &::after {
      content: "";
      bottom: 0;
      left: 0;
      width: 80%;
      height: 1px;
      background-color: var(--red);
      position: absolute;
      animation: titleAnimate 2s linear infinite;
      @keyframes titleAnimate {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
          opacity: 0;
        }
      }
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__description {
    color: var(--text3);
    font-size: 20px;
    text-indent: 2.0em;
    text-align: justify;
    font-weight: 400;
    line-height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    line-clamp: 7;
    -webkit-box-orient: vertical;
    margin-bottom: 12px;
    &::-webkit-scrollbar-track {
      background-color: #d5d5d5;
      transition: 0.3s all;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      transition: 0.3s all;
    }

    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 20px;
      -webkit-line-clamp: 12;
      line-clamp: 12;
    }
  }

  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    color: var(--red);
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }

  &__information-button {
    position: absolute;
    right: 15%;
    bottom: 22%;
    @media (max-width: 767px) {
      top: 30%;
      right: 20%;
      height: 60px;
    }
  }
}
.button-arrow-title {
  position: absolute;
  bottom: -60px;
  right: -230%;
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
    opacity: 100;
    top: -40px;
    right: -100%;
    gap: 4px;
    .arrow {
      display: none !important;
    }
    .icon {
    }
    .arrow-mobile {
      display: block;
      rotate: -15deg;
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
      margin-bottom: 14px;
    }
  }
}
.information-button-dropdown {
  position: absolute;
  left: -100%;
  top: -130%;
  transition: 0.7s;
  transform: scale(-0.1);
  &.open {
    left: -250%;
    opacity: 1;
    transform: scale(1);
  }
  @media (max-width: 767px) {
    left: -60%;
  }
  &__items {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 20px;
    border-radius: 52px;
    background: rgba(24, 58, 96, 0.1);
    backdrop-filter: blur(30.5px);
    &:nth-child(2) {
      transform: translateX(-60px);
    }
    &:nth-child(3) {
      transform: translateX(-30px);
    }
    &:last-child {
      transform: translateX(60px);
    }
    @media (max-width: 767px) {
      padding: 4px 14px;
    }
  }

  &__icon {
    @media (max-width: 767px) {
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  &__content {
  }

  &__number {
    color: var(--primary);
    font-size: 18px;
    font-weight: 700;
    line-height: 120%;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__title {
    color: var(--red);
    font-size: 16px;
    font-weight: 500;
    line-height: 120%;
    text-transform: capitalize;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
</style>

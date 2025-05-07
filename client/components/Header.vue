<template>
  <header class="header">
    <div class="header__container">
      <div class="header__body">
        <div
          :class="['burger-wrapper', { open: openLanguages }]"
          @click="toggleLanguages"
        >
          <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="languages" @mouseleave="openLanguages = false">
            <div class="languages__icon">
              <base-icon icon="closeIcon" @clicked="toggleLanguages" />
            </div>
            <div class="languages__block">
              <h2 class="languages__title">{{ $t("lan") }}</h2>
              <div class="languages__link-wrapper">
                <nuxt-link
                  v-for="locale in selectedLocale"
                  exact
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="languages__link"
                >
                  {{ locale.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <nav class="menu">
          <div class="menu__body">
            <ul class="menu__list">
              <li class="menu__item" v-for="link in links" :key="link.id">
                <a
                  :href="link.url"
                  :class="['menu__link', { active: link.id === link.url }]"
                >
                  {{ $t(link.name) }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="burger-wrapper-mobile">
      <div
        :class="['burger-mobile', { active: openMobileMenu }]"
        @click="showBody"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav
      :class="['mobile-menu', { active: openMobileMenu }]"
      @click="closeBody"
    >
      <div class="mobile-menu__body" @click.stop>
        <ul class="mobile-menu__list">
          <li class="menu__item" v-for="link in links" :key="link.id">
            <a
              :href="link.url"
              @click="closeBody"
              :class="['mobile-menu__link', { active: link.id === link.url }]"
            >
              <!-- {{ link.name }} -->
              {{ $t(link.name) }}
            </a>
          </li>
        </ul>
        <div class="mobile-languages">
          <div class="mobile-languages__block">
            <h2 class="mobile-languages__title">Language</h2>
            <div class="mobile-languages__link-wrapper">
              <nuxt-link
                v-for="locale in selectedLocale"
                exact
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                class="mobile-languages__link"
              >
                {{ locale.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => null,
    },
  },
  data() {
    return {
      linkActive: null,
      openLanguages: false,
      openMobileMenu: false,
    };
  },
  mounted() {
    // console.log(this.selectedLocale);
  },
  computed: {
    selectedLocale() {
      return this.$i18n.locales;
    },
  },
  watch: {
    $route(to, from) {
      setTimeout(() => {
        this.closeBody();
      }, 100);
    },
  },

  methods: {
    toggleLanguages() {
      this.openLanguages = !this.openLanguages;
    },

    showBody() {
      if (document.querySelector(".wrapper").classList.contains("_lock")) {
        document.querySelector(".wrapper").classList.remove("_lock");
      } else {
        document.querySelector(".wrapper").classList.add("_lock");
      }
      this.openMobileMenu = !this.openMobileMenu;
    },
    closeBody() {
      document.querySelector(".wrapper").classList.remove("_lock");
      this.openMobileMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  cursor: auto;
  @media (max-width: 767px) {
    left: 0;
    top: 0;
    padding: 20px 40px;
    background: #183a60e9;
    width: 100%;
    transform: translate(0);
  }

  &__container {
    margin: 0 auto;
    border: 1px solid var(--primary);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(31px);
    padding: 10px;
    max-width: 1300px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__body {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .burger-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    min-width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &.open {
      .languages {
        transform: translate(0, 0);
        opacity: 1;
        pointer-events: auto;
        transition: 0.2s all;
        z-index: 10;
      }
    }
  }

  .burger {
    cursor: pointer;
    min-width: 23px;
    height: 16px;
    position: relative;
    z-index: 200;
    background-color: transparent;
    display: flex;
    justify-content: center;

    span {
      background-color: #fff;
    }
    span {
      height: 2px;
      position: absolute;
      border-radius: 10px;
      background-color: #fff;
      transition: 0.1s;
      &:nth-child(1) {
        top: 0;
        width: 100%;
        transition: 0.1s;
      }
      &:nth-child(2) {
        top: calc(50% - 1px);
        width: 100%;
        left: -6px;
        transition: 0.1s;
      }
      &:nth-child(3) {
        top: calc(100% - 2px);
        width: 100%;
        transition: 0.1s;
      }
    }
    &.active {
      min-width: 30px;

      span {
        transition: 0.1s;
        background-color: #fff;

        &:nth-child(1) {
          top: 50%;
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          top: 50%;
        }
      }
    }
  }
}
.menu {
  @media (max-width: 767px) {
    display: none;
  }
  &__body {
  }

  &__list {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  &__item {
  }

  &__link {
    padding: 10px;
    border-radius: 99px;
    color: var(--text);
    font-size: 18px;
    font-weight: 500;
    display: block;
    white-space: nowrap;
    transition: 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.09);
    }
    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background: rgba(255, 255, 255, 0.2);
      color: var(--text);
    }
    @media (max-width: 992px) {
      color: white;
    }
  }
}
.languages {
  position: absolute;
  left: -20px;
  top: calc(100% + 25px);
  width: 248px;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--primary);
  backdrop-filter: blur(30.5px);
  z-index: 10;
  transform: translate(-10px, -10px);
  opacity: 0;
  pointer-events: none;
  box-shadow: 0.2px 0.2px 4px #fff;
  transition: 0.1s all;
  &__icon {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  &__block {
    padding: 5px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
  }

  &__title {
    margin-bottom: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
  }

  &__link-wrapper {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  &__link {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 14px;
    transition: 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.09);
    }
    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
  }
}
.mobile-menu {
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: -100%;
    top: 0;
    &.active {
      left: 0;
      .mobile-menu__body {
        left: 0;
      }
    }
  }
  &__body {
    position: fixed;
    left: -90%;
    top: 0;
    width: 90%;
    height: 100vh;
    z-index: 1000;
    background-color: var(--primary);
    padding: 100px 40px 30px 40px;
    display: block;
    transition: 0.4s all;
    display: flex;
    flex-direction: column;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex: 1 1 auto;
    overflow-y: auto;
  }

  &__item {
  }

  &__link {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    text-transform: initial;
    padding: 10px;
    border-radius: 20px;
    text-transform: capitalize;

    &.active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
.burger-wrapper-mobile {
  display: none;
  @media (max-width: 767px) {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 201;
  }
}
.burger-mobile {
  cursor: pointer;
  width: 24px;
  height: 16px;
  position: relative;
  z-index: 200;
  background-color: transparent;
  display: flex;
  justify-content: center;
  transition: 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  span {
    background-color: #fff;
  }
  span {
    height: 2px;
    position: absolute;
    border-radius: 10px;
    background-color: #fff;
    transition: 0.1s;
    &:nth-child(1) {
      top: 0;
      width: 100%;
      transition: 0.1s;
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
      width: 100%;
      left: -10px;
      transition: 0.1s;
    }
    &:nth-child(3) {
      top: calc(100% - 2px);
      width: 100%;
      transition: 0.1s;
    }
  }
  &.active {
    width: 24px;

    span {
      transition: 0.1s;
      background-color: #fff;

      &:nth-child(1) {
        top: 50%;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 50%;
      }
    }
  }
}
.mobile-languages {
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);

  &__block {
  }

  &__title {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__link-wrapper {
    display: flex;
  }

  &__link {
    border-radius: 99px;
    color: #fff;
    padding: 5px 10px;
    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>

<template>
  <header :class="['header', { 'header--white': isPlaying, 'header--scrolled': isScrolled }]">
    <!-- liquid glass svg -->
    <svg style="display: none">
      <filter id="displacementFilter">
        <feImage
          href="data:image/png;base64,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"
          preserveAspectRatio="none"
        />

        <!-- <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" result="turbulence"/> -->

        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="200"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>

    <div class="header__container" :style="{ '--shine-x': shineX + '%' }">
      <div class="header__glass"></div>
      <div class="header__body">
        <div :class="['burger-wrapper', { open: openLanguages }]" @click="toggleLanguages">
          <div class="burger">
            <svg class="icon" viewBox="0 0 48 48" role="img" aria-label="Globe icon">
              <path d="M0 0h48v48H0z" fill="none" />
              <path
                fill="currentColor"
                d="M23.99 4c-11.05 0-19.99 8.95-19.99 20s8.94 20 19.99 20c11.05 0 20.01-8.95 20.01-20s-8.96-20-20.01-20zm13.85 12h-5.9c-.65-2.5-1.56-4.9-2.76-7.12 3.68 1.26 6.74 3.81 8.66 7.12zm-13.84-7.93c1.67 2.4 2.97 5.07 3.82 7.93h-7.64c.85-2.86 2.15-5.53 3.82-7.93zm-15.48 19.93c-.33-1.28-.52-2.62-.52-4s.19-2.72.52-4h6.75c-.16 1.31-.27 2.64-.27 4 0 1.36.11 2.69.28 4h-6.76zm1.63 4h5.9c.65 2.5 1.56 4.9 2.76 7.13-3.68-1.26-6.74-3.82-8.66-7.13zm5.9-16h-5.9c1.92-3.31 4.98-5.87 8.66-7.13-1.2 2.23-2.11 4.63-2.76 7.13zm7.95 23.93c-1.66-2.4-2.96-5.07-3.82-7.93h7.64c-.86 2.86-2.16 5.53-3.82 7.93zm4.68-11.93h-9.36c-.19-1.31-.32-2.64-.32-4 0-1.36.13-2.69.32-4h9.36c.19 1.31.32 2.64.32 4 0 1.36-.13 2.69-.32 4zm.51 11.12c1.2-2.23 2.11-4.62 2.76-7.12h5.9c-1.93 3.31-4.99 5.86-8.66 7.12zm3.53-11.12c.16-1.31.28-2.64.28-4 0-1.36-.11-2.69-.28-4h6.75c.33 1.28.53 2.62.53 4s-.19 2.72-.53 4h-6.75z"
              />
            </svg>
          </div>
          <div class="languages">
            <div class="languages__block">
              <h2 class="languages__title">{{ $t('lan') }}</h2>
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
              <li
                class="menu__item"
                v-for="link in links"
                :key="link.id"
                @mouseenter="linkActive = link.id"
                @mouseleave="linkActive = null"
              >
                <a :href="link.url" :class="['menu__link', { active: link.id === link.url }]">
                  {{ $t(link.name) }}
                </a>
                <div
                  style="
                    position: absolute;
                    display: inline-block;
                    width: auto;
                    vertical-align: top;
                  "
                >
                  <div
                    v-if="link.items && linkActive === link.id"
                    class="dropdown-overlay"
                    :style="{
                      position: 'absolute',
                      top: 'calc(100% + 1px)',
                      left: '0',
                      zIndex: 9999,
                      pointerEvents: 'auto',
                      minWidth: '220px',
                      whiteSpace: 'nowrap',
                      animation: 'dropdownFadeIn 0.25s ease-out',
                    }"
                  >
                    <div
                      class="dropdown-panel"
                      :style="{
                        background: 'linear-gradient(135deg, var(--primary) 0%, #1a4d7a 100%)',
                        padding: '16px 18px',
                        borderRadius: '14px',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }"
                    >
                      <div
                        class="dropdown-items"
                        :style="{
                          columnCount:
                            link.items && link.items.length > 0
                              ? Math.max(1, Math.ceil(link.items.length / 10))
                              : 1,
                          columnGap: '20px',
                        }"
                      >
                        <div
                          v-for="value in link.items"
                          :key="value.id"
                          class="dropdown-item"
                          style="
                            break-inside: avoid;
                            display: block;
                            margin-bottom: 8px;
                            color: #fff;
                            padding: 8px 12px;
                            border-radius: 8px;
                            transition: all 0.2s ease;
                            cursor: pointer;
                            font-size: 15px;
                            font-weight: 500;
                          "
                          @mouseenter="
                            $event.target.style.background = 'rgba(255, 255, 255, 0.15)';
                            $event.target.style.transform = 'translateX(4px)';
                          "
                          @mouseleave="
                            $event.target.style.background = 'transparent';
                            $event.target.style.transform = 'translateX(0)';
                          "
                        >
                          <a
                            :href="link.path + value.slug"
                            :key="value.id"
                            style="text-decoration: none !important; color: inherit !important"
                          >
                            {{ $t(value.name) }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <div class="burger-wrapper-mobile">
      <div :class="['burger-mobile', { active: openMobileMenu }]" @click="showBody">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav :class="['mobile-menu', { active: openMobileMenu }]" @click="closeBody">
      <div class="mobile-menu__body" @click.stop>
        <ul class="mobile-menu__list">
          <li class="menu__item" v-for="link in links" :key="link.id">
            <a
              :href="link.url"
              @click="closeBody"
              :class="['mobile-menu__link', { active: link.id === link.url }]"
              style="text-transform: capitalize"
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
    isPlaying: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      linkActive: null,
      openLanguages: false,
      openMobileMenu: false,
      openProducts: false,
      isScrolled: false,
      scrollY: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    selectedLocale() {
      return this.$i18n.locales;
    },
    shineX() {
      // light sweep moves across the glass as you scroll
      return ((this.scrollY / 5) % 200) - 50;
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
    handleScroll() {
      this.scrollY = window.scrollY;
      this.isScrolled = this.scrollY > 50;
    },
    toggleLanguages() {
      this.openLanguages = !this.openLanguages;
    },
    showBody() {
      if (document.querySelector('.wrapper').classList.contains('_lock')) {
        document.querySelector('.wrapper').classList.remove('_lock');
      } else {
        document.querySelector('.wrapper').classList.add('_lock');
      }
      this.openMobileMenu = !this.openMobileMenu;
    },
    closeBody() {
      document.querySelector('.wrapper').classList.remove('_lock');
      this.openMobileMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
ul li {
  list-style: none;
}

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
    position: relative;
    overflow: visible;
    border-radius: 20px;
    padding: 10px;
    max-width: 1500px;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    border-top-color: rgba(255, 255, 255, 0.7);
    border-left-color: rgba(255, 255, 255, 0.6);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-right-color: rgba(255, 255, 255, 0.25);
    // background: rgba(182, 192, 214, 0.4);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.55) 0%,
      rgba(255, 255, 255, 0.25) 40%,
      rgba(255, 255, 255, 0.15) 100%
    );
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.08),
      0 2px 8px rgba(0, 0, 0, 0.04),
      inset 0 1px 1px rgba(255, 255, 255, 0.8),
      inset 0 -1px 1px rgba(255, 255, 255, 0.15);
    backdrop-filter: brightness(1.5) blur(2px) url(#displacementFilter);

    @media (max-width: 767px) {
      display: none;
    }
  }

  .header__glass {
    position: absolute;
    inset: 0;
    overflow: hidden;
    border-radius: inherit;
    pointer-events: none;
  }

  &__body {
    display: flex;
    gap: 14px;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .burger-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, var(--primary) 0%, #1a4d7a 100%);
    min-width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: scale(1.02);
    }

    &.open {
      .languages {
        transform: translate(0, 0);
        opacity: 1;
        pointer-events: auto;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
    align-items: center;
    color: white;
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

  &__list {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
    align-items: center;
  }

  &__item {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 70%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--primary), transparent);
      border-radius: 2px;
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: translateX(-50%) scaleX(1);
    }
  }

  &__link {
    padding: 12px 18px;
    border-radius: 12px;
    color: var(--text);
    font-size: 17px;
    font-weight: 500;
    display: block;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    letter-spacing: 0.02em;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    &:active {
      transform: translateY(0);
    }

    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
      color: var(--text);
      font-weight: 600;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 992px) {
      color: white;
    }
  }
}

.header--white {
  .menu__link {
    color: #fff;
  }
}
.languages {
  position: absolute;
  left: -20px;
  top: calc(100% + 25px);
  width: 248px;
  padding: 14px 20px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary) 0%, #1a4d7a 100%);
  backdrop-filter: blur(30.5px);
  z-index: 10;
  transform: translate(-10px, -10px);
  opacity: 0;
  pointer-events: none;
  box-shadow:
    0 12px 32px rgba(0, 0, 0, 0.25),
    0 2px 8px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &__icon {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  &__block {
    padding: 8px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
  }

  &__title {
    margin-bottom: 12px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.03em;
  }

  &__link-wrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  &__link {
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateY(0);
    }

    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
      color: #fff;
      font-weight: 600;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);
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
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    transition: left 0.4s ease;

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
    background: linear-gradient(180deg, var(--primary) 0%, #1a4d7a 100%);
    padding: 100px 40px 30px 40px;
    display: block;
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.3);
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1 1 auto;
    overflow-y: auto;
    padding-right: 10px;

    /* Custom scrollbar */
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;

      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }

  &__link {
    color: #fff;
    font-size: 19px;
    font-weight: 500;
    line-height: normal;
    text-transform: initial;
    padding: 14px 18px;
    border-radius: 12px;
    text-transform: capitalize;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: block;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%) scaleX(0);
      width: 4px;
      height: 60%;
      background: #fff;
      border-radius: 0 4px 4px 0;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(6px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
      transform: translateX(4px) scale(0.98);
    }

    &.active {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
      font-weight: 600;
      box-shadow:
        0 4px 12px rgba(0, 0, 0, 0.2),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);

      &::before {
        transform: translateY(-50%) scaleX(1);
      }
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
  padding: 14px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &__title {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: 0.03em;
  }

  &__link-wrapper {
    display: flex;
    gap: 8px;
  }

  &__link {
    border-radius: 10px;
    color: #fff;
    padding: 8px 16px;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }

    &.nuxt-link-active,
    &.nuxt-link-exact-active {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
      font-weight: 600;
      box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }
  }
}

/* Dropdown animation keyframes */
@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <div class="about-page" ref="aos">
    <div class="about-page__container">
      <div class="about-page__row">
        <div class="about-page__back">
          <base-icon
            icon="arrowLeft"
            class="project-icon"
            @clicked="$router.back(localeLocation(-1))"
          />
        </div>
        <div class="about-page__content" ref="images">
          <h1 class="about-page__title">
            {{ translateTitle(aboutUs) }}
          </h1>
          <p
            class="about-page__description"
            v-html="translateContent(aboutUs)"
            style="text-align: justify; line-height: 1.5em; text-indent: 2em;"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ABOUT } from "@/api/home.api";
import translate from "@/mixins/translate";

export default {
  data() {
    return {
      observer: null,
      aboutUs: null,
    };
  },
  mixins: [translate],

  async mounted() {
    await this.fetchAbout();
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
          }
        });
      }, options);
    }
    this.observer.observe(this.$refs.aos);
  },
  destroyed() {
    this.observer.disconnect();
  },

  methods: {
    async fetchAbout() {
      try {
        const { data, statusCode } = await GET_ABOUT();
        if (statusCode) {
          this.aboutUs = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.about-page {
  padding: 100px 0;
  @media (max-width: 767px) {
    padding: 40px 0;
  }

  &__container {
  }

  &__row {
    display: grid;
    grid-template-columns: minmax(100px, 250px) 1fr;
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__back {
    width: 50px;
    height: 50px;
    .project-icon {
      transition: 0.3s;
      border-radius: 50%;
      animation: arrowAnimate 2s infinite linear alternate;
      padding: 6px;
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
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  &__content {
    padding-top: 30px;
    max-width: 600px;
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      padding-top: 0;
    }
  }

  &__title {
    position: relative;
    padding-bottom: 5px;
    color: var(--primary);
    font-family: "Oxanium";
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.39px;
    display: inline-block;
    margin-bottom: 10px;
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
  }

  &__description {
    color: var(--text-3);
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    @media (max-width: 479px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
}
</style>

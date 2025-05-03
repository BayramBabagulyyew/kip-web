<template>
  <div class="projects" ref="aos">
    <div class="projects__title-wrapper">
      <h1 class="projects__title">{{ $t("projects") }}</h1>
    </div>
    <div class="projects__row" ref="images">
      <div
        class="projects__item"
        v-for="project in projects"
        :key="project.projectId"
        @click="$router.push(localeLocation(`/projects/${project.projectId}`))"
      >
        <div class="projects__image">
          <img :src="`${imageURL}${project?.cover}`" alt="" />
        </div>
        <h1 class="projects__item-title">
          {{ translateName(project) }}
        </h1>
      </div>
    </div>
    <div class="projects__button-wrapper">
      <button
        class="projects__button"
        @click="$router.push(localeLocation('/projects'))"
      >
        {{ $t("seeAll") }}
      </button>
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
    projects: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      observer: null,
      id: 1,
      sliders: [
        {
          image: "engineering_1.jpg",
          title: "СF / BCF YARNS",
        },
        {
          image: "engineering_2.jpg",
          title: "СF / BCF YARNS",
        },
      ],
      telecom: [
        {
          image: "telecom_2.png",
          title: "СF / BCF YARNS",
        },
        {
          image: "projects_1.jpg",
          title: "СF / BCF YARNS",
        },
      ],
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
.swiper-block {
  &__title {
    color: var(--red);
    font-size: 34px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 20px;
    transition: 0.3s;
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 12px;
    }
  }
}
.projects {
  width: 100vw;
  height: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px) {
    padding-top: 70px;
    height: 100%;
  }
  &__title-wrapper {
    text-transform: capitalize;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    @media (max-width: 767px) {
      position: relative;
      top: 0;
      left: 20px;
      transform: none;
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
          width: 120%;
          opacity: 0;
        }
      }
    }
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin: 150px 100px 20px 100px;
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 992px) {
      max-width: 1100px;
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      margin: 0 20px;
      height: auto;
    }
  }

  &__item {
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.04);
    }
  }

  &__image {
    height: 230px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item-title {
    font-size: 18px;
    margin-top: 10px;
    font-weight: 500;
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__button-wrapper {
    max-width: 1200px;
    margin: 0 100px 0 auto;
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
</style>

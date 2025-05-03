<template>
  <div class="news" ref="aos" style="margin-top: 90px;">
    <div class="news__row" ref="row">
      <div class="news__left">
        <div class="news__left-items">
          <div
            class="news__left-item"
            v-for="item in news.news"
            :key="item.newsId"
            @click="$router.push(localeLocation(`/news/${item.newsId}`))"
          >
            <div class="news__left-item-image">
              <img :src="`${imageURL}${item?.image}`" alt="" />
            </div>
            <div class="news__left-item-content">
              <h1 class="news__left-item-title">
                {{ translateTitle(item) }}
              </h1>
              <p
                class="news__left-item-description"
                v-html="translateContent(item)"
              ></p>
              <p class="news__left-item-date">{{ new Date(item.createdAt).toLocaleDateString() }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="news__center">
        <div class="news__center-image">
          <img :src="`${imageURL}${news?.mainNews?.image}`" alt="" />
        </div>
        <div class="news__center-content">
          <h1 class="news__center-title">
            {{ translateTitle(news?.mainNews) }}
          </h1>
          <p
            class="news__center-description"
            v-html="translateContent(news?.mainNews)"
          ></p>
          <p class="news__center-date">{{ new Date(news?.mainNews?.createdAt).toLocaleDateString() }}</p>
        </div>
      </div>
      <div class="news__right">
        <h1 class="news__right-title">{{ $t("news") }}</h1>

        <!-- <h2 class="news__right-subtitle">{{ $t("newsCompany") }}</h2> -->

        <!-- <button @click="$router.push('/news')" class="news__watch-button">
          {{ $t("seeAll") }}
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import translate from "@/mixins/translate";
import { mapGetters } from "vuex";

export default {
  props: {
    news: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [translate],
  computed: {
    ...mapGetters(["imageURL"]),
  },
  data() {
    return {
      observer: null,
      editor: null,
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
            this.$refs.row.classList.add("aos");
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
.news {
  width: 100%;
  padding-top: 30px;
  &.active {
    .video-wrapper {
      opacity: 1;
      pointer-events: auto;
      transition: 0.3s;
      video {
        transform: scale(1);
        transition: 0.3s;
      }
    }
  }
  .video-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    z-index: 320;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    cursor: auto;
    video {
      width: 80%;
      height: 70%;
      background: rgba(0, 0, 0, 0.7);
      transform: scale(-0.4);
      transition: 0.3s;
    }
    @media (max-width: 767px) {
      video {
        width: 90%;
        height: 50%;
      }
    }
  }

  &__row {
    display: grid;
    grid-template-columns: minmax(250px, 328px) 1fr minmax(250px, 328px);
    gap: 50px;
    height: 100%;
    align-items: center;
    margin: 0 40px;
    padding: 40px 0 20px;
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
      gap: 0;
      margin: 0 15px;
      padding: 50px 0 0 0;
    }
  }

  &__left {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      height: 85vh;
      width: 1px;
      background-color: rgba(223, 222, 222, 0.24);
    }
    @media (max-width: 767px) {
      order: 3;
      height: 100%;
      margin-top: 30px;
      &::-webkit-scrollbar-track {
        background-color: #d5d5d5;
        transition: 0.3s all;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        transition: 0.3s all;
      }
      &::after {
        display: none;
      }
    }
  }

  &__left-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__left-item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      transform: scale(1.06);
    }
  }

  &__left-item-image {
    min-width: 130px;
    height: 100px;
    background-color: #183a6079;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  &__left-item-content {
  }

  &__left-item-title {
    color: var(--text2);
    font-size: 12px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: 0.21px;
    text-transform: initial;
    margin-bottom: 4px;
  }

  &__left-item-description {
    color: var(--text3);
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 2px;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__left-item-date {
    color: var(--text3);
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    text-align: right;
  }

  &__center {
    @media (max-width: 767px) {
      order: 2;
      margin-top: 0;
    }
  }

  &__center-image {
    width: 100%;
    height: 50vh;
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
    @media (max-width: 767px) {
      height: 250px;
    }
  }

  &__center-content {
    margin-top: 20px;
  }

  &__center-title {
    color: var(--text2);
    font-size: 26px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.39px;
    text-transform: initial;
    margin-bottom: 6px;
  }

  &__center-description {
    color: var(--text3);
    font-size: 16px;
    text-align: justify;
    text-indent: 2em;
    font-weight: 500;
    line-height: 1.5em;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    line-clamp: 8;
    -webkit-box-orient: vertical;
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 10px;
      -webkit-line-clamp: 4;
      line-clamp: 4;
    }
  }

  &__center-date {
    color: var(--text3);
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    text-align: right;
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &__right {
    position: relative;
    height: 100%;
    &::after {
      content: "";
      position: absolute;
      left: -25px;
      top: 50%;
      transform: translateY(-50%);
      height: 85vh;
      width: 1px;
      background-color: rgba(223, 222, 222, 0.24);
    }
    @media (max-width: 767px) {
      order: 1;
      margin-bottom: 30px;
    }
  }

  &__right-title {
    color: var(--text2);
    font-size: 30px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.45px;
    text-transform: capitalize;
    padding-bottom: 7px;
    position: relative;
    margin-bottom: 30px;
    display: flex;
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
          width: 110%;
          opacity: 0;
        }
      }
    }

    @media (max-width: 767px) {
      font-size: 24px;
      margin-bottom: 10px;
      &::after {
        width: 130%;
      }
    }
  }

  &__right-subtitle {
    color: var(--primary);
    font-size: 34px;
    font-weight: 400;
    line-height: 120%;
    @media (max-width: 767px) {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }

  &__right-button {
    position: absolute;
    top: 50%;
    left: 13%;

    @media (max-width: 767px) {
      top: -30%;
      right: 10%;
      left: auto;
    }
  }

  &__watch-button {
    position: absolute;
    bottom: 0;
    right: 40px;
    color: var(--red);
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
    background-color: transparent;
    transition: 0.2s all;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 767px) {
      position: relative;
      right: auto;
      bottom: auto;
    }
  }
}
.button-arrow-title {
  position: absolute;
  bottom: -80px;
  right: -170%;
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 767px) {
    right: -72%;
    gap: 8px;
    span {
      width: 24px;
      margin-bottom: 4px;
      &:deep() {
        svg {
          width: 24px;
        }
      }
    }
  }

  &.left {
    right: auto;
    right: 56%;
  }
  &__text {
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    &.white {
      color: #fff;
    }
    @media (max-width: 767px) {
      font-size: 10px;
      margin-top: 3px;
    }
  }
}
</style>

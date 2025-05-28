<template>
  <div class="news-page">
    <div class="__container">
      <div class="news-page__back">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.back(localeLocation(-1))"
        />
      </div>
    </div>
    <div class="news-page__items">
      <div v-for="item in news" :key="item.newsId">
        <!-- @click="$router.push(`/news/${item.newsId}`)" -->
        <a :href="`/news/${item.newsId}`" class="news-page__item">
          <div class="news-page__image">
            <img :src="`${imageURL}${item?.image}`" alt="" />
          </div>
          <div class="news-page__content">
            <h1 class="news-page__title">
              {{ item?.[translator('title')] }}
            </h1>
            <div class="news-page__description" v-html="item?.[translator(`content`)]"></div>
            <p class="news-page__date">
              {{ new Date(item.createdAt).toLocaleDateString() }}
            </p>
          </div>
        </a>
      </div>
    </div>
    <base-pagination
      v-if="paginationCount > 1"
      :modelValue="page"
      @clickPage="(pagination) => updatePage(pagination)"
      :pageCount="paginationCount"
    />
  </div>
</template>

<script>
import translate from '@/mixins/translate';
import { mapGetters } from 'vuex';
import { GET_NEWS_ALL } from '~/api/home.api';

export default {
  mixins: [translate],
  computed: {
    ...mapGetters(['imageURL']),
  },
  data() {
    return {
      news: [],
      page: 1,
      limit: 10,
      paginationCount: 0,
    };
  },

  async fetch() {
    await this.fetchNews();
  },

  methods: {
    async fetchNews(page = 1) {
      try {
        const { success, data } = await GET_NEWS_ALL({
          limit: this.limit,
          page: page,
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.news = data.rows || [];
      } catch (error) {
        console.log(error);
      }
    },
    async updatePage(p) {
      this.page = p;
      await this.fetchNews(p);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-page {
  padding: 40px 0;
  @media (max-width: 767px) {
    padding: 30px 0;
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

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 40px;
    margin-top: 30px;
    max-width: 1200px;
    margin: 30px auto 0;
    padding: 0 20px;
    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }

  &__item {
    display: grid;
    grid-template-columns: minmax(100px, 160px) 1fr;
    // background-color: red;
    // height: 130px;
    gap: 10px;
    align-items: center;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
      transform: scale(1.04);
    }
    @media (max-width: 767px) {
      cursor: none;
    }
  }

  &__image {
    height: 130px;
    border-radius: 4px;
    background-color: #183a6079;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 4px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 130px;
  }

  &__title {
    color: var(--primary);
    font-family: 'Oxanium';
    font-size: 14px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.21px;
    margin-bottom: 4px;
  }

  &__description {
    color: var(--text3);
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 8px;
    flex: 1 1 auto;

    &:deep() {
      p {
        display: none;
        &:first-child {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          word-wrap: break-word; /* Ensures long words wrap */
          overflow-wrap: break-word; /* Same as above, more modern */
          hyphens: auto;
          line-clamp: 3; /* Removed for Chrome compatibility */
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  &__date {
    color: var(--text3);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    text-align: right;
  }
}
</style>

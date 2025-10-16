<template>
  <div class="partners-page">
    <div class="__container">
      <div class="partners-page__back">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.back(localeLocation(-1))"
        />
      </div>
    </div>
    <div class="partners-page__items">
      <div v-for="item in datas" :key="item.slug">
        <!-- @click="$router.push(`/partners/${item.slug}`)" -->
        <a :href="`/partners/${item.slug}`" class="partners-page__item">
          <div class="partners-page__image">
            <img :src="`${imageURL}${item?.fileUrl}`" :alt="item.slug" />
          </div>
          <!--          <div class="partners-page__content">-->
          <!--            <h1 class="partners-page__title">-->
          <!--              {{ item?.[translator('name')] }}-->
          <!--            </h1>-->
          <!--            <div-->
          <!--              class="partners-page__description"-->
          <!--              v-html="cropText(item?.[translator(`text`)], item?.[translator('name')]?.length)"-->
          <!--            ></div>-->
          <!--          </div>-->
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
import { request } from '@/api/generic.api';
import translate from '@/mixins/translate';
import { mapGetters } from 'vuex';

export default {
  mixins: [translate],
  computed: {
    ...mapGetters(['imageURL']),
  },
  data() {
    return {
      datas: [],
      page: 1,
      limit: 10,
      paginationCount: 0,
    };
  },

  methods: {
    async fetchData(page = 1) {
      try {
        const { success, data } = await request({
          method: 'GET',
          url: 'partner',
          params: { page, limit: this.limit },
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.datas = data.rows || [];
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
      setTimeout(() => {
        this.activePupUp = false;
        this.errorPupUp = false;
      }, 2000);
    },
    cropText(text, length) {
      const leftLeng = 200 - length;
      if (!text) return '';
      return text.length > leftLeng ? text.slice(0, leftLeng) + '...' : text;
    },
    async updatePage(p) {
      this.page = p;
      await this.fetchNews(p);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.partners-page {
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
    row-gap: 50px;
    margin: 2% 20% 0;
    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }

  &__item {
    display: grid;
    max-width: 250px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    transition: 0.3s all;
    cursor: pointer;
    &:hover {
      transform: scale(1.04);
    }
    margin: 0 5% 0;
    @media (max-width: 767px) {
      cursor: none;
    }
  }

  &__image {
    height: 130px;
    border-radius: 4px;
    // background-color: #b0d5ff79;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 4px;
    }
  }

  &__title {
    color: var(--primary);
    font-size: 14px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.21px;
    margin-bottom: 4px;
  }

  &__description {
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

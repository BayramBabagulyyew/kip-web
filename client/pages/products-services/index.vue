<template>
  <div class="services" ref="aos">
    <div class="services__container">
      <div class="services__top">
        <base-icon
          icon="arrowLeft"
          class="projects__icon"
          @clicked="$router.push(localeLocation('/'))"
        />
        <h1 class="projects__title">{{ $t('productsServices') }}</h1>
      </div>
      <div class="services__row" ref="images">
        <div class="services__item" v-for="item in items" :key="item.id">
          <!-- @click="$router.push(localeLocation(`/products-services/${item?.id}`))" -->
          <!-- <div class="services__image">
            <img :src="`${imageURL}${item?.images[0]}`" alt="" />
          </div> -->
          <a :href="`/products-services/${item?.id}`">
            <div class="services__content">
              <div class="services__content-logo">
                <img :src="`${imageURL}${item?.logo}`" alt="" />
              </div>
              <!-- <p>{{ translateName(item) }}</p> -->
              <p
                style="color: #183a60; font-size: large; font-weight: 600; text-transform: initial"
              >
                {{ item[translator('name')] }}
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
      ></base-pagination>
    </div>
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
      page: 1,
      limit: 12,
      paginationCount: 0,
      observer: null,
      items: [],
    };
  },
  async mounted() {
    await this.fetchProducts();
    if (this.$refs.aos) {
      const options =
        {
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.4,
        } || {};
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting) {
            this.$refs.images.classList.add('aos');
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
    async fetchProducts() {
      try {
        const { success, data } = await request({
          url: 'services',
          method: 'PATCH',
          data: {
            page: this.page,
            limit: this.limit,
          },
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.items = data.rows || [];
      } catch (error) {
        console.log(error);
      }
    },
    async updatePage(p) {
      this.page = p;
      await this.fetchProducts();
    },
  },
};
</script>

<style lang="scss" scoped>
.services {
  margin-bottom: 30px;
  &__container {
    max-width: 1165px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__top {
    display: flex;
    margin-top: 100px;
    gap: 50px;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 767px) {
      gap: 30px;
      margin-top: 30px;
      margin-bottom: 40px;
    }
  }
  &__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    @media (min-width: 767px) {
      transition: 1s all;
      transform: translateY(120px);
      opacity: 0;
      &.aos {
        opacity: 1;
        transform: translateY(0px);
        transition: 1s all;
      }
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding: 0;
      gap: 24px;
    }
  }

  &__item {
    cursor: pointer;
    height: 180px;
    &:hover {
      .services__image {
        transform: scale(1.03);
      }
    }
  }

  &__image {
    box-shadow: 0.1px 0.1px 2px 2px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    img {
      width: 100%;
      // width: auto;
      display: flex;
      height: 100%;
      object-fit: cover;
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
      font-size: 18px;
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
    width: 180px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #bab8b8;
    background: #ebebeb;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
    @media (max-width: 479px) {
      width: 100%;
      height: 150px;
    }
  }
}
</style>

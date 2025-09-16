<template>
  <div class="news-id">
    <div class="news-id__container">
      <div class="news-id__back">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.back(localeLocation(-1))"
        />
      </div>
      <div class="news-id__box">
        <div class="news-id__image">
          <img
            :src="`${imageURL}${data?.fileUrl}`"
            :alt="data.slug"
            @click="openModal(`${imageURL}${news?.fileUrl}`)"
          />
          <ImagePreviewModal
            :imageUrl="selectedImage"
            :isVisible="isModalVisible"
            @close="closeModal"
          />
        </div>
        <h1 class="news-id__title">
          {{ data?.[translator('name')] }}
        </h1>
        <p class="news-id__description" v-html="data?.[translator(`text`)]"></p>
      </div>
    </div>

    <div class="gallery-page__images" ref="images">
      <div
        class="gallery-page__image"
        v-for="(item, index) in gallery"
        :key="item.galleryId"
        @click="showGallery(index)"
        :ref="index === gallery.length - 1 ? 'lastImage' : null"
      >
        <img :src="`${imageURL}${item?.image}`" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/api/generic.api';
import translate from '@/mixins/translate';
import { mapGetters } from 'vuex';
import ImagePreviewModal from '~/components/ImagePreviewModal.vue';

export default {
  components: {
    ImagePreviewModal,
  },
  mixins: [translate],
  computed: {
    ...mapGetters(['imageURL']),
  },
  data() {
    return {
      data: {},
      gallery: [],
      hasMore: true,
      loading: false,
      page: 1,
      limit: 3,
      currentSlideIndex: 0,
      currentImage: Number,
      isModalVisible: false,
      selectedImage: '',
    };
  },

  async mounted() {
    await this.fetchData();
    await this.fetchGallery();
    console.log('done');
  },

  methods: {
    async fetchData() {
      try {
        const { data, statusCode } = await request({
          method: 'GET',
          url: `partner/${this.$route.params.slug}`,
        });
        this.data = data;
        // console.log(this.news);
      } catch (error) {
        console.error(error);
      }
    },
    openModal(imageUrl) {
      this.selectedImage = imageUrl;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedImage = '';
    },
    showGallery(index) {
      this.currentSlideIndex = index;
      document.body.classList.add('no-scroll');
      this.isImage = true;
    },

    closeGallery() {
      document.body.classList.remove('no-scroll');
      this.isImage = false;
    },

    async fetchGallery() {
      if (this.loading || !this.hasMore) return;
      this.loading = true;
      try {
        const { success, data } = await request({
          method: 'GET',
          url: 'images/gallery/all',
          params: {
            page: this.page,
            limit: this.limit,
            partnerId: this.$route.query.id || null,
          },
        });
        console.log(data.rows);
        if (success && data.rows.length) {
          this.gallery.push(...data.rows);
          this.page++;
          if (data.count <= this.gallery.length) this.hasMore = false;
        } else {
          this.hasMore = false;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    createScrollObserver() {
      const options = { root: null, rootMargin: '0px', threshold: 1.0 };
      this.scrollObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.fetchGallery();
        }
      }, options);
    },

    observeLastImage() {
      if (this.scrollObserver && this.$refs.lastImage) {
        const el = Array.isArray(this.$refs.lastImage)
          ? this.$refs.lastImage[0]
          : this.$refs.lastImage;
        if (el) {
          this.scrollObserver.observe(el);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.news-id {
  padding: 40px 0;
  @media (max-width: 767px) {
    padding: 30px 0 20px 0;
  }

  &__back {
    width: 50px;
    height: 50px;
    margin-left: 100px;

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
      margin-left: 0;
      margin-bottom: 20px;
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  &__box {
    max-width: 600px;
    margin: 0 auto;
  }

  &__image {
    width: 250px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: 12px;
    }
  }

  &__title {
    margin-bottom: 10px;
    color: var(--primary);
    font-family: 'Oxanium';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.39px;
    text-transform: initial;
  }

  &__description {
    color: var(--text3);
    font-size: 18px;
    text-indent: 2em;
    text-align: justify;
    line-height: 1.5em;
    font-weight: 500;
    margin-bottom: 6px;
  }

  &__date {
    color: var(--text3);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: right;
  }
}
.gallery-page {
  @media (max-width: 767px) {
    padding: 30px 0;
  }

  &__images {
    display: grid;
    justify-content: center;
    margin: 5% auto 0 auto;
    text-align: justify;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 1100px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 730px;
    }

    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
      max-width: 95vw;
      margin: 5% 25% 0;
    }

    @media (max-width: 479px) {
      grid-template-columns: 1fr;
      gap: 14px;
      max-width: 100vw;
    }
  }

  &__image {
    height: 280px;
    width: 350px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      object-fit: cover;
    }

    @media (max-width: 479px) {
      height: 240px;
    }
  }
}
</style>

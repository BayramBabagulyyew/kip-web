<template>
  <div class="projects" ref="aos">
    <div class="projects__container">
      <div class="projects__top">
        <base-icon
          icon="arrowLeft"
          class="projects__icon"
          @clicked="$router.push(localeLocation(`/${$i18n.locale}`))"
        />
        <h1 class="projects__title">{{ $t('projects') }}</h1>
      </div>
      <div class="projects__items" ref="images">
        <div v-for="project in projects.rows" :key="project.projectId" class="projects-item">
          <!-- @click="openInNewTab(project.slug)" -->
          <a :href="`${project.slug}`" class="projects-item">
            <div class="projects-item__image">
              <img :src="`${imageURL}${project?.cover}`" alt="" />
            </div>
            <div class="projects-item__bottom">
              <div class="projects-item__content">
                <h1 class="projects-item__title">
                  {{ project[translator('name')] }}
                </h1>
              </div>
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
      observer: null,
      page: 1,
      limit: 12,
      paginationCount: 0,
      projects: {
        rows: [],
      },
    };
  },
  async mounted() {
    await this.fetchProjects();
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
            const elemAos = document.querySelectorAll('.aos');
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
    openInNewTab(slug) {
      this.$router.push(`/projects/${slug}`);
    },

    async fetchProjects() {
      try {
        const { success, data } = await request({
          url: 'projects/fetch',
          data: {
            page: this.page,
            limit: this.limit,
          },
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.projects = data || [];
      } catch (error) {
        console.log(error);
      }
    },
    async updatePage(p) {
      this.page = p;
      await this.fetchProjects();
    },
  },
};
</script>

<style lang="scss" scoped>
.projects {
  padding-bottom: 100px;
  @media (max-width: 767px) {
    padding-bottom: 60px;
  }
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
      margin-bottom: 30px;
    }
  }

  &__icon {
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
    @media (max-width: 767px) {
      &:deep() {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  &__title {
    color: var(--red);
    font-size: 34px;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media (max-width: 767px) {
      font-size: 24px;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    text-decoration: none;
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
      gap: 30px;
    }
  }
}
.projects-item {
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    .projects-item__image {
      transition: 0.3s all;
      transform: scale(1.04);
    }
  }
  &__image {
    height: 215px;
    margin-bottom: 10px;
    position: relative;
    transition: 0.3s all;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 8px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__profile {
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    background-color: var(--primary);
  }

  &__content {
  }

  &__title {
    color: var(--text3);
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    text-transform: initial;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
}
</style>

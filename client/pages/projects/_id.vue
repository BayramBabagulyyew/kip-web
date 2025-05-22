<template>
  <div class="projects-id" ref="aos">
    <div class="projects-id__container">
      <div class="projects-id__arrow">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.push(localeLocation('/projects'))"
        />
      </div>
      <div class="projects-id__project">
        <div class="projects-id__project-image" style="margin-right: 15px">
          <!-- <img src="@/assets/img/mennan.svg" alt="" /> -->
          <img
            :src="`${imageURL}${project.cover}`"
            alt=""
            @click="openModal(`${imageURL}${project.cover}`)"
          />
        </div>
        <div class="projects-id__project-content">
          <p class="projects-id__project-text">
            <span class="projects-id__project-span">{{ $t('company') }}:</span>
            <span>
              {{ project?.[translator('company')] }}
            </span>
          </p>
          <p class="projects-id__project-text">
            <span class="projects-id__project-span">{{ $t('engineeringPeriod') }}:</span>
            <span>
              {{
                new Date(project?.workDate).toLocaleString(translateLanguage(project), {
                  month: 'long',
                })
              }}, {{ new Date(project?.workDate).getFullYear() }}
            </span>
            <span
              v-if="
                project?.endDate &&
                new Date(project?.workDate).getMonth() !== new Date(project?.endDate).getMonth()
              "
            >
              -
              {{
                new Date(project?.endDate).toLocaleString(translateLanguage(project), {
                  month: 'long',
                })
              }}, {{ new Date(project?.endDate).getFullYear() }}
            </span>
          </p>
          <p class="projects-id__project-text">
            <span v-html="project[translator(`name`)]" style="font-weight: 600"></span>
          </p>
        </div>
      </div>
      <div class="projects-id__description-wrapper">
        <h1 class="projects-id__description-title">{{ $t('description') }}</h1>
        <p
          class="projects-id__description-description"
          v-html="project?.[translator(`description`)]"
        ></p>
      </div>
      <div class="projects-id__images-wrapper">
        <!-- <h1 class="projects-id__images-title">{{ $t("photo") }}</h1> -->
        <div class="projects-id__images-row" ref="images">
          <div
            class="projects-id__images-img"
            v-for="photo in project?.images"
            :key="photo"
            @click="openModal(`${imageURL}${photo}`)"
          >
            <img :src="`${imageURL}${photo}`" alt="" />
          </div>
        </div>
      </div>
      <ImagePreviewModal
        :imageUrl="selectedImage"
        :isVisible="isModalVisible"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { GET_PROJECT_ONE } from '@/api/home.api';
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
      project: {
        images: {
          type: Array,
          default: () => [],
        },
      },
      isModalVisible: false,
      selectedImage: '',
    };
  },
  async mounted() {
    await this.fetchProject();
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
    async fetchProject() {
      try {
        const { data, statusCode } = await GET_PROJECT_ONE({
          data: {
            projectId: this.$route.params.id,
          },
        });
        if (statusCode) {
          this.project = data || {};
        }
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
  },
};
</script>

<style lang="scss" scoped>
.projects-id {
  padding: 120px 0;
  @media (max-width: 767px) {
    padding: 30px 0;
  }
  &__container {
    max-width: 1165px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__arrow {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 30px;
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
  }

  &__project {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  &__project-image {
    flex: 0 0 25%;
    height: 155px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 4px;
    }
    @media (max-width: 479px) {
      flex: 0 0 50%;
      height: 130px;
    }
  }

  &__project-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 750px;
  }

  &__project-text {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-transform: initial;
  }

  &__project-span {
    margin-right: 4px;
    font-weight: 600;
    text-transform: initial;
  }

  &__description-wrapper {
    margin-bottom: 30px;
  }

  &__description-title {
    color: var(--primary);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.45px;
    // text-transform: capitalize;
    padding-bottom: 7px;
    position: relative;
    display: inline-block;
    margin-bottom: 14px;
    &::after {
      content: '';
      bottom: 0;
      left: 0;
      width: 130%;
      height: 1px;
      background-color: var(--red);
      position: absolute;
      animation: titleAnimate 2s linear infinite;
      @keyframes titleAnimate {
        0% {
          width: 0%;
        }
        100% {
          width: 80%;
          opacity: 0;
        }
      }
    }
    @media (max-width: 767px) {
      font-size: 22px;
    }
  }

  &__description-description {
    color: #000;
    font-size: 17px;
    text-indent: 2em;
    font-weight: 500;
    line-height: 2em;
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }

  &__images-wrapper {
    position: relative;
  }

  &__images-title {
    color: var(--primary);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.45px;
    text-transform: capitalize;
    padding-bottom: 7px;
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
    &::after {
      content: '';
      bottom: 0;
      left: 0;
      width: 120%;
      height: 1px;
      background-color: var(--red);
      position: absolute;
      animation: titleAnimate 2s linear infinite;
      @keyframes titleAnimate {
        0% {
          width: 0%;
        }
        100% {
          width: 80%;
          opacity: 0;
        }
      }
    }
    @media (max-width: 767px) {
      font-size: 22px;
      margin-bottom: 14px;
    }
  }

  &__images-row {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    max-width: 100%;
    padding-bottom: 10px;

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
    @media (max-width: 479px) {
      gap: 16px;
    }
  }

  &__images-img {
    flex: 0 0 25%;
    height: 155px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 4px;
    }
    @media (max-width: 479px) {
      flex: 0 0 50%;
      height: 130px;
    }
  }
}
</style>

<template>
  <div class="products" ref="aos">
    <div class="products__container">
      <div class="products__arrow">
        <base-icon
          icon="arrowLeft"
          class="project-icon"
          @clicked="$router.back(localeLocation(-1))"
        />
      </div>
      <div class="products__project">
        <div class="products__project-image">
          <img :src="`${imageURL}${product?.logo}`" alt="" />
        </div>
        <div class="products__project-content">
          <p class="products__project-text">
            <!-- <span>Name:</span> -->
            <!-- <span>{{ translateName(product) }}</span> -->
          </p>
          <!-- <p class="products__project-text">
            <span>Type:</span>
            <span>{{ product?.type }}</span>
          </p> -->
        </div>
      </div>
      <p
        style="
          color: #183a60;
          font-size: large;
          font-weight: 600;
          margin-bottom: 10px;
        "
      >
        {{ product[translator("name")] }}
      </p>
      <div class="products__description-wrapper">
        <h1 class="products__description-title">{{ $t("description") }}</h1>
        <p
          class="products__description-description"
          style="line-height: 2em; text-align: justify; text-indent: 2em"
          v-html="product?.[translator(`content`)]"
        ></p>
        <!-- v-html="translateContent(item)" -->
      </div>
      <!-- <div class="products__images-wrapper">
        <h1 class="products__images-title">{{ $t("imagesText") }}</h1>
        <div class="products__images-row" ref="images">
          <div
            class="products__images-img"
            v-for="photo in product?.images"
            :key="photo"
          >
            <img :src="`${imageURL}${photo}`" alt="" />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { GET_PRODUCTS_ONE } from "@/api/home.api";
import translate from "@/mixins/translate";
import { mapGetters } from "vuex";

export default {
  mixins: [translate],
  computed: {
    ...mapGetters(["imageURL"]),
  },
  data() {
    return {
      product: {
        images: {
          type: Array,
          default: () => [],
        },
      },
    };
  },
  async mounted() {
    await this.fetchProducts();
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

  methods: {
    async fetchProducts() {
      try {
        const { data, statusCode } = await GET_PRODUCTS_ONE({
          data: {
            id: this.$route.params.id,
          },
        });
        if (statusCode) {
          this.product = data || {};
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
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
    max-width: 980px;
    margin-bottom: 30px;
  }

  &__project-image {
    max-width: 180px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__project-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__project-text {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
  }

  &__project-span {
    margin-right: 4px;
  }

  &__description-wrapper {
    margin-bottom: 30px;
  }

  &__description-title {
    color: var(--primary);
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 0.45px;
    text-transform: capitalize;
    padding-bottom: 7px;
    position: relative;
    display: inline-block;
    margin-bottom: 14px;
    &::after {
      content: "";
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
    font-weight: 500;
    line-height: normal;
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }

  &__images-wrapper {
    position: relative;
    &::before {
    }
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
      content: "";
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
    transition: 1s all;
    transform: translateY(120px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 479px) {
      gap: 16px;
    }
  }

  &__images-img {
    flex: 0 0 25%;
    height: 155px;
    img {
      max-width: 100%;
      width: auto;
      max-height: 100%;
      height: auto;
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

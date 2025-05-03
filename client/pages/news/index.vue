<template>
  <div class="news-page">
    <div class="news-page__container">
      <div class="news-page__back">
        <base-icon icon="arrowLeft" class="project-icon" @clicked="$router.back(localeLocation(-1))" />
      </div>
      <div class="news-page__items">
        <div class="news-page__item" v-for="(item, index) in 9" :key="index" @click="$router.push(`/news/${index}`)">
          <div class="news-page__image">
            <img src="@/assets/img/news.png" alt="" />
          </div>
          <div class="news-page__content">
            <h1 class="news-page__title">New company</h1>
            <p class="news-page__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci impedit quae exercitationem!</p>
            <p class="news-page__date">06.11.2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .news-page {
    padding: 40px 0;
    @media (max-width: 767px) {
      padding: 30px 0;
    }
    &__container {
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
      max-width: 1100px;
      margin: 30px auto 0;
      @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px;
      }
    }

    &__item {
      display: grid;
      grid-template-columns: minmax(100px, 160px) 1fr;
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
      height: 100px;
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
      height: 100%;
    }

    &__title {
      color: var(--primary);
      font-family: 'Oxanium';
      font-size: 14px;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0.21px;
      text-transform: capitalize;
      margin-bottom: 4px;
    }

    &__description {
      color: var(--text3);
      font-size: 12px;
      font-weight: 500;
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      line-clamp: 5;
      -webkit-box-orient: vertical;
      flex: 1 1 auto;
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

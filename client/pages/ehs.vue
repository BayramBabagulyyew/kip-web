<template>
  <div class="ehs-page__container">
    <div class="ehs-page__back">
      <base-icon
        icon="arrowLeft"
        class="project-icon"
        @clicked="$router.back(localeLocation(-1))"
      />
      <h1 class="ehs-page__title">
        {{ $t("ehs") }}
      </h1>
    </div>
    <Ehs id="ehs" />
  </div>
</template>

<style>
.ehs-page__container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: left;
  /* gap: 40px; */
  margin-top: 80px;
}

.ehs-page__back {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 30px;

  .project-icon {
    transition: 0.3s;
    border-radius: 50%;
    animation: arrowAnimate 2s infinite linear alternate;
    padding: 6px;
    width: 50px;
    height: 50px;

    &:hover {
      transform: scale(1.1);
      background-color: rgba(0, 0, 0, 0.1);
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
</style>

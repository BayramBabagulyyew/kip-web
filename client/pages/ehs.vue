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
  gap: 10px;
}
</style>

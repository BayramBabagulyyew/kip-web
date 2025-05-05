<template>
  <div class="wrapper">
    <nuxt />
    <client-only>
      <Footer />
    </client-only>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      document.querySelector(".wrapper").scrollTop = 0;
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  head() {
    return this.$nuxtI18nHead();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  scroll-behavior: smooth !important;
  // cursor: url("../assets/img/cursor-circle.svg") 20 20, pointer;  // disabled cursor-circle
  @media (max-width: 767px) {
    cursor: auto;
  }

  &._lock {
    overflow: hidden;
    -ms-touch-action: none;
    touch-action: none;
    height: 100vh;
  }
}
.main {
}
</style>

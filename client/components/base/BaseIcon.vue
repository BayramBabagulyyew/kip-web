<template>
  <span @click="$emit('clicked')" class="icon" v-html="path"> </span>
</template>

<script>
import icons from '@/icons.js';
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    path() {
      return icons[this.icon];
    },
  },
};
</script>

<style lang="scss" scoped></style>

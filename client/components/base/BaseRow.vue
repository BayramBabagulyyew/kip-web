<script setup></script>
<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 20px;
    width: 100%;
  }
</style>

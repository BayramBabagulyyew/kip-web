<template>
  <div :class="['popup', { active: errorPupUp }]">
    <div @click.stop class="popup__box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorPupUp: {
      type: Boolean,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: -100px;
  right: 20px;
  transition: 0.3s;
  &.active {
    top: 20px;
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
  &__box {
    width: 150px;
    min-height: 40px;
    border-radius: 6px;
    background-color: #ff0000;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.4px 0.4px 10px #ff00009c;
    padding: 4px;
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
}
</style>

<template>
  <div :class="['popup', { active: activePupUp }]">
    <div @click.stop class="popup__box"><h1>Success!!!</h1></div>
  </div>
</template>

<script>
export default {
  props: {
    activePupUp: {
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
    height: 40px;
    border-radius: 6px;
    background-color: #4bb543;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0.4px 0.4px 10px #4bb543ab;
    h1 {
      color: #fff;
      font-size: 18px;
      text-align: center;
    }
  }
}
</style>

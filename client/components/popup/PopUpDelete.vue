<template>
  <div :class="['popup-delete', { active: deletePupUp }]">
    <div class="popup-delete__box">
      <h1>Hakykatdanam pozmak isleyanmi?</h1>
      <p>
        Pozasyn gelmese pikirlen,yalnysma gyzykly makalalary elden gidirme!
        unusli bol😳
      </p>
      <div class="popup-delete__buttons">
        <button @click="$emit('no')">NO</button>
        <button @click="$emit('confirm')">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["no", "confirm"],
  props: {
    deletePupUp: {
      type: Boolean,
      default: () => null,
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-delete {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(9.300000190734863px);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  &.active {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  &__box {
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 18.9px 0px rgba(0, 0, 0, 0.25);
    width: 564px;
    h1 {
      color: var(--primary);
      font-size: 20px;
      font-weight: 700;
      line-height: 120%;
      text-align: center;
      margin-bottom: 10px;
    }

    p {
      color: #23272e;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      max-width: 413px;
      margin: 0 auto;
    }
  }

  &__buttons {
    margin-top: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.2s;
      &:first-child {
        background: #e1e1e1;
        color: var(--primary);
        &:hover {
          background: #d6d6d6;
        }
      }
      &:last-child {
        background: #e24339;
        &:hover {
          background: #cf4137;
        }
        color: #fff;
      }
    }
  }
}
</style>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: () => null,
    },
    url: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    classes: function () {
      return [
        "animated-button",
        {
          "animated-button--primary": this.primary,
        },
      ];
    },
  },
};
</script>

<template>
  <div>
    <a :class="classes" :href="url" v-if="url">
      <h2 class="animated-button__title">
        <slot></slot>
      </h2>
    </a>
    <div v-else :class="classes" @click="$emit('clicked')">
      <h2 class="animated-button__title"><slot></slot></h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.animated-button {
  min-width: 85px;
  min-height: 85px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  cursor: pointer;
  transition: 0.3s all;
  @media (max-width: 767px) {
    min-width: 70px;
    min-height: 70px;
    cursor: none;
  }
  &:active {
    transform: scale(1.1);
  }
  &::before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    z-index: -1;
    animation-delay: 0.2s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: circle;
    opacity: 0;
  }
  &::after {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation-delay: 0s;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-name: circleSecond;
    opacity: 0;
  }

  @keyframes circle {
    0% {
      width: 70px;
      height: 70px;
      opacity: 0;
      @media (max-width: 767px) {
        width: 50px;
        height: 50px;
      }
    }
    50% {
      width: 120px;
      height: 120px;
      opacity: 1;
      @media (max-width: 767px) {
        width: 100px;
        height: 100px;
      }
    }
    100% {
      width: 70px;
      height: 70px;
      opacity: 0;
      @media (max-width: 767px) {
        width: 50px;
        height: 50px;
      }
    }
  }

  @keyframes circleSecond {
    0% {
      width: 100px;
      height: 100px;
      opacity: 0;
      @media (max-width: 767px) {
        width: 80px;
        height: 80px;
      }
    }

    50% {
      width: 160px;
      height: 160px;
      opacity: 1;
      @media (max-width: 767px) {
        width: 50px;
        height: 50px;
      }
    }

    100% {
      width: 100px;
      height: 100px;
      opacity: 0;
      @media (max-width: 767px) {
        width: 80px;
        height: 80px;
      }
    }
  }

  &__title {
    color: var(--primary);
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    @media (max-width: 767px) {
      font-size: 10px;
    }
  }

  &--primary {
    background-color: var(--primary);
    .animated-button__title {
      color: #fff;
    }
    &::before {
      background: rgba(24, 58, 96, 0.1);
    }
    &:after {
      background: rgba(24, 58, 96, 0.1);
    }
  }
}
</style>

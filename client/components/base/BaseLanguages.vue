<template>
  <div class="languages">
    <div class="languages__row">
      <div
        v-for="lang in languages"
        :key="lang.key"
        @click="$emit('selectLanguage', lang.key)"
        :class="['languages__language', { active: activeLang === lang.key }]"
      >
        <p>{{ lang.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeLang: {
      type: String,
      default: () => "Tm",
    },
  },
  data() {
    return {
      languages: [
        {
          key: "Tm",
          name: "Turkmen",
        },
        {
          key: "Ru",
          name: "Russia",
        },
        {
          key: "En",
          name: "English",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.languages {
  margin-bottom: 30px;
  width: 100%;
  padding: 10px 10px 0px;
  border-bottom: 1px solid var(--gray-light2);

  &__row {
    display: flex;
    gap: 10px;
  }

  &__language {
    position: relative;
    border-radius: 8px;
    transition: 0.3s;
    cursor: pointer;
    padding: 10px 0;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -10px;
      width: 100%;
      height: 1px;
      background-color: var(--red);
      opacity: 0;
      transition: 0.5s left;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
    &:active {
      transform: scale(1.05);
    }
    &.active {
      transform: scale(1.05);

      &::after {
        left: 0;
        opacity: 1;
        transition: 0.5s left;
      }
      p {
        color: var(--red);
      }
      &:hover {
        background-color: transparent;
      }
    }
    p {
      color: var(--text4);
      font-size: 14px;
      font-weight: 600;
      line-height: normal;
      padding: 0 10px;
    }
  }
}
</style>

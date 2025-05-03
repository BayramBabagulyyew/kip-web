<template>
  <div class="admin">
    <admin-header> Home </admin-header>
    <div class="header-buttons">
      <base-button
        v-for="button in buttons"
        :key="button.key"
        :prevIcon="button.prevIcon"
        @clickedButton="changeButtonPage(button.key)"
        :class="[
          'header-buttons__button',
          { active: activeBtn === button.key },
        ]"
        :adminButton="button.adminButton"
        :adminButtonSecond="button.adminButtonSecond"
      >
        {{ button.name }}
      </base-button>
    </div>

    <div v-if="activeBtn === 1">
      <admin-about />
    </div>
    <div v-else-if="activeBtn === 2">
      <admin-about-info />
    </div>
    <div v-else>
      <admin-about-contact />
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      activeBtn: 1,
      activeLang: "Tm",

      buttons: [
        {
          key: 1,
          prevIcon: "addIcon",
          name: "Add article",
          adminButton: true,
        },
        {
          key: 2,
          prevIcon: "infoIcon",
          name: "information",
          adminButtonSecond: true,
        },
        {
          key: 3,
          prevIcon: "infoIcon",
          name: "Contact",
          adminButtonSecond: true,
        },
      ],
    };
  },
  methods: {
    toggleLanguage(key) {
      this.activeLang = key;
    },
    changeButtonPage(key) {
      this.activeBtn = key;
      this.activeLang = "Tm";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 36px;
  &__button {
    flex: 0 1 250px;
    background-color: #e1e1e1;
    color: var(--primary);
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
    &:deep {
      svg {
        color: var(--primary);
      }
    }
    &.active {
      background-color: var(--primary);
      color: #fff;
      &:hover {
        background-color: #1b3d62da;
      }
      &:deep {
        svg {
          color: #fff;
        }
      }
    }
  }
}
.admin-form {
  padding: 0 36px;
}
.text-editor-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  &__text-editor {
    display: flex;
    gap: 6px;
    padding: 6px;
    border-radius: 8px;
    background-color: var(--gray-800);
  }

  &__text-editor-item {
    padding: 7px;
    border-radius: 4px;
    background-color: var(--primary);
    color: #fff;
    cursor: pointer;
  }

  &__calendar {
  }
}
</style>

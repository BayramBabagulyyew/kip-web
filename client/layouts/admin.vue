<template>
  <div class="admin-layout">
    <div :class="['admin-layout__row', { open: isSidebarOpen }]">
      <admin-sidebar class="admin-layout__sidebar" @clicked="isOpenSidebar" />
      <div class="admin-layout__body-wrapper">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth-admin"],
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    isOpenSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;
  background-color: var(--gray-light);
  overflow-x: hidden;
  cursor: auto;
  &__row {
    display: grid;
    grid-template-columns: 270px 1fr;
    height: 100%;
    transition: 0.4s all;
    &.open {
      grid-template-columns: 85px 1fr;
      transition: 0.4s all;
      .admin-layout__sidebar {
        &:deep() {
          .sidebar__header-title {
            display: none;
            opacity: 1;
          }
          .sidebar__body {
            padding: 20px;
          }
          .sidebar__profile-image {
            margin: 0;
          }
          .sidebar__profile-content {
            display: none;
          }
          .sidebar__profile-more {
            display: none;
          }
          .sidebar__menu-link {
            display: inline-block;
            span {
              &:last-child {
                display: none;
              }
            }
          }
        }
      }
    }
  }

  &__sidebar {
  }

  &__body-wrapper {
    position: relative;
  }

  &__body {
    margin: 20px;
    height: 100%;
  }
}
</style>

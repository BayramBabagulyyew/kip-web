<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h1 class="sidebar__header-title">Dashboard</h1>
      <div class="sidebar__header-icon">
        <div @click="$emit('clicked')">
          <base-icon icon="menu" />
        </div>
      </div>
    </div>
    <div class="sidebar__body">
      <div class="sidebar__profile">
        <div class="sidebar__profile-image">
          <!-- <img src="" alt="" /> -->
        </div>
        <div class="sidebar__profile-content">
          <!-- <h1 class="sidebar__name">Zuleyha Amanowa</h1> -->
          <h2 class="sidebar__profile-role">Operator</h2>
        </div>
        <div class="sidebar__profile-more">
          <base-icon icon="unfold_more" />
        </div>
      </div>
      <nav class="sidebar__menu">
        <ul class="sidebar__menu-list">
          <li class="sidebar__menu-item" v-for="link in links" :key="link.id">
            <nuxt-link
              exact
              :to="`/admin${link.url}`"
              class="sidebar__menu-link"
            >
              <base-icon :icon="link.icon" />
              <span>{{ link.name }} </span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          id: 2,
          url: ``,
          icon: "folder",
          name: "About us",
        },
        {
          id: 3,
          url: "/news",
          icon: "folder",
          name: "News",
        },
        {
          id: 4,
          url: "/projects",
          icon: "folder",
          name: "Projects",
        },
        {
          id: 5,
          url: "/partners",
          icon: "folder",
          name: "Partners",
        },
        {
          id: 6,
          url: "/gallery",
          icon: "folder",
          name: "Gallery",
        },
        {
          id: 7,
          url: "/ehs",
          icon: "folder",
          name: "Ehs",
        },
        {
          id: 8,
          url: "/products-services",
          icon: "folder",
          name: "Products/services",
        },
        
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  border-right: 1px solid var(--gray-light2);
  &__header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-light2);
  }

  &__header-title {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
  }

  &__header-icon {
    padding: 4px;
    border-radius: 50%;
    transition: 0.2s;
    &:active {
      transform: scale(1.1);
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  }

  &__body {
    padding: 20px;
  }

  &__profile {
    display: flex;
    align-items: center;
    padding-bottom: 36px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      height: 1px;
      background-color: var(--gray-light2);
    }
  }

  &__profile-image {
    margin-right: 24px;
    min-width: 40px;
    height: 40px;
    background-color: var(--primary);
    border-radius: 50%;
    position: relative;
    &::before {
      content: "";
      width: 50px;
      height: 50px;
      border: 2px solid var(--primary);
      border-radius: 50%;
      position: absolute;
      top: -5px;
      left: -5px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__profile-content {
    flex: 1 1 auto;
    opacity: 1;
    transition: 0.4s all;
  }

  &__name {
    color: var(--primary);
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 4px;
  }

  &__profile-role {
    color: #b8bfcc;
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
  }

  &__profile-more {
    padding: 4px;
    border-radius: 50%;
    transition: 0.2s;
    &:active {
      transform: scale(1.1);
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  }

  &__menu {
    margin-top: 36px;
  }

  &__menu-list {
  }

  &__menu-item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__menu-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 10px;
    border-radius: 10px;
    transition: 0.2s all;
    position: relative;
    color: var(--primary);
    &:hover {
      background: #e1e1e1;
    }
    &:active {
      background: #cfcfcf;
    }
    &.nuxt-link-active {
      background: #e1e1e1;
    }
  }
}
</style>

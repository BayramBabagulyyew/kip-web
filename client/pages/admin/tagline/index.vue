<template>
  <div class="admin-news">
    <admin-header>Tagline</admin-header>
    <div class="header-buttons">
      <base-button
        v-for="button in buttons"
        :key="button.key"
        :prevIcon="button.prevIcon"
        @clickedButton="setView(button.key)"
        :class="['header-buttons__button', { active: activeBtn === button.key }]"
        :adminButton="button.adminButton"
        :adminButtonSecond="button.adminButtonSecond"
      >
        {{ button.name }}
      </base-button>
    </div>
    <div class="content">
      <component :is="currentComponent" :id="$route.query.id" @setView="setView" />
    </div>
    <popup-error :errorPupUp="errorPupUp" :message="errorMessage">{{ errorMessage }}</popup-error>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      activeBtn: this.$route.query.view || 'add',
      id: null,
      errorPupUp: false,
      errorMessage: '',
      buttons: [
        {
          key: 'add',
          prevIcon: 'addIcon',
          name: 'Add new',
          adminButton: true,
        },
        {
          key: 'list',
          prevIcon: 'adminBurger',
          name: 'News list',
          adminButton: true,
          adminButtonSecond: true,
        },
      ],
    };
  },
  components: {
    Add: () => import('~/components/adminka/AdminTagline.vue'),
    List: () => import('~/components/adminka/AdminTaglineList.vue'),
  },
  computed: {
    currentComponent() {
      const view = this.$route.query.view;
      switch (view) {
        case 'list':
          return 'List';
        default:
          return 'Add';
      }
    },
  },
  methods: {
    setView(view, item = {}) {
      if (view === 'edit' && item.id) {
        this.isEdit = true;
        this.$router.push({ query: { view, id: item.id } });
      } else {
        this.isEdit = false;
        this.$router.push({ query: { view } });
      }
      this.activeBtn = view;
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
.content {
  padding: 0 2rem;
}
</style>

<template>
  <div class="admin-services">
    <admin-header>Products/services</admin-header>
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
      <admin-services :id="idEdit" />
    </div>
    <div v-else-if="activeBtn === 2">
      <admin-services-list
        :datas="services"
        :page="page"
        :limit="limit"
        @itemDelete="getServices"
        @itemEdit="itemEdit"
      />
      <base-pagination
        v-if="paginationCount > 1"
        :modelValue="page"
        @clickPage="(pagination) => updatePage(pagination)"
        :pageCount="paginationCount"
      />
    </div>
  </div>
</template>

<script>
import { request } from "@/api/generic.api";
export default {
  layout: "admin",
  data() {
    return {
      activeBtn: 1,
      activeLang: "Tm",
      id: null,
      page: 1,
      limit: 10,
      paginationCount: 0,
      services: [],
      idEdit: null,
      buttons: [
        {
          key: 1,
          prevIcon: "addIcon",
          name: "Add project",
          adminButton: true,
        },
        {
          key: 2,
          prevIcon: "adminBurger",
          name: "Article list",
          adminButtonSecond: true,
        },
      ],
    };
  },
  async mounted() {
    await this.getServices();
  },
  methods: {
    toggleLanguage(key) {
      this.activeLang = key;
    },
    changeButtonPage(key) {
      this.activeBtn = key;
      this.activeLang = "Tm";
      this.getServices();
    },
    itemEdit(data) {
      this.changeButtonPage(1);
      setTimeout(() => {
        this.idEdit = data.id;
      }, 0);
    },
    async getServices() {
      try {
        const { success, data } = await request({
          url: "services/",
          method: "PATCH",
          data: {
            page: this.page,
            limit: this.limit,
          },
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.services = data.rows || [];
      } catch (error) {
        console.log(error);
      }
    },
    async updatePage(p) {
      this.page = p;
      await this.getServices();
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
</style>

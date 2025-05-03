<template>
  <div>
    <admin-header> Gallery </admin-header>
    <div class="admin-gallery">
      <div class="admin-gallery__row">
        <admin-input
          @updateValue="(val) => (main.priority = val)"
          :value="main.priority"
          label="Priority"
          placeholder="..."
          type="number"
          class="mb-2"
          appendIcon="starIcon"
        />
      </div>
      <div class="admin-gallery__row mb-1">
        <base-file-input
          @file="uploadPhoto"
          :image="main.image"
          style="height: 200px"
          imgUpload
        />
      </div>
      <div class="admin-gallery__row mb-2">
        <base-button @clickedButton="upsertData">Save</base-button>
      </div>
      <div class="admin-gallery__row">
        <base-uploaded-file
          adminCrash
          imgUpload
          v-for="item in galleries"
          :key="item.galleryId"
          :image="item.image"
          @itemDelete="() => itemDelete(item)"
          :positionNumber="item.priority"
        />
      </div>
      <base-pagination
        v-if="paginationCount > 1"
        :modelValue="page"
        @clickPage="(pagination) => updatePage(pagination)"
        :pageCount="paginationCount"
      ></base-pagination>
    </div>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
    <pop-up-delete
      :deletePupUp="deletePupUp"
      @no="deletePupUp = false"
      @confirm="confirm"
    ></pop-up-delete>
  </div>
</template>

<script>
import { request } from "@/api/generic.api";
export default {
  layout: "admin",
  data() {
    return {
      activeLang: "Tm",
      activePupUp: false,
      errorPupUp: false,
      paginationCount: 0,
      deletePupUp: false,
      errorMessage: "Boş meydanlary dolduryň!",
      id: null,
      page: 1,
      limit: 10,
      galleries: [],
      main: {
        galleryId: null,
        priority: null,
        image: null,
      },
    };
  },
  async mounted() {
    await this.getGalleries();
  },
  methods: {
    async uploadPhoto(file) {
      try {
        const { success, data } = await request({
          url: "upload",
          data: {
            fileUrl: file,
          },
          file: true,
        });
        if (!success) return;
        this.main.image = data.url;
      } catch (error) {
        console.log(error);
      }
    },
    async getGalleries() {
      try {
        const { success, data } = await request({
          url: "images/gallery/all",
          data: {
            page: this.page,
            limit: this.limit,
            deleted: false,
          },
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.galleries = data.rows || [];
      } catch (error) {
        console.log(error);
      }
    },
    async updatePage(p) {
      this.page = p;
      await this.getGalleries();
    },
    itemDelete(data) {
      this.id = data.galleryId;
      this.deletePupUp = true;
    },
    async confirm() {
      try {
        const { success } = await request({
          url: `images/gallery/remove/${this.id}`,
        });
        if (!success) return;
        this.deletePupUp = false;
        await this.getGalleries();
      } catch (error) {
        console.log(error);
      }
    },
    async upsertData() {
      if (!this.main.priority || !this.main.image) {
        this.errorPupUp = true;
        this.errorMessage = "Boş meydanlary doldury";
        setTimeout(() => {
          this.errorPupUp = false;
        }, 2000);
      } else {
        try {
          const { success, data } = await request({
            url: "images/gallery/upsert",
            data: this.main,
          });
          if (!success) return;
          this.galleries.unshift(data);
          Object.keys(this.main).forEach((key) => (this.main[key] = null));
        } catch (error) {
          console.log(error.response);
          if (error.response.data.statusCode === 611) {
            this.errorMessage = "Bul piority eyam bar";
            this.errorPupUp = true;
            setTimeout(() => {
              this.errorPupUp = false;
            }, 2000);
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-gallery {
  padding: 0 36px 30px;

  &__row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 26px;
  }

  &__item {
  }

  &__item-image {
  }

  &__item-icons {
  }
}
</style>

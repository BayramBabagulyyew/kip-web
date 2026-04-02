<template>
  <div class="main">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form @submit.prevent style="display: flex; flex-direction: column; gap: 5px">
      <div class="left-item">
        <base-file-input
          imgUpload
          @file="uploadPhoto"
          :image="main.fileUrl"
          style="height: 216px"
        />
        <!-- <div class="item-image">
          <img :src="`${imageURL}${main?.fileUrl}`" alt="" />
        </div> -->
      </div>
      <admin-input
        label="Title"
        placeholder="..."
        @updateValue="(val) => (main[`name${activeLang}`] = val)"
        :value="main[`name${activeLang}`] ?? ''"
        class="mb-2"
      />
      <admin-input
        @updateValue="(val) => (main[`website`] = val)"
        :value="main?.[`website`]"
        label="website"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main[`priority`] = val)"
        :value="main?.[`priority`]"
        label="priority"
        placeholder="..."
        type="number"
      />
      <div class="left-item">
        <label style="font-size: 13px; font-weight: 600; margin-bottom: 4px; display: block">Catalog (PDF)</label>
        <base-file-input
          @file="uploadCatalog"
          :image="main.catalogUrl"
          style="height: 80px"
        />
        <span v-if="main.catalogUrl" style="font-size: 12px; color: green; margin-top: 4px; display: block">
          File uploaded: {{ main.catalogUrl }}
        </span>
      </div>
      <RichTextEditor
        :model-value="main[`text${activeLang}`]"
        @update="(val) => (main[`text${activeLang}`] = val)"
        :language="activeLang"
        label="Text"
      />
      <div class="left-item" v-if="this.$route.query.id">
        <base-file-input
          @file="uploadGallery"
          :image="main.image"
          style="height: 200px"
          imgUpload
        />
      </div>
      <div class="row">
        <base-uploaded-file
          adminCrash
          imgUpload
          v-for="item in galleries"
          :key="item.galleryId"
          :image="item.image"
          @itemDelete="() => itemDelete(item)"
          :positionNumber="item.priority"
          style="max-width: 250px"
        />
      </div>
      <base-button @clickedButton="saveData" style="width: 200px; left: 80%; position: relative">
        Save
      </base-button>
    </form>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp">Success</popup-success>
    <pop-up-delete
      :deletePupUp="deletePupUp"
      @no="deletePupUp = false"
      @confirm="confirm"
    ></pop-up-delete>
  </div>
</template>
<script>
import { request } from '@/api/generic.api';
import { mapGetters } from 'vuex';

export default {
  emits: ['setView'],
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
  },
  mounted() {
    if (this.$route.query.id) this.getGalleries();
  },
  computed: {
    ...mapGetters(['imageURL']),
  },
  data() {
    return {
      deletePupUp: false,
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      errorMessage: 'Error saving data',
      galleries: [],
      selGallery: null,
      gallery: {
        galleryId: null,
        priority: null,
        image: null,
        partnerId: this.$route.query.id || null,
      },
      page: 1,
      limit: 10,
      paginationCount: 0,
      main: {
        textTm: '',
        textRu: '',
        textEn: '',
        nameTm: '',
        nameEn: '',
        nameRu: '',
        website: '',
        priority: '',
        fileUrl: '',
        catalogUrl: '',
        media: '',
        type: '',
      },
    };
  },
  toggleLanguage(key) {
    this.activeLang = key;
  },

  watch: {
    id: {
      immediate: true,
      handler(partnerId) {
        if (partnerId) {
          this.fetchPartner(partnerId);
        } else {
          this.main = {
            textTm: '',
            textRu: '',
            textEn: '',
            nameTm: '',
            nameEn: '',
            nameRu: '',
            website: '',
            priority: '',
            fileUrl: '',
            catalogUrl: '',
            media: '',
            type: '',
          };
        }
      },
    },
  },

  methods: {
    itemDelete(data) {
      this.selGallery = data.galleryId;
      this.deletePupUp = true;
    },
    async confirm() {
      try {
        const { success } = await request({
          url: `images/gallery/remove/${this.selGallery}`,
        });
        if (!success) return;
        this.deletePupUp = false;
        this.selGallery = null;
        await this.getGalleries();
      } catch (error) {
        console.log(error);
      }
    },
    async uploadPhoto(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
          data: {
            fileUrl: file,
            partnerId: this.$route.query.id,
          },
          file: true,
        });
        this.main.fileUrl = data.url;
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
      setTimeout(() => {
        this.activePupUp = false;
        this.errorPupUp = false;
      }, 2000);
    },
    async uploadCatalog(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
          data: { fileUrl: file },
          file: true,
        });
        if (success) this.main.catalogUrl = data.url;
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
      setTimeout(() => {
        this.errorPupUp = false;
      }, 2000);
    },
    async saveData() {
      try {
        const id = this.$route.query.id;
        const view = this.$route.query.view;
        let url = 'partner';
        let method = 'POST';
        if (id && view === 'edit') {
          url = `partner/${id}`;
          method = 'PATCH';
        }
        const { success } = await request({
          url,
          method,
          data: {
            textTm: this.main.textTm,
            textRu: this.main.textRu,
            textEn: this.main.textEn,
            nameTm: this.main.nameTm,
            nameEn: this.main.nameEn,
            nameRu: this.main.nameRu,
            website: this.main.website,
            priority: this.main.priority,
            fileUrl: this.main.fileUrl,
            catalogUrl: this.main.catalogUrl,
            media: this.main.media,
            type: this.main.type,
          },
        });

        if (success) {
          this.main = {
            textTm: '',
            textRu: '',
            textEn: '',
            nameTm: '',
            nameEn: '',
            nameRu: '',
            website: '',
            priority: '',
            fileUrl: '',
            catalogUrl: '',
            media: '',
          };
          this.activePupUp = true;
          this.$emit('setView', view === 'edit' ? 'list' : 'add');
        }
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
      setTimeout(() => {
        this.activePupUp = false;
        this.errorPupUp = false;
      }, 2000);
    },
    async fetchPartner(id) {
      try {
        const { data } = await request({
          url: `partner/by/${id}`,
          method: 'GET',
        });
        this.main = data;
      } catch (error) {
        this.errorMessage = error.message;
        console.error('Error fetching tagline:', error);
      }
    },

    async uploadGallery(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
          data: {
            fileUrl: file,
          },
          file: true,
        });
        if (!success) return;

        this.gallery.image = data.url;
        const { success1 } = await request({
          url: 'images/gallery/upsert',
          data: this.gallery,
        });
        if (!success1) return;
        await this.getGalleries();
      } catch (error) {
        console.log(error);
      }
    },
    async getGalleries() {
      try {
        const { success, data } = await request({
          method: 'GET',
          url: 'images/gallery/all',
          params: {
            page: this.page,
            limit: this.limit,
            partnerId: this.$route.query.id || null,
          },
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.galleries = data.rows || [];
      } catch (error) {
        console.log(error);
      }
    },
    toggleLanguage(key) {
      this.activeLang = key;
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
  grid-template-columns: repeat(4, 1fr);
  gap: 26px;
}

.left-item {
  gap: 26px;
  cursor: pointer;
  transition: 0.3s;
  max-width: 300px;
  &:hover {
    transform: scale(1.06);
  }
}

.item-image {
  min-width: 130px;
  height: 100px;

  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: contain;
    border-radius: 5px;
  }
}
</style>

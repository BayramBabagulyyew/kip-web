<template>
  <div class="services">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`name${activeLang}`] = val)"
        :value="main[`name${activeLang}`]"
        label="Products/services name"
        placeholder="..."
      />
      <!-- <admin-input
        :value="main[`content${activeLang}`]"
        label="Products/services content"
        placeholder="..."
      /> -->

      <!-- <admin-textarea
        v-model="main[`content${activeLang}`]"
        label="Content #home"
        class="mb-2"
      /> -->
      <!-- <admin-input
        @updateValue="(val) => (main[`type`] = val)"
        :value="main[`type`]"
        label="service/product"
        placeholder="service/product"
      /> -->
      <div class="flex flex-y-center gap-40">
        <radio-input :options="radioOptions" v-model="selectedRadio" />
      </div>

      <div class="flex gap-10">
        <admin-input
          @updateValue="(val) => (main[`priority`] = val)"
          :value="main[`priority`]"
          label="Priority"
          placeholder="..."
          type="number"
          style="width: 200px"
          appendIcon="starIcon"
        />
      </div>

      <!-- <RichTextEditor :model-value="main[`content${activeLang}`]" label="Content #home" /> -->
      <RichTextEditor
        :model-value="main[`content${activeLang}`]"
        @update:modelValue="(val) => (main[`content${activeLang}`] = val)"
        :language="activeLang ?? 'Tm'"
        label="Content #home"
      />
      <div class="flex flex-x-end grid-column">
        <base-button @clickedButton="upsertData" style="width: 150px" class="admin-header__button">
          Save
        </base-button>
      </div>
    </form>
    <div class="services__images-wrapper gap-20">
      <base-file-input
        imgUpload
        :image="main.logo"
        @file="uploadPhotoCover"
        style="height: 216px"
      />
      <base-file-input
        imgUpload
        @file="uploadPhotoImages"
        :image="main.images[0]"
        style="height: 216px"
      />
    </div>
    <div class="services__images">
      <base-uploaded-file
        v-for="item in main.images"
        :key="item"
        :image="item"
        @itemDelete="itemDelete(item)"
        adminCrash
        imgUpload
      ></base-uploaded-file>
    </div>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { request } from '@/api/generic.api';
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      image: null,
      errorMessage: 'Boş meydanlary dolduryň!',
      selectedRadio: 'service',
      radioOptions: [
        { label: 'service', value: 'service' },
        { label: 'product', value: 'product' },
      ],
      main: {
        id: null,
        nameTm: '',
        nameRu: '',
        nameEn: '',
        contentTm: '',
        contentRu: '',
        contentEn: '',
        type: '',
        images: [],
        logo: '',
        priority: null,
      },
    };
  },
  watch: {
    id: async function (val) {
      await this.getOneProducts(val);
    },
  },
  methods: {
    async addAbout() {
      try {
        const { data, statusCode } = await ADD_ABOUT({ data: this.main });
        if (!statusCode) return;
        this.activePupUp = true;
        setTimeout(() => {
          this.activePupUp = false;
        }, 2000);
      } catch (error) {
        console.log(error);
        this.errorPupUp = true;
      }
    },
    itemDelete(data) {
      this.main.images = this.main.images.filter((item) => item !== data);
    },
    async upsertData() {
      if (!this.main[`name${this.activeLang}`] || !this.main[`content${this.activeLang}`]) {
        this.errorPupUp = true;
        this.errorMessage = 'Boş meydanlary doldury';
        setTimeout(() => {
          this.errorPupUp = false;
        }, 2000);
      } else {
        try {
          const { success, data } = await request({
            url: 'services/upsert',
            data: {
              ...this.main,
              type: this.selectedRadio,
            },
          });
          if (!success) return;
          this.main.id = null;
          this.main.nameTm = '';
          this.main.contentTm = '';
          this.main.nameRu = '';
          this.main.contentRu = '';
          this.main.nameEn = '';
          this.main.contentEn = '';
          this.main.images = [];
          this.main.priority = null;
          this.main.type = null;
          this.main.logo = null;
        } catch (error) {
          console.log(error.response);
          if (error?.response?.data?.statusCode === 611) {
            this.errorMessage = 'Bul piority eyam bar';
            this.errorPupUp = true;
            setTimeout(() => {
              this.errorPupUp = false;
            }, 2000);
          }
        }
      }
    },
    async getOneProducts(id) {
      try {
        const { success, data } = await request({
          url: `services/find/${id}`,
          method: 'POST',
        });
        if (!success) return;
        for (let [key] of Object.entries(this.main)) {
          for (let [dataKey] of Object.entries(data)) {
            if (dataKey === key) {
              if (dataKey) {
                this.main[dataKey] = data[dataKey];
              }
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async uploadPhotoCover(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
          data: {
            fileUrl: file,
          },
          file: true,
        });
        if (!success) return;
        this.main.logo = data.url;
      } catch (error) {
        console.log(error);
      }
    },
    async uploadPhotoImages(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
          data: {
            fileUrl: file,
          },
          file: true,
        });
        if (!success) return;
        this.main.images.unshift(data.url);
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

<style lang="scss" scoped>
.services {
  padding: 0 36px 30px;

  &__images-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  &__images {
    margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}

.admin-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.grid-column {
  grid-column: 1 / span 3;
}
</style>

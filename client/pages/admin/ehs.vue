<template>
  <div>
    <admin-header> Ecology </admin-header>
    <div class="admin-partners">
      <form @submit.prevent class="admin-partners__block-form">
        <div class="flex flex-y-center">
          <div class="admin-partners__images">
            <base-file-input
              imgUpload
              @file="uploadPhotoImages"
              style="height: 200px"
              class="mr-2"
            />
            <base-uploaded-file
              v-for="item in main.images"
              :key="item"
              :image="item"
              @itemDelete="itemDeleteDatas(item)"
              adminCrash
              imgUpload
            ></base-uploaded-file>
          </div>
        </div>
        <div class="admin-partners__images">
          <base-uploaded-file
            class="admin-partners__block-image"
            v-for="item in datas.images"
            :key="item"
            imgUpload
            :image="item"
            adminCrash
          />
        </div>

        <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
        <admin-input
          label="Title"
          placeholder="..."
          @updateValue="(val) => (main[`title${activeLang}`] = val)"
          :value="main[`title${activeLang}`]"
          class="mb-2"
          appendIcon="starIcon"
        />
        <!-- <admin-textarea
        label="Content #home"
        class="mb-2"
        /> -->
        <!-- <RichTextEditor :model-value="main[`content${activeLang}`] || ''" label="Content #home" /> -->
        <RichTextEditor
          :model-value="main[`content${activeLang}`]"
          @update="(val) => (main[`content${activeLang}`] = val)"
          :language="activeLang"
          label="Content #home"
        />

        <div class="flex flex-x-end">
          <base-button @clickedButton="upsertData" style="width: 150px"> Save </base-button>
        </div>
      </form>
    </div>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
    <pop-up-delete :deletePupUp="deletePupUp" @no="deletePupUp = false" @confirm="confirm" />
  </div>
</template>

<script>
import { request } from '@/api/generic.api';
import { GET_EHS } from '../../api/home.api';

export default {
  layout: 'admin',
  data() {
    return {
      activeLang: 'Tm',
      datas: {
        images: [],
      },
      activePupUp: false,
      errorPupUp: false,
      paginationCount: 0,
      deletePupUp: false,
      errorMessage: 'Boş meydanlary dolduryň!',
      id: null,
      main: {
        images: [],
        contentTm: '',
        contentRu: '',
        contentEn: '',
        titleTm: '',
        titleRu: '',
        titleEn: '',
        video: null,
      },
    };
  },
  async mounted() {
    await this.fetchEhs();
  },
  methods: {
    async fetchEhs() {
      try {
        const { data, statusCode } = await GET_EHS();
        if (statusCode) {
          Object.keys(this.main).forEach((key) => (this.main[key] = data[key]));
        }
      } catch (error) {
        console.error(error);
      }
    },
    itemDelete(data) {
      this.main.images = this.main.images.filter((item) => item !== data);
    },
    itemDeleteDatas(data) {
      this.id = data;
      this.deletePupUp = true;
    },
    async upsertData() {
      if (
        !this.main.titleTm ||
        !this.main.titleRu ||
        !this.main.titleEn ||
        !this.main.contentTm ||
        !this.main.contentRu ||
        !this.main.contentEn
      ) {
        this.errorPupUp = true;
        this.errorMessage = 'Boş meydanlary doldury';
        setTimeout(() => {
          this.errorPupUp = false;
        }, 2000);
      } else {
        try {
          const { success, data } = await request({
            url: 'ecology/upsert',
            data: this.main,
          });
          if (!success) return;
          this.activePupUp = true;
          setTimeout(() => {
            this.activePupUp = false;
          }, 2000);
        } catch (error) {
          console.log(error.response);
          this.errorMessage = 'Bosh meydanlary doldur';
          this.errorPupUp = true;
          setTimeout(() => {
            this.errorPupUp = false;
          }, 2000);
        }
      }
    },
    async confirm() {
      try {
        const { success } = await request({
          url: `ecology/${this.id}`,
        });
        if (!success) return;
        this.deletePupUp = false;
        await this.fetchEhs();
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
.admin-partners {
  padding: 0 36px 30px;
  &__images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>

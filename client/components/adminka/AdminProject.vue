<template>
  <div class="admin-project-page">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`name${activeLang}`] = val)"
        :value="main[`name${activeLang}`]"
        label="Project name"
        placeholder="..."
      />
      <!-- @updateValue="(val) => (main[`company`] = val)" -->
      <admin-input
        @updateValue="(val) => (main[`company${activeLang}`] = val)"
        :value="main[`company${activeLang}`]"
        label="Company name"
        placeholder="..."
      />

      <RichTextEditor
        :model-value="main[`description${activeLang}`]"
        @update="(val) => (main[`description${activeLang}`] = val)"
        :language="activeLang"
        label="Description"
      />

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
        <div class="text-editor-wrapper__calendar" style="width: 200px">
          <admin-input
            label="START DATE"
            type="date"
            appendIcon="calendar"
            v-model="formattedWorkDate"
            @updateValue="(val) => (formattedWorkDate = val)"
          />
        </div>
        <div class="text-editor-wrapper__calendar" style="width: 200px">
          <admin-input
            label="END DATE"
            type="date"
            appendIcon="calendar"
            v-model="formattedEndDate"
            @updateValue="(val) => (formattedEndDate = val)"
          />
        </div>
      </div>

      <div class="flex flex-x-end grid-column">
        <base-button @clickedButton="upsertData" style="width: 150px" class="admin-header__button">
          Save
        </base-button>
      </div>
    </form>
    <div class="admin-project-page__images-wrapper gap-20">
      <base-file-input
        imgUpload
        :image="main.cover"
        @file="uploadPhotoCover"
        style="height: 216px"
        label="Cover"
      />
      <base-file-input
        imgUpload
        @file="uploadPhotoImages"
        :image="main.images[0]"
        style="height: 216px"
        label="Images"
      />
    </div>
    <div class="admin-project-page__images">
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
  computed: {
    formattedWorkDate: {
      get() {
        if (!this.main.workDate) return '';
        return new Date(this.main.workDate).toISOString().split('T')[0]; // format as YYYY-MM-DD
      },
      set(value) {
        this.main.workDate = value; // optionally: new Date(value).toISOString()
      },
    },
    formattedEndDate: {
      get() {
        if (!this.main.endDate) return '';
        return new Date(this.main.endDate).toISOString().split('T')[0]; // format as YYYY-MM-DD
      },
      set(value) {
        this.main.endDate = value; // optionally: new Date(value).toISOString()
      },
    },
  },
  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      image: null,
      errorMessage: 'Boş meydanlary dolduryň!',
      main: {
        projectId: null,
        nameTm: '',
        nameRu: '',
        nameEn: '',
        descriptionTm: '',
        descriptionRu: '',
        descriptionEn: '',
        companyTm: '',
        companyRu: '',
        companyEn: '',
        workDate: '',
        endDate: '',
        images: [],
        cover: '',
        priority: null,
        logo: 'dd',
      },
    };
  },
  watch: {
    id: async function (val) {
      await this.getOneProject(val);
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
      if (!this.main[`name${this.activeLang}`] || !this.main[`description${this.activeLang}`]) {
        this.errorPupUp = true;
        this.errorMessage = 'Boş meydanlary doldury';
        setTimeout(() => {
          this.errorPupUp = false;
        }, 2000);
      } else {
        try {
          const { success, data } = await request({
            url: 'projects/upsert',
            data: this.main,
          });
          if (!success) return;
          this.main.projectId = null;
          this.main.nameTm = '';
          this.main.descriptionTm = '';
          this.main.nameRu = '';
          this.main.descriptionRu = '';
          this.main.nameEn = '';
          this.main.descriptionEn = '';
          this.main.images = [];
          this.main.priority = null;
          this.main.company = null;
          this.main.workDate = null;
          this.main.cover = null;
          this.main.authorId = null;
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
    async getOneProject(id) {
      try {
        const { success, data } = await request({
          url: `projects/one/${id}`,
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
        this.main.cover = data.url;
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
.admin-project-page {
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
  grid-column: 1 / span 2;
}
</style>

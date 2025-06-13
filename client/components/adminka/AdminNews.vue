<template>
  <div class="admin-news-page">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Title"
        placeholder="..."
      />

      <div class="text-editor-wrapper__calendar" style="width: 200px">
        <admin-input
          label="Calendar"
          type="date"
          appendIcon="calendar"
          v-model="formattedCreatedAt"
          @updateValue="(val) => (formattedCreatedAt = val)"
        />
      </div>
      <RichTextEditor :model-value="main[`content${activeLang}`]" label="Description" />
    </form>
    <div class="admin-news-page__images-wrapper">
      <base-file-input imgUpload @file="uploadPhoto" :image="main.image" style="height: 216px" />
      <div class="admin-news-page__switches-wrapper">
        <div class="admin-news-page__switches">
          <admin-input
            label="Priority"
            placeholder="..."
            type="number"
            @updateValue="(val) => (main.priority = val)"
            :value="main?.priority"
            appendIcon="starIcon"
            style="height: 66px"
          />
          <base-switch
            title="Home"
            :checked="main.isMain"
            @changed="(event) => (main.isMain = event)"
          ></base-switch>
          <base-switch
            title="News"
            :checked="main.published"
            @changed="(event) => (main.published = event)"
          ></base-switch>
        </div>
        <base-button
          @clickedButton="upsertData"
          style="width: 200px; margin-bottom: 20px; margin-left: 150px"
        >
          Save
        </base-button>
      </div>
    </div>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { request } from '@/api/generic.api';

const tinymceScriptSrc = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js';
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  computed: {
    formattedCreatedAt: {
      get() {
        if (!this.main.createdAt) return '';
        return new Date(this.main.createdAt).toISOString().split('T')[0]; // format as YYYY-MM-DD
      },
      set(value) {
        console.log(value);
        this.main.createdAt = value; // optionally: new Date(value).toISOString()
      },
    },
  },

  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      errorMessage: 'Boş meydanlary dolduryň!',
      main: {
        newsId: null,
        titleTm: '',
        contentTm: '',
        titleRu: '',
        contentRu: '',
        titleEn: '',
        contentEn: '',
        image: '',
        published: false,
        isMain: false,
        priority: null,
        authorId: '',
        createdAt: '',
      },
    };
  },
  watch: {
    id: async function (val) {
      await this.getOneNews(val);
    },
  },
  methods: {
    async addAbout() {
      try {
        const { data, statusCode } = await ADD_ABOUT({ data: this.main });
        this.activePupUp = true;
        setTimeout(() => {
          this.activePupUp = false;
        }, 2000);
        if (!statusCode) return;
      } catch (error) {
        console.log(error);
        this.errorPupUp = true;
      }
    },
    async uploadPhoto(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
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
    async getOneNews(id) {
      try {
        const { success, data } = await request({
          url: `news/one/${id}`,
          method: 'GET',
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
    toggleLanguage(key) {
      this.activeLang = key;
    },
    async upsertData() {
      if (!this.main[`content${this.activeLang}`] || !this.main[`title${this.activeLang}`]) {
        this.errorPupUp = true;
        this.errorMessage = 'Boş meydanlary doldury';
        setTimeout(() => {
          this.errorPupUp = false;
        }, 2000);
      } else {
        try {
          const { success, data } = await request({
            url: 'news/upsert',
            data: this.main,
          });
          if (!success) return;
          this.main.newsId = null;
          this.main.titleTm = '';
          this.main.contentTm = '';
          this.main.titleRu = '';
          this.main.contentRu = '';
          this.main.titleEn = '';
          this.main.contentEn = '';
          this.main.image = '';
          this.main.published = false;
          this.main.isMain = false;
          this.main.priority = null;
          this.main.authorId = '';
          this.main.createdAt = '';
        } catch (error) {
          if (error?.response?.data?.statusCode === 611) {
            this.errorMessage = 'Bul piority eyam bar';
            this.errorPupUp = true;
            setTimeout(() => {
              this.errorPupUp = false;
            }, 2000);
            return;
          }
          this.errorMessage = error.response.data.message;
          this.errorPupUp = true;
          setTimeout(() => {
            this.errorPupUp = false;
          }, 2000);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-news-page {
  padding: 0 36px 30px;

  &__images-wrapper {
    display: grid;
    gap: 10px;
    grid-template-columns: 290px 1fr;
  }

  &__switches-wrapper {
    display: flex;
    flex-direction: column;
  }

  &__switches {
    display: grid;
    grid-template-columns: 290px 70px 70px;
    gap: 10px;
    flex: 1 1 auto;
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

<template>
  <div class="admin-form">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form @submit.prevent>
      <admin-input
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`]"
        label="Title"
        class="mb-2"
        placeholder="..."
      />
      <RichTextEditor :model-value="main[`content${activeLang}`]" label="Content" />
      <RichTextEditor :model-value="main[`tagline${activeLang}`]" label="Content" />
      <div class="flex flex-x-end">
        <base-button @clickedButton="addAbout" style="width: 150px" class="admin-header__button">
          Save
        </base-button>
      </div>
    </form>
    <popup-error :errorPupUp="errorPupUp">Boş meydanlary dolduryň!</popup-error>
    <popup-success :activePupUp="activePupUp">Success</popup-success>
  </div>
</template>
<script>
import { ADD_ABOUT, GET_ABOUT } from '@/api/admin.api';
import { mapGetters } from 'vuex';
import RichTextEditor from '../base/RichTextEditor.vue';

export default {
  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      main: {
        titleTm: '',
        titleRu: '',
        titleEn: '',
        contentTm: '',
        contentRu: '',
        contentEn: '',
        taglineTm: '',
        taglineRu: '',
        taglineEn: '',
      },
    };
  },

  computed: {
    ...mapGetters(['isPopup']),
  },

  async mounted() {
    await this.fetchAbout();
  },

  methods: {
    async addAbout() {
      try {
        const { data, statusCode, success } = await ADD_ABOUT({
          data: {
            titleTm: this.main.titleTm,
            contentTm: this.main.contentTm,
            titleRu: this.main.titleRu,
            contentRu: this.main.contentRu,
            titleEn: this.main.titleEn,
            contentEn: this.main.contentEn,
            taglineTm: this.main.taglineTm,
            taglineRu: this.main.taglineRu,
            taglineEn: this.main.taglineEn,
          },
        });
        if (!success) return;
        this.activePupUp = true;
        this.fetchAbout();
      } catch (error) {
        console.log(error);
        this.errorPupUp = true;
      }
      setTimeout(() => {
        this.activePupUp = false;
        this.errorPupUp = false;
      }, 2000);
    },

    async fetchAbout() {
      try {
        const { data, statusCode } = await GET_ABOUT();
        if (statusCode) {
          this.main = data;
        }
      } catch (error) {
        console.error(error, 'NO INTERNET');
      }
    },

    toggleLanguage(key) {
      this.activeLang = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-form {
  padding: 0 36px;
}

.admin-label {
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 4px;
  @media (max-width: 767px) {
    margin-bottom: 6px;
    font-size: 14px;
  }
}

.editor-wrapper {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 8px;
  margin: 8px 0 20px;
  background-color: #fff;

  // Optional: shadow to match input components
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>

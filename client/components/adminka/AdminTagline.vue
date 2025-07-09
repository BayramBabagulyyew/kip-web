<template>
  <div>
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form @submit.prevent>
      <RichTextEditor
        :model-value="main[`tagline${activeLang}`]"
        @update="(val) => (main[`tagline${activeLang}`] = val)"
        :language="activeLang"
        label="Tagline"
      />
      <base-button @clickedButton="saveData" style="width: 200px"> Save </base-button>
    </form>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp">Success</popup-success>
  </div>
</template>
<script>
import { request } from '@/api/generic.api';

export default {
  emits: ['setView'],
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      errorMessage: 'Error saving data',
      main: {
        taglineTm: null,
        taglineRu: null,
        taglineEn: null,
      },
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(taglineId) {
        if (taglineId) {
          this.fetchTagline(taglineId);
        } else {
          this.main = {
            taglineTm: '',
            taglineRu: '',
            taglineEn: '',
          };
        }
      },
    },
  },

  methods: {
    async saveData() {
      try {
        const id = this.$route.query.id;
        const view = this.$route.query.view;
        let url = 'tagline';
        let method = 'POST';
        if (id && view === 'edit') {
          url = `tagline/${id}`;
          method = 'PATCH';
        }
        const { success } = await request({
          url,
          method,
          data: {
            taglineTm: this.main.taglineTm,
            taglineRu: this.main.taglineRu,
            taglineEn: this.main.taglineEn,
          },
        });
        if (success) {
          this.main = {
            taglineTm: '',
            taglineRu: '',
            taglineEn: '',
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
    async fetchTagline(id) {
      try {
        const { data } = await request({
          url: `tagline/${id}`,
          method: 'GET',
        });
        this.main = data;
      } catch (error) {
        this.errorMessage = error.message;
        console.error('Error fetching tagline:', error);
      }
    },
    toggleLanguage(key) {
      this.activeLang = key;
    },
  },
};
</script>

<style lang="scss" scoped></style>

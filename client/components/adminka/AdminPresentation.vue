<template>
  <div class="main">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="main.language" />
    <form @submit.prevent style="display: flex; flex-direction: column; gap: 5px">
      <div class="left-item">
        <label style="font-size: 13px; font-weight: 600; margin-bottom: 4px; display: block">Presentation (PDF)</label>
        <base-file-input
          @file="uploadFile"
          :image="main.file"
          style="height: 80px"
        />
        <span v-if="main.file" style="font-size: 12px; color: green; margin-top: 4px; display: block">
          File uploaded: {{ main.file }}
        </span>
      </div>
      <base-button @clickedButton="saveData" style="width: 200px; left: 80%; position: relative">
        Save
      </base-button>
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
      activePupUp: false,
      errorPupUp: false,
      errorMessage: 'Error saving data',
      main: {
        file: '',
        language: 'Tm',
      },
    };
  },
  watch: {
    id: {
      immediate: true,
      handler(presentationId) {
        if (presentationId) {
          this.fetchPresentation(presentationId);
        } else {
          this.main = {
            file: '',
            language: 'Tm',
          };
        }
      },
    },
  },
  methods: {
    toggleLanguage(key) {
      this.main.language = key;
    },
    async uploadFile(file) {
      try {
        const { success, data } = await request({
          url: 'upload',
          data: { fileUrl: file },
          file: true,
        });
        if (success) this.main.file = data.url;
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
        let url = 'presentation';
        let method = 'POST';
        if (id && view === 'edit') {
          url = `presentation/${id}`;
          method = 'PATCH';
        }
        const { success } = await request({
          url,
          method,
          data: {
            file: this.main.file,
            language: this.main.language,
          },
        });
        if (success) {
          this.main = {
            file: '',
            language: 'Tm',
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
    async fetchPresentation(id) {
      try {
        const { data } = await request({
          url: `presentation/${id}`,
          method: 'GET',
        });
        this.main = data;
      } catch (error) {
        this.errorMessage = error.message;
        console.error('Error fetching presentation:', error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.left-item {
  gap: 26px;
  cursor: pointer;
  transition: 0.3s;
  max-width: 300px;
}
</style>

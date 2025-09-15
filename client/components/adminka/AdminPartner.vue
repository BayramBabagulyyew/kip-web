<template>
  <div>
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form style="display: flex; flex-direction: column; gap: 5px">
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
        @updateValue="(val) => (main[`title${activeLang}`] = val)"
        :value="main[`title${activeLang}`] ?? ''"
        class="mb-2"
      />
      <admin-input
        @updateValue="(val) => (main[`website`] = val)"
        :value="main?.[`website`]"
        label="website"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (mainc[`priority`] = val)"
        :value="main?.[`priority`]"
        label="priority"
        placeholder="..."
        type="number"
      />
      <RichTextEditor
        :model-value="main[`text${activeLang}`]"
        @update="(val) => (main[`text${activeLang}`] = val)"
        :language="activeLang"
        label="Text"
      />
      <base-button @clickedButton="saveData" style="width: 200px"> Save </base-button>
    </form>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp">Success</popup-success>
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
  computed: {
    ...mapGetters(['imageURL']),
  },
  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      errorMessage: 'Error saving data',
      main: {
        partnerId: this.$route.query.id ?? '',
        textTm: '',
        textRu: '',
        textEn: '',
        nameTm: '',
        nameEn: '',
        nameRu: '',
        website: '',
        prioriy: '',
        fileUrl: '',
        media: '',
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
            partnerId: this.$route.query.id ?? '',
            textTm: '',
            textRu: '',
            textEn: '',
            partnerId: '',
            nameTm: '',
            nameEn: '',
            nameRu: '',
            website: '',
            prioriy: '',
            fileUrl: '',
            media: '',
          };
        }
      },
    },
  },

  methods: {
    // async saveData() {
    // try {
    //   const id = this.$route.query.id;
    //   const view = this.$route.query.view;
    //   console.log(main, '=-=-=--');
    //   let url = 'partner';
    //   let method = 'POST';
    //   if (id && view === 'edit') {
    //     url = `partner/${id}`;
    //     method = 'PATCH';
    //   }
    // const { success } = await request({
    //   url,
    //   method,
    //   data: this.main,
    // });
    // console.log(success);
    // if (success) {
    //   this.main = {
    //     textTm: '',
    //     textRu: '',
    //     textEn: '',
    //     partnerId: '',
    //     nameTm: '',
    //     nameEn: '',
    //     nameRu: '',
    //     website: '',
    //     prioriy: '',
    //     fileUrl: '',
    //     media: '',
    //   };
    //   this.activePupUp = true;
    //   this.$emit('setView', view === 'edit' ? 'list' : 'add');
    // }
    // } catch (error) {
    //   console.log(error);
    // this.errorMessage = error.message;
    // this.errorPupUp = true;
    // }
    // setTimeout(() => {
    //   this.activePupUp = false;
    //   this.errorPupUp = false;
    // }, 2000);
    // },
    async fetchPartner(id) {
      try {
        const { data } = await request({
          url: `partner/${id}`,
          method: 'GET',
        });
        this.main = data;
      } catch (error) {
        this.errorMessage = error.message;
        console.error('Error fetching tagline:', error);
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

<style>
.left-item {
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

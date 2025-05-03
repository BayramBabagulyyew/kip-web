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
      <admin-textarea
        v-model="main[`content${activeLang}`]"
        label="Content"
        class="mb-2"
      />
      <admin-textarea
        v-model="main[`tagline${activeLang}`]"
        label="Tagline #home"
        class="mb-2"
      />
      <div class="flex flex-x-end">
        <base-button
          @clickedButton="addAbout"
          style="width: 150px"
          class="admin-header__button"
        >
          Save
        </base-button>
      </div>
    </form>
    <popup-error :errorPupUp="errorPupUp">Boş meydanlary dolduryň!</popup-error>
    <popup-success :activePupUp="activePupUp">Success</popup-success>
  </div>
</template>
<script>
import { ADD_ABOUT, GET_ABOUT } from "@/api/admin.api";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      activeLang: "Tm",
      activePupUp: false,
      errorPupUp: false,
      main: {
        titleTm: "",
        titleRu: "",
        titleEn: "",
        contentTm: "",
        contentRu: "",
        contentEn: "",
        taglineTm: "",
        taglineRu: "",
        taglineEn: "",
      },
    };
  },

  computed: {
    ...mapGetters(["isPopup"]),
  },

  async mounted() {
    await this.fetchAbout();
  },

  methods: {
    async addAbout() {
      try {
        const { data, statusCode } = await ADD_ABOUT({
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

    async fetchAbout() {
      try {
        const { data, statusCode } = await GET_ABOUT();
        if (statusCode) {
          this.main = data;
        }
      } catch (error) {
        console.error(error, "NO INTERNET");
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
</style>

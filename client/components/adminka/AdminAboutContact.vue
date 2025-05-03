<template>
  <div class="admin-about-contact">
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main.phone = val)"
        :value="main?.phone"
        label="Phone"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.mobilePhone = val)"
        :value="main?.mobilePhone"
        label="Mobile phone"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.instagram = val)"
        :value="main?.instagram"
        label="Instagram"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.instagramLink = val)"
        :value="main?.instagramLink"
        label="Instagram link"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info = val)"
        :value="main?.info"
        label="Info"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main[`address${activeLang}`] = val)"
        :value="main[`address${activeLang}`]"
        label="Address"
        class="mb-2"
        placeholder="..."
      />
      <div class="flex flex-x-end admin-header-button">
        <base-button @clickedButton="addAboutContact" style="width: 150px">
          Save
        </base-button>
      </div>
    </form>
    <popup-error :errorPupUp="errorPupUp">Boş meydanlary dolduryň!</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { ADD_ABOUT_CONTACT, GET_ABOUT_CONTACT } from "@/api/admin.api";
export default {
  data() {
    return {
      activeLang: "Tm",
      activePupUp: false,
      errorPupUp: false,
      main: {
        phone: "",
        mobilePhone: "",
        instagram: "",
        instagramLink: "",
        info: "",
        addressTm: "",
        addressRu: "",
        addressEn: "",
      },
    };
  },

  async mounted() {
    await this.fetchAboutContact();
  },

  methods: {
    async addAboutContact() {
      try {
        const { data, statusCode } = await ADD_ABOUT_CONTACT({
          data: this.main,
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

    async fetchAboutContact() {
      try {
        const { data, statusCode } = await GET_ABOUT_CONTACT();
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
.admin-header-button {
  grid-column: 1 / span 2;
}
.admin-form {
  padding: 0 36px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  gap: 30px;
}
</style>

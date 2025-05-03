<template>
  <div>
    <base-languages @selectLanguage="toggleLanguage" :activeLang="activeLang" />
    <form class="admin-form" @submit.prevent>
      <admin-input
        @updateValue="(val) => (main.info1[`title${activeLang}`] = val)"
        :value="main?.info1 && main?.info1[`title${activeLang}`]"
        label="Countries"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info1.count = val)"
        :value="main?.info1?.count"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info2[`title${activeLang}`] = val)"
        :value="main?.info2 && main?.info2[`title${activeLang}`]"
        label="Employees"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info2.count = val)"
        :value="main?.info2?.count"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info3[`title${activeLang}`] = val)"
        :value="main?.info3 && main?.info3[`title${activeLang}`]"
        label="Clients"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info3.count = val)"
        :value="main?.info3?.count"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info4[`title${activeLang}`] = val)"
        :value="main?.info4 && main?.info4[`title${activeLang}`]"
        label="Projects"
        class="mb-2"
        placeholder="..."
      />
      <admin-input
        @updateValue="(val) => (main.info4.count = val)"
        :value="main?.info4?.count"
        label="Number"
        type="number"
        class="mb-2"
        placeholder="..."
      />
      <div class="flex flex-x-end admin-header-button">
        <base-button @clickedButton="addAboutInfo" style="width: 150px">
          Save
        </base-button>
      </div>
    </form>
    <popup-error :errorPupUp="errorPupUp">Boş meydanlary dolduryň!</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { ADD_ABOUT_INFO, GET_ABOUT_INFO } from "@/api/admin.api";
export default {
  data() {
    return {
      activeLang: "Tm",
      activePupUp: false,
      errorPupUp: false,
      main: {
        info1: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
        info2: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
        info3: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
        info4: {
          titleTm: "",
          titleRu: "",
          titleEn: "",
          count: null,
        },
      },
    };
  },

  async mounted() {
    await this.fetchAboutInfo();
  },

  methods: {
    async addAboutInfo() {
      try {
        const { data, statusCode } = await ADD_ABOUT_INFO({ data: this.main });
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

    async fetchAboutInfo() {
      try {
        const { data, statusCode } = await GET_ABOUT_INFO();
        if (statusCode) {
          this.main = data;
        }
      } catch (error) {
        console.error(error, "NO INTERNET or I DON'T KNOW");
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

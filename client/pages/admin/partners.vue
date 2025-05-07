<template>
  <div>
    <admin-header> Partners </admin-header>
    <div class="admin-partners">
      <div class="admin-partners__block">
        <h1 class="admin-partners__block-title">DEALERSHIP</h1>
        <div class="admin-partners__block-row">
          <form @submit.prevent class="admin-partners__block-form">
            <base-file-input
              imgUpload
              @file="(file) => uploadPhoto(file, 'dealership')"
              style="width: 290px; min-height: 200px"
              :image="main['dealership'].fileUrl"
              class="mb-1"
            />
            <admin-input
              label="Priority"
              placeholder="..."
              type="number"
              @updateValue="(val) => (main.dealership.priority = val)"
              :value="main?.dealership?.priority"
              class="mb-2"
              appendIcon="starIcon"
            />
            <admin-input
              label="Website"
              placeholder="..."
              @updateValue="(val) => (main.dealership.website = val)"
              :value="main?.dealership?.website"
              class="mb-2"
            />
            <base-button @clickedButton="upsertData('dealership')">
              Save
            </base-button>
          </form>
          <div class="admin-partners__block-row-wrapper">
            <base-uploaded-file
              class="admin-partners__block-image"
              v-for="item in datas.dealership"
              @itemEdit="partnerEdit(item, 'dealership')"
              :key="item.partnerId"
              imgUpload
              :image="item.fileUrl"
              :positionNumber="item.priority"
              @itemDelete="() => itemDelete(item)"
              adminCrash
            />
          </div>
        </div>
      </div>
      <div class="admin-partners__block">
        <h1 class="admin-partners__block-title">Наши клиенты</h1>
        <div class="admin-partners__block-row">
          <form @submit.prevent class="admin-partners__block-form">
            <base-file-input
              imgUpload
              :image="main['clients'].fileUrl"
              @file="(file) => uploadPhoto(file, 'clients')"
              style="width: 290px; min-height: 200px"
              class="mb-1"
            />
            <admin-input
              label="Priority"
              placeholder="..."
              @updateValue="(val) => (main.clients.priority = val)"
              :value="main?.clients?.priority"
              type="number"
              class="mb-2"
              appendIcon="starIcon"
            />
            <admin-input
              label="Website"
              placeholder="..."
              @updateValue="(val) => (main.clients.website = val)"
              :value="main?.clients?.website"
              class="mb-2"
            />
            <base-button @clickedButton="upsertData('clients')">
              Save
            </base-button>
          </form>
          <div class="admin-partners__block-row-wrapper">
            <base-uploaded-file
              class="admin-partners__block-image"
              v-for="item in datas.clients"
              @itemEdit="partnerEdit(item, 'clients')"
              :key="item.partnerId"
              imgUpload
              :image="item.fileUrl"
              :positionNumber="item.priority"
              @itemDelete="() => itemDelete(item)"
              adminCrash
            />
          </div>
        </div>
      </div>
      <div class="admin-partners__block">
        <h1 class="admin-partners__block-title">Наши проекты</h1>
        <div class="admin-partners__block-row">
          <form @submit.prevent class="admin-partners__block-form">
            <base-file-input
              imgUpload
              :image="main['projects'].fileUrl"
              @file="(file) => uploadPhoto(file, 'projects')"
              style="width: 290px; min-height: 200px"
              class="mb-1"
            />
            <admin-input
              label="Priority"
              placeholder="..."
              @updateValue="(val) => (main.projects.priority = val)"
              :value="main?.projects?.priority"
              type="number"
              class="mb-2"
              appendIcon="starIcon"
            />
            <admin-input
              label="Website"
              placeholder="..."
              @updateValue="(val) => (main.projects.website = val)"
              :value="main?.projects?.website"
              class="mb-2"
            />
            <base-button @clickedButton="upsertData('projects')"
              >Save</base-button
            >
          </form>
          <div class="admin-partners__block-row-wrapper">
            <base-uploaded-file
              class="admin-partners__block-image"
              v-for="item in datas.projects"
              @itemEdit="partnerEdit(item, 'projects')"
              :key="item.partnerId"
              imgUpload
              :image="item.fileUrl"
              :positionNumber="item.priority"
              @itemDelete="() => itemDelete(item)"
              adminCrash
            />
          </div>
        </div>
      </div>
    </div>
    <popup-error :errorPupUp="errorPupUp">{{ errorMessage }}</popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
    <pop-up-delete
      :deletePupUp="deletePupUp"
      @no="deletePupUp = false"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import { request } from "@/api/generic.api";

export default {
  layout: "admin",
  data() {
    return {
      datas: {
        dealership: [],
        clients: [],
        projects: [],
      },
      activePupUp: false,
      errorPupUp: false,
      paginationCount: 0,
      deletePupUp: false,
      errorMessage: "Boş meydanlary dolduryň!",
      id: null,
      main: {
        dealership: {
          partnerId: "",
          website: null,
          fileUrl: null,
          priority: null,
          type: "dealership",
        },
        clients: {
          partnerId: "",
          website: null,
          fileUrl: null,
          priority: null,
          type: "clients",
        },
        projects: {
          partnerId: "",
          website: null,
          fileUrl: null,
          priority: null,
          type: "projects",
        },
      },
    };
  },
  async mounted() {
    await this.getGalleries();
  },
  methods: {
    partnerEdit(data, str) {
      // console.log(this.main[str], data);
      data["type"] = str;
      Object.keys(this.main[str]).forEach(
        (key) => (this.main[str][key] = data[key])
      );
    },
    async getGalleries() {
      try {
        const { success, data } = await request({
          url: "images/partners/all",
        });
        if (!success) return;
        this.paginationCount = Math.ceil(data.count / this.limit);
        this.datas.dealership = data.dealership;
        this.datas.clients = data.clients;
        this.datas.projects = data.projects;
      } catch (error) {
        console.log(error);
      }
    },
    itemDelete(data) {
      this.id = data.partnerId;
      this.deletePupUp = true;
    },
    async upsertData(str) {
      if (!this.main[str].priority || !this.main[str].fileUrl) {
        this.errorPupUp = true;
        this.errorMessage = "Boş meydanlary doldury";
        setTimeout(() => {
          this.errorPupUp = false;
        }, 2000);
      } else {
        try {
          const { success, data } = await request({
            url: "images/partners/upsert",
            data: this.main[str],
          });
          if (!success) return;
          await this.getGalleries();
          Object.keys(this.main[str]).forEach(
            (key) => (this.main[str][key] = null)
          );
        } catch (error) {
          // console.log(error.response);
          if (error.response.data.statusCode === 611) {
            this.errorMessage = "Bul piority eyam bar";
            this.errorPupUp = true;
            setTimeout(() => {
              this.errorPupUp = false;
            }, 2000);
          }
        }
      }
    },
    async confirm() {
      try {
        const { success } = await request({
          url: `images/partners/remove/${this.id}`,
        });
        if (!success) return;
        this.deletePupUp = false;
        await this.getGalleries();
      } catch (error) {
        console.log(error);
      }
    },
    async uploadPhoto(file, str) {
      try {
        const { success, data } = await request({
          url: "upload",
          data: {
            fileUrl: file,
          },
          file: true,
        });
        if (!success) return;
        this.main[str].fileUrl = data.url;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-partners {
  padding: 0 36px 30px;

  &__block {
    margin-bottom: 40px;
  }

  &__block-title {
    font-size: 20px;
    color: var(--text4);
    margin-bottom: 13px;
    position: relative;
    padding-bottom: 7px;
    display: inline-block;
    &::after {
      content: "";
      width: 70%;
      height: 1px;
      background-color: red;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  &__block-row {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  &__block-row-wrapper {
    width: calc(55vw);
    overflow-x: auto;
    display: flex;
    gap: 20px;
    padding-bottom: 4px;
    &::-webkit-scrollbar-track {
      background-color: #d5d5d5;
      transition: 0.3s all;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      transition: 0.3s all;
    }
  }

  &__block-form {
  }

  &__block-image {
    height: 200px;
    flex: 0 0 290px;
  }
}
</style>

<template>
  <div class="admin-project-list">
    <base-table>
      <thead>
        <tr>
          <th>N*</th>
          <th>Logo</th>
          <th>Company name</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datas" :key="item.projectId">
          <td>{{ (page - 1) * limit + index + 1 }}</td>
          <td>
            <img :src="`${imageURL}${item.cover}`" alt="" />
          </td>
          <td>{{ item?.companyEn }}</td>
          <td class="description" v-html="item.descriptionTm"></td>
          <td>{{ item?.priority }}</td>
          <td>
            <div class="controller">
              <base-icon icon="adminCrash" @clicked="itemDelete(item)" />
              <base-icon icon="editIcon" @clicked="$emit('itemEdit', item)" />
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
    <pop-up-delete
      :deletePupUp="deletePupUp"
      @no="deletePupUp = false"
      @confirm="confirm"
    />
  </div>
</template>

<script>
import { request } from "@/api/generic.api";
import { mapGetters } from "vuex";
export default {
  emits: ["itemEdit"],
  props: {
    datas: {
      type: Array,
      default: [],
    },
    index: {
      type: Number,
      default: null,
    },
    page: {
      type: Number,
      default: null,
    },
    limit: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      deletePupUp: false,
      id: null,
    };
  },
  computed: {
    ...mapGetters(["imageURL"]),
  },
  methods: {
    itemDelete(data) {
      this.id = data.projectId;
      this.deletePupUp = true;
    },
    async confirm() {
      try {
        const { success } = await request({
          url: `projects/remove/${this.id}`,
        });
        if (!success) return;
        this.deletePupUp = false;
        this.$emit("itemDelete");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-project-list {
  padding: 0 36px;
  margin-top: 20px;
}
</style>

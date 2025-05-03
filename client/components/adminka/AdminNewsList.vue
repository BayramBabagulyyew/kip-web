<template>
  <div class="admin-news-list">
    <base-table>
      <thead>
        <tr>
          <th>N*</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date</th>
          <th>Priority</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in datas" :key="item.newsId">
          <td>{{ (page - 1) * limit + index + 1 }}</td>
          <td>
            <img :src="`${imageURL}${item.image}`" alt="" />
          </td>
          <td>{{ item.titleTm }}</td>
          <td v-html="item.contentTm"></td>
          <td class="date">{{ new Date(item.createdAt).toLocaleDateString('ru-RU') }}</td>
          <!-- <td class="star"><base-icon icon="starIcon" /></td> -->
          <td style="text-align: center">{{ item.priority }}</td>
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
    ></pop-up-delete>
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
      this.id = data.newsId;
      this.deletePupUp = true;
    },
    async confirm() {
      try {
        const { success } = await request({
          url: `news/remove/${this.id}`,
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
.admin-news-list {
  padding: 0 36px;
  margin-top: 20px;
}
</style>

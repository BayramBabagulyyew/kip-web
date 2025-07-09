<template>
  <div class="admin-list">
    <base-table>
      <thead>
        <tr>
          <th>№</th>
          <th>Tagline</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ (page - 1) * limit + index + 1 }}</td>
          <td>{{ item.taglineTm }}</td>
          <td class="date">{{ new Date(item?.createdAt).toLocaleDateString('ru-RU') }}</td>
          <td>
            <div class="controller">
              <base-icon icon="adminCrash" @clicked="itemDelete(item)" />
              <base-icon icon="editIcon" @clicked="$emit('setView', 'edit', item)" />
            </div>
          </td>
        </tr>
      </tbody>
    </base-table>
    <pop-up-delete
      :deletePupUp="deletePupUp"
      @no="deletePupUp = false"
      @confirm="confirmDelete"
    ></pop-up-delete>
  </div>
</template>

<script>
import { request } from '@/api/generic.api';
export default {
  emits: ['setView'],
  async mounted() {
    await this.fetchAbout();
  },
  data() {
    return {
      activeLang: 'Tm',
      activePupUp: false,
      errorPupUp: false,
      deletePupUp: false,
      errorMessage: 'Error fetching tagline',
      items: [],
      page: 1,
      limit: 10,
      currentId: null,
    };
  },
  methods: {
    async fetchAbout() {
      try {
        const { data, success } = await request({
          url: 'tagline',
          method: 'GET',
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        console.log(data);
        if (success) {
          this.items = await data.rows;
        }
      } catch (error) {
        console.error('Error fetching tagline:', error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
    },
    itemDelete(data) {
      this.currentId = data.id;
      this.deletePupUp = true;
    },
    async confirmDelete() {
      try {
        const { success } = await request({
          url: `tagline/${this.currentId}`,
          method: 'DELETE',
        });
        if (success) {
          this.deletePupUp = false;
          this.$emit('itemDelete');
          await this.fetchAbout();
        }
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
    },
    setViewUpdate(item) {
      this.$router.push({ query: { view: 'edit', id: item.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-list {
  margin-top: 20px;
}
</style>

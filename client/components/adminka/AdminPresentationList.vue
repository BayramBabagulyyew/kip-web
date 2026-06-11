<template>
  <div class="admin-list">
    <base-table>
      <thead>
        <tr>
          <th>№</th>
          <th>Language</th>
          <th>File</th>
          <th>Created Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.presentationId">
          <td>{{ (page - 1) * limit + index + 1 }}</td>
          <td>{{ item.language }}</td>
          <td>
            <a :href="item.file" target="_blank" rel="noopener">{{ item.file }}</a>
          </td>
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
    await this.fetchPresentations();
  },
  data() {
    return {
      activePupUp: false,
      errorPupUp: false,
      deletePupUp: false,
      errorMessage: 'Error fetching presentations',
      items: [],
      page: 1,
      limit: 10,
      currentId: null,
    };
  },
  methods: {
    async fetchPresentations() {
      try {
        const { data, success } = await request({
          url: 'presentation',
          method: 'GET',
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        if (success) {
          this.items = await data.rows;
        }
      } catch (error) {
        console.error('Error fetching presentations:', error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
    },
    itemDelete(data) {
      this.currentId = data.presentationId;
      this.deletePupUp = true;
    },
    async confirmDelete() {
      try {
        const { success } = await request({
          url: `presentation/${this.currentId}`,
          method: 'DELETE',
        });
        if (success) {
          this.deletePupUp = false;
          await this.fetchPresentations();
        }
      } catch (error) {
        console.log(error);
        this.errorMessage = error.message;
        this.errorPupUp = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-list {
  margin-top: 20px;
}
</style>

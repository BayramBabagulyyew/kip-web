<!-- components/ImagePreviewModal.vue -->
<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span class="close" @click="closeModal">&times;</span>
      <img :src="imageUrl" alt="Image Preview" class="modal-image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    isVisible: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
}
.modal-content {
  position: relative;
  /* background-color: white; */
  padding: 2px;
  border-radius: 1px;
  text-align: center;
}
.close {
  position: absolute;
  top: 0px;
  right: 60px;
  font-size: 34px;
  cursor: pointer;
}
.modal-image {
  max-width: 80%;
  height: 80%; /*  auto; */
  border-radius: 4px;
}
</style>

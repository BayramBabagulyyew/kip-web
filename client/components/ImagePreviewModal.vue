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
  display: inline-block; /* Make content wrap the image */
  padding: 0;
  border-radius: 1px;
  text-align: center;
}
.close {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 34px;
  cursor: pointer;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.modal-image {
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
  display: block;
}
</style>

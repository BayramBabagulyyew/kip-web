<template>
  <div class="radio-button">
    <label v-for="option in options" :key="option.value">
      <input
        type="radio"
        :value="option.value"
        v-model="selectedValue"
        @change="emitChange"
      />
      {{ option.label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
      required: false,
    },
  },
  data() {
    return {
      selectedValue: this.value,
    };
  },
  methods: {
    emitChange() {
      this.$emit("input", this.selectedValue);
    },
  },
};
</script>

<style scoped>
/* Add your component styles here if needed */
.radio-button {
  display: flex;
  gap: 20px;
}
label {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 16px;
}
input {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>

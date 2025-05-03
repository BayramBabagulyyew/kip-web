<template>
  <div class="base-input">
    <h4 class="base-input__label" v-if="label">
      {{ label }}
    </h4>
    <input
      :type="type"
      class="input"
      :placeholder="placeholder"
      :style="`height: ${height}px`"
      @input="
        (e) =>
          $emit(
            'updateValue',
            type === 'number' ? Number(e.target.value) : e.target.value
          )
      "
      :value="value"
    />
    <base-icon :icon="appendIcon" v-if="appendIcon" class="base-input__icon" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => "text",
    },
    label: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "",
    },
    height: {
      type: String,
      default: () => "",
    },
    value: {
      type: String | Number,
    },
    appendIcon: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-input {
  width: 100%;
  position: relative;
  z-index: 2;

  &__label {
    color: var(--primary);
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 4px;

    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__icon {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-25%);
    width: 42px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 479px) {
      font-size: 12px;
      height: 34px;
    }
  }

  &__icon-close {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-25%);
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 12px;
    display: none;
    justify-content: center;
    align-items: center;
  }
}

input[type="date"]::date-selector-button {
  border: 2px solid #6c5ce7;
  padding: 0.2em 0.4em;
  border-radius: 0.2em;
  background-color: #a29bfe;
  transition: 1s;
}

input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0;
  z-index: 10;
}

.input {
  border: 1px solid #f3f3f3 !important;
  border-radius: 4px;
  color: var(--border);
  font-size: 16px;
  width: 100%;
  height: 42px;
  transition: 0.3s ease 0s;
  padding: 10px 17px 10px 10px;
  background: #f3f3f3;
  position: relative;
  &::placeholder {
    border-radius: 16px;
    color: var(--text4);
    font-weight: 400;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  @media (max-width: 479px) {
    font-size: 12px;
    height: 40px;
  }
}
</style>

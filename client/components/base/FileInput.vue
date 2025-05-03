<template>
  <div class="base-input">
    <h4 class="base-input__label" v-if="label">
      {{ label }}
    </h4>
    <h2 class="base-input__fake-placeholder" v-if="fakePlaceholder">
      {{ fakePlaceholder }}
    </h2>
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
    <base-icon icon="file" v-if="appendIcon" class="base-input__icon cp" />
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
    fakePlaceholder: {
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
.cp {
  cursor: pointer;
}
.base-input {
  width: 100%;
  position: relative;
  border: 1px solid var(--border) !important;
  border-radius: 4px;
  color: var(--border);
  font-size: 16px;
  width: 100%;
  height: 42px;
  transition: 0.3s ease 0s;
  background: #fff;
  position: relative;
  cursor: pointer;

  @media (max-width: 479px) {
    font-size: 12px;
    height: 40px;
  }

  &__label {
    font-weight: 700;
    font-size: 16px;
    line-height: 120%;
    color: var(--text);
    margin-bottom: 10px;
    font-size: 16px;

    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__fake-placeholder {
    color: var(--border);
    font-weight: 400;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__icon {
    position: absolute;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 38px;
    background-color: #fff;
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
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 12px;
    display: none;
    justify-content: center;
    align-items: center;
  }
}

input[type="file"] {
  opacity: 0;
}

.input {
  width: 100%;
  height: 100%;
  cursor: pointer;

  &::placeholder {
    border-radius: 16px;
    color: var(--border);
    font-weight: 400;
  }

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
}
</style>

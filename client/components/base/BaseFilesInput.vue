<template>
  <div
    :class="classes"
    :style="{
      width: width ? `${width}px` : null,
    }"
  >
    <div class="file__label-wrapper">
      <div v-if="label" class="file__label">
        {{ label }}
      </div>
      <div v-if="labelImportant" class="file__label-important">*</div>
    </div>
    <div class="file__body">
      <div class="file__prepend-icon">
        <base-icon icon="file"></base-icon>
      </div>
      <label class="file__file">
        <input
          type="file"
          ref="file"
          :disabled="disabled || readonly"
          @change="changeFile"
          :accept="accept"
        />
        <span v-if="modelValue"> {{ modelValue && modelValue.name }}</span>
        <span v-else-if="value"> {{ value }}</span>
        <span v-else class="file__placeholder">{{ placeholder }}</span>
      </label>
    </div>
    <div v-if="showMessage" class="file__message">Error</div>
  </div>
</template>
<script>
export default {
  emits: ["changeFile"],
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: null,
    },
    labelImportant: {
      type: Boolean,
      default: () => false,
    },
    message: {
      type: String,
      default: null,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: null,
    },
    progress: {
      type: Number,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    accept: {
      type: String,
      default: ".pdf,.doc,.docx,.xml,.txt,.zip,.xlsx,.xls,.csv,.json",
    },
  },

  data() {
    return {
      showMessage: false,
      file: null,
    };
  },

  computed: {
    classes() {
      return [
        "file",
        {
          "file--success": this.success,
          "file--error": this.error,
          "file--disabled": this.disabled,
          "file--readonly": this.readonly,
        },
      ];
    },
  },

  methods: {
    changeFile(e) {
      this.$emit("changeFile", e.target.files);
      setTimeout(() => {
        this.$refs.file = null;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.file {
  width: 100%;
  &__label-wrapper {
    position: relative;
    display: inline-block;
  }

  // .input__label
  &__label {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.135px;
    color: var(--text);
    padding-bottom: 4px;

    &-important {
      position: absolute;
      right: -10px;
      top: 2px;
      color: red;
      font-size: 12px;
    }
  }
  // .file__body
  &__body {
    border: 1px solid var(--border);
    border-radius: 6px;
    position: relative;
    display: flex;
    height: 42px;
    // overflow: hidden;
  }
  // .file__prepend-icon
  &__prepend-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--gray-400);
  }

  // .file__file
  &__file {
    width: 100%;
    cursor: pointer;
    input {
      display: none;
    }
    span {
      width: 100%;
      padding: 5px 10px 5px 38px;
      display: block;
      background-color: transparent;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.135px;
      color: var(--text);
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      word-break: break-all;
      &.file__placeholder {
        color: var(--gray-400);
      }
    }
  }
  // .file__progress
  &__progress {
    display: flex;
    align-items: center;
    pointer-events: none;
    padding-right: 9px;
  }
  // .file__progress-count
  &__progress-count {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.135px;
    color: var(--text);
    padding-right: 7px;
  }
  // .file__progress-area
  &__progress-area {
    width: 20px;
    height: 20px;
    svg {
      width: 20px;
      height: 20px;
      circle {
        fill: none;
        stroke-width: 3px;
        stroke: var(--secondary-300);
        &:nth-child(2) {
          stroke: var(--text);
          stroke-dasharray: 45;
          stroke-dashoffset: calc(45 - (45 * var(--present)) / 100);
        }
      }
    }
  }
  // .file__preview
  &__preview {
    padding: 9px;
    background-color: var(--primary);
    color: var(--white);
    border-left: 1px solid var(--gray-400);
  }

  // .file__message
  &__message {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.4px;
    padding-top: 4px;
  }
  &--success {
    .file__label {
      color: var(--primary);
    }
    .file__body {
      border-color: var(--primary);
    }
    .file__prepend-icon {
      color: var(--primary);
    }
    .file__message {
      color: var(--primary);
    }
    .file__progress-count {
      color: var(--primary);
    }
    .file__progress-area {
      svg {
        circle {
          &:nth-child(2) {
            stroke: var(--primary);
          }
        }
      }
    }
  }
  &--error {
    animation: 0.2s invalid forwards;
    .file__label {
      color: red;
    }
    .file__body {
      border-color: red;
    }
    .file__prepend-icon {
      color: red;
    }
    .file__message {
      color: red;
    }
    .file__progress-count {
      color: red;
    }
    .file__progress-area {
      svg {
        circle {
          &:nth-child(2) {
            stroke: red;
          }
        }
      }
    }
  }
  &--disabled {
    .file__label {
      color: var(--gray-500);
    }
    .file__body {
      border-color: var(--gray-500);
      background-color: var(--gray-100);
    }
    .file__file {
      span {
        color: var(--gray-500);
        cursor: not-allowed;
        pointer-events: all !important;
      }
    }
    .file__prepend-icon {
      color: var(--gray-500);
    }
    .file__message {
      color: var(--gray-500);
    }
  }
  &--readonly {
    .file__label {
      color: var(--text);
    }
    .file__body {
      border-color: var(--secondary-200);
      background-color: transparent;
    }
    .file__prepend-icon {
      color: var(--text);
    }
    .file__file {
      span {
        color: var(--text);
        cursor: default;
        pointer-events: none;
      }
    }
    .file__prepend-icon {
    }
    .file__message {
    }
  }
}

@keyframes invalid {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>

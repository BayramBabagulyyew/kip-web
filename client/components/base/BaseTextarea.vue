<template>
  <div class="base-textarea">
    <h4 class="base-textarea__label" v-if="label">{{ $t(label) }}</h4>
    <textarea
      type=""
      class="base-textarea__textarea"
      :placeholder="placeholder"
      rows="6"
      :style="`height:${height}px`"
      @input="(e) => $emit('updateValue', e.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
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
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-textarea {
  width: 100%;

  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    color: var(--text);
    margin-bottom: 10px;
    text-transform: uppercase;
    @media (max-width: 767px) {
      margin-bottom: 6px;
      font-size: 14px;
    }
  }

  &__textarea {
    border: 1px solid var(--border);
    border-radius: 4px;
    color: var(--border);
    font-size: 16px;
    width: 100%;
    transition: 0.3s ease 0s;
    padding: 12px 12px 0px;
    background: #fff;
    resize: none;
    height: 87%;
    &:focus {
      border: 1px solid var(--text) !important;
      color: var(--text);
      &::placeholder {
        color: var(--text);
      }
    }
    &::placeholder {
      border-radius: 16px;
      color: var(--border);
      font-weight: 400;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
}
</style>

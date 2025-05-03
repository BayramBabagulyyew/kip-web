<template>
  <div class="file-input">
    <h1 v-if="label" class="file-input__label">
      {{ label }}
    </h1>
    <label>
      <input @change="change" type="file" />
      <div v-if="!imgPath" class="file-input__content">
        <base-icon icon="adminImg"></base-icon>
      </div>
      <img v-else :src="`${imageURL}${imgPath}`" alt="" />
    </label>
    <base-icon v-if="imgUpload" icon="imgUpload" class="file-input__icon" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    imgUpload: {
      type: Boolean,
      default: () => null,
    },
    image: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      imgPath: null,
    };
  },
  computed: {
    ...mapGetters(["imageURL"]),
  },
  watch: {
    image: function (newVal) {
      if (!newVal || newVal === "") {
        this.imgPath = null;
      } else {
        this.imgPath = newVal;
      }
    },
  },
  methods: {
    change(event) {
      // this.imgPath = URL.createObjectURL(event?.target?.files[0]);
      this.$emit("file", event.target.files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-input {
  position: relative;
  width: 100%;
  min-height: 100%;
  border-radius: 2px;

  &__label {
    font-size: 16px;
    margin-bottom: 8px;
    color: var(--primary);
  }

  label {
    width: 100%;
    display: inline-block;
    background-color: var(--gray-700);
    cursor: pointer;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
      object-position: center;
    }
  }

  input {
    visibility: hidden;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    width: 45px;
    height: 35px;
    background-color: #fff;
    transition: 0.2s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #969494;
    }
  }

  &__icon {
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 111;
    padding: 6px;
    border-radius: 6px;
    background-color: #fff;
    cursor: auto;
  }
}
</style>

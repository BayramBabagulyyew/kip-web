<template>
  <div class="switch-case">
    <h1 class="switch-title">{{ title }}</h1>
    <div class="switch-wrapper">
      <label class="switch">
        <input
          type="checkbox"
          v-model="checkedValue"
          @change="($event) => $emit('changed', $event.target.checked)"
        />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["changed"],
  props: {
    title: {
      type: String,
      default: () => "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkedValue: this.checked,
    };
  },
  watch: {
    checked: function (newVal) {
      this.checkedValue = newVal;
    },
  },
};
</script>

<style lang="scss" scoped>
.switch-wrapper {
  padding: 10px;
  border-radius: 6px;
  background-color: #e1e1e1;
  display: inline-block;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch-title {
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: #323232;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

input:checked + .slider:before {
  background-color: var(--primary);
}

input:focus + .slider {
  .slider:before {
    background-color: var(--primary);
  }
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

<template>
  <div class="vacancy" ref="aos">
    <div class="vacancy__row">
      <div class="vacancy__logo" ref="image">
        <img src="@/assets/img/fb.svg" alt="" />
      </div>
      <div class="vacancy__form-wrapper" ref="form">
        <h1 class="vacancy__title">{{ $t("contactUs") }}</h1>
        <form @submit.prevent class="vacancy__form">
          <base-input
            @updateValue="(val) => (this.send.name = val)"
            :value="this.send.name"
            label="yourName"
            placeholder="..."
          />
          <base-input
            @updateValue="(val) => (this.send.email = val)"
            :value="this.send.email"
            :error="error && !checkValidate"
            label="yourEmail"
            placeholder="..."
          />
          <base-files-input
            type="file"
            placeholder="-----"
            :value="fileName"
            @changeFile="(files) => changeAcceptFile(files)"
          />
          <base-textarea
            @updateValue="(val) => (this.send.comment = val)"
            :value="this.send.comment"
            label="enterText"
            placeholder="-----"
          />
          <button @click="sendContact" class="vacancy__button">
            <span class="vacancy__title-form">{{ $t("send") }}</span>
          </button>
        </form>
      </div>
    </div>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { request } from "@/api/generic.api";
import { POST_MAIL } from "@/api/home.api";

export default {
  data() {
    return {
      observer: null,
      fileName: "",
      activePupUp: false,
      error: false,
      send: {
        name: "",
        email: "",
        comment: "",
        fileUrl: null,
      },
    };
  },
  mounted() {
    if (this.$refs.aos) {
      const options =
        {
          rootMargin: "0px 0px 0px 0px",
          threshold: 0.4,
        } || {};
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry && entry.isIntersecting) {
            this.$refs.image.classList.add("aos");
            this.$refs.form.classList.add("aos");
          }
        });
      }, options);
    }
    this.observer.observe(this.$refs.aos);
  },
  destroyed() {
    this.observer.disconnect();
  },
  computed: {
    checkValidate() {
      if (/^[a-z0-9._-]{2,}@[a-z0-9]{2,}\.[a-z]{2,}$/i.test(this.send.email)) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async sendContact() {
      if (
        !this.send.name ||
        !this.send.email ||
        !this.send.comment ||
        !this.checkValidate
      ) {
        this.error = false;
        setTimeout(() => {
          this.error = true;
        }, 0);
        return;
      }
      console.log(this.send);
      try {
        const { data, statusCode } = await POST_MAIL({ data: this.send });
        if (statusCode) {
          this.activePupUp = true;
          setTimeout(() => {
            this.activePupUp = false;
          }, 2000);
          Object.keys(this.send).forEach((key) => (this.send[key] = null));
          this.fileName = null;
        }
      } catch (error) {
        console.log(error);
      }
    },

    async changeAcceptFile(files) {
      this.fileName = files[0].name;
      try {
        const { success, data } = await request({
          url: "upload",
          data: {
            fileUrl: files[0],
          },
          file: true,
        });
        if (!success) return;
        this.send.fileUrl = data.url;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.vacancy {
  width: 100%;
  height: 100vh;
  position: relative;
  @media (max-width: 767px) {
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: var(--primary);
    width: 25%;
    height: 100%;
    z-index: -1;
  }
  &__row {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    max-width: 1440px;
    height: 100%;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      padding-bottom: 30px;
    }
  }

  &__logo {
    margin-left: calc(25% - 20px);
    max-width: 400px;
    height: 400px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    transition: 1s all;
    transform: translateX(-80px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateX(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      max-width: 180px;
      height: 180px;
      margin-left: calc(9% - 20px);
      margin-top: 100px;
    }
  }

  &__form-wrapper {
    margin-right: calc(25% - 20px);
    transition: 1s all;
    transform: translateY(-80px);
    opacity: 0;
    &.aos {
      opacity: 1;
      transform: translateY(0px);
      transition: 1s all;
    }
    @media (max-width: 767px) {
      margin: 0 20px;
      background: #fbfbfb;
      padding: 10px;
    }
  }

  &__title {
    position: relative;
    padding-bottom: 7px;
    color: var(--text2);
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.33px;
    text-transform: initial;
    display: inline-block;
    margin-bottom: 25px;

    &::after {
      content: "";
      bottom: 0;
      left: 0;
      width: 80%;
      height: 1px;
      background-color: var(--red);
      position: absolute;
      animation: titleAnimate 2s linear infinite;
      @keyframes titleAnimate {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
          opacity: 0;
        }
      }
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__button {
    display: flex;
    width: 143px;
    height: 45px;
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #e24339;
    margin: 0 0 0 auto;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: 0.1s;

    &::before {
      content: "";
      position: absolute;
      left: -100%;
      top: -10%;
      width: 100%;
      height: 100%;
      transition: 0.1s;
      overflow: hidden;
    }
    &:active {
      transform: scale(1.04);
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background: #af4b44;
      }
    }
    @media (max-width: 479px) {
      width: 120px;
      height: 35px;
      font-size: 16px;
    }
  }

  &__title-form {
    position: relative;
    z-index: 2;
  }
}
</style>

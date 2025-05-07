<template>
  <div class="login">
    <div class="login__wrapper">
      <div class="login__box">
        <div class="login__logo">
          <img src="@/assets/img/fb.svg" alt="" />
        </div>
        <h1 class="login__title">Welcome</h1>
        <p class="login__description">Hoş geldiň sapa geldiňiz!</p>
        <form class="login__form" @submit.prevent="login">
          <base-input
            placeholder="kip-admin"
            @updateValue="(val) => (form.username = val)"
            :value="form.username"
            style="margin-bottom: 17px"
            label="Login"
          />
          <base-input
            placeholder="********"
            @updateValue="(val) => (form.password = val)"
            :value="form.password"
            class="mb-4"
            type="password"
            label="Password"
          />
          <base-button @clickedButton="login">Save</base-button>
        </form>
      </div>
    </div>
    <popup-error :errorPupUp="errorPupUp">
      Username or password error!
    </popup-error>
    <popup-success :activePupUp="activePupUp"></popup-success>
  </div>
</template>

<script>
import { LOGIN } from "@/api/admin.api.js";
export default {
  middleware: ["auth-admin"],
  data() {
    return {
      form: { username: "", password: "password" },
      activePupUp: false,
      errorPupUp: false,
    };
  },

  methods: {
    async login() {
      if (!this.form.username || !this.form.password) {
        alert("Meydanlary dolduryn");
      } else {
        try {
          const { data, statusCode } = await LOGIN({ data: this.form });
          if (statusCode) {
            this.$cookies.set("Authorization", `Bearer ${data.token}`);
            localStorage.setItem("Authorization", `Bearer ${data.token}`);
            this.$router.push(`/admin`);
            this.activePupUp = true;
            setTimeout(() => {
              this.activePupUp = false;
            }, 2000);
          } else {
            this.$router.push("/admin/login");
          }
        } catch (err) {
          // console.log(err);
          this.errorPupUp = true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: var(--gray-light);
  cursor: auto;

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__box {
    padding: 30px 20px;
    border-radius: 20px;
    border: 1px solid #e9e7fd;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 506px;
  }

  &__logo {
    margin-bottom: 20px;
    width: 200px;
    border-radius: 50%;
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
  }

  &__title {
    color: var(--text4);
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 4px;
  }

  &__description {
    color: var(--text4);
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 40px;
  }

  &__form {
    width: 100%;
  }
}
</style>

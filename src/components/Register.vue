<template>
  <div class="register_wraper bgc_w">
    <Header :name="name"></Header>
    <!-- 注册框 -->
    <div class="register_box bgc_w">
      <h1>欢迎注册智慧扶贫!</h1>
      <van-cell-group>
        <van-field
          v-model="tel"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <!-- 注册按钮 -->
    <Button
      :title="title"
      class="submit"
      @click.native="register"
    ></Button>
    <div class="login">
      <span class="color_6">已有账号,</span>
      <router-link
        to="/"
        class="register_color"
      >立即登录</router-link>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { Toast } from "vant";
export default {
  components: {
    Button
  },
  data() {
    return {
      tel: "",
      password: "",
      name: "注册",
      title: "确认注册"
    };
  },
  methods: {
    register() {
      if (this.tel && this.password) {
        this.$axios
          .get("http://api.qijiawr.com/Login/register.html", {
            params: { tel: this.tel, password: this.password }
          })
          .then(res => {
            if (res.data.code == 0) {
              console.log(res.data.code);
              Toast("注册完成，请登录");
              setTimeout(() => {
                this.$router.push("/");
              }, 1000);
            } else {
              Toast(res.data.errmsg);
            }
          });
      } else {
        Toast("请输入用户名和密码");
      }
    }
  }
};
</script>
<style>
.van-toast {
  background-color: #1989fa !important;
}
</style>

<style scoped lang = "scss">
.register_wraper {
  height: 100vh;
  height: calc(100vh - 46px);
}
/* header样式 */
.head {
  height: 44px;
  text-align: center;
  line-height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  .back {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    width: 0.2rem;
  }
  .head_tilte {
    font-size: 20px;
    /* font-weight: bold; */
  }
}
/* 注册框 */
.register_box {
  margin-top: 45px;
  margin-bottom: 30px;
  padding-top: 15px;
  padding-left: 14px;
  h1 {
    /* text-align: center; */
    font-weight: 500;
    padding: 10px;
  }
}
/* 注册按钮样式 */
.submit {
  /* margin-top: 30px; */
}
/* 登录样式 */
.login {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 50px;
  /* top: 420px; */
  .register_color {
    /* outline: none; */
    color: #409eff;
  }
}
</style>

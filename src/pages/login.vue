<template>
  <div class="bgc_w login_wraper">
    <Header :name="name"></Header>
    <!-- 登录框 -->
    <div class="login_box">
      <h1>欢迎登录智慧扶贫!</h1>
      <van-cell-group>
        <van-field
          v-model="username"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </van-cell-group>
    </div>
    <!-- 登录按钮 -->
    <Button
      :title="title"
      class="submit"
      @click.native="login"
    ></Button>
    <!-- 注册 -->
    <div class="register">
      <span class="color_6">还没有账号,</span>
      <router-link
        to="/Register"
        class="register_color"
      >立即注册</router-link>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { Toast } from "vant";
// import Header from "../components/Header.vue";

export default {
  components: {
    Button
    // Header
  },
  data() {
    return {
      username: "18318123456",
      password: "123456",
      name: "登录",
      title: "立即登录"
    };
  },
  methods: {
    login() {
      this.$axios
        .get("http://api.qijiawr.com/Login/login.html", {
          params: { tel: this.username, password: this.password }
        })
        .then(res => {
          if (res.data.code == 0) {
            console.log(res);
            Toast("登录成功");
            setTimeout(() => {
              this.$router.push("/verity");
            }, 1000);
          } else {
            console.log(res);
            Toast(res.data.errmsg);
          }
        });
    }
  },
  created() {}
};
</script>

<style scoped lang = "scss">
.login_wraper {
  height: 100vh;
  height: calc(100vh - 46px);
}
.nav {
  width: 100%;
  height: 44px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  h2 {
    color: #333333;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
    height: 44px;
    line-height: 44px;
    position: relative;
    width: 100%;
    text-align: center;
  }
  span {
    /* 返回按钮 */
    width: 40px;
    padding-left: 8px;
    height: 44px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
  }
}
.login_box {
  margin-top: 45px;
  padding-top: 15px;
  padding-left: 14px;
  h1 {
    /* text-align: center; */
    font-weight: 500;
    padding: 10px;
  }
}
.submit {
  /* position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  margin-top: 30px;
}
/* 注册样式 */
.register {
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

<template>
  <div class="setting">
    <div class="nav">
      <span @click="back($event)">
        <van-icon
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>设置</h2>
    </div>
    <div class="content">
      <van-cell-group>
        <van-field
          icon="arrow"
          label="字体大小"
          readonly
        />
        <van-field
          label="清理缓存"
          :value="dataSize"
          icon="arrow"
          readonly
        />
        <van-field
          label="关于我们"
          icon="arrow"
          readonly
        />
        <van-field
          label="检查更新"
          v-model="version"
          icon="arrow"
          readonly
        />
      </van-cell-group>
      <button @click="logout">退出</button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "setting",
  computed: {
    dataSize: function() {
      const size = 16.7;
      return `${size}M`;
    },
    version: function() {
      const v = "1.0";
      return `当前版本${v}`;
    }
  },
  methods: {
    back: function(event) {
      this.$router.go(-1);
    },
    logout() {
      Dialog.confirm({
        message: "确定退出"
      })
        .then(() => {
          // on confirm
           this.$router.push("/");
        })
        .catch(() => {
          // on cancel
        });
    }
  },
  mounted() {
    this.$back();
  }
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 44px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    /* 返回按钮 */
    width: 70px;
    padding-left: 8px;
    display: flex;
    justify-content: flex-start;
    position: absolute;
    left: 0px;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
.content {
  position: fixed;
  top: 44px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  button {
    position: relative;
    top: 80px;
    width: 60%;
    height: 50px;
    background: #ffffff;
    border: solid 1px #8a8a8a;
    border-radius: 40px;
    left: 20%;
    font-weight: normal;
    color: #888888;
  }
}
</style>

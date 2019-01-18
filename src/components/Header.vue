<template>
  <div class="nav">
    <span>
      <van-icon
        @click="back($event)"
        name="arrow-left"
        size="20px"
      />
    </span>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: ""
  },
  methods: {
    back: function(event) {
      this.$router.go(-1);
    }
  },
  watch: {
    title(val) {
      this.name = val;
    }
  }
};
</script>

<style scoped lang = "scss">
.nav {
  width: 100%;
  height: 44px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
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
</style>

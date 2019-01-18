<template>
  <!-- <div
    class="newList"
  > 123-->
   <div
    class="newList"
    @click="newsInfo($event)"
  >
    <div class="imgbox">
      <img :src="activeData.head_img">
    </div>
    <div class="info">
      <h3>{{ activeData.info_title }}</h3>
      <h5>{{ activeData.ts  }}&nbsp;&nbsp;&nbsp;&nbsp;阅读：{{ activeData.browse_times }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "newList",
  props: {
    newsData: {
      type: Object,
      default: function() {
        return {
          head_img: "",
          info_title: "",
          ts: "",
          browse_times: "",
          id: ""
        };
      }
    }
  },
  data: function() {
    return {
      activeData: this.newsData
    };
  },
  methods: {
    newsInfo: function(event) {
      // this.$router.push(`/NewsInfo/${this.activeData.id}`);
      console.log("xinwen",event);
      this.$router.push({ name: "NewsInfo", query: { id: this.activeData.id} });
    }
  }
};
</script>

<style scoped lang="scss">
.newList {
  height: 100px;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 0 8px;
  .imgbox {
    width: 25%;
    height: 90px;
    overflow: hidden;
    margin-right: 10px;
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    width: 75%;
    height: 90px;
    display: flex;
    flex-direction: column;
    h3 {
      font-size: 14px;
      line-height: 18px;
      color: #333333;
      height: 20%;
      margin-top: 8px;
    }
    h5 {
      font-weight: normal;
      display: flex;
      align-items: flex-end;
      flex: 1;
      height: 20%;
      margin-bottom: 8px;
      color: #9a9a9a;
    }
  }
}
</style>

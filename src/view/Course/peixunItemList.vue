<template>
  <div
    class="peixunItemList"
    @click="peixunInfo($event)"
  >
    <div class="img">
      <img :src="activeData.head_img">
    </div>
    <div class="right">
      <h3>{{ activeData.info_name }}</h3>
      <!-- <h5>{{ activeData.introduce }}</h5> -->
      <!-- <h4>￥{{ activeData.train_price }}</h4> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "peixunItemList",
  props: {
    listData: {
      type: Object,
      default: function() {
        return {
          head_img: "",
          info_name: "",
          introduce: "",
          train_price: "",
          lesson_id: ""
          // imgUrl: "",
          // title: "",
          // memo: "",
          // price: "",
          // id: ""
        };
      }
    }
  },
  data: function() {
    return {
      activeData: this.listData
    };
  },
  watch: {
    listData(val) {
      this.activeData = this.listData;
    }
  },
  methods: {
    peixunInfo: function(event) {
      console.log("changeId", this.activeData.lesson_id);
      this.$emit("changeId", this.activeData.lesson_id);
    }
  },
  created() {
    // console.log(this.listData);
  }
};
</script>

<style scoped lang="scss">
.peixunItemList {
  width: calc(50% - 4px);
  overflow: hidden;
  height: 180px;
  margin-top: 8px;
  background: #ffffff;
  &:nth-of-type(odd) {
    margin-right: 8px;
  }
  .img {
    width: 100%;
    height: 130px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .right {
    height: 50px;
    display: flex;
    flex-direction: column;
    padding-left: 8px;
    padding-bottom: 4px;
    h3 {
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      color: #333333;
    }
    h4 {
      height: 12px;
      line-height: 12px;
      font-size: 12px;
      font-weight: normal;
      color: #666666;
    }
  }
}
</style>

<template>
  <div class="peixunItem">
    <div class="nav">
      <span>
        <van-icon
          @click="back($event)"
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>项目分类</h2>
    </div>
    <div class="content">
      <PeixunItemList
        v-for="item in itemData"
        :key="item.id"
        :listData="item"
        @changeId="changeId($event)"
      ></PeixunItemList>
    </div>
  </div>
</template>

<script>
import PeixunItemList from "@/view/Course/peixunItemList";

export default {
  name: "peixunItem",
  methods: {
    back: function(event) {
      this.$router.go(-1);
    },
    changeId: function(event) {
      console.log('evnet',event);
      this.$router.push(`/PeixunItemInfo/${event}`);
      // this.$router.push({ name: 'PeixunItemInfo', query: { id: event } });
    },
    getData() {
      // this.$axios.get("http://api.qijiawr.com/data/video_info").then(res => {
      //   console.log("peixun", res.data);
      //   this.itemData = res.data
      //   // console.log('item',this.itemData);
      // });
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$back();
  },
  data: function() {
    return {
      itemData:[
        {
          head_img: "http://59.110.237.236/photo/px-1.jpg",
          info_name: "中医药保健基础",
          introduce: "",
          train_price: "100",
          lesson_id: "a"
        }, {
          head_img: "http://59.110.237.236/photo/px-2.jpg",
          info_name: "月嫂法律常识",
          introduce: "",
          train_price: "100",
          lesson_id: "b"
        }, {
          head_img: "http://59.110.237.236/photo/px-3.jpg",
          info_name: "新生儿抚摸",
          introduce: "",
          train_price: "100",
          lesson_id: "c"
        }, {
          head_img: "http://59.110.237.236/photo/px-4.jpg",
          info_name: "应用营养学",
          introduce: "",
          train_price: "100",
          lesson_id: "d"
        }, {
          head_img: "http://59.110.237.236/photo/px-5.jpg",
          info_name: "母婴护理",
          introduce: "",
          train_price: "100",
          lesson_id: "e"
        }, {
          head_img: "http://59.110.237.236/photo/px-6.jpg",
          info_name: "育婴早教",
          introduce: "",
          train_price: "100",
          lesson_id: "f"
        }, {
          head_img: "http://59.110.237.236/photo/px-7.jpg",
          info_name: "月嫂礼仪",
          introduce: "",
          train_price: "100",
          lesson_id: "g"
        }, {
          head_img: "http://59.110.237.236/photo/px-8.jpg",
          info_name: "小儿推拿",
          introduce: "",
          train_price: "100",
          lesson_id: "h"
        }
      ]
    };
  },
  components: {
    PeixunItemList
  }
};
</script>

<style scoped lang="scss">
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
.content {
  position: relative;
  top: 44px;
  margin-bottom: 102px;
  display: flex;
  flex-wrap: wrap;
  padding-right: 8px;
  padding-left: 8px;
}
</style>

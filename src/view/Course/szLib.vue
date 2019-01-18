<template>
  <div class="szLib">
    <Header :name="name"></Header>
    <div class="content">
      <szLibList
        v-for="item in itemData"
        :key="item.id"
        :listData="item"
        @changeId="changeId($event)"
      >
        <!-- @click.native="handleTo(item.id)" -->
      </szLibList>
      <!-- <szLibList :listData="listData"></szLibList> 123-->
    </div>
  </div>
</template>

<script>
import szLibList from "@/view/Course/szLibList";
import axios from "axios";
export default {
  // name: "szLib",
  methods: {
    back: function(event) {
      console.log(12121);
      this.$router.go(-1);
    },
    //     getData() {
    // axios.get('/doctors').then(res=>{
    //  this.itemData = res.data.data
    //  console.log('hhh',this.itemData);
    // })
    //     },
    // handleTo(id) {
    //   console.log(id);
    //   this.$router.push({ name: "detail", query: { id: id } });
    // },
     changeId: function(event) {
      console.log("szsz");
      console.log('szid',event);
      this.$router.push({ name: "detail", query: { id: event } });
    },
    getData() {
      this.$axios.get("http://api.qijiawr.com/Teacher/index").then(res => {
        this.itemData = res.data.data;
        // console.log("1", res.data);
        // console.log("1", res.data.data);
        // console.log("list", this.itemData);
        // console.log(this.listData instanceof Array);
      });
    }
  },
  data: function() {
    return {
      name: "师资库",
      // listData: "",123
      itemData: []
      // itemData: [
      //   {
      //     imgUrl: "https://image.uczzd.cn/8477506868712349413.jpeg",
      //     title: "李明然",
      //     memo: "十年工作经验，北京XX大学副教授。",
      //     address: "北京市-海淀区",
      //     id: "3213213"
      //   },
      //   {
      //     imgUrl: "https://image.uczzd.cn/8477506868712349413.jpeg",
      //     title: "李明然",
      //     memo: "十年工作经验，北京XX大学副教授。",
      //     address: "北京市-朝阳区",
      //     id: "43123"
      //   },
      //   {
      //     imgUrl: "https://image.uczzd.cn/8477506868712349413.jpeg",
      //     title: "李明然",
      //     memo: "十年工作经验，北京XX大学副教授。",
      //     address: "天津市-武清区",
      //     id: "42421"
      //   },
      //   {
      //     imgUrl: "https://image.uczzd.cn/8477506868712349413.jpeg",
      //     title: "李明然",
      //     memo: "十年工作经验，北京XX大学副教授。",
      //     address: "天津市-南开区",
      //     id: "43123"
      //   },
      //   {
      //     imgUrl: "https://image.uczzd.cn/8477506868712349413.jpeg",
      //     title: "李明然",
      //     memo: "十年工作经验，北京XX大学副教授。",
      //     address: "上海市-嘉定区",
      //     id: "4242321"
      //   },
      //   {
      //     imgUrl: "https://image.uczzd.cn/8477506868712349413.jpeg",
      //     title: "李明然",
      //     memo: "十年工作经验，北京XX大学副教授。",
      //     address: "南京市-雨花台",
      //     id: "43232123"
      //   }
      // ]
    };
  },
  components: {
    szLibList
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$back();
  },
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
}
</style>

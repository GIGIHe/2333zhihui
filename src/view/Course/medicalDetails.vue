<template>
  <div class="medical">
    <Header :name="name"></Header>
    <div class="main">
      <!-- 渲染数据部分 -->
      <h3 class="title">{{data.title}}</h3>
      <div class="time">{{data.createline_time}}</div>
      <div class="content">{{data.content }}</div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      name: "医学分析",
      data: []
    };
  },
  methods: {
    getData() {
      let id = this.$route.query.id;
      this.$axios
        .get("http://api.qijiawr.com/Knowledge/news.html", {
          params: { id }
        })
        .then(res => {
          this.data = res.data.data;
        });
        console.log(this.data);
      // let arr = this.$store.state.medicien;
      // console.log("222", arr);
      // let id = this.$route.query.id;
      // arr.forEach((el, inex) => {
      //   if (el.id == id) {
      //     this.data = el;
      //   }
      // });
    }
  },
  created() {
    this.getData();
  },
  mounted() {
      this.$back()
  }
};
</script>

<style scoped lang = "scss">
.medical {
  /* height: 100vh; */
  background-color: #fff;
}
.main {
  margin-top: 44px;
  padding-top: 6px;
  box-sizing: border-box;
  .title {
    text-align: center;
    line-height: 2;
    height: 40px;
  }
  .content {
    text-indent: 1em;
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    border: 1px solid #eee;
    box-shadow: 5px 10px 14px #eee;
    line-height: 2;
    font-size: 15px;
  }
  .time {
    text-align: center;
    height: 30px;
    line-height: 30px;
    color: #666;
    width: 1rem;
    /* border: 1px solid #f00; */
    margin: 0 auto 10px;
    /* box-shadow: 5px 10px 14px #eee; */
  }
}
</style>

<template>
  <div class="knowledge">

    <Header :name="name"></Header>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      class="search"
    >
      <div
        slot="action"
        @click="onSearch"
      >搜索</div>
    </van-search>
    <div>
      <van-tabs>
        <van-tab title="全部">
          <ul class="result">
            <li
              @click="handle(item.id)"
              v-for="(item,index) in resultData"
              :key="index"
              class="item"
            >
              <div
                class="title"
                v-html="item.title"
              ></div>
              <!-- <div v-html="t1"></div> -->
              <div
                class="content"
                v-html="item.guide_reading"
              ></div>
              <div
                class="img"
                v-if="item.img"
              >
                <img
                  :src="item.img"
                  alt=""
                ></div>
              <div class="time">
                <span>{{item.resource}}</span>
                <span>{{item.time}}</span>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="视频">
          <ul class="list_box">
            <li
              class="item"
              v-for="(item,index) in video"
              :key="index"
            >
              <router-link :to="{name:'play',query:{id:item.id,name:'zs'}}">
                <img
                  :src="item.video_img"
                  alt=""
                >
                <div class="lecture">
                  <div
                    class="name"
                    v-html="item.name"
                  ></div>
                  <div class="job_title"><span>{{item.video_introduce}}</span></div>
                  <!-- <div class="look_num">{{item.address}}</div> -->
                </div>
              </router-link>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "knowledge",
  methods: {
    onSearch() {
      console.log(this.value);
      this.$axios
        .get("http://api.qijiawr.com/Knowledge/index.html", {
          params: { name: this.value, type: 1 }
        })
        .then(res => {
          console.log(res.data);
          console.log(this.value);
          this.resultData = res.data.data;
          // console.log("w", this.resultData);
        });
      this.$axios
        .get("http://api.qijiawr.com/Knowledge/index.html", {
          params: { name: this.value, type: 2 }
        })
        .then(res => {
          console.log("video", res);
          this.video = res.data.data;
        });
      console.log(this.video);
    },
    handle: function(id) {
      // this.$router.push(`/${route}`);
      this.$router.push({ name: "medical", query: { id: id } });
    }
  },
  mounted() {
    this.$back();
  },
  data() {
    return {
      name: "知识库",
      value: "",
      //  active: 1
      resultData: "",
      video: "",
      isShow: true
    };
  },
  computed: {
    t1() {
      let v = this.value;
      // let tt = this.resultData[0].title;
      // let title = this.resultData
      // console.log("title1",this.resultData);
      // console.log("title",this.resultData);
      // return title.forEach(item => {
      //    item.title.replace(/(医疗)/g, "<font color='red'>$1<font>");
      // });

      // let tt = "支支唔唔"
      // return  tt.replace(/(支)/,"<font color='red'>$1<font>")
    }
  }
};
</script>
<style>
.search {
  height: 44px;
  background-color: #fff !important;
  /* border:1px solid #f00; */
}
</style>

<style scoped lang = "scss">
.knowledge {
  margin-top: 44px;
  /deep/ .van-search__action {
    line-height: 43px;
    background-color: #3385ff;
    color: #fff;
  }
  .result {
    .item {
      margin-bottom: 5px;
      background-color: #fff;
      padding-left: 10px;
      padding-right: 10px;
      /* height: 200px; */
      box-sizing: border-box;
      padding-bottom: 10px;
    }
    .title {
      /* border: 1px solid #00f; */
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .content {
      padding-top: 8px;
      /* padding-bottom: 8px; */
      line-height: 1.5;
      box-sizing: border-box;
      /* height: 60px; */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .img {
      margin-top: 10px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      img {
        width: 25%;
        height: 40px;
      }
    }
    .time {
      margin-top: 10px;
      color: #666;
    }
  }
  .list_box {
    /* margin-top: 44px; */
    background-color: #fff;
    width: 100%;
    margin-bottom: 49px;
  }
  .item a {
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    height: 1rem;
    /* border: 1px solid #ff0; */
    img {
      width: 1.2rem;
      /* border: 1px solid #f00; */
    }
    .lecture {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;

      .job_title {
        color: rgb(43, 59, 43);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; //行数
        -webkit-box-orient: vertical;
        span {
          margin-right: 0.04rem;
        }
      }
      .name {
        /* color: #f00; */
        font-size: 15px;
        color: #000;
        /deep/ span {
          color: #f00;
        }
      }
      .look_num {
        color: #666;
      }
    }
  }
}
</style>

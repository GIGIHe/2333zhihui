<template>
  <div>
    <Header :name="name"></Header>
    <!-- <div class="log_img"><img
        src="../../image/poster3.jpg"
        alt=""
      ></div> -->
    <video
      :src="video.url"
      controls
      preload="auto"
      width="100%"
      height="230px"
      ref="videoPlayer"
      id="video"
      autoplay="autoplay"
      x-webkit-airplay="true"
      x5-video-player-fullscreen="true"
      playsinline="true"
      webkit-playsinline
      x5-video-player-typ="h5"
    ></video>
    <!-- tab切换 -->
    <van-tabs
      v-model="active"
      swipeable
      class="tab"
    >
      <!-- <van-tab
        v-for="(item,index) in tabs"
        :key="index"
        :title="item"
      >
        {{ item }}
<div></div>
      </van-tab> -->
      <van-tab>
        <div slot="title">简介</div>
        <div class="desc">{{video.video_introduce}}</div>
      </van-tab>
      <!-- <van-tab>
        <div slot="title">目录</div>
        <ul>
          <li
            @click="switchV(n)"
            v-for="n in 4 "
            :key="n"
            class="video_list"
          ><span>视频{{n}}</span>
            <img
              src="../../assets/play.png"
              alt=""
              class="play"
            >
          </li>
        </ul>
      </van-tab> -->
      <van-tab>
        <div slot="title">评论</div>
        <div class="desc">暂无评论</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "课程", //根据每门课的标题动态变化,
      active: "",
      tabs: [],
      video: ""
    };
  },
  methods: {
    getData() {
      let name = this.$route.query.name;
      console.log("name", name);
      switch (name) {
        case "zs":
          let id = this.$route.query.id;
          this.$axios
            .get(" http://api.qijiawr.com/Knowledge/video.html", {
              params: { id }
            })
            .then(res => {
              console.log(res.data);
              this.video = res.data.data;
              console.log("zsvideo", this.video);
              console.log(111);
            });
          break;
        case "sz":
          let sid = this.$route.query.id;
          this.$axios
            .get("http://api.qijiawr.com/Teacher/video", {
              params: { id: sid }
            })
            .then(res => {
              console.log(res.data);
              this.video = res.data.data;
              console.log("szvideo", this.video);
              console.log(222);
            });
          break;
        case "px":
          let vid = this.$route.query.id;
          console.log("vid", vid);
          this.$axios
            .get("http://api.qijiawr.com/data/video_index", {
              params: { video_id: vid }
            })
            .then(res => {
              console.log(res);
              this.video = res.data;
              console.log("pxv", res.data);
              // console.log(1111212121);
              console.log("pxvideo", this.video);
              console.log(222);
            });
          break;
        default:
          break;
      }
      // if (name == "zs") {
      // } else if (name == "sz") {

      // } else if (name == "px") {

      // }
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$back();
  },
  watch: {}
};
</script>

<style scoped lang = "scss">
.log_img {
  width: 100%;
  margin-top: 0.44rem;
  img {
    width: 100%;
    height: 2rem;
  }
}
/* tab切换 */
.tab {
  background-color: #fff;
  /deep/ .van-tabs__line {
    background-color: #409eff;
  }
  /deep/ .van-tab__pane {
    /* padding-left: 40px;
    padding-right: 20px; */
    padding: 10px;
  }
}
.video_list {
  height: 25px;
  margin-top: 10px;
  padding-right: 20px;
  line-height: 25px;
  display: flex;
  justify-content: space-between;
}
.play {
  width: 0.18rem;
}
.desc {
  margin-top: 10px;
}
</style>

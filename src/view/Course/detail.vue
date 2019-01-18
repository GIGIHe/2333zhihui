<template>
  <div class="detail_wraper">
    <Header :name="name"></Header>
    <!-- 医师简介 -->
    <div class="main">
      <div class="log_img"><img
          :src="teachers.profile"
          alt=""
        ></div>
      <div class="introduce">
        <div class="name">{{teachers.name}}</div>
        <div class="job_title">{{teachers. major}}</div>
        <div class="look_num">{{teachers.num}}人浏览</div>
      </div>
      <div class="major_content">
        <van-collapse
          v-model="activeName"
          accordion
        >
          <van-collapse-item
            title="医师简介"
            name="1"
          >
            <p v-html="teachers.self_say"></p>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
    <!-- 名师课堂 -->
    <div class="course">
      <div class="course_item" v-for="(item,index) in videos" :key="index">
        <router-link :to="{name:'play',query:{id:item.video_info_id ,name:'sz'}}">
          <img
             src="../../image/poster3.jpg"
            alt=""
          >
           <!-- :src="item.head_img" -->
        </router-link>
        <p class="course_name">{{item.info_name}}</p>
        <p class="look_num">{{item.enrolment }}人学过</p>
        <p class="fee">{{item.train_price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // components: {
  //   Header
  // },
  data() {
    return {
      name: "师资",
      activeName: "",
      teachers: "",
      videos:"",
      data: ""
    };
  },
  methods: {
    getData() {
      let id = this.$route.query.id;
      console.log("xqsz",id);
      this.$axios.get("http://api.qijiawr.com/Teacher/show",{params:{id}}).then(res => {
        console.log("teacher", res.data.data);
        console.log("video",res.data.video);
        this.teachers = res.data.data;
        this.videos = res.data.video;
      });
      // axios.get("/doctors").then(res => {
      //   let arr = res.data.data;
      //   arr.forEach(el => {
      //     if (id == el.id) {
      //       this.data = el;
      //       this.name = el.title;
      //       console.log(this.data);
      //       console.log(this.name);
      //     }
      //   });
      // });
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.$back();
  }
};
</script>

<style scoped lang = "scss">
.detail_wraper {
  width: 100%;
  /* 医师主体样式 */
  .look_num {
    color: #666;
  }
  .main {
    margin-top: 0.44rem;
    background-color: #fff;
    .log_img {
      width: 100%;
      img {
        width: 100%;
        height: 2.2rem;
      }
    }
    .introduce {
      display: flex;
      height: 0.4rem;
      line-height: 0.4rem;
      /* border: 1px solid #f00; */
    }
    .introduce div {
      margin-left: 4px;
    }
    .name {
      font-size: 15px;
      margin-right: 8px;
    }
    .job_title {
      color: rgb(59, 155, 59);
      span {
        margin-right: 0.04rem;
      }
    }

    .major_content {
    }
  }
  .course {
    background-color: #fff;
    /* height: 3rem; */
    margin-top: 0.1rem;
    /* border: 1px solid #00f; */
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
    .course_item {
      width: 46%;
      margin-bottom: 0.1rem;
      img {
        width: 100%;
        border-radius: 12px;
      }
      p {
        margin-top: 0.04rem;
      }
      .course_name {
        font-size: 15px;
        font-weight: 500;
        color: #000;
      }
      .fee {
        color: rgb(59, 155, 59);
      }
    }
  }
}
</style>

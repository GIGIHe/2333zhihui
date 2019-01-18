<template>
  <div class="index">
    <div class="nav">
      <div class="search">
        <span>
          <van-icon name="search" /></span>
        &nbsp;&nbsp;
        <span>搜索职位 / 课程 / 扶贫政策</span>
      </div>
    </div>
    <div class="content">
      <div class="swipe">
        <van-swipe
          :autoplay="3000"
          indicator-color="#ffffff"
          :show-indicators="true"
          :height="218"
        >
          <van-swipe-item>
            <img src="../../assets/banner1.png">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/banner2.png">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/banner3.png">
          </van-swipe-item>
          <!-- <van-swipe-item>
                    <img src="../../assets/banner-index.png">
                </van-swipe-item> -->
        </van-swipe>
      </div>
      <div class="zixun">
        <img src="../../assets/jiedu.png">
        <div
          class="swipeV"
          @click="$router.push('/Home/News/d')"
        >
          <van-swipe
            :autoplay="2000"
            indicator-color="#ffffff"
            :show-indicators="false"
            :height="60"
            :vertical="true"
          >
            <van-swipe-item
              v-for="(item, index) in zixun"
              :key="index"
            >
              <h5>{{ item.title }}</h5>
              <h5>{{ zixun[index+1] ? zixun[index+1].title : zixun[0].title }}</h5>
            </van-swipe-item>
          </van-swipe>
        </div>
        <span class="icon">
          <van-icon
            name="arrow"
            size="18px"
            color="#999999"
          />
        </span>
      </div>
      <div class="tuijie content-box">
        <div class="top">
          <div class="top-left">
            <!-- <van-icon name="fire" size="20px" color="#ff1e00"/> -->
            <img src="../../assets/fire.png">
            <h4>推荐职位</h4>
          </div>
          <div
            class="top-right"
            @click="$router.push('/Home/Position')"
          >
            <h5>更多</h5>
            <van-icon
              name="arrow"
              size="14px"
              color="#999999"
            />
          </div>
        </div>
        <div class="bottom">
          <div
            class="item"
            v-for="(item,index) in tuijian"
            :key="index"
            @click="$router.push(`/PositionInfo/${item.id}`)"
          >
            <div class="item-left">
              <h4>{{ item.job_name }}</h4>
              <p>
                <span>{{ item.job_address }}</span>
                <!-- <span>{{ item.addressDir }}</span> -->
                <span>{{ item.work_year }}</span>
              </p>
            </div>
            <div class="item-right">
              <h4>{{item.job_money}}</h4>
              <span>{{ item.start_time }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hotCourse content-box">
        <div class="top">
          <div class="top-left">
            <h4>热门课程</h4>
            <span>精选</span>
          </div>
          <div
            class="top-right"
            @click="$router.push('/PeixunItem')"
          >
            <h5>更多</h5>
            <van-icon
              name="arrow"
              size="14px"
              color="#999999"
            />
          </div>
        </div>
        <div class="bottom">
          <div
            class="item"
            v-for="(item,index) in remenKe"
            :key="index"
          >
            <div
              class="imgbox"
              @click="$router.push('/PeixunItem')"
            >
              <img :src="item.imgUrl">
              <span>{{ item.time }}</span>
            </div>
            <div class="title">
              <h3>{{ item.title }}</h3>
              <h6>{{ item.memo }}</h6>
            </div>
            <div class="showData">
              <van-icon
                name="eye"
                size="14px"
                color="#9a9a9a"
              />
              &nbsp;<span>{{ item.lerNum }}人已学习</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "index",
  data: function() {
    return {
      zixun: [
        {
          id: "12311",
          title: "山西鼓励就业扶贫出台多项措施，包括哪些内容？"
        },
        {
          id: "9876",
          title: "2019“三农”改革路线图划定，农地制服改个进入深化施工期间"
        },
        {
          id: "987698",
          title: "陕西省印发易地扶贫搬迁三年行动实施方案"
        },
        {
          id: "ffdsfds",
          title: "2019年个人所得税新政策"
        }
      ],
      tuijian: [
        // {
        //   title: "电子厂诚聘车间普工",
        //   salary: [4000, 6000],
        //   addressCity: "北京",
        //   addressDir: "通州",
        //   workBg: "无经验",
        //   pushData: "2018-09-09",
        //   id: "1121"
        // },
        // {
        //   title: "知名大学招聘保安",
        //   salary: [3000, 5000],
        //   addressCity: "北京",
        //   addressDir: "海淀",
        //   workBg: "无经验",
        //   pushData: "2018-06-09",
        //   id: "121213"
        // }
      ],
      remenKe: [
        {
          imgUrl: "http://59.110.237.236/photo/c1.png",
          // imgUrl:'../../assets/course2.png',
          time: "08:07",
          title: "15天成为专业母婴护理师",
          memo: "如何让新手短期成为专业保姆",
          lerNum: "3425",
          id: "6666"
        },
        {
          imgUrl: "http://59.110.237.236/photo/c2.png",
          time: "08:07",
          title: "15天成为专业母婴护理师",
          memo: "如何让新手短期成为专业保姆",
          lerNum: "3425",
          id: "6666"
        }
      ]
    };
  },
  mounted() {
    this.$back();
    console.log("tuijian", this.tuijian);
  },
  methods: {
    getData() {
      this.$axios.get("http://api.qijiawr.com/job/index").then(res => {
        this.$store.commit("POSITION", res.data.data);
        let temp = res.data.data;
          this.tuijian = temp.splice(0,2)
          console.log('index',this.tuijian);
      });
    }
  },
  created(){
    if(!this.$store.state.position.job_name){
       this.getData()
    }else{
      this.tuijian = this.$store.state.position
    }
  }
};
</script>

<style scoped lang = "scss">
.nav {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  padding-left: 28px;
  padding-right: 28px;
  .search {
    width: 100%;
    height: 30px;
    border: 0;
    background: #f3f4f7;
    border-radius: 30px;
    text-align: center;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: #999999;
      display: flex;
    }
  }
}
/* 内容区 */
.content {
  position: relative;
  top: 0px;
  margin-bottom: 102px;
  .swipe {
    width: 100%;
    height: 200px;
    background: #ffffff;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
/*  政策解读  */
.zixun {
  background: #ffffff;
  margin-top: 20px;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  img {
    width: 30px;
    height: 30px;
  }
  .swipeV {
    flex: 1;
    height: 50px;
    overflow: hidden;
    padding-left: 10px;
    padding-right: 10px;
    text-overflow: ellipsis;
    h5 {
      width: 100%;
      white-space: nowrap;
      height: 22px;
      line-height: 30px;
      color: #333333;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  span {
    width: 16px;
    position: relative;
    left: 8px;
    display: flex;
    justify-content: flex-end;
  }
}
.content-box {
  height: auto;
  width: 100%;
  background: #ffffff;
  margin-top: 8px;
  .top {
    height: 44px;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    & > div {
      width: 50%;
    }
    .top-left {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 18px;
      }
      h4 {
        font-size: 16px;
        padding-left: 8px;
        line-height: 44px;
        color: #333333;
      }
      span {
        width: 40px;
        height: 20px;
        background: #ffae00;
        line-height: 20px;
        text-align: center;
        margin-left: 10px;
        border-radius: 10px;
        font-size: 12px;
        color: #ffffff;
      }
    }
    .top-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 44px;
      h5 {
        font-size: 14px;
        font-weight: normal;
        color: #666666;
      }
    }
  }
}
/* 推荐职位 */
.tuijie {
  .item {
    padding-left: 8px;
    padding-right: 8px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    &:nth-of-type(1):after {
      content: " ";
      position: absolute;
      width: calc(100% - 8px);
      height: 1px;
      background: #e8e8e8;
      bottom: 0;
      left: 8px;
    }
  }
  .item-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
    h4 {
      line-height: 14px;
      font-size: 14px;
      color: #333333;
    }
    p {
      font-size: 12px;
      color: #666666;
      span {
        position: relative;
        margin-right: 4px;
        &:after {
          content: " ";
          position: absolute;
          width: 1px;
          height: 10px;
          background: #999999;
          top: 4px;
          right: -4px;
        }
        &:nth-of-type(3):after {
          content: "";
          width: 0;
        }
      }
    }
  }
  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 40px;
    text-align: right;
    h4 {
      line-height: 14px;
      font-size: 14px;
      color: #e91b32;
    }
    span {
      color: #9a9a9a;
      font-size: 12px;
    }
  }
}
/*  热门课程  */
.hotCourse {
  .top .top-left h4 {
    padding: 0;
  }
  .bottom {
    display: flex;
    padding-right: 8px;
    padding-left: 8px;
    .item {
      flex: 1;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .imgbox {
        width: calc(100% - 8px);
        height: 140px;
        overflow: hidden;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        span {
          position: absolute;
          top: 0;
          left: 0;
          background: rgba(33, 189, 7, 0.8);
          height: 20px;
          width: 40px;
          line-height: 20px;
          text-align: center;
          color: #ffffff;
        }
      }
      .title {
        margin-top: 8px;
        margin-bottom: 8px;
        width: calc(100% - 8px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 38px;
        h3 {
          font-size: 14px;
          // padding-right: 8px;
          color: #333333;
          line-height: 14px;
        }
        h6 {
          font-size: 12px;
          color: #666666;
          font-weight: normal;
        }
      }
      .showData {
        background: #ffffff;
        margin-top: 8px;
        margin-bottom: 8px;
        width: calc(100% - 8px);
        display: flex;
        color: #9a9a9a;
        align-items: center;
      }
    }
  }
}
</style>

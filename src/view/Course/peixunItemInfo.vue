<template>
  <div class="peixunItemInfo">
    <!-- 导航 -->
    <div class="nav">
      <span>
        <van-icon
          @click="back($event)"
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>{{ title }}</h2>
    </div>
    <!-- end of 导航 -->
    <div class="content">
      <!-- banner -->
      <div class="banner">
        <img :src="bannerUrl">
      </div>
      <!-- end of banner -->
      <!-- switchBar -->
      <div class="switchBar">
        <div
          class="baritem"
          :class="{'selected': selected === 'a'}"
          @click="swichBar($event, 'a')"
        >
          <h3>课程目录</h3>
        </div>
        <div
          class="baritem"
          :class="{'selected': selected === 'b'}"
          @click="swichBar($event, 'b')"
        >
          <h3>课程介绍</h3>
        </div>
      </div>
      <!-- end of switchBar -->
      <!-- switchContent -->
      <div class="switchContent">
        <template v-if="selected === 'b'">
          <div class="intro">
            <!--             <div
              class="intro-item"
              @click="showKaibanTime($event)"
            >
              <h4>开班时间：</h4>
              <span>{{ selectedClass.title }}
                <van-icon
                  name="arrow"
                  size="12px"
                  color="#666666"
                /></span>
            </div> -->
            <!--             <div class="intro-item">
              <h4>报名截止：</h4>
              <span>{{ base.registrationDDL }}</span>
            </div>
            <div class="intro-item">
              <h4>招生人数：</h4>
              <span>{{ base.enrolmentNum }}人</span>
            </div>
            <div class="intro-item">
              <h4>培训价格：</h4>
              <span>￥{{ base.price }}</span>
            </div> -->
          </div>
          <div class="memo">
            <!-- <h3>项目介绍</h3> -->
            <div class="article">
              <img :src="memoUrl">
            </div>
          </div>
        </template>
        <template v-else-if="selected === 'a'">
          <PeixunCourseListItem
            v-for="item in relevant"
            :courseData="item"
            @itemClick="itemClick"
            :key="item.id"
          ></PeixunCourseListItem>
        </template>
      </div>
      <!-- end of switchContent -->
    </div>
    <!--     <div
      class="showKaibanTime"
      :style="showKaibanTimeStyle"
    >
      <div
        class="zhezhao"
        @click="handleClose($event)"
      ></div>
      <div class="box">
        <h4>选择班级</h4>
        <ul>
          <li
            v-for="item in base.kaibanTime"
            :key="item.id"
            @click="changeKaibanTime($event, item)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div> -->
    <!--     <div class="footer">
      <button>
        <van-icon
          name="share"
          size="16px"
          color="#999999"
        />&nbsp;&nbsp;分享</button>
      <button><a href="tel:010-63369866">电话咨询</a></button>
      <button class="baoming">立即报名</button>
    </div> -->
  </div>
</template>

<script>
import PeixunItemList from "@/view/Course/peixunItemList";
import PeixunCourseListItem from "@/view/Course/peixunCourseListItem";

const xiangqing = {
  a: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201812/10/AjeEMbEtND.png",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201807/26/KJG4mci4XJ.png",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201811/02/p5r78QCS5s.jpg",
        title: "绪论",
        memo: "要点1 绪论（一）",
        num: "1215",
        id: "a1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201811/02/j4XMbTimXr.jpg",
        title: "绪论",
        memo: "要点2 绪论（二）",
        num: "1456",
        id: "a2",
        hasVideo: false
      },
      {
        imgUrl:
          "http://img.yuesaoapp.com/manage-data/201811/02/ncpnE7YBrh.jpeg",
        title: "第一章  中医学的哲学基础",
        memo: "要点1  中医理论主要特点",
        num: "351",
        id: "a3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201811/02/mwYK3Ybj8e.jpg",
        title: "第一章  中医学的哲学基础",
        memo: "要点2  阴阳学说（一）",
        num: "171",
        id: "a4",
        hasVideo: false
      }
    ]
  },
  b: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201709/08/EPSYCQRndD.jpg",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201710/24/DmKazjc5G6.jpg",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201710/13/WCbpmzjbNb.jpg",
        title: "杭州保姆纵火案法律解析",
        memo: "徐荣斌  毕业于北京大学法学院, 北京市正皓律师事务所  执业律师",
        num: "27063",
        id: "b1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201709/27/FjAdFrs6TC.jpg",
        title: "恨雇主买保险，保姆放火后拿走贵重物品",
        memo: "徐荣斌  毕业于北京大学法学院, 北京市正皓律师事务所  执业律师",
        num: "6516",
        id: "b2",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201709/27/GYJCimwwMP.jpg",
        title: "为顺利找到工作，保姆提供假体检表隐瞒病史",
        memo: "徐荣斌  毕业于北京大学法学院, 北京市正皓律师事务所  执业律师",
        num: "3357",
        id: "b3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201709/27/rbGt8aM3SE.jpg",
        title: "保姆试用半天卷走雇主近20万财物 用假身份证",
        memo: "徐荣斌  毕业于北京大学法学院, 北京市正皓律师事务所  执业律师",
        num: "2556",
        id: "b4",
        hasVideo: false
      }
    ]
  },
  c: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201712/18/bDAsGyJcMs.jpg",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201712/18/tQKkPJGAkN.jpg",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201712/18/jeXj5YweYa.jpg",
        title: "给新生儿做面部抚触",
        memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        num: "1322",
        id: "c1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201712/18/pDDGTGkxFQ.jpg",
        title: "给新生儿做胸部抚触",
        memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        num: "35568",
        id: "c2",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201712/18/FyDJKXy3tP.jpg",
        title: "给新生儿做上肢抚触",
        memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        num: "24840",
        id: "c3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201712/18/TCwyYbsNKK.jpg",
        title: "给新生儿做下肢抚触",
        memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        num: "1744",
        id: "c4",
        hasVideo: false
      }
    ]
  },
  d: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201811/19/AnFsZTeHay.png",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201807/10/6t633ycG7A.png",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201808/06/ti26HXENYs.png",
        title: "第一章  绪论",
        memo: "要点1  营养、营养素与营养学的定义",
        num: "5432",
        id: "d1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201806/19/4wiSxyCnyf.jpg",
        title: "第一章  绪论",
        memo: "要点2  营养学发展简史",
        num: "1412",
        id: "d2",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201806/20/PsaP5WjQ3x.jpg",
        title: "第一章  绪论",
        memo: "要点3  营养学在防治疾病中的作用",
        num: "2341",
        id: "d3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201806/20/MXzZRE4Gsx.jpg",
        title: "第二章  营养素与热能",
        memo: "要点1  蛋白质——生理功能",
        num: "1209",
        id: "d4",
        hasVideo: false
      }
    ]
  },
  e: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201709/18/nHfhMHGCSY.jpg",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201807/10/kWhiCktiBY.png",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/21/W5wZTcYsGN.png",
        title: "怎样正确地清洗、消毒奶具",
        memo: "李林郁  中华女子学院特聘讲师  北京某三甲医院护士长",
        num: "42435",
        id: "e1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/29/XwTz34bsW8.png",
        title: "怎样为新生儿冲调奶粉",
        memo: "李林郁  中华女子学院特聘讲师  北京某三甲医院护士长",
        num: "3412",
        id: "e2",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/29/MAFm76mpM8.jpg",
        title: "人工喂养新生儿",
        memo: "李林郁  中华女子学院特聘讲师  北京某三甲医院护士长",
        num: "4123",
        id: "e3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/29/AybDHFMSzQ.jpg",
        title: "哺乳期产妇的乳房护理",
        memo: "李林郁  中华女子学院特聘讲师  北京某三甲医院护士长",
        num: "5212",
        id: "e4",
        hasVideo: false
      }
    ]
  },
  f: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201803/21/aMApbK835r.jpg",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201807/10/T4NxB6xN8t.png",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201808/06/WbWd8SQBnQ.png",
        title: "第一章 现代育儿关键基点",
        memo: "第一节 生命最初的1000天",
        num: "1234",
        id: "f1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201803/22/Yrh5ZHjEAy.jpg",
        title: "第一章 现代育儿关键基点",
        memo: "第一节 社会性",
        num: "2314",
        id: "f2",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201803/26/z637c2hRzr.jpg",
        title: "第一章 现代育儿关键基点",
        memo: "第一节 内环境恒定机制",
        num: "3112",
        id: "f3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201803/27/hyaFXRQmzM.jpg",
        title: "第一章 现代育儿关键基点",
        memo: "第一节 母乳喂养的重要性",
        num: "2312",
        id: "f4",
        hasVideo: false
      }
    ]
  },
  g: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201709/08/SF5yhtSd2t.jpg",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201710/24/diTbAxTj82.jpg",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201710/11/4R66sPTR3w.jpg",
        title: "月嫂标准站姿",
        memo: "吴俊霞  高级礼仪培训师  形体导师  护理助产专业外聘老师",
        num: "3242",
        id: "g1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/29/3ApThG7tP7.jpg",
        title: "月嫂标准坐姿",
        memo: "吴俊霞  高级礼仪培训师  形体导师  护理助产专业外聘老师",
        num: "2312",
        id: "g2",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/29/3anKQMcbrF.jpg",
        title: "月嫂标准蹲姿走姿",
        memo: "吴俊霞  高级礼仪培训师  形体导师  护理助产专业外聘老师",
        num: "1213",
        id: "g3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/29/QiBkYTXGex.jpg",
        title: "月嫂电话礼仪",
        memo: "吴俊霞  高级礼仪培训师  形体导师  护理助产专业外聘老师",
        num: "2324",
        id: "g4",
        hasVideo: false
      }
    ]
  },
  h: {
    memoUrl: "http://img.yuesaoapp.com/manage-data/201709/08/j2XwhTHFD5.jpg",
    bannerUrl: "http://img.yuesaoapp.com/manage-data/201807/10/sn4mmYf2dE.png",
    relevant: [
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/21/jSZeSJstHH.png",
        title: "具有发汗解表等功效的穴位按摩",
        memo:
          "沈潜 中医内科博士  推拿临床硕士  北京中医药大学东方医院推拿理疗科  北京市健康科普专家",
        num: "424234",
        id: "h1",
        hasVideo: true
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/30/pnRwGAZnnR.jpg",
        title: "具有开窍醒神等功效穴位按摩",
        memo:
          "沈潜 中医内科博士  推拿临床硕士  北京中医药大学东方医院推拿理疗科  北京市健康科普专家",
        num: "4312",
        id: "h2",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/30/eRr6FrrMzb.jpg",
        title: "具有消食化积等功效的穴位按摩",
        memo:
          "沈潜 中医内科博士  推拿临床硕士  北京中医药大学东方医院推拿理疗科  北京市健康科普专家",
        num: "6543",
        id: "h3",
        hasVideo: false
      },
      {
        imgUrl: "http://img.yuesaoapp.com/manage-data/201708/30/6yycAs6w3i.jpg",
        title: "具有清热泻火等功效的穴位按摩",
        memo:
          "沈潜 中医内科博士  推拿临床硕士  北京中医药大学东方医院推拿理疗科  北京市健康科普专家",
        num: "2e412",
        id: "h4",
        hasVideo: false
      }
    ]
  }
};
export default {
  name: "peixunItemInfo",
  peixunId: "",
  data: function() {
    return {
      title: "课程详情",
      selectedClass: {},
      bottom: "-100%", //默认弹框不弹出
      videos: "",
      base: {
        kaibanTime: [
          {
            title: "2019夏季班",
            id: "9909"
          },
          {
            title: "2019春季特别班",
            id: "99009"
          }
        ],
        registrationDDL: "2018-11-11",
        enrolmentNum: "若干",
        price: "2000.00"
      },
      memoUrl: "",
      bannerUrl: "",
      relevant: [
        // {
        //   imgUrl:
        //     "http://img.yuesaoapp.com/manage-data/201712/18/jeXj5YweYa.jpg",
        //   title: "给新生儿做面部抚触",
        //   memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        //   num: "1322",
        //   id: "c1",
        //   hasVideo: true
        // },
        // {
        //   imgUrl:
        //     "http://img.yuesaoapp.com/manage-data/201712/18/pDDGTGkxFQ.jpg",
        //   title: "给新生儿做胸部抚触",
        //   memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        //   num: "35568",
        //   id: "c2",
        //   hasVideo: false
        // },
        // {
        //   imgUrl:
        //     "http://img.yuesaoapp.com/manage-data/201712/18/FyDJKXy3tP.jpg",
        //   title: "给新生儿做上肢抚触",
        //   memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        //   num: "24840",
        //   id: "c3",
        //   hasVideo: false
        // },
        // {
        //   imgUrl:
        //     "http://img.yuesaoapp.com/manage-data/201712/18/TCwyYbsNKK.jpg",
        //   title: "给新生儿做下肢抚触",
        //   memo: "籍孝诚   早期教育泰斗  北京协和医院儿科学教授",
        //   num: "1744",
        //   id: "c4",
        //   hasVideo: false
        // }
      ],
      selected: "a"
    };
  },
  watch: {
    peixunId: function(val) {}
  },
  mounted: function() {
    // 依靠下面这个参数来获取具体的数据！
    this.peixunId = this.$route.params.peixunId;
    this.selectedClass = this.base.kaibanTime[0];
    console.log(this.$route.params);
    this.$back();
    const index = this.$route.params.index;
    this.bannerUrl = xiangqing[index].bannerUrl;
    this.memoUrl = xiangqing[index].memoUrl;
    this.relevant = xiangqing[index].relevant;
    // this.$axios.get("https://api.yuesaoapp.com/course/detail?id=33").then(res => {
    //   console.log("调取成功！！！！", res.data);
    // });
  },
  computed: {
    showKaibanTimeStyle: function() {
      return {
        bottom: this.bottom
      };
    }
  },
  methods: {
    back: function(event) {
      console.log(12121);
      this.$router.go(-1);
    },
    swichBar: function(event, index) {
      this.selected = index;
      console.log("peixunxmuxq", index);
      switch (index) {
        case "a":
          break;
        case "b":
          let pid = this.$route.query.id;
          console.log("pid", pid);
          // this.$axios
          //   .get(" http://api.qijiawr.com/data/video", {
          //     params: { lesson_id: pid }
          //   })
          //   .then(res => {
          //     console.log("pxvidoe", res);
          //     this.relevant = res.data;
          //   });
          break;

        default:
          break;
      }
    },
    changeId: function(event, id) {
      this.peixunId = event;
      /* 这个地方要获取新的数据！！ */
      // this.$router.push(`/PeixunItemInfo/${event}`);
      console.log("hhh", this.peixunId);
      // this.$router.push({ name: "play", query: { id: event,name:'px' } }); //跳转到视频页面
    },
    showKaibanTime: function(event) {
      this.bottom = "0";
    },
    changeKaibanTime: function(event, item) {
      this.selectedClass = item;
    },
    handleClose: function() {
      this.bottom = "-100%";
    },
    itemClick: function(event) {
      console.log("被点击");
      console.log(event);
      if (event.hasVideo) {
        this.$router.push(`/PlayVideo/${event.id}`);
      }
    }
  },
  components: {
    PeixunItemList,
    PeixunCourseListItem
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
  .banner {
    height: auto;
    width: 100%;
    overflow: hidden;
    letter-spacing: 0px;
    font-size: 0px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .switchBar {
    height: 44px;
    width: 100%;
    background: #ffffff;
    // margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > div {
      flex: 1;
      text-align: center;
      height: 100%;
      border-bottom: 2px solid #ffffff;
      h3 {
        color: #999999;
        font-weight: normal;
        font-size: 16px;
        line-height: 44px;
      }
      &.selected {
        border-bottom: 2px solid #0099e8;
        h3 {
          color: #0099e8;
        }
      }
    }
  }
  .intro {
    background: #ffffff;
    // margin-bottom: 8px;
    .intro-item {
      height: 40px;
      border-bottom: 1px solid #e7e7e7;
      padding-right: 8px;
      padding-left: 8px;
      display: flex;
      align-items: center;
      h4 {
        font-weight: 400;
        font-size: 14px;
        color: #333333;
      }
      span {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        font-size: 12px;
        color: #666666;
      }
    }
  }
  .memo {
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 8px;
    h3 {
      height: 40px;
      line-height: 40px;
      color: #333333;
      font-weight: normal;
      position: relative;
      padding-bottom: 8px;
      &:after {
        content: " ";
        width: calc(100% - 16px);
        height: 1px;
        background: #e7e7e7;
        position: absolute;
        bottom: 8px;
        left: 8px;
      }
    }
    .article {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
.showKaibanTime {
  width: 100%;
  height: calc(100% - 44px);
  position: fixed;
  bottom: 0;
  z-index: 10;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  .zhezhao {
    flex: 1;
  }
  .box {
    background: #ffffff;
    height: 330px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  h4 {
    color: #999999;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    text-align: center;
    font-weight: normal;
    padding-left: 10px;
    padding-right: 10px;
  }
  ul {
    padding-left: 10px;
    padding-right: 10px;
    li {
      color: #333333;
      line-height: 40px;
      text-align: center;
      border-bottom: 1px solid #e7e7e7;
    }
  }
}
.course-list {
  background-color: #fff;
  height: 60px;
  // border: 1px solid #ff0;
  display: flex;
  padding: 10px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  img {
    width: 0.5rem;
    // height: 0.2rem;
  }
}
.course-item {
  display: flex;
  flex: 1;
  margin-left: 14px;
  flex-direction: column;
  justify-content: space-around;
}
.footer {
  height: 49px;
  background: #ffffff;
  border-top: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  button {
    flex: 1;
    height: 100%;
    border: 0;
    background: #ffffff;
    font-size: 16px;
    color: #999999;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-of-type(1) {
      border-right: 1px solid #eeeeee;
    }
    a {
      color: #666;
    }
    &.baoming {
      flex: 2;
      background: #0099e8;
      color: #ffffff;
    }
  }
}
</style>

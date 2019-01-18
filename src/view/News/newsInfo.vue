<template>
  <div class="newsInfo">
    <div class="nav">
      <span @click="back($event)">
        <van-icon
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>新闻详情</h2>
      <div class="right">
        <span @click="starSwitch($event)">
          <van-icon
            name="star-o"
            size="20px"
            color="#999999"
          />
        </span>
        <span @click="share($event)">
          <van-icon
            name="share"
            size="20px"
            color="#999999"
          />
        </span>
      </div>
    </div>
    <div class="content">
      <h3>{{ info.info_title }}</h3>
      <div class="info">
        <span>{{ info.ts }}&nbsp;&nbsp;&nbsp;阅读：{{ info.browse_times }}&nbsp;&nbsp;&nbsp;来源：{{ info.auth }}&nbsp;&nbsp;
          <van-icon
            name="volume"
            size="14px"
            color="#67cbfe"
          /></span>
      </div>
      <div class="artiltImg">
        <!-- <img :src="imgUrl"> -->
      </div>
      <div
        class="artile"
        :style="style"
      >
        <div v-html="info.content">
        </div>
      </div>
      <div class="recommend">
        <h5>相关文章推荐</h5>
        <ul>
          <li
            v-for=" item in recommends "
            :key="item.id"
            @click="openNewNews($event, item.id)"
          >
            <span>{{ item.info_title }}</span>
            <span>{{ item.ts }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsInfo",
  data: function() {
    return {
info:[],
      // newsId: "",
      recommends:'',
      // title: "中国精准扶贫“链接幸福乡村”行动启动",
      // date: "2018-09-09",
      // readNum: 2498,
      // froms: "新华网",
      // imgUrl:
      //   "http://www.farmer.com.cn/tppd/gdny/201812/W020181211531925329548.jpg",
      // artile:
      //   "<p>2019年和2020年是全面建成小康社会的关键时期，是打赢脱贫攻坚战和实施乡村振兴战略的历史交汇期。中央农村工作会议指出，突出抓好“三农”工作各项硬任务的落实，确保顺利完成到2020年承诺的农村改革发展目标任务。</p><p>今明两年“三农”工作必须完成的硬任务是什么？会议强调，打赢脱贫攻坚战是全面建成小康社会的底线任务。此外，还要抓好农村人居环境整治三年行动，重点做好垃圾污水处理、厕所革命、村容村貌提升。确保国家粮食安全和重要农产品有效供给。进一步深化农村土地制度改革。强化乡村规划引领，实施村庄基础设施建设工程，加快补齐农村人居环境和公共服务短板等。</p>",
      // recommend: [
      //   {
      //     title: "山西鼓励就业扶贫出台多项措施，包括哪些？",
      //     date: "2019-01-03",
      //     id: "3231"
      //   },
      //   {
      //     title: "陕西省印发易地扶贫搬迁三年行动实施方案",
      //     date: "2018-12-10",
      //     id: "21323221"
      //   },
      //   {
      //     title: "重庆：政策“礼包”推动就业扶贫",
      //     date: "2018-11-20",
      //     id: "2121"
      //   }
      // ]
    };
  },
  mounted: function() {
    this.newsId = this.$route.params.newsId;
    this.$back();
  },
  watch: {
    newsId: function(val) {
      console.log("当前的值改变了！重新加载数据");
      // console.log(val);
      // this.newsId = val
      /* 这个地方更新数据！ */
    }
  },
  methods: {
    back: function(event) {
      this.$router.go(-1);
    },
    starSwitch: function(event) {
      console.log("收藏！");
    },
    share: function(event) {
      console.log("分享！");
    },
    apply: function(event) {
      console.log("申请职位！");
    },
    openNewNews: function(event, id) {
      // this.$router.push(`/NewsInfo/${id}`);
      // this.newsId = id;
    },
    getInfo: function() {
      let id = this.$route.query.id;
      this.$axios
        .get("http://api.qijiawr.com/News/info.html", {
          params: {id:id}
        })
        .then(res => {
          console.log("desc", res.data);
          this.info = res.data.data.info
          this.recommends = res.data.data.list
        });
      console.log(id);
    }
  },
  created() {
    this.getInfo();
  },
  computed: {
    style: function() {
      return {
        lineHeight: "24px",
        fontSize: "14px",
        textIndent: "2em"
      };
    }
  }
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 44px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    /* 返回按钮 */
    width: 70px;
    padding-left: 8px;
    display: flex;
    justify-content: flex-start;
  }
  img {
    width: 20px;
    height: 20px;
  }
  .right {
    width: 70px;
    padding-right: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      display: flex;
      justify-content: flex-end;
      &:nth-of-type(1) {
        // margin-right: 20px;
      }
    }
  }
}

/* 内容区 */
.content {
  position: relative;
  top: 44px;
  h3 {
    background: #ffffff;
    border-bottom: 1px solid #eeeeee;
    text-align: center;
    line-height: 30px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 7px;
    padding-bottom: 7px;
    color: #333333;
    font-size: 16px;
  }
  .info {
    height: 30px;
    background: #ffffff;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #9a9a9a;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 14px;
      height: 14px;
      margin-left: 8px;
    }
  }
  .artile {
    padding-right: 8px;
    padding-left: 8px;
    margin-bottom: 8px;
    background: #ffffff;
    padding-bottom: 10px;
    img {
      width: 100%;
      text-indent: 0 !important;
    }
    & > div {
      width: 100%;
    }
  }
  .artiltImg {
    padding-right: 8px;
    padding-left: 8px;
    background: #ffffff;
    img {
      width: 100%;
      height: auto;
      margin-bottom: 8px;
    }
  }
  .recommend {
    background: #ffffff;
    padding: 8px;
    h5 {
      font-weight: 600;
      font-size: 16px;
      padding-bottom: 10px;
    }
    ul {
      font-size: 14px;
      line-height: 30px;
      li {
        display: flex;
        span:first-child {
          flex: 1;
          color: #333333;
        }
        span:last-child {
          color: #9a9a9a;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

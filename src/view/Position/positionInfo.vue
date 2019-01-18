<template>
  <div class="positionInfo">
    <div class="nav">
      <span @click="back($event)">
        <van-icon
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>职位详情</h2>
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
      <section class="main">
        <h3>{{ componyIntro.job_name }}</h3>
        <h4>{{ componyIntro.job_money }}/月</h4>
        <!-- <p>发布：{{ main.pushData }}浏览：{{ main.watchTime }}</p> -->
      </section>
      <!-- <section class="base"> -->
      <!-- <h3>基本信息</h3>
        <p>职位：<span>{{ base.positionName }}</span></p>
        <p>要求：<span
            v-for="(item,index) in base.condition"
            :key="index"
          >{{ item }}</span></p>
        <p>地区：<span>{{ base.address[0] }} - {{ base.address[1] }}</span></p>
        <p>福利：<span
            v-for="(item,index) in base.welfare"
            :key="index"
            class="orange"
          >{{ item }}&nbsp;&nbsp;</span></p> -->
      <!-- </section> -->
      <section class="memo">
        <h3>职位描述</h3>
        <p>岗位：{{componyIntro.job_name}}</p>
        <p>任职资格：{{componyIntro.job_introduce}}</p>
        <p>工作时间：{{componyIntro.work_year}}</p>
      </section>
      <section class="componyIntro">
        <h3>公司介绍</h3>
        <div class="title">
          <h4>{{ componyIntro.company }}</h4>
          <h5 v-if="componyIntro.license">营业执照已认证&nbsp;&nbsp;
            <van-icon
              name="photo-o"
              size="18px"
              color="#cccccc"
            />
          </h5>
        </div>
        <p>注册资本：<span>{{ componyIntro.company_money }}</span></p>
        <p>成立时间：<span>{{ componyIntro.company_time }}</span></p>
        <p>联系人：<span>{{ componyIntro.company_person }}</span></p>
        <p>联系电话：<span>{{ componyIntro.company_number }}</span></p>
        <p class="briefIntroduction">{{ componyIntro.company_introduce }}</p>
      </section>
      <section class="alert">
        <!-- <img src="../../assets/alert.png"> -->
        <van-icon
          name="warn-o"
          size="36px"
          color="#ffcc00"
        />
        <p>以担保或任何理由索取财务，扣押证件，均涉嫌违法，请提高警惕</p>
      </section>
      <section class="ad">
        <img src="../../assets/adbanner.png">
      </section>
      <div class="button">
        <button @click="apply($event)">职位申请</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { Dialog } from "vant";
export default {
  name: "positionInfo",
  created() {
    this.getData();
    console.log("zhiweiid", this.$route.params.posId);
  },
  mounted: function() {
    console.log("加载完毕");
    console.log(this.$route);
    console.log(this.$route.params);
    this.posId = this.$route.params.posId;
    this.$back();
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
      Dialog.alert({
        title: "申请职位",
        message: "申请成功"
      });
    },
    getData() {
      let id = this.$route.params.posId;
      console.log("hhah",id);
      this.$axios
        .get("http://api.qijiawr.com/job/show", { params: { id } })
        .then(res => {
          console.log("全部", res);
          console.log(res.data);
          this.componyIntro = res.data.data;
        });
    }
  },
  data: function() {
    return {
      star: false,
      posId: "",
      componyIntro: ""
      // main: {
      //   /* 主要信息 */
      //   title: "电子厂诚聘管道工", // 标题
      //   salary: [4000, 6000], // 工资区间
      //   pushData: "2018-01-01", // 上传时间
      //   watchTime: 15239 // 查看次数
      // },
      // base: {
      //   /* 基础信息 */
      //   positionName: "车间操作工", // 职位名称
      //   condition: ["本科", "一年经验"], // 工作条件
      //   address: ["北京", "通州"], // 工作地点
      //   welfare: ["五险一金", "节假日礼物"] // 福利
      // },
      // memo: {
      //   /* 描述 */
      //   post: "访丝岗，包装岗，后处理，电工，焊工", // 岗位
      //   qualifications:
      //     "年龄33周岁以下，身体健康，无既往病史，无犯罪记录，无纹身", // 任职资格
      //   workTimeRange:
      //     "八小时工作制（四班三倒）月休8天，6个月转正（33周岁以下）；工作稳定，半年转正；" // 工作时间
      // },
      // componyIntro: {
      //   /* 公司信息 */
      //   name: "北京化纤股份有限公司", // 公司名称
      //   zhuzi: "300万", // 注册资金
      //   establishTime: "1960年", // 建立时间
      //   contactPerson: "张经理", // 联系人
      //   contactTel: "010-96754321", // 联系方式
      //   briefIntroduction:
      //     "公司始建于1960年，1964年8月1日建成投产，是中国化纤行业十强企业之一，也是我国大型化纤支柱企业。是中国化纤行业十强企业之一，也是我国大型化纤支柱企业。", // 口号
      //   license: true // 营业执照是否认证
      // }
    };
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
}
/* 每个单元 */
section {
  background: #ffffff;
  padding: 16px 8px;
  margin-bottom: 8px;
  height: auto;
  overflow: hidden;
  /* 单元通用样式 */
  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #333333;
    line-height: 18px;
    margin-bottom: 10px;
  }
}

/* 主要信息 */
section.main {
  h4 {
    font-weight: 400;
    color: #e91b32;
    line-height: 20px;
    font-size: 14px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    color: #9a9a9a;
    line-height: 12px;
    /*background: red;*/
    margin-top: 16px;
  }
}

/* 基本信息 */
section.base {
  p {
    font-size: 14px;
    color: #666666;
    line-height: 14px;
    margin-top: 18px;
  }
  p span {
    color: #333333;
  }
  p span.orange {
    color: #ff4e00;
  }
}

/* 职位描述 */
section.memo p {
  color: #666666;
  font-size: 14px;
  line-height: 24px;
}

/* 公司介绍 */
section.componyIntro {
  .title {
    display: flex;
    height: 30px;
    justify-content: flex-start;
    align-items: center;
    h4 {
      /* 公司名称 */
      font-weight: normal;
      color: #333333;
      flex: 1;
      font-size: 14px;
    }
    h5 {
      /* 营业执照 */
      font-weight: normal;
      color: #41c812;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      font-size: 12px;
      img {
        /* 营业执照后面的图 */
        width: 14px;
        height: 14px;
        margin-left: 4px;
      }
    }
  }
  p {
    /* 公司介绍 */
    font-size: 14px;
    color: #666666;
    line-height: 14px;
    margin-top: 18px;
    &:nth-of-type(1) {
      margin-top: 10px;
    }
    span {
      color: #333333;
    }
    &.briefIntroduction {
      /* 公司简介 */
      line-height: 24px;
      border-top: 1px solid #eeeeee;
      padding-top: 14px;
    }
  }
}

/* 警告信息 */
section.alert {
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
  p {
    padding-left: 20px;
    line-height: 24px;
    color: #ffa200;
  }
}

/* 广告 */
section.ad {
  background: rgba(255, 255, 255, 0);
  padding-top: 0;
  padding-bottom: 0;
  img {
    width: 100%;
    height: auto;
  }
}

/* 按钮 */
div.button {
  background: #ffffff;
  padding: 8px 8px;
  margin-bottom: 8px;
  height: 50px;
  overflow: hidden;
  border-top: 1px solid #eeeeee;
  button {
    width: 100%;
    height: 100%;
    border: 0;
    color: #ffffff;
    background: #0099e8;
  }
}
</style>

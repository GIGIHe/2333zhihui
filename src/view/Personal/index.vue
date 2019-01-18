<template>
  <div>
    <div class="nav">
      <h2>个人中心</h2>
      <div class="single">
        <van-icon
          name="notes-o"
          color="#0099e8"
          size="20px"
          v-if="single"
        />
        <van-icon
          name="notes-o"
          color="#666666"
          size="20px"
          v-else
        />
        <span v-if="single">已签到</span>
        <span v-else>未签到</span>
      </div>
    </div>
    <div class="content">
      <div class="userinfo">
        <div class="headimg">
          <img :src="userinfo.headImgUrl">
        </div>
        <div class="infobox">
          <h4>{{ userinfo.username }}</h4>
          <div class="info-item">
            <span>{{ userinfo.addressCity }}-{{ userinfo.addressDir }}</span>
            <span>余额：{{ userinfo.balance }}</span>
          </div>
        </div>
        <van-icon
          name="arrow"
          color="#ffffff"
          size="20px"
        />
      </div>
      <div class="actionbar">
        <div class="action-item">
          <img src="../../assets/center/hongbao.png">
          <h4>提现</h4>
        </div>
        <div class="action-item">
          <img src="../../assets/center/shouru.png">
          <h4>收入记录</h4>
        </div>
        <div class="action-item">
          <img src="../../assets/center/yaoqing.png">
          <h4>邀请好友</h4>
        </div>
        <div class="action-item">
          <img src="../../assets/center/tixian.png">
          <h4>领红包</h4>
        </div>
      </div>
      <div class="actionList">
        <van-cell-group>
          <van-field
            icon="arrow"
            value="线上报名"
            readonly
          >
            <img
              src="../../assets/center/icon-baoming.png"
              slot="left-icon"
            >
          </van-field>
          <van-field
            value="信息完善"
            icon="arrow"
            readonly
            @click="handelListClick($event, 'Editinfo')"
          >
            <img
              src="../../assets/center/icon-edit.png"
              slot="left-icon"
            >
          </van-field>
          <van-field
            value="贫困证明"
            icon="arrow"
            readonly
            @click="handelListClick($event, 'PushpkDoc')"
          >
            <img
              src="../../assets/center/icon-pk.png"
              slot="left-icon"
            >
          </van-field>
          <van-field
            value="工单详情"
            icon="arrow"
            readonly
          >
            <img
              src="../../assets/center/icon-xq.png"
              slot="left-icon"
            >
          </van-field>
        </van-cell-group>
      </div>
      <div class="actionList">
        <van-cell-group>
          <van-field
            icon="arrow"
            value="我的收藏"
            readonly
            @click="handelListClick($event, 'Collection')"
          >
            <img
              src="../../assets/center/icon-star.png"
              slot="left-icon"
            >
          </van-field>
          <van-field
            value="反馈与帮助"
            icon="arrow"
            readonly
          >
            <img
              src="../../assets/center/icon-fk.png"
              slot="left-icon"
            >
          </van-field>
          <van-field
            value="设置"
            icon="arrow"
            readonly
            @click="handelListClick($event, 'Setting')"
          >
            <img
              src="../../assets/center/icon-set.png"
              slot="left-icon"
            >
          </van-field>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  data: function() {
    return {
      single: true,
      userinfo: {
        username: "月儿弯弯",
        addressCity: "河北",
        addressDir: "邯郸",
        balance: 8995.63,
        headImgUrl:
          "https://i04piccdn.sogoucdn.com/3c28af542f2d49f7-9e7c5d699eaea93e-939cf512083c0f230b1291e2137f4b19_qq"
      }
    };
  },
  methods: {
    handelListClick: function(event, index) {
      this.$router.push(`/${index}`);
    }
  },
    mounted() {
    this.$back();
  },
};
</script>

<style scoped lang="scss">
/* 导航 */
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
  }
  .single {
    width: 100px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #666666;
    // background: green;
    span {
      margin-left: 4px;
    }
  }
}
.content {
  margin-top: 44px;
  margin-bottom: 50px;
}
.userinfo {
  height: 80px;
  width: 100%;
  background: #0099e8;
  display: flex;
  padding: 10px 8px;
  // justify-content: center;
  align-items: center;
  .headimg {
    width: 70px;
    height: 70px;
    border-radius: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .infobox {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    justify-content: space-between;
    padding: 0px 8px;
    height: 50px;
    h4 {
      font-size: 16px;
      font-weight: normal;
      letter-spacing: 1px;
    }
    .info-item {
      height: 20px;
    }
    span {
      height: 20px;
      border: 1px solid #ffffff;
      padding: 2px 6px;
      border-radius: 6px;
      margin-right: 8px;
      font-size: 12px;
      &:nth-of-type(2) {
        border: 1px solid #fff000;
        color: #fff000;
      }
    }
  }
  i {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 8px;
  }
}
.actionbar {
  height: 90px;
  width: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  .action-item {
    width: 25%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img {
      width: 30px;
      height: 30px;
    }
    h4 {
      font-size: 14px;
      color: #333333;
      font-weight: normal;
    }
  }
}
.actionList {
  margin-bottom: 8px;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-top: 2px;
  }
  .van-field .van-cell__title {
    width: 30px;
    max-width: 30px;
  }
}
.actionList:last-child {
  margin-bottom: 50px;
}
</style>

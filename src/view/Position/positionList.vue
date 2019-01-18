<template>
  <div
    class="positionList"
    @click="buttonHandle($event,activeData.id)"
  >
    <div class="left list-item">
      <h3>{{activeData.job_name}}</h3>
      <div class="cityInfo">
        <span>{{activeData.job_address}}</span>
        <!-- <span>{{activeData.addressDir}}</span> -->
        <span>{{activeData.work_year}}</span>
      </div>
      <div class="welfare">
        <!-- <span
          v-for="(item,index) in activeData.welfare"
          :key="index"
        >{{item}}</span> -->
        <span>{{activeData.welfare}}</span>
      </div>
      <h4>{{activeData.company}}</h4>
    </div>
    <div class="right list-item">
      <h3>{{activeData.job_money}}</h3>
      <h4>{{activeData.start_time}}</h4>
      <div class="button">
        <button
          @click="joinin($event)"
          :disabled="activeData.userPushFlag ? true : false"
        >
          <template v-if="activeData.userPushFlag">已投递</template>
          <template v-else>我要应聘</template>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "positionList",
  props: {
    posData: {
      type: Object,
      default: function() {
        return {
          job_name: "", // 职位标题
          job_address: "", // 所处的城市
          // addressDir: '', // 所处的城市的区
          work_year: "", // 工作经验
          company: "", // 招聘公司名称
          welfare: [""], // 福利
          // job_money: [0, 0], // 工资区间
          start_time: "", // 发布日期
          pk: "", // 这个数据的唯一标识
          userPushFlag: false // 用户是否已经投递过该职位
          // title: '', // 职位标题
          // addressCity: '', // 所处的城市
          // addressDir: '', // 所处的城市的区
          // workBg: '', // 工作经验
          // compony: '', // 招聘公司名称
          // welfare: [''], // 福利
          // salary: [0, 0], // 工资区间
          // pushData: '', // 发布日期
          // pk:'', // 这个数据的唯一标识
          // userPushFlag: false // 用户是否已经投递过该职位
        };
      }
    }
  },
  data: function() {
    return {
      activeData: this.posData
    };
  },
  methods: {
    buttonHandle: function(event,id) {
      console.log("被点击了！！",event,id);
      this.$router.push(`/PositionInfo/${id}`);
    },
    joinin: function(event) {
      event.stopPropagation();
      if (confirm("是否发送简历？")) {
        this.activeData.userPushFlag = true;
      this.$router.push("/Home/Index");
        alert("发送简历成功");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.positionList {
  width: 100%;
  /*background: blue;*/
  height: 130px;
  margin-bottom: 8px;
  display: flex;
}
.list-item {
  padding: 16px;
  background: #ffffff;
}
/* 左侧 */
.left {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* 岗位名称 */
  h3 {
    color: #333333;
    font-weight: 600;
    height: 25%;
    /*background: red;*/
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* 城市信息 */
  .cityInfo {
    color: #666666;
    height: 20%;
    /*background: blue;*/
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    span {
      padding-right: 6px;
      position: relative;
      display: inline-block;
      &:after {
        content: " ";
        width: 1px;
        height: 80%;
        position: absolute;
        background: #cecece;
        right: 3px;
        top: 1px;
      }
      &:last-child:after {
        width: 0px;
      }
    }
  }
  /* 福利信息 */
  .welfare {
    color: #9a9a9a;
    /*background: green;*/
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: inline-block;
      background: #f5f5f5;
      margin-right: 10px;
      padding: 4px;
      color: #9a9a9a;
      font-size: 12px;
      white-space: nowrap;
    }
  }
  /* 公司名称 */
  h4 {
    color: #333333;
    font-weight: normal;
    /*background: white;*/
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 12px;
  }
}

/* 右侧 */
.right {
  width: 40%;
  /*background: lightblue;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* 价格 */
  h3 {
    height: 25%;
    color: #333333;
    font-weight: 600;
    height: 25%;
    color: #e91b32;
    font-size: 15px;
  }
  /* 时间 */
  h4 {
    height: 20%;
    color: #666666;
    height: 20%;
    font-size: 12px;
    font-weight: normal;
  }
  /* 按钮 */
  .button {
    height: 55%;
    /*background: green;*/
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
}
/* 按钮 */
.button button {
  height: 26px;
  padding-right: 10px;
  padding-left: 10px;
  border: 0;
  color: #ffffff;
  background: #0099e8;
  border-radius: 4px;
  user-select: none;
  min-width: 76px;
  &[disabled] {
    background: #f5f5f5;
    color: #9a9a9a;
  }
}
</style>

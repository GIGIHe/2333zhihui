<template>
  <div class="position">
    <div class="nav">
      <h2>职位</h2>
    </div>
    <div class="switchBar">
      <div
        class="baritem"
        :class="{'selected': selected === 'a'}"
        @click="swichBar($event, 'a')"
      >
        <h3>推荐</h3>
      </div>
      <div
        class="baritem"
        :class="{'selected': selected === 'b'}"
        @click="swichBar($event, 'b')"
      >
        <h3>最新</h3>
      </div>
    </div>
    <div class="content">
      <template v-if="selected === 'a'">
        <div class="box">
          <PositionList
            v-for="item in posDataRec"
            :posData="item"
            :key="item.id"
          ></PositionList>
        </div>
      </template>
      <template v-else-if="selected === 'b'">
        <div class="box">
          <PositionList
            v-for="item in posDataRec"
            :posData="item"
            :key="item.id"
          >
            <!-- :key="item.pk" -->
          </PositionList>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import PositionList from "@/view/Position/PositionList";

export default {
  name: "position",
  data: function() {
    return {
      selected: "a",
      posDataRec: [],
      posDataNew: []
      // posDataRec: [
      //   {
      //     title: "电子厂车间工人",
      //     addressCity: "北京",
      //     addressDir: "通州",
      //     workBg: "无经验",
      //     company: "运动科技有限公司",
      //     welfare: ["五险一金", "包吃包住"],
      //     salary: [4000, 6000],
      //     pushData: "2018-09-09",
      //     pk: "12345623",
      //     userPushFlag: false
      //   },
      //   {
      //     title: "快餐店员工",
      //     addressCity: "北京",
      //     addressDir: "丰台",
      //     workBg: "一年以上",
      //     compony: "麦劳劳餐饮有限责任公司",
      //     welfare: ["五险一金", "节假日礼物"],
      //     salary: [3000, 5000],
      //     pushData: "2018-10-10",
      //     pk: "123453226",
      //     userPushFlag: true
      //   },
      //   {
      //     title: "打印店排版员",
      //     addressCity: "北京",
      //     addressDir: "朝阳",
      //     workBg: "一年以上",
      //     compony: "阳光办公有限公司",
      //     welfare: ["住房补贴"],
      //     salary: [5000, 8000],
      //     pushData: "2018-09-09",
      //     pk: "1234432356",
      //     userPushFlag: false
      //   },
      //   {
      //     title: "保洁人员",
      //     addressCity: "北京",
      //     addressDir: "昌平",
      //     workBg: "无经验",
      //     compony: "阿悄保洁公司",
      //     welfare: ["五险一金", "交通补助", "餐饮补助"],
      //     salary: [4000, 6000],
      //     pushData: "2018-09-09",
      //     pk: "1233423456",
      //     userPushFlag: false
      //   }
      // ],
      // posDataNew: [
      //   {
      //     job_name: "货车司机",
      //     job_address: "北京|丰台",
      //     // addressDir: "丰台",
      //     work_year: "无经验",
      //     company: "丰台运输有限公司",
      //     company_introduce: "公司创建于1960年，1964年1月投入生产",
      //     company_money: "300万",
      //     company_number: "010-96754321",
      //     company_person: "张经理",
      //     company_time: "1960年",
      //     job_introduce: "身体健康",
      //     welfare: "五险一金 包吃包住",
      //     job_money: "4000-6000/月",
      //     start_time: "2019-01-11",
      //     id: "123456",
      //     userPushFlag: false
      //   },
      //   {
      //     job_name: "仓库管理员",
      //     job_address: "北京|丰台",
      //     // addressDir: "丰台",
      //     work_year: "一年以上",
      //     company: "北京苹果物流公司",
      //     welfare: "五险一金 交通补助",
      //     job_money: "4000-6000/月",
      //     start_time: "2019-01-11",
      //     id: "123456",
      //     userPushFlag: false
      //   }
      //   // {
      //   //   title: "打印店排版员",
      //   //   addressCity: "北京",
      //   //   addressDir: "朝阳",
      //   //   workBg: "一年以上",
      //   //   compony: "阳光办公有限公司",
      //   //   welfare: ["住房补贴"],
      //   //   salary: [5000, 8000],
      //   //   pushData: "2019-01-01",
      //   //   pk: "123456",
      //   //   userPushFlag: false
      //   // }
      // ]
    };
  },
  methods: {
    swichBar: function(event, index) {
      this.selected = index;
      switch (index) {
        case "a":
          // this.$axios.get("http://api.qijiawr.com/job/index").then(res => {
          //   console.log("zhiwei", res.data.data);
          //   this.$store.commit("POSITION", res.data.data);
          //   // this.$store.commit('POSITION',res.data.data)
          //   this.posDataRec = res.data.data;
          //   this.posDataNew = this.posDataRec.splice(1, 3);
          // });
          this.posDataRec = this.$store.state.position;
          // this.posDataNew = this.posDataRec.splice(1, 3);
        default:
          break;
      }
    },
    getDataA() {
    this.posDataRec = this.$store.state.position;
    // this.posDataNew = this.posDataRec.splice(1, 3);
    }
  },
  created() {
 this.getDataA()
  },
  components: {
    PositionList
  }
};
</script>

<style scoped lang="scss">
.position {
  width: 100%;
  height: 100%;
  margin-bottom: 200px;
}
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
}
.content {
  position: relative;
  top: 88px;
}
.switchBar {
  height: 44px;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 44px;
  left: 0;
  background: #ffffff;
  z-index: 5;
  .baritem {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666666;
    transition: color 0.3s;
    position: relative;
    white-space: nowrap;
    h3 {
      font-size: 15px;
    }
    &.selected {
      color: #0099e8;
      &:after {
        content: " ";
        width: 50%;
        position: absolute;
        height: 2px;
        background: #0099e8;
        bottom: 0;
      }
    }
  }
}
</style>

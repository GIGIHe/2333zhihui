<template>
  <div class="setting">
    <div class="nav">
      <span @click="back($event)">
        <van-icon
          name="arrow-left"
          size="20px"
        />
      </span>
      <h2>我的收藏</h2>
    </div>
    <div class="switchBar">
      <div
        class="baritem"
        :class="{'selected': selected === 'a'}"
        @click="swichBar($event, 'a')"
      >
        <h3>职位</h3>
      </div>
      <div
        class="baritem"
        :class="{'selected': selected === 'b'}"
        @click="swichBar($event, 'b')"
      >
        <h3>新闻</h3>
      </div>
      <div
        class="baritem"
        :class="{'selected': selected === 'c'}"
        @click="swichBar($event, 'c')"
      >
        <h3>课程</h3>
      </div>
    </div>
    <div class="content">
      <template v-if="selected === 'a'">
        <div class="box">
          <PositionList
            v-for="item in posDataRec"
            :posData="item"
            :key="item.pk"
          ></PositionList>
        </div>
      </template>
      <template v-else-if="selected === 'b'">
        <div class="box">
          <newsList
            v-for="item in newsData"
            :newsData="item"
            :key="item.id"
          ></newsList>
        </div>
      </template>
      <template v-else-if="selected === 'c'">
        <div class="box">
          <PeixunItemList
            v-for="item in courseData"
            :key="item.id"
            :listData="item"
            @changeId="changeId($event)"
          ></PeixunItemList>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import PositionList from "@/view/Position/PositionList";
import newsList from "@/view/News/newsList";
import PeixunItemList from "@/view/Course/peixunItemList";

export default {
  name: "setting",
  components: {
    PositionList,
    newsList,
    PeixunItemList
  },
  data: function() {
    return {
      selected: "a",
      posDataRec: [
        {
          title: "电子厂车间工人",
          addressCity: "北京",
          addressDir: "通州",
          workBg: "无经验",
          compony: "运动科技有限公司",
          welfare: ["五险一金", "包吃包住"],
          salary: [4000, 6000],
          pushData: "2018-09-09",
          pk: "12345623",
          userPushFlag: false
        },
        {
          title: "快餐店员工",
          addressCity: "北京",
          addressDir: "丰台",
          workBg: "一年以上",
          compony: "麦劳劳餐饮有限责任公司",
          welfare: ["五险一金", "节假日礼物"],
          salary: [3000, 5000],
          pushData: "2018-10-10",
          pk: "123453226",
          userPushFlag: true
        },
        {
          title: "打印店排版员",
          addressCity: "北京",
          addressDir: "朝阳",
          workBg: "一年以上",
          compony: "阳光办公有限公司",
          welfare: ["住房补贴"],
          salary: [5000, 8000],
          pushData: "2018-09-09",
          pk: "1234432356",
          userPushFlag: false
        },
        {
          title: "保洁人员",
          addressCity: "北京",
          addressDir: "昌平",
          workBg: "无经验",
          compony: "阿悄保洁公司",
          welfare: ["五险一金", "交通补助", "餐饮补助"],
          salary: [4000, 6000],
          pushData: "2018-09-09",
          pk: "1233423456",
          userPushFlag: false
        }
      ],
      newsData: [
        {
          imgUrl:
            "http://www.farmer.com.cn/tppd/snjj/201901/W020190111369862437286.jpg",
          title: "2019“三农”改革路线图划定，农地制服改个进入深化施工期间",
          date: "2018-11-12",
          readTime: "2643",
          id: "3213"
        },
        {
          imgUrl:
            "http://www.farmer.com.cn/tppd/snjj/201901/W020190111557396433347.jpg",
          title: "山西鼓励就业扶贫出台多项措施，包括哪些内容？",
          date: "2018-11-09",
          readTime: "3423",
          id: "90321412998"
        },
        {
          imgUrl:
            "http://www.farmer.com.cn/tppd/gdny/201901/W020190111554635397899.jpg",
          title: "陕西省印发易地扶贫搬迁三年行动实施方案",
          date: "2018-11-01",
          readTime: "4231",
          id: "9092412498"
        },
        {
          imgUrl:
            "http://www.farmer.com.cn/sh/sh1/shxw/201711/W020171127678428288774.jpg",
          title: "重庆：政策“礼包”推动就业扶贫",
          date: "2018-10-30",
          readTime: "5433",
          id: "213213"
        },
        {
          imgUrl:
            "http://www.farmer.com.cn/tppd/tstx/201901/W020190111556295387466.jpg",
          title: "乡村振兴规划：2035年基本实现农业农村现代化",
          date: "2018-10-28",
          readTime: "5432",
          id: "909432498"
        },
        {
          imgUrl:
            "http://cj.cnguonong.com/Content/Imageupload/newsImg/2018-12-18/1545097976661.jpg",
          title: "2019“三农”改革路线图划定，农地制服改个进入深化施工期间",
          date: "2018-10-25",
          readTime: "6532",
          id: "5324"
        }
      ],
      courseData: [

        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "3213213"
        },
        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "43123"
        },
        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "42421"
        },
        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "43111223"
        },
        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "4242321"
        },
        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "43232123"
        },
        {
          imgUrl: "https://i01piccdn.sogoucdn.com/39c1a8835b4c5b78",
          title: "高级按摩师",
          memo: "名师出高徒！高级按摩师养成之路！",
          price: "199.99",
          id: "42422321"
        }
      ]
    };
  },
  methods: {
    back: function(event) {
      this.$router.go(-1);
    },
    swichBar: function(event, index) {
      this.selected = index;
    },
    changeId: function(event) {
      console.log("hahaahiahaihaah");
      console.log(event);
      this.$router.push(`/PeixunItemInfo/${event}`);
    }
  },
  mounted() {
    this.$back();
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
    position: absolute;
    left: 0px;
  }
  img {
    width: 20px;
    height: 20px;
  }
}
/* 选择 */
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
      font-size: 16px;
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
.content {
  position: relative;
  top: 88px;
}
</style>

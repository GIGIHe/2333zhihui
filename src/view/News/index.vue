<template>
  <div class="news">
    <div class="nav">
      <h2>新闻</h2>
    </div>
    <div class="switchBar">
      <div
        class="baritem"
        :class="{'selected': selected === 'a'}"
        @click="swichBar($event, 'a')"
      >
        <h3>最新</h3>
      </div>
      <!-- <div
        class="baritem"
        :class="{'selected': selected === 'b'}"
        @click="swichBar($event, 'b')"
      >
        <h3>排行榜</h3>
      </div> -->
      <div
        class="baritem"
        :class="{'selected': selected === 'c'}"
        @click="swichBar($event, 'c')"
      >
        <h3>党政惠农</h3>
      </div>
      <div
        class="baritem"
        :class="{'selected': selected === 'd'}"
        @click="swichBar($event, 'd')"
      >
        <h3>政策解读</h3>
      </div>
    </div>
    <div class="content">
      <template v-if="selected === 'a'">
        <div class="box">
          <newsList
            v-for="item in newsDataA"
            :newsData="item"
            :key="item.id"
          >
            <!-- @click.native="handle(item.id)"123 -->
          </newsList>
        </div>
      </template>
      <template v-else-if="selected === 'b'">
        <div class="box">
          <newsList
            v-for="item in newsDataA"
            :newsData="item"
            :key="item.id"
          >
            <!-- @click.native="handle(item.id)"123 -->
          </newsList>
        </div>
      </template>
      <template v-else-if="selected === 'c'">
        <div class="box">
          <newsList
            v-for="item in newsDataA"
            :newsData="item"
            :key="item.id"
          >
            <!-- @click.native="handle(item.id)"123 -->
          </newsList>
        </div>
      </template>
      <template v-else-if="selected === 'd'">
        <div class="box">
          <newsList
            v-for="item in newsDataA"
            :newsData="item"
            :key="item.id"
          >
            <!-- @click.native="handle(item.id)"123 -->
          </newsList>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import newsList from "@/view/News/newsList";

export default {
  name: "news",
  data: function() {
    return {
      selected: "a",
      type: 0,
      newsDataA: [
        // {
        // 	imgUrl: 'http://www.farmer.com.cn/tppd/snjj/201901/W020190111369862437286.jpg',
        // 		title:'2019“三农”改革路线图划定，农地制服改个进入深化施工期间',
        // 		date: '2018-11-12',
        // 		readTime: '2643',
        // 		id: '3213'
        // }, {
        // 	imgUrl: 'http://www.farmer.com.cn/tppd/snjj/201901/W020190111557396433347.jpg',
        // 		title:'山西鼓励就业扶贫出台多项措施，包括哪些内容？',
        // 		date: '2018-11-09',
        // 		readTime: '3423',
        // 		id: '90321412998'
        // }, {
        // 	imgUrl: 'http://www.farmer.com.cn/tppd/gdny/201901/W020190111554635397899.jpg',
        // 		title:'陕西省印发易地扶贫搬迁三年行动实施方案',
        // 		date: '2018-11-01',
        // 		readTime: '4231',
        // 		id: '9092412498'
        // },{
        // 	imgUrl: 'http://www.farmer.com.cn/sh/sh1/shxw/201711/W020171127678428288774.jpg',
        // 		title:'重庆：政策“礼包”推动就业扶贫',
        // 		date: '2018-10-30',
        // 		readTime: '5433',
        // 		id: '213213'
        // }, {
        // 	imgUrl: 'http://www.farmer.com.cn/tppd/tstx/201901/W020190111556295387466.jpg',
        // 		title:'乡村振兴规划：2035年基本实现农业农村现代化',
        // 		date: '2018-10-28',
        // 		readTime: '5432',
        // 		id: '909432498'
        // }, {
        // 	imgUrl: 'http://cj.cnguonong.com/Content/Imageupload/newsImg/2018-12-18/1545097976661.jpg',
        // 		title:'2019“三农”改革路线图划定，农地制服改个进入深化施工期间',
        // 		date: '2018-10-25',
        // 		readTime: '6532',
        // 		id: '5324'
        // }
      ],
      newsDataB: [
        {
          imgUrl:
            "http://cj.cnguonong.com/Content/Imageupload/newsImg/2018-12-18/1545097976661.jpg",
          title: "《河北省扶贫资金监督管理追责办法》",
          date: "2018-11-12",
          readTime: "4532",
          id: "632423"
        }
      ],
      newsDataC: [
        {
          imgUrl:
            "http://www.farmer.com.cn/tppd/gdny/201901/W020190111371466270619.jpg",
          title: "河北永清：特色绿番茄迎春上市",
          date: "2018-11-12",
          readTime: "2643",
          id: "3421"
        }
      ],
      newsDataD: [
        {
          imgUrl:
            "http://www.farmer.com.cn/tppd/gdny/201812/W020181211531925329548.jpg",
          title: '山东将推动农业产业链等相加相乘相通“三链重构"',
          date: "2018-11-12",
          readTime: "2643",
          id: "5234"
        }
      ]
    };
  },
  methods: {
    swichBar: function(event, index) {
      this.selected = index;
      this.$router.push(`/Home/News/${index}`);
      // this.$router.push({name:'News',{query:{id:index}}});
      console.log("params", index);
      switch (this.selected) {
        case "a":
          this.type = 0;
          break;
        case "b":
          this.type = 1;
          break;
        case "c":
          this.type = 2;
          break;
        case "d":
          this.type = 3;
          break;
        default:
          break;
      }
      this.$axios
        .get(" http://api.qijiawr.com/News/index.html", {
          params: { type: this.type }
        })
        .then(res => {
          console.log("newsa", res.data.data);
          this.newsDataA = res.data.data;
        });
    },
    getnewsDataA() {
      this.$axios
        .get(" http://api.qijiawr.com/News/index.html", { params: { type:0} })
        .then(res => {
          console.log("newsa", res.data.data);
          this.newsDataA = res.data.data;
        });
    },
    handle(id) {
      this.$router.push({ name: "NewsInfo", query: { id: id } });
    }
  },
  created() {
    this.getnewsDataA();
    // console.log(typeof this.newsDataA);
    // console.log(this.newsDataA instanceof Array);
  },
  components: {
    newsList
  },
  mounted: function() {
    this.selected = this.$route.params.tabId;
    this.$back();
  }
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
}

/* 选择 */
.switchBar {
  height: 44px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  top: 44px;
  left: 0;
  background: #ffffff;
  z-index: 5;
  .baritem {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666666;
    transition: color 0.3s;
    position: relative;
    white-space: nowrap;
    padding-left: 8px;
    padding-right: 8px;
    h3 {
      font-size: 16px;
    }
    &.selected {
      color: #0099e8;
    }
    &.selected:after {
      content: " ";
      width: 50%;
      position: absolute;
      height: 2px;
      background: #0099e8;
      bottom: 0;
    }
  }
}
.content {
  position: relative;
  top: 88px;
  margin-bottom: 138px;
}
</style>

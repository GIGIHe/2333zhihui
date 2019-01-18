<template>
  <div class="coures">
    <div class="nav">
      <div class="search">
        <span>
          <van-icon name="search" /></span>
        &nbsp;&nbsp;
        <span>输入关键词搜索</span>
      </div>
    </div>
    <div class="content">
      <div class="swipe">
        <van-swipe
          :autoplay="3000"
          indicator-color="#ffffff"
          :show-indicators="true"
          :height="150"
        >
          <van-swipe-item v-for="item in banners" :key="item.id">
						<img :src="item.src">
					</van-swipe-item>
        </van-swipe>
      </div>
      <div class="switchPanel">
        <div
          class="item"
          @click="switchPHandle($event, 'PeixunItem')"
        >
          <div class="icon">
            <van-icon
              name="todo-list"
              size="20px"
              color="#ffffff"
            />
          </div>
          <h4>培训项目</h4>
        </div>
        <div
          class="item"
          @click="openChat()"
        >
          <div class="icon">
            <van-icon
              name="chat"
              size="20px"
              color="#ffffff"
            />
          </div>
          <h4>在线咨询</h4>
        </div>
        <div
          class="item"
          @click="switchPHandle($event, 'Knowledge')"
        >
          <div class="icon">
            <van-icon
              name="cluster"
              size="20px"
              color="#ffffff"
            />
          </div>
          <h4>知识库</h4>
        </div>
        <div
          class="item"
          @click="switchPHandle($event, 'szLib')"
        >
          <div class="icon">
            <van-icon
              name="manager"
              size="20px"
              color="#ffffff"
            />
          </div>
          <h4>师资库</h4>
        </div>
      </div>
      <div class="zixun" @click="handleTo">
        <img src="../../assets/zixun.png">
        <div class="swipeV">
          <van-swipe
            :autoplay="2000"
            indicator-color="#ffffff"
            :show-indicators="false"
            :height="44"
            :vertical="true"
          >
            <van-swipe-item
              v-for="item in zixun"
              :key="item.id"
            >
              <h5>{{ item.title }}</h5>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="peixun">
        <div class="top">
          <div class="top-left">
            <van-icon
              name="todo-list"
              size="20px"
              color="#8196f6"
            />
            <h4>培训项目</h4>
          </div>
          <div class="top-right">
            <h5 @click="switchPHandle($event, 'PeixunItem')">更多</h5>
            <van-icon
              name="arrow"
              size="14px"
              color="#999999"
            />
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-item">
            <img src="../../assets/peixun/px-1.png">
          </div>
          <div class="bottom-item">
            <img src="../../assets/peixun/px-2.png">
          </div>
          <div class="bottom-item">
            <img src="../../assets/peixun/px-3.png">
          </div>
          <div class="bottom-item">
            <img src="../../assets/peixun/px-4.png">
          </div>
        </div>
      </div>
      <div class="peixun">
        <div class="top">
          <div class="top-left">
            <van-icon
              name="manager"
              size="20px"
              color="#ee8279"
            />
            <h4>师资库</h4>
          </div>
          <div class="top-right">
            <h5 @click="switchPHandle($event, 'szLib')">更多</h5>
            <van-icon
              name="arrow"
              size="14px"
              color="#999999"
            />
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-item" v-for="(item,index) in imgs" :key="index">
            <img :src="item.profile"  >
          </div>
          <!-- <div class="bottom-item">
            <img src="../../assets/szk/sz-2.png">
          </div> -->
          <!-- <div class="bottom-item">
            <img src="../../assets/szk/sz-3.png">
          </div> -->
          <!-- <div class="bottom-item">
            <img src="../../assets/szk/sz-4.png">
          </div> -->
          <!-- <div class="bottom-item">
            <img src="../../assets/szk/sz-5.png">
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";

export default {
  name: "coures",
  components: {
    Swipe,
    SwipeItem
  },
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
        }
      ],
      imgs: "",
      banners: [
				{
          src:'http://img.yuesaoapp.com/manage-data/201810/11/bW4jT7YsRJ.jpg',
          id: '1'
				},{
          src:'http://img.yuesaoapp.com/manage-data/201810/11/sQehe348KW.jpg',
          id: '2'
				},{
          src:'http://img.yuesaoapp.com/manage-data/201810/11/j6hi4rNkNX.jpg',
          id: '3'
				},{
          src:'http://img.yuesaoapp.com/manage-data/201810/11/sMpCBSdd4Y.jpg',
          id: '4'
				}
			]
    };
  },
  methods: {
    switchPHandle: function(event, route) {
      if (route) {
        this.$router.push(`/${route}`);
      }
    },
    openChat: function() {
      window.open("http://188.131.193.71/php/app.php?widget-mobile");
      // window.location.href = 'http://188.131.193.71/php/app.php?widget-mobile';
    },
    getData() {
      this.$axios.get("http://api.qijiawr.com/Teacher/index").then(res => {
        console.log("师资图片", res.data);
        let result = res.data.data;
        this.imgs = res.data.data;
        //  result.forEach(item=>{
        //       return  this.imgs.push = item.profile
        //     })
        console.log('imgs',this.imgs);
      });
    },
    handleTo(){
      this.$router.push('/Home/News/a')
    }
  },
  created() {
    this.getData();
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
  top: 44px;
  margin-bottom: 102px;
  .swipe {
    width: 100%;
    height: 150px;
    background: #ffffff;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}
/* 四个选择按钮 */
.switchPanel {
  background: #ffffff;
  height: 80px;
  padding: 10px;
  display: flex;
  position: relative;
  &:after {
    content: " ";
    position: absolute;
    width: calc(100% - 20px);
    background: #e3e3ec;
    height: 1px;
    bottom: 0;
    left: 10px;
  }
  .item {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 40px;
      height: 40px;
      background: red;
      border-radius: 1000px;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        // opacity: .5;
      }
    }
    h4 {
      font-weight: normal;
      color: #333333;
      font-size: 14px;
      line-height: 14px;
    }
    &:nth-of-type(1) {
      .icon {
        background: linear-gradient(#8ab2f8, #8196f6);
        box-shadow: 0 0 4px #8ab2f8;
      }
    }
    &:nth-of-type(2) {
      .icon {
        background: linear-gradient(#f4b874, #f09b69);
        box-shadow: 0 0 4px #f4b874;
      }
    }
    &:nth-of-type(3) {
      .icon {
        background: linear-gradient(#cca7f6, #c089ea);
        box-shadow: 0 0 4px #c089ea;
      }
    }
    &:nth-of-type(4) {
      .icon {
        background: linear-gradient(#f2a98a, #ee8279);
        box-shadow: 0 0 4px #f2a98a;
      }
    }
  }
}
/*  资讯头条  */
.zixun {
  background: #ffffff;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  img {
    width: 30px;
    height: 30px;
  }
  .swipeV {
    flex: 1;
    height: 44px;
    overflow: hidden;
    h5 {
      width: 100%;
      white-space: nowrap;
      height: 44px;
      line-height: 44px;
      padding-left: 10px;
      padding-right: 10px;
      color: #333333;
      font-weight: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

/* 培训项目 */
.peixun {
  height: 150px;
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
      h4 {
        font-size: 16px;
        padding-left: 8px;
        line-height: 44px;
        color: #333333;
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
  .bottom {
    height: 106px;
    padding-left: 10px;
    padding-right: 10px;
    white-space: nowrap;
    overflow-x: scroll;
    .bottom-item {
      width: 40%;
      height: 90px;
      display: inline-block;
      margin-top: 8px;
      margin-right: 8px;
      border-radius: 6px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>

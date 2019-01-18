<template>
  <div
    class="peixunItemList"
    @click="szInfo($event)"
  >
    <div class="img">
      <img :src="activeData.profile">
    </div>
    <div class="right">
      <h3>{{ activeData.name }}</h3>
      <h5>{{ activeData.major }}</h5>
      <div class="button">
        <h6>浏览数量：{{activeData.num}}</h6>
        <!-- <button>联系TA</button> -->
      </div>
    </div>
  </div>
  <!-- <div> -->
  <!-- 师资列表 -->
  <!-- <ul class="list_box">
      <li
        class="item"
        v-for="(item,index) in activeData"
        :key="index"
      >
        <router-link :to="{name:'detail',query:{id:item.id}}">
          <img
            :src="item.profile"
            alt=""
          >
          <div class="lecture">
            <div class="name">{{item.name}}</div>
            <div class="job_title"><span
              >{{item.major}}</span></div>
            <div class="look_num">{{item.num}}人浏览</div>
          </div>
        </router-link>
      </li>
    </ul> -->
  <!-- </div> -->
</template>

<script>
// import axios from "axios";
export default {
  name: "peixunItemList",
  // props: {
  //   listData:''
  // },
  props: {
    listData: {
      default: function() {
        return {
          profile: "",
          title: "",
          job_title: "",
          id: "",
          look_num: ""
        };
      }
    }
  },
  // default: function () {
  // 	return {
  // 		imgUrl: '',
  // 		title: '',
  // 		memo: '',
  // 		price: '',
  // 		id: '',
  // 		address: ''
  // 	}
  // }
  // },
  data: function() {
    return {
      activeData: this.listData
    };
  },
  watch: {
    listData(val) {
      this.activeData = val;
    }
  },
  methods: {
    szInfo: function(event) {
      this.$emit("changeId", this.activeData.id);
    }
  },
  created() {
    console.log("aa", this.activeData);
  }
};
</script>

<style scoped lang="scss">
.peixunItemList {
  height: 90px;
  background: #ffffff;
  margin-bottom: 1px;
  display: flex;
  padding: 10px 8px;
  .img {
    width: 120px;
    height: 90px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    flex: 1;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: space-between;
    h3 {
      color: #333333;
      font-size: 16px;
    }
    h5 {
      font-weight: normal;
      font-size: 14px;
      color: #666666;
    }
    .button {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    h6 {
      font-weight: normal;
      font-size: 12px;
      color: #666666;
      line-height: 20px;
    }
    button {
      width: 70px;
      height: 26px;
      padding-left: 10px;
      padding-right: 10px;
      border: 0;
      line-height: 20px;
      font-size: 12px;
      color: #ffffff;
      background: #0099e8;
      border-radius: 4px;
    }
  }
}

.list_box {
  background-color: #fff;
  width: 100%;
  margin-bottom: 4px;
}
.item a {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  height: 1rem;
  // border: 1px solid #ff0;
  img {
    width: 1.1rem;
    // border: 1px solid #f00;
  }
  .lecture {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    .name {
      color: #000;
      font-size: 15px;
    }
    .job_title {
      color: rgb(59, 155, 59);
      span {
        margin-right: 0.04rem;
      }
    }
    .look_num {
      color: #666;
    }
  }
}
</style>

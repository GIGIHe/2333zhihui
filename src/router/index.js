import Vue from "vue";
import Router from "vue-router";
import Login from "@/pages/login";
import Verity from "@/components/verity";
import Home from "@/pages/home";
import Register from "@/components/Register"; //注册
import Index from "@/view/Index/index";
import Position from "@/view/Position/index";
import Course from "@/view/Course/index";
import News from "@/view/News/index";
import Personal from "@/view/Personal/index";

import PositionInfo from "@/view/Position/positionInfo";
import NewsInfo from "@/view/News/newsInfo";
import PeixunItem from "@/view/Course/peixunItem";
import PeixunItemInfo from "@/view/Course/peixunItemInfo";
import SzLib from "@/view/Course/szLib";
import detail from "@/view/Course/detail";
import Chat from "@/view/Course/chat";
import Knowledge from "@/view/Course/knowledege";
import Play from "@/view/Course/play";
import Medical from "@/view/Course/medicalDetails";
// import zhishi from "@/view/Course/zhishi";

import PlayVideo from "@/view/Course/playVideo";
import Setting from "@/view/Personal/setting";
import PushpkDoc from "@/view/Personal/pushpkDoc";
import Editinfo from "@/view/Personal/editinfo";
import Collection from "@/view/Personal/collection";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      // 登录
      path: "/",
      name: "Login",
      component: Login
    },
    {
      // 注册
      path: "/verity",
      name: "verity",
      component: Verity
    },
    {
      // 验证
      path: "/Register",
      name: "Register",
      component: Register
    },
    {
      // 主页
      path: "/Home",
      name: "Home",
      component: Home,
      children: [
        {
          // 首页
          path: "Index",
          name: "Index",
          component: Index
        },
        {
          // 职位
          path: "Position",
          name: "Position",
          component: Position
        },
        {
          // 课程
          path: "Course",
          name: "Course",
          component: Course
        },
        {
          // 新闻
          path: "News/:tabId",
          // path: "News",
          name: "News",
          component: News
        },
        {
          // 个人中心
          path: "Personal",
          name: "Personal",
          component: Personal
        }
      ]
    },
    {
      // 职位详情
      path: "/PositionInfo/:posId",
      name: "PositionInfo",
      component: PositionInfo
    },
    {
      // 新闻详情
      // path: "/NewsInfo/:newsId",
      path: "/NewsInfo",
      name: "NewsInfo",
      component: NewsInfo
    },
    {
      // 培训项目
      // path: "/PeixunItem/",
      path: "/PeixunItem",
      name: "PeixunItem",
      component: PeixunItem
    },
    {
      // 培训项目详情
      // path: "/PeixunItemInfo/:peixunId",
      path: "/PeixunItemInfo/:index",
      name: "PeixunItemInfo",
      meta: { keepAlive: true },
      component: PeixunItemInfo
    },
    {
      // 在线咨询
      path: "/Chat/",
      name: "Chat",
      meta: { keepAlive: true },
      component: Chat
    },
    {
      // 师资库
      path: "/SzLib/",
      name: "SzLib",
      meta: { keepAlive: true },
      component: SzLib
    },
    {
      // 师资库
      path: "/detail",
      name: "detail",
      meta: { keepAlive: true },
      component: detail
    },

    // {
    //   // 知识库
    //   path: "/zhishi",
    //   name: "zhishi",
    //   component: zhishi,
    //   redirect: "/zhishi/Knowledge",
    //   children: [
    // {
    //   // 知识库
    //   path: "Knowledge",
    //   name: "Knowledge",
    //   meta: {
    //     keepAlive: true
    //   },
    //   component: Knowledge
    // },
    // ]
    // },
    {
      // 知识库
      path: "/Knowledge",
      name: "Knowledge",
      meta: { keepAlive: true },
      component: Knowledge
    },
    {
      // 课程播放
      path: "/play",
      name: "play",
      meta: { keepAlive: true },
      component: Play
    },
    {
      // 医学详情
      path: "/medical",
      name: "medical",
      meta: { keepAlive: true },
      component: Medical
    },
    {
      // 设置
      path: "/Setting/",
      name: "Setting",
      component: Setting
    },
    {
      // 上传贫困证明
      path: "/PushpkDoc/",
      name: "PushpkDoc",
      component: PushpkDoc
    },
    {
      // 信息完善
      path: "/Editinfo/",
      name: "Editinfo",
      component: Editinfo
    },
    {
      // 我的收藏
      path: "/Collection/",
      name: "Collection",
      component: Collection
    },
    {
      // 播放视频
      path: "/PlayVideo/:index",
      name: "PlayVideo",
      component: PlayVideo
    }
  ]
});
router.beforeEach((to, from, next) => {
  // const toDepth = to.path.split('/').length
  // const fromDepth = from.path.split('/').length
  // if (toDepth < fromDepth) {
  //   console.log('后退。。。')
  //   from.meta.keepAlive = true
  //   to.meta.keepAlive = true;
  // }
  next();
});
export default router;

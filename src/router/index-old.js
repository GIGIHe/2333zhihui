import Vue from "vue";
import Router from "vue-router";
import positionInfo from "@/view/Position/positionInfo";
// import HelloWorld from '@/components/HelloWorld'
const components = {
  login: () => import("@/components/Login"), //登录
  tabbar: () => import("@/components/Tabbar"),
  head: () => import("@/components/Header"),
  index: () => import("@/view/Index/index"), //首页
  course: () => import("@/view/Course/index"), //课程页
  position: () => import("@/view/Position/index"), //职位页
  news: () => import("@/view/News/index"), //新闻页
  personal: () => import("@/view/Personal/index")//个人中心页
};
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: components.login
    },
    {
      path: "/",
      name: "index",
      component: components.index
    },
    {
      path: "/position",
      name: "position",
      component: components.position,
      children: [
        {
          path: 'positionInfo',
          name: 'positionInfo',
          component: positionInfo
        }
      ]
    },
    {
      path: "/course",
      name: "course",
      component: components.course
    },
    {
      path: "/news",
      name: "news",
      component: components.news
    },
    {
      path: "/personal",
      name: "personal",
      component: components.personal
    }

    // {
    //   path: "/tab",
    //   name: "tab",
    //   component: components.tabbar
    // },
    // {
    //   path: "/head",
    //   name: "head",
    //   component: components.head
    // }
  ]
});

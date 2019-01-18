<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <keep-alive include="knowledge">
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Regular, "微软雅黑", "Times New Roman", Georgia,
    sans-serif;
}
body {
  font-size: 14px;
  background-color: #f5f5f5;
}
</style>

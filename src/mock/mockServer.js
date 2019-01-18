/*
使用mockjs提供mock数据接口
 */
import Mock from "mockjs";
import data from "./data.json";

Mock.mock("/doctors", { code: 0, data: data.doctors }); //师资列表
Mock.mock("/result", { code: 0, data: data.resultData }); //知识库搜素列表
Mock.mock("/example", { code: 0, data: data.example }); //知识库视频
// Mock.mock("/newsList", { code: 0, data: data.newsList }); //获取新闻列表
// Mock.mock("/content", { code: 0, data: data.content }); //获取新闻内容
// Mock.mock("/job", { code: 0, data: data.position });//职位
// Mock.mock("/video", { code: 0, data: data.video });//课程
// Mock.mock("/policy", { code: 0, data: data.policy });//政策
// Mock.mock("/train1", { code: 0, data: data.train1 });//培训分类
// Mock.mock("/train2", { code: 0, data: data.train2 });//培训分类
// Mock.mock("/train3", { code: 0, data: data.train3 });//培训分类
// Mock.mock("/train4", { code: 0, data: data.train4 });//培训分类
// Mock.mock("/train5", { code: 0, data: data.train5 });//培训分类
// Mock.mock("/train6", { code: 0, data: data.train6 });//培训分类
// Mock.mock("/train7", { code: 0, data: data.train7 });//培训分类
// Mock.mock("/info", { code: 0, data: data.person});//人员列表数据

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可

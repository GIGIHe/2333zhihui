<template>
	<div class="home">
		<div class="router-box">
			<router-view></router-view>
		</div>
		<div class="footer">
			<div class="footer-item" @click="switchRouter($event, 'Index')">
				<img src="../assets/home/home-sel.png" v-if="$route.name === 'Index'">
				<img src="../assets/home/home.png" v-else>
				<h2 :class="{'selected': $route.name === 'Index'}">首页</h2>
			</div>
			<div class="footer-item" @click="switchRouter($event, 'Position')">
				<img src="../assets/home/pos-sel.png" v-if="$route.name === 'Position'">
				<img src="../assets/home/pos.png" v-else>
				<h2 :class="{'selected': $route.name === 'Position'}">职位</h2>
			</div>
			<div class="footer-item" @click="switchRouter($event, 'Course')">
				<img src="../assets/home/couse-sel.png" v-if="$route.name === 'Course'">
				<img src="../assets/home/couse.png" v-else>
				<h2 :class="{'selected': $route.name === 'Course'}">培训</h2>
			</div>
			<div class="footer-item" @click="switchRouter($event, 'News/a')">
				<img src="../assets/home/news-sel.png" v-if="$route.name === 'News'">
				<img src="../assets/home/news.png" v-else>
				<h2 :class="{'selected': $route.name === 'News'}">新闻</h2>
			</div>
			<div class="footer-item" @click="switchRouter($event, 'Personal')">
				<img src="../assets/home/wode-sel.png" v-if="$route.name === 'Personal'">
				<img src="../assets/home/wode.png" v-else>
				<h2 :class="{'selected': $route.name === 'Personal'}">个人中心</h2>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'home',
	methods: {
		switchRouter: function (event, route) {
			this.$router.push(`/Home/${route}`);
		}
	}
}
</script>
<style>
.router-box {
	width: 100%;
}
/* 切换组件 */
.footer {
	position: fixed;
	height: 50px;
	width: 100%;
	bottom: 0;
	left: 0;
	display: flex;
	background: #ffffff;
	border-top: 1px solid #eeeeee;
	box-sizing: border-box;
}
.footer-item {
	width: 20%;
	background: #ffffff;
	display: flex;
	flex-direction: column;
	padding: 0px;
	justify-content: center;
	align-items: center;
}
.footer-item img {
	width: 20px;
	height: 20px;
	margin-bottom: 6px;
}
.footer-item h2	{
	white-space: nowrap;
	font-size: 12px;
	font-weight: normal;
	color: #a4a7b5;
	line-height: 12px;
}
.footer-item h2.selected {
	color: #0099e8;
}
</style>
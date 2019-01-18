<template>
	<div class="setting">
		<div class="nav">
			<span @click="back($event)">
				<van-icon name="arrow-left" size="20px"/>
			</span>
			<h2>上传贫困证明</h2>
		</div>
		<div class="content">
			<h3>建档立卡证明</h3>
			<div class="zhengming">
				<span>贫困证明</span>
			</div>
			<button>+点击上传</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "pushpkDoc",
	computed: {
	},
	methods: {
		back: function (event) {
			this.$router.go(-1);
		}
  },
    mounted() {
    this.$back();
  },
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
.content {
	position: fixed;
	top: 44px;
	height: 100%;
	width: 100%;
	background: #ffffff;
	h3 {
		padding: 0px 8px;
		line-height: 16px;
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 16px;
		color: #333333;
	}
	.zhengming {
		position: relative;
		left: 8px;
		width: calc(100% - 16px);
		height: 300px;
		// left: calc(5% - 8px);
		background: #f3f3f3;
		margin-bottom: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			color: #d0d1d2;
		}
	}
	button {
		background: #ffffff;
		border: 0;
		color: #0099e8;
		margin: 0 auto;
		display: block;
	}
}

</style>

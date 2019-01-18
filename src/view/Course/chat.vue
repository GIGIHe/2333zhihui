<template>
	<div class="peixunItem">
		<div class="nav">
			<span >
				<van-icon @click="back($event)" name="arrow-left" size="20px"/>
			</span>
			<h2>在线咨询</h2>
		</div>
		<div class="content">
    		<iframe :style="iframeStyle" src="http://188.131.193.71/php/app.php?widget-mobile"></iframe>
		</div>
	</div>
</template>

<script>
export default {
	name: "peixunItem",
	methods: {
		back: function (event) {
			this.$router.go(-1);
		},
		getClientHeight: function () {
			var clientHeight=0;
			if(document.body.clientHeight&&document.documentElement.clientHeight) {
				var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
			} else {
				var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
			}
			return clientHeight;
		}
	},
	mounted: function () {
		console.log('屏幕的高度为：');
		console.log(this.getClientHeight());
	},
	computed: {
		iframeStyle: function () {
			return {};
		}
	}
};
</script>

<style scoped lang="scss">
html, body {
	width: 100%;
	height: 100%;
	background: red;
}
.nav {
	width: 100%;
	height: 44px;
	background: #ffffff;
	border-bottom: 1px solid #eeeeee;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	h2 {
		color: #333333;
		font-weight: 600;
		font-size: 17px;
		letter-spacing: 1px;
		height: 44px;
		line-height: 44px;
		position: relative;
		width: 100%;
		text-align: center;
	}
	span {
		/* 返回按钮 */
		width: 40px;
		padding-left: 8px;
		height: 44px;
		position: absolute;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		z-index: 1;
	}
}
.content {
	position: relative;
	top: 44px;
	iframe {
		border: 0;
		width: 100%;
		min-height: 400px;
	}
}
</style>

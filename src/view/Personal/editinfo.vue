<template>
	<div class="setting">
		<div class="nav">
			<span @click="back($event)">
				<van-icon name="arrow-left" size="20px"/>
			</span>
			<h2>信息完善</h2>
		</div>
		<div class="content">
			<div class="headImg">
				<img :src="headImgUrl">
				<span>点击更换头像</span>
			</div>
			<van-cell-group>
				<van-field value="昵称" readonly>
					<div slot="button" class="button">
						<span>{{ name }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="职业" readonly>
					<div slot="button" class="button">
						<span>{{ job }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="婚姻状况" readonly>
					<div slot="button" class="button">
						<span>{{ marryed === 'Y' ? '是' : '否' }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="是否生育" readonly>
					<div slot="button" class="button">
						<span>{{ fertiled === 'Y' ? '是' : '否' }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="家庭收入" readonly>
					<div slot="button" class="button">
						<span>{{ householdIncome }}万</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="家庭人口" readonly>
					<div slot="button" class="button">
						<span>{{ householdNumer }}人</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="是否需要推荐就业" readonly>
					<div slot="button" class="button">
						<span>{{ recommendedEmpl === 'Y' ? '是' : '否' }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="是否愿意外出工作" readonly>
					<div slot="button" class="button">
						<span>{{ outdoorWork === 'Y' ? '是' : '否' }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
				<van-field value="期望从事职业" readonly>
					<div slot="button" class="button">
						<span>{{ hopeJobs }}</span>
						<van-icon name="arrow" size="16px"/>
					</div>
				</van-field>
			</van-cell-group>
			<div class="alert">
				<span>温馨提示：请完善以上信息</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "setting",
	data: function () {
		return {
			name: '月儿弯弯',
			job: '服务员',
			marryed: 'N',
			fertiled: 'N',
			householdIncome: '3',
			householdNumer: '4',
			recommendedEmpl: 'Y',
			outdoorWork: 'N',
			hopeJobs: '超市商场工作人员',
			headImgUrl: 'https://i04piccdn.sogoucdn.com/3c28af542f2d49f7-9e7c5d699eaea93e-939cf512083c0f230b1291e2137f4b19_qq'
		};
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
	position: relative;
	top: 44px;
	.headImg {
		height: 140px;
		width: 100%;
		background: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 10px;
		img {
			width: 80px;
			height: 80px;
			border-radius: 80px;
		}
		span {
			height: 50px;
			line-height: 50px;
			color: #0099e8;
			font-size: 14px;
		}
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #999999;
		span {
			margin-right: 8px;
		}
	}
	.alert {
		line-height: 40px;
		padding-left: 15px;
		color: #ff6c00;
		font-size: 12px;
	}
}
</style>

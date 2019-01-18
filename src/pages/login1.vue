<template>
	<div class="login">
		<button @click="login">登录</button>
	</div>
</template>
<script>
export default {
	name: 'login',
	methods: {
		login: function () {
			this.$router.push('/Home/Index');
		}
	}
}
</script>
<style>
	
</style>
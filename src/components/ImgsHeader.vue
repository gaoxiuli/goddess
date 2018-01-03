<template>
	<header id="header">
		<div id="hr">
			<span id="defind" style="color: #333;">发现</span>&nbsp;&nbsp;|&nbsp;
			<span id="notice">关注</span>
		</div>
		<img src="" alt="" />
		<i class="iconfont icon-xiangji1"></i>
	</header>
</template>

<script>
	export default {
		
	}
</script>

<style scoped="">
	#header{
		width: 100%;
		height: 40px;
		display: flex;
		border-bottom:1px solid #eee;
	}
	#hr{
		width: 40%;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		margin-left: 30%;
		text-align: center;
		color: #999;
	}
	i{
		font-size: 16px;
		margin-left: 23%;
		margin-top: 5px;
	}
</style>
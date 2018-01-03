<template>
	<header id="header">
  		<div id="top1">
  			<i class="iconfont icon-jiantou1" @click="clickFun()"></i>
  			<span>购物车</span>
  			<div> </div>
  		</div>
  	</header>
</template>

<script>
	export default{
		methods:{
			clickFun(){
				window.history.back();
			}
		}
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	#header{
		#top1{
			text-align:center;
			background: #f66;
			line-height:40px;
			color:#fff;
			@include flexbox();
			@include justify-content(space-between);
			padding:0 5%;
		}
	}
</style>
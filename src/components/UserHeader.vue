<template>
	<header id="header">
  		<div class="top">
  		 	<span>我的</span>
  		</div>
  		<div class="shezhi">
  			<i class="iconfont icon-erji"></i>
  			<i class="iconfont icon-shezhi" @click="clickShezhi()"></i>
  		</div>
  	</header>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			clickShezhi(){
				this.$router.push("/logout");
			}
		}
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	#header{
		position:fixed;
		height:.4rem !important;
		z-index:99;
		.top{
			@include rect(100%,100%);
			@include bgcolor(#000);
			@include textcolor(#fff);
			@include text-align();
			@include fontsize(.16rem);
			@include lineheight(.4rem)
		}
		.shezhi{
			position:absolute;
			top:0px;
			right:0px;
			@include lineheight(.4rem);
			@include textcolor(#e0e0e0);
			@include rect(1rem,100%);
			@include text-align(right);
			i{
				@include fontsize(.2rem);
				padding-right:10px;
			}
		}
	}
</style>
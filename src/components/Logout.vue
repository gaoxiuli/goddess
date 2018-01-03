<template>
  	<div class="content">
  		<div class="login_page">
  			<div class="back">
	  			<i class="iconfont icon-jiantou1" @click="fanhui()"></i>
	  		</div>
	  		<h1>设置</h1>
	  		<div class="row">
	  			<span>地址管理</span><i class="iconfont icon-icon07"></i>
	  		</div>
	  		<div class="row">
	  			<span>更换手机号</span><i class="iconfont icon-icon07"></i>
	  		</div>
	  		<div class="row">
	  			<span>修改登录密码</span><i class="iconfont icon-icon07"></i>
	  		</div>
	  		<div class="rowLine"></div>
	  		<div class="row">
	  			<span>关于</span><i class="iconfont icon-icon07"></i>
	  		</div>
	  				
		  	<input type="button" value="退出" id="btn" @click="submit()"/>
	  		
  		</div>
  	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import Bus from "./../md/MyBus.js";
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			submit(){
				localStorage.removeItem('username');
				this.$router.push('/user');
				
			},
			fanhui(){
				window.history.back();
			}
			
		},
		mounted(){
			
		}
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	.content{
		@include rect(100%,100%);
		.login_page{
			padding:5% 0;
			@include flexbox();
			@include flex-direction(column);
			@include rect(100%,100%);
			.back{
				padding: 0 5%;
				@include rect(100%,10%);
				@include font-weight(700);
				i{
					@include fontsize(.28rem);
				}
			}
			h1{
				padding: 0 5%;
				@include fontsize(.3rem);
			}
			.rowLine{
				@include rect(90%,1px);
				@include bgcolor(#b9b9b9);
				margin-left:10%;
			}
			.row{
				padding: 0 5%;
				@include lineheight(.5rem);
				@include fontsize(.16rem);
				@include rect(100%, auto);
				@include flexbox();
				@include justify-content(space-between);
			}
			#btn{
				@include rect(80%,.4rem);
				border:none;
				background:#000;
				@include fontsize(.18rem);
				@include textcolor(#fff);
				margin:0 auto;
				margin-top:40%;
			}
		}
	}
		
</style>
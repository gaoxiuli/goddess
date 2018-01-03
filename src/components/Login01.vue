<template>
  	<div class="content">
  		<div class="close">
  			<i class="iconfont icon-x" @click="closeFunc($event)"></i>
  		</div>
  		<div class="login">
  			<h2>您好，请登录</h2>
  			<p>新用户注册即享2800元礼包</p>
  		</div>
  		<div class="form">
  			<div class="f">
  				<div class="pone">
  					<p v-show="flagPhone">手机号</p>
  				</div>
	  			<input type="text" placeholder="手机号" v-model="phones" id="phone" @focus="focusFuns($event)" @blur="blurFuns($event)"/><br />
	  			<input type="button" value="下一步" id="btn" @click="clickFunc($event)"/>
	  			<p>登陆后即表示接受<a href="javascript:;">《用户租赁协议》</a></p>
  			</div>
  		</div>
  	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import Bus from "./../md/MyBus.js";
	export default{
		data(){
			return{
				flagPhone:false,
				inputChect:true,
				phones:""
			}
		},
		methods:{
			closeFunc(event){
				this.$router.push('/user')
			},
			focusFuns(event){
				event.target.placeholder="";
				event.target.style.borderBottom="1px solid #000";
				this.flagPhone=true;
			},
			blurFuns(event){
				if(event.target.value == ""){
					event.target.placeholder="手机号";
					event.target.style.borderBottom="1px solid #d9d9d9";
					this.flagPhone=false;
				}
			},
			clickFunc(event){
				var that = this;
				var reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
				var phone=document.getElementById("phone").value;
				if(!(reg.test(phone))){
					Toast({
					  message: '请输入有效手机号！',
					  position: 'center',
					  duration: 3000
					});
				}else{
//					alert(jQuery("#phone").val())
					  jQuery.ajax({
				  	  	type:"get",
				  	  	url:"http://localhost:3000/users/loginAction1",
				  	  	data:{
//				  	  		username:jQuery("#phone").val()
				  	  		username:phone
				  	  	},
				  	  	success:function(datas){
				  	  	  console.log(datas)
				  	  	  if(datas == "0"){
				  	  	    that.$router.push("/register");
				  	  	  }else if(datas == "1"){
							that.$router.push("/login02")
				  	  	  }
				  	  	}
				  	  });
					this.phones=phone;
//					this.$store.commit('changePhone',this.phones)
					localStorage.setItem('username1',phone);
//					alert(this.phones)
				}
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
		@include flexbox();
		@include flex-direction(column);
		@include rect(100%,100%);
		padding:5%;
		.close{
			@include rect(100%,10%);
			@include font-weight(700);
			i{
				@include fontsize(.28rem);
			}
		}
		.login{
			@include rect(100%,auto);
			h2{
				@include fontsize(.3rem);
			}
		}
		.form{
			@include flex();
			@include flexbox();
			@include justify-content();
			@include flex-direction(column)
			@include rect(100%,auto);
			.f{
				@include rect(100%,auto);
				text-align:center;
				.pone{
					@include rect(100%,.3rem);
					p{
						@include fontsize(.1rem);
						@include textcolor(#d9d9d9);
						@include text-align(left);
					}
				}
				#phone{
					@include rect(100%,.5rem);
					border:none;
					border-bottom:1px solid #d9d9d9;
					@include fontsize(.16rem);
				}
				#btn{
					@include rect(80%,.4rem);
					margin:30px 0;
					border:0;
					@include bgcolor(#000);
					@include textcolor(#fff);
				}
			}
		}
	}
</style>
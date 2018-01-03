<template>
  	<div class="content">
  		<div class="login_page">
	  		<div class="back">
	  			<i class="iconfont icon-jiantou1" @click="fanhui()"></i>
	  		</div>
	  		<div class="login" v-if="flag">
	  			<h2>验证码登录</h2>
	  			<div class="yanzheng" @click="login01($event)">密码登录  <i class="iconfont icon-jiantou"></i></div>
	  		</div>
	  		<div class="login" v-else>
	  			<h2>密码登录</h2>
	  			<div class="yanzheng" @click="login02($event)">验证码登录  <i class="iconfont icon-jiantou"></i></div>
	  		</div>
	  		<div class="form">
	  			<div class="f">
	  				<div class="pone" id="pone">
	  					<p>手机号</p>
		  				<input type="text" :placeholder="phone" id="phone" readonly="readonly"/><br />
	  				</div>
		  			<div class="yz">
	  					<p v-if="flagMima">密码</p>
	  				</div>
	  				<div class="mm">
	  					<input type="text" placeholder="密码" v-model="pwd" id="phone" @focus="focusFuns($event)" @blur="blurFuns($event)"/>
	  					<div class="mima2" v-if="flag" @click="clickYzm()">
	  						获取验证码
	  					</div>
	  					<div class="mima" v-if="!flag" @click="forgets()">
	  						忘记密码
	  					</div>
	  				</div>
		  			<input type="button" value="登录" id="btn" @click="clickFunc($event)"/>
		  			<p>登陆后即表示接受<a href="javascript:;">《用户租赁协议》</a></p>
	  			</div>
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
				phone:"",
				pwd:"",
				flagMima:false,
				flag:false,
				yzm:""
			}
		},
		methods:{
			clickYzm(){
				var that=this;
				  jQuery(".mima2").attr("disabled","disabled");
				  jQuery.ajax({
			      type:"get",
			      url:'http://localhost:3000/users/sendMsg',
			      data:{
			        mobile:that.phone
			      },
			      success:function(data){
//			      	console.log(data)
			        if(data){
			        	console.log("短信发送成功，可以开始倒计时")
			        	console.log(data);
			        	that.yzm = data;
			          var count = 15;
			         	var timer = setInterval(function(){
			           	jQuery(".mima2").html(count + "s后重新发送");
			           	count--;
			           	if(count == 0){
			             	clearInterval(timer)
			             	jQuery(".mima2").html("获取验证码")
			             	jQuery(".mima2").removeAttr("disabled");
			           	}
			         	},1000)
			        }else{
			          	console.log("短信发送失败")
			           jQuery(".mima2").removeAttr("disabled");
			        }
			      }
		   		});
			},
			clickFunc(event){
				var that=this;
				if(that.flag){
					if(that.yzm != that.pwd){
						Toast({
							  message: '验证码错误',
							  position: 'center',
							  duration: 3000
							});
					}else{
			  	  	    that.$router.push('/user')
					}
				}else{
				 jQuery.ajax({
			  	  	type:"get",
			  	  	url:"http://localhost:3000/users/loginAction",
			  	  	data:{
			  	  		username:that.phone,
			  	  		password:that.pwd
			  	  	},
			  	  	success:function(data){
			  	  	  console.log(data)
			  	  	  if(data == "0"){
//			  	  	    alert("用户未注册")
						Toast({
						  message: '用户未注册',
						  position: 'center',
						  duration: 3000
						});
			  	  	  }else if(data == "2"){
//			  	  	    alert("密码错误")
			  	  	    Toast({
							  message: '密码错误',
							  position: 'center',
							  duration: 3000
							});
			  	  	  }else if(data == "1"){
//			  	  	    alert("ok")
						localStorage.setItem('username',that.phone);
						localStorage.removeItem('username1');
			  	  	    that.$router.push('/user')
			  	  	  }else if(data =="-1"){
//			  	  	    alert("登录失败")
			  	  	    Toast({
						  message: '登录失败',
						  position: 'center',
						  duration: 3000
						});
			  	  	  }
			  	  	}
			  	  });
				}
			},
			forgets(){
				this.$router.push("/login03");
			},
			fanhui(){
				this.$router.push('/login01')
			},
			login01(event){
				this.flag=false;
				this.pwd="";
			},
			login02(event){
				this.flag=true;
				this.pwd="";
			},
			focusFuns(event){
				event.target.placeholder="";
				event.target.style.borderBottom="1px solid #000";
				this.flagMima=true;
			},
			blurFuns(event){
				if(event.target.value == ""){
					event.target.placeholder="密码";
					event.target.style.borderBottom="1px solid #d9d9d9";
					this.flagMima=false;
				}
			},
			focusFuns1(event){
				event.target.placeholder="";
				event.target.style.borderBottom="1px solid #000";
				this.flagMima=true;
			},
			blurFuns1(event){
				if(event.target.value == ""){
					event.target.placeholder="验证码";
					event.target.style.borderBottom="1px solid #d9d9d9";
					this.flagMima=false;
				}
			}
		},
		mounted(){
			var that=this;
//			Bus.$on("myEvent",(msg) => {
//				that.phone=msg;
//				console.log(that.phone);
//			});
//			console.log(this.$store.state.telePhone);
//			this.phone=this.$store.state.telePhone;
			this.phone=localStorage.getItem('username1')
//			console.log(jQuery("#btn"))
//			jQuery(".icon-jiantou").animation({"right":"-5px"},2000);
		}
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	.content{
			@include rect(100%,100%);
		.login_page{
			padding:5%;
			@include flexbox();
			@include flex-direction(column);
			@include rect(100%,100%);
		}
		.back{
			@include rect(100%,10%);
			@include font-weight(700);
			i{
				@include fontsize(.28rem);
			}
		}
		.login{
			@include rect(100%,auto);
			@include flexbox();
			@include justify-content(space-between)
			h2{
				@include fontsize(.3rem);
			}
			.yanzheng{
				@include flexbox();
				@include align-items();
				@include fontsize(.16rem);
				@include textcolor(#333);
				/*position:relative;*/
				/*padding-right:40px;*/
				i{
					/*position:absolute;
					top:13px;
					right:5px;*/
					@include fontsize(.12rem);
					padding:0 10px;
					/*animation:yundong 2000  infinite linear;
					@keyframs yundong{
						0%{
							transform:translateX(1px);
						}
						40%{
							transform:translateX(5px);
						}
						80%{
							transform:translateX(-2px);
						}
						100%{
							transform:translateX(-5px);
						}
					}*/
				}
			}
		}
		.form{
			@include flex();
			@include flexbox();
			@include justify-content();
			@include flex-direction(column);
			@include align-items();
			@include rect(100%,auto);
			#phone{
				margin-bottom:20px;
			}
			.f{
				@include rect(100%,auto);
				text-align:center;
				.pone,.iphone{
					@include rect(100%, auto);
					@include textcolor(#b9b9b9);
					padding-bottom:70px;
					p{
						text-align: left;
					}
					input{
						@include rect(100%, .3rem);
						border:none;
						border-bottom:1px solid #b9b9b9;
					}
				}
				.yz{
						@include rect(100%, .3rem);
					p{
						text-align: left;
						color:#b9b9b9;
					}
				}
				.mm{
					position:relative;
					#phone{
						@include rect(100%, .3rem);
						border:none;
						border-bottom:1px solid #b9b9b9;
					}
					.mima{
						position:absolute;
						top:1px ;
						right:1px;
					}
					.mima2{
						padding:4px;
						border:1px solid #333;
						position:absolute;
						top:-10px ;
						right:1px;
					}
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
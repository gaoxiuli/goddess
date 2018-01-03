<template>
  	<div class="content">
  		<div class="login_page">
  			<div class="back">
	  			<i class="iconfont icon-jiantou1" @click="fanhui()"></i>
	  		</div>
	  		<div class="login">
	  			<h2>忘记密码</h2>
	  		</div>
	  		<div class="form">
	  			<div class="f">
	  				<div class="iphone">
	  					<p>手机号</p>
		  				<input type="text" :placeholder="phone" id="phone" readonly="readonly" /><br />
	  				</div>
		  			<div class="yz">
	  					<p v-if="flagMima">验证码</p>
	  				</div>
	  				<div class="mm">
	  					<input type="text" placeholder="验证码" v-model="yzm" id="phone" @focus="focusFuns($event)" @blur="blurFuns($event)" class="yzm"/>
	  					<div class="mima2" @click='clickYzm()'>
	  						获取验证码
	  					</div>
	  				</div>
	  				<div class="yz">
	  					<p v-if="flagMima1">新密码</p>
	  				</div>
	  				<div class="mm">
	  					<input type="password" placeholder="8-12位字母或数字" id="phone" @focus="focusFuns1($event)" @blur="blurFuns1($event)" class="pwd" />
	  					<div class="mima" @click="sees()">
	  						<i class="iconfont icon-yanjing" v-if="see"></i>
	  						<i class="iconfont icon-yanjing1" v-else></i>
	  					</div>
	  				</div>
		  			<input type="button" value="确定" id="btn" @click="submit()"/>
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
				flagMima:false,
				flagMima1:false,
				see:false,
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
			submit(){
				var that=this;
				var iphone = this.phone;
				var reg= /^[0-9a-zA-Z]{8,16}$/;
				var str=document.getElementsByClassName("pwd")[0].value;
				if(document.getElementsByClassName("yzm")[0].value==""){
						Toast({
						  message: '请输入验证码',
						  position: 'center',
						  duration: 3000
						})
				}else if(that.yzm != jQuery(".yzm").val()){
						Toast({
						  message: '验证码错误',
						  position: 'center',
						  duration: 3000
						})
				}else if(reg.test(str)){
					 $.ajax({
				        type:"post",
				        url:"http://localhost:3000/users/updateAction",
				        data:{
				        	username:iphone,
				        	password:jQuery(".pwd").val()
				        },
				        success:function(data){
				          console.log(data)
				          if(data == "0"){
				            Toast({
								  message: '用户未注册！',
								  position: 'center',
								  duration: 3000
								})
				          }else if(data == "1"){
				  	  	    that.$router.push("/login02");
							localStorage.removeItem('username1');
				  	  	    
				          }
				        }
				      });
				}else{
					Toast({
						  message: '密码必须为8—16为字母或数组！',
						  position: 'center',
						  duration: 3000
					})
				}
			},
			sees(){
				this.see=!this.see;
				if(this.see==true){
					document.getElementsByClassName("pwd")[0].type="text";
				}else{
					document.getElementsByClassName("pwd")[0].type="password";
				}
			},
			fanhui(){
				window.history.back();
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
				this.flagMima1=true;
			},
			blurFuns1(event){
				if(event.target.value == ""){
					event.target.placeholder="密码";
					event.target.style.borderBottom="1px solid #d9d9d9";
					this.flagMima1=false;
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
			this.phone=localStorage.getItem('username1');
			
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
				.iphone{
					padding-bottom: 10px;
					
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
						i{
							padding-right: 10px;
						}
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
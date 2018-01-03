<template>
  	<div id="content">
  		<div class="content_top">
  			<router-link v-if='flagLogin' to="/login01">
	  			<img class="touxiang" src="../assets/tx@3x.png" alt="" />
	  			<div class="logins">
	  				<span class="login">点击登录</span><br />
	  				<span class="yh">登录后可享受更多特权</span>
	  			</div>
	  		</router-link>
	  		<div v-else>
	  			<img class="touxiang" src="../assets/tx@3x.png" alt="" />
	  			<div class="logins">
	  				<span class="login">{{user}}</span><br />
	  				<i class="iconfont icon-huiyuan1"></i><span class="login login1">普通会员</span><br />
	  				<span class="yh">登录后可享受更多特权</span>
	  			</div>
	  		</div>
  			<img class="ka" src="../assets/beauty_card@3x.png" alt="" />
  		</div>
  		<div class="con_row01">
  			<div class="yichu">
  				<i class="iconfont icon-myWardrobe">
  					<span>一键还衣</span>
  				</i>
  				<p>我的衣橱</p>
  			</div>
  			<div class="ka">
  				<i class="iconfont icon-qia"></i>
  				<p>购买无限换卡</p>
  			</div>
  		</div>
  		<div class="con_row02">
  			<ul>
  				<li v-for="item in list_01">
  					<i class="iconfont" :class="item.icon"></i>
  					<p>{{item.name}}</p>
  				</li>
  			</ul>	
  		</div>
  		<div class="con_row03">
  			<div class="con_row03_1">
  				<div class="dingdan01">
  					<i class="iconfont icon-5"></i>
  					<span>我的订单</span>
  				</div>
  				<div class="dingdan02">
  					<span>查看全部订单</span>
  					<i class="iconfont icon-icon07"></i>
  				</div>
  			</div>
  			<div class="con_row03_2">
  				<ul>
  					<li v-for="item in list_02">
  						<i class="iconfont" :class="item.icon"></i>
  						<p>{{item.name}}</p>
  					</li>
  				</ul>
  			</div>
  			<div class="con_row03_3">
  				<div class="row">
					<i class="iconfont icon-huiyuan"></i>
  					<div class="con cons"><span class="vip">会员中心</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				<div  class="row">
  					<i class="iconfont icon-shafa"></i>
  					<div class="con"><span class="vip">预约试穿</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				<!-- -->
  				<div class="row">
					<i class="iconfont icon-dingyue"></i>
  					<div class="con cons"><span class="vip">我的订阅</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				<div  class="row">
  					<i class="iconfont icon-zuijinliulan"></i>
  					<div class="con"><span class="vip">最近预览</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				  <!-- -->
  				  <div class="row">
					<i class="iconfont icon-yajin"></i>
  					<div class="con cons"><span class="vip">我的押金</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				<div  class="row">
  					<i class="iconfont icon-shimingrenzheng" style="font-size: 12px;"></i>
  					<div class="con"><span class="vip">实名认证</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				<div  class="row">
  					<i class="iconfont icon-fapiao"></i>
  					<div class="con"><span class="vip">发票</span><i class="iconfont icon-icon07"></i></div>
  				</div>
  				<!-- -->
  			</div>
  			
  		</div>
  	</div>
</template>

<script>
	export default {
		data(){
			return{
				list_01:[
					{
						icon:'icon-youhuijuan',
						name:"优惠劵"
					},
					{
						icon:'icon-xin1',
						name:"心愿单"
					},
					{
						icon:'icon-font21',
						name:"邀请有奖"
					},
					{
						icon:'icon-xinxi',
						name:"女神信息"
					}
				],
				list_02:[
					{
						icon:'icon-fukuan3',
						name:"待付款"
					},
					{
						icon:'icon-fahuo',
						name:"待发货"
					},
					{
						icon:'icon-shouhuo',
						name:"待收货"
					},
					{
						icon:'icon-sps',
						name:"待评价"
					}
				],
				flagLogin:false,
				user:""
			}
		},
		methods:{
		},
		mounted(){
			if(localStorage.getItem("username")){
				this.flagLogin=false;
			}else{
				this.flagLogin=true;
			};
			
			this.user = JSON.stringify(localStorage.getItem("username"))
			var str="";
			str+=this.user.substr(1,3);
			str+="****";
			str+=this.user.substr(7,4);
			this.user=str;
		}
		
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	#content{
		@include bgcolor(#f9f9f9);
	}
	.content_top{
		position:relative;
		overflow:hidden;
		padding-top:15%;
		@include rect(100%,30%);
		@include bgcolor(#000);
		.touxiang{
			@include rect(17%,auto);
			margin-left:8%;
			float:left;
		}
		.logins{
			float:left;
		    padding-left: 17px;
			margin-top: 10px;
			.login{
				@include textcolor(#fff);
				@include fontsize(.14rem);
			}
			.yh{
				@include textcolor(#b8bbbf);
				@include fontsize(.08rem);
			}
		}
		.login1{
			@include fontsize(.1rem);
		}
		.icon-huiyuan1{
			@include textcolor(#b9b9b9);
		}
		.ka{
			@include rect(40%,auto);
		    position: absolute;
		    right: -10px;
		    top: 80px;
		}
	}
	.con_row01{
		@include bgcolor(#fff);
		@include flexbox();
		@include border(0 0 1px 0, #d9d9d9, solid);
		.yichu,.ka{
			color:#000;
			margin:10px;
			@include rect(50%,auto)
			@include text-align();
			@include fontsize(.14rem);
		}
		.yichu{
			p{
				padding-top:4px;
			}
			.icon-myWardrobe{
				position:relative;
				span{
					position:absolute;
					font-size:8px;
				    width: 60px;
				    background: #f5359b;
				    color: #fff;
				    border-radius: 10px;
				    transform: scale(0.8);
				    top: -5px;
				    right: -50px;
				}
			}
		}
		.ka{
			@include textcolor(#f5359b);
			@include border(0 0 0 1px, #d9d9d9, solid);
			i{
				@include fontsize(.2rem)
			}
		}
	}
	.con_row02{
		@include rect(100%,auto);
		@include bgcolor(#fff);
		margin-bottom:10px;
		ul{
			@include rect(100%,auto);
			@include flexbox();
			padding:10px 0;
			li{
				@include flex();
				@include rect(auto,100%);
				@include text-align();
				@include justify-content();
				@include align-items();
			}
		}
	}
	.con_row03{
		@include rect(100%,auto);
		@include bgcolor(#fff);
		.con_row03_1{
			@include flexbox();
			@include justify-content(space-between);
			padding:5%;
			.dingdan01 i,.dingdan02{
				@include textcolor(#b8bbbf);
			}
		}
		.con_row03_2{
			@include rect(100%,auto);
			padding: 10px;
			padding-top:0;
			ul{
				@include rect(100%,100%);
				@include flexbox();
				@include justify-content();
				@include align-items();
				li{
					@include flex();
					@include text-align();
				}
			}
		}
		.con_row03_3{
			@include rect(100%,auto);
			/*padding:5%;*/
			.row{
				/*padding:10px 0;*/
				@include rect(100%,100%);
				@include flexbox();
				line-height:50px;
				i{
					padding-right:10px;
					padding-left: 5%;
					color: #b8bbbf;
				}
				.con{
					display: inline-block;
					@include rect(94%,100%);
					@include flexbox();
					@include justify-content(space-between);
					padding-right:5%;
					i{
						padding-right:0;
					}
				}
				.cons{
					@include border(1px 0 0 0, #d9d9d9, solid);
				}
			}
			
		}
	}
</style>
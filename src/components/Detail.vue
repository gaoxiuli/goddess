<template>
  	<div id="content">
  		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item, index) in detailImg" >
		        	<img :src="item" alt="" />
		        </div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
		<div class="detail">
			<div class="detail-row01">
				<span class="detail-row01-left">
					<i v-for="n in zuanshi" class="iconfont icon-zuanshi"></i>
				</span>
				<span class="detail-row01-right">
					<i class="iconfont icon-fenxiang"></i>
					<i class="iconfont icon-xin"></i>
				</span>
			</div>
			<div class="detail-row02">
				<span>
					<span class="detailName">{{detailName}}</span>
					<span class="spu">{{detailSpu}}</span>
				</span>
				<span class="cankao">
					<span>参考价</span><br />
					<span>￥{{price}}</span>
				</span>
			</div>
			<div class="detail-row03">
				<span v-for="(item, index) in yflx"><span>{{item.name}}</span><span>|</span></span>
				<span v-for="(item, index) in jijie"><span>{{item.name}}</span><span>|</span></span>
				<span v-for="(item, index) in changhe"><span>{{item.name}}</span><span>|</span></span>
			</div>
			<div class="detail-row04">
				<span>尺码</span>
				<span><i class="iconfont icon-ichaxun"></i>各国尺码转换表</span>
			</div>
			<div class="detail-row05">
				<div class="chima chima1"  v-for="(item, index) in chima" @click="clickChima($event)">
					
					<span>{{meima}}{{item.name}}号</span><br />
					<span>中码{{item.value}}号</span>
				</div>
			</div>
		</div>
		<div class="pingjian">
			<p>优质评价<span>(0)</span></p>
			<div><span>—————————</span>暂无优质评价<span>—————————</span></div>
		</div>
		<div class="pinpai">
			<div class="pinpai-left">品牌</div>
			<div class="pinpai-right">
				<img src="../assets/kate_spade.png" alt="" />
				{{prand}}
				<i class="iconfont icon-icon07"></i>
			</div>
		</div>
		<div class="jieshao">
			{{jieshao}}
		</div>
		<footer id="footer">
			<ul class="footerUl_01">
				<li class="chima" >请选择尺码</li>
				<li class="add" @click="clickCart()">加入衣袋</li>
			</ul>
		</footer>
  	</div>
</template>

<script>
	import $ from "@/md/jquery-1.11.0.js";
	import MyAjax from "@/md/MyAjax.js";
	import Cart from "@/md/cart.js";
	export default{
		data(){
			return {
				detailImg:[],
				zuanshi:"",
				detailName:"",
				detailSpu:"",
				price:"",
				yflx:[],
				jijie:[],
				changhe:[],
				chima:[],
				meima:"",
				prand:"",
				jieshao:"",
				goodsID:"",
				cart:[]
			}
		},
		methods:{
			clickCart(){
				if(localStorage.getItem("username")){
					var product={  
					    id:this.goodsID,  //商品编号
					    name:this.detailName,  //商品名称
					    num:1,  //商品个数
					    image:this.detailImg[0],//商品图片
					    price:this.price  //商品价格
					};
					//商品加入到购物车  
					Cart.addproduct(product);  
					var productlist=Cart.getproductlist();//取出购物车商品  
					console.log(productlist)
				}else{
					this.$router.push('/login01');
				}
			},
			clickChima(event){
				var that=this;
				jQuery(".chima").css({"background":"","color":"#333"});
				if(event.target.nodeName=="DIV"){
					event.target.style.background="#333";
					event.target.style.color="#fff";
				}else{
					event.target.parentNode.style.background="#333";
					event.target.parentNode.style.color="#fff";
				}
			}
		},
		mounted(){
			var that = this;
			var goodsID = this.$route.params.goodsID;
			this.goodsID=goodsID;
			var detailUrl="http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=" + goodsID+ "&only_specifications=&use_limit_days=&date=";
			MyAjax.fetch(detailUrl,(data) => {
//				console.log(data.data)
				that.detailImg=data.data.image;
				that.zuanshi=data.data.dots;
				that.detailName=data.data.name;
				that.detailSpu=data.data.spu;
				that.price=parseInt(data.data.rental_price/10);
				that.yflx=data.data.tags[0].options;
				that.jijie=data.data.tags[1].options;
				that.changhe=data.data.tags[2].options;
				that.chima=data.data.specifications[0].options;
				that.meima=data.data.specifications[0].name;
				that.prand=data.data.brand;
				that.jieshao=data.data.brand_desc;
//				console.log(that.jieshao)
				
			})
		},
		updated(){
			var mySwiper = new Swiper ('.swiper-container', {
//			    direction: 'vertical',
			    loop: true,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			  })        
		}
		
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
	#content{
		background:#f9f9f9;
		/*padding:2px 10px;*/
		.swiper-container{
			@include rect(100%,70%);
			.swiper-wrapper{
				@include rect(100%,100%);
				.swiper-slide{
					@include rect(100%, 100%);
					img{
						width:100%;
					}
				}
				
			}
		}
		.detail{
			padding:20px 20px 10px;
			background: #fff;
			margin-bottom:10px;
			.detail-row01{
				padding-left:10px;
				@include flexbox();
				@include justify-content(space-between);
				@include align-items();
				.icon-zuanshi{
					@include textcolor(#f5359b);
					@include fontsize(.3rem);
					margin-left:-12px;
				}
				.icon-fenxiang{
					@include fontsize(.2rem);
					@include textcolor(#f5359b);
				}
				.icon-xin{
					@include fontsize(.2rem);
					@include textcolor(#ededed);
				}
			}
			.detail-row02{
				@include align-items();
				@include flexbox();
				@include justify-content(space-between);
				.detailName{
					@include fontsize(.14rem);
					@include textcolor(#333);
				}
				.spu{
					@include fontsize(.1rem);
					@include textcolor(#999);
				}
				.cankao{
					@include text-align();
					@include textcolor(#999);
					@include fontsize(.1rem);
				}
			}
			.detail-row03{
				@include textcolor(#f5359b);
				@include fontsize(.12rem)
				span{
					padding: 2px;	
				}
			}
			.detail-row04{
				padding-top:5px;
				@include textcolor(#999);
				@include fontsize(.12rem);
				@include flexbox();
				@include justify-content(space-between);
				@include align-items();
				span:nth-of-type(1){
					@include fontsize(.14rem);
					@include textcolor(#333)
				}
			}
			.detail-row05{
				@include flexbox();
				/*@include*/ 
				.chima{
					@include text-align();
					@include fontsize(.1rem);
					padding:2px 14px;
					margin:0 2px;
					@include border(1px 1px 1px 1px, #878787, solid);
					/*@include rect(40px,auto)*/
				}
			}
			
		}
		.pingjian{
			padding:10px 20px;
			background: #fff;
			margin-bottom:4px;
			@include fontsize(.1rem);
			@include textcolor(#999);
			p{
				@include textcolor(#333);
				span{
					@include textcolor(#999);
				}
			}
			div{
				@include text-align();
			}
			
		}
		.pinpai{
			border-bottom:1px solid #F9F9F9;
			padding:10px 20px;
			background: #fff;
			@include flexbox();
			@include justify-content(space-between);
			@include align-items();
			.pinpai-left{
				@include fontsize(.12rem);
				@include textcolor(#333);
			}
			.pinpai-right{
				@include textcolor(#999);
				@include fontsize(.1rem);
				vertical-align: middle;
				img{
					@include rect(80px,auto);
				}
			}
		}
		.jieshao{
			@include textcolor(#999);
			@include fontsize(.1rem);
			@include bgcolor(#fff);
			padding:10px;
			margin-bottom:50px;
		}
	}
	#footer{
		z-index:9999;
		position: fixed;
		bottom: 0;
		.footerUl_01{
			@include rect(100%,100%);
			@include flexbox();
			li{
				@include rect(auto,100%);
				@include flexbox();
				@include text-align();
				@include justify-content();
				line-height:50px;
				&:nth-child(2){
					@include flex(1);
					@include bgcolor(#f66);
					@include textcolor(#fff);
					
				}
				&:nth-child(1){
					@include flex(2);
					@include textcolor(#999);
				}
			}
			
		}
	}
</style>
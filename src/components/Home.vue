<template>
  	<div id="content">
  		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item, index) in bannerlist">
		        	<img :src="item.image_src" />
		        </div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
		<div  class="row1">
			<a  class="row1-1">海外大牌</a>
			<div  class="line-1">/</div>
			<a  class="row1-1">无限换穿</a>
			<div  class="line-1">/</div>
			<a  class="row1-1">五星清洗</a>
			<div  class="line-1">/</div>
			<a  class="row1-1">往返包邮</a>
		</div>
		<div class="banner_rookie">
			<a href="javascript:;" v-for="(item, index) in bannerRookie">
				<img :src="item.image_src"/>
			</a>
		</div>
		<div class="homeList-1">
			<div class="caption">
				<em>———</em>
				&ensp;&ensp;每日新品&ensp;&ensp;
				<em>———</em><br>
				<span class="cap">NEW ARRIVALS</span>
			</div>
			<div class="mrxp">
				<div class="mrxp-left">
					PREMIUM DESIGNERS<br/>
					<span>进口轻奢</span>
				</div>
				<div class="mrxp-right">
					MORE<i class="iconfont icon-icon07"></i>
				</div>
			</div>
			<div class="swiper" id="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in jkqs_vip" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="item.cover_image" class="images"/>
				      	<div class="limit_tag">
				      		<div class="text">{{item.limit_tag}}</div>
				      	</div>
				      	<div class="card-content">
				      		{{item.brand}}<br />
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{item.rental_price}}</span>
				      	</div>
				      	</router-link>
			      </div>
			      <div class="swiper-slide looks">
			      	<span class="look">
			      		<span>查看全部</span><br />
						<span>MORE</span>
			      	</span>
			      </div>
			    </div>
			  </div>
			
			<div class="mrxp">
				<div class="mrxp-left">
					MODERN MIX<br/>
					<span>缤纷时尚</span>
				</div>
				<div class="mrxp-right">
					MORE<i class="iconfont icon-icon07"></i>
				</div>
			</div>
			<div class="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in jkqs_member" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="item.cover_image" class="images"/>
				      	<div class="card-content">
				      		{{item.brand}}<br />
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{item.rental_price}}</span>
				      	</div>
				      </router-link>
			      </div>
			      <div class="swiper-slide looks">
			      	<span class="look">
			      		<span>查看全部</span><br />
						<span>MORE</span>
			      	</span>
			      </div>
			    </div>
			  </div>
		</div>
		
		<div class="homeList-1 homeList-2">
			<div class="caption">
				<em>———</em>
				&ensp;&ensp;在架美衣&ensp;&ensp;
				<em>———</em><br>
				<span class="cap">IN-STOCK</span>
			</div>
			<div class="mrxp">
				<div class="mrxp-left">
					PREMIUM DESIGNERS<br/>
					<span>进口轻奢</span>
				</div>
				<div class="mrxp-right">
					MORE<i class="iconfont icon-icon07"></i>
				</div>
			</div>
			<div class="swiper" id="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in zjmy_vip" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="item.cover_image" class="images"/>
				      	<div class="limit_tag">
				      		<div class="text">{{item.limit_tag}}</div>
				      	</div>
				      	<div class="card-content">
				      		{{item.brand}}<br />
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{item.rental_price}}</span>
				      	</div>
				      </router-link>
			      </div>
			      <div class="swiper-slide looks">
			      	<span class="look">
			      		<span>查看全部</span><br />
						<span>MORE</span>
			      	</span>
			      </div>
			    </div>
			  </div>
			
			<div class="mrxp">
				<div class="mrxp-left">
					MODERN MIX<br/>
					<span>缤纷时尚</span>
				</div>
				<div class="mrxp-right">
					MORE<i class="iconfont icon-icon07"></i>
				</div>
			</div>
			<div class="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in zjmy_member" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="item.cover_image" class="images"/>
				      	<div class="card-content">
				      		{{item.brand}}<br />
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{item.rental_price}}</span>
				      	</div>
				      </router-link>
			      </div>
			      <div class="swiper-slide looks">
			      	<span class="look">
			      		<span>查看全部</span><br />
						<span>MORE</span>
			      	</span>
			      </div>
			    </div>
			  </div>
		</div>
		
		<div class="homeList-1 homeList-3">
			<div class="caption">
				<em>———</em>
				&ensp;&ensp;礼服日租&ensp;&ensp;
				<em>———</em><br>
				<span class="cap">ON-DEMAND</span>
			</div>
			<div class="mrxp">
				<div class="mrxp-left">
					BLACK TIE<br/>
					<span>礼服晚宴</span>
				</div>
				<div class="mrxp-right">
					MORE<i class="iconfont icon-icon07"></i>
				</div>
			</div>
			<div class="swiper" id="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in lfrz_0" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="item.cover_image" class="images"/>
				      	<div class="card-content">
				      		{{item.brand}}<br />
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{item.rental_price}}</span>
				      	</div>
				      </router-link>
			      </div>
			      <div class="swiper-slide looks">
			      	<span class="look">
			      		<span>查看全部</span><br />
						<span>MORE</span>
			      	</span>
			      </div>
			    </div>
			  </div>
			
			<div class="mrxp">
				<div class="mrxp-left">
					PARTY<br/>
					<span>礼服派对</span>
				</div>
				<div class="mrxp-right">
					MORE<i class="iconfont icon-icon07"></i>
				</div>
			</div>
			<div class="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(item, index) in lfrz_1" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="item.cover_image" class="images"/>
				      	<div class="card-content">
				      		{{item.brand}}<br />
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i>
				      		<i class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{item.rental_price}}</span>
				      	</div>
				      	</router-link>
			      </div>
			      <div class="swiper-slide looks">
			      	<span class="look">
			      		<span>查看全部</span><br />
						<span>MORE</span>
			      	</span>
			      </div>
			    </div>
			  </div>
		</div>
		<div class="bottom" >
			<img :src="bottom.image" alt="" />
		</div>
  	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return {
				bannerlist:[],
				bannerRookie:[],
				jkqs_member:[],
				jkqs_vip:[],
				zjmy_member:[],
				zjmy_vip:[],
				lfrz_0:[],
				lfrz_1:[],
				bottom:[]
			}
		},
		mounted(){
			
    
			var that=this;
			var url ="http://localhost:3000/list";
			  	MyAjax.fetch(url, (data) => {
//			  		console.log(data.data.new_arrivals.vip)
			  		that.bannerlist=data.data.banner;
			  		that.bannerRookie=data.data.banner_rookie;
			  		that.jkqs_vip=data.data.new_arrivals.vip;
			  		that.jkqs_member=data.data.new_arrivals.member;
			  		that.zjmy_member=data.data.product_commend.member;
			  		that.zjmy_vip=data.data.product_commend.vip;
			  		that.lfrz_0=data.data.dress[0].products;
//			  		console.log(that.lfrz_0)
			  		that.lfrz_1=data.data.dress[1].products;
			  		that.bottom=data.data.bottom;
//			  		console.log(that.bottom)
//http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=35314&only_specifications=&use_limit_days=&date=
// 	hostname:"m.msparis.com",
//  port:"443",
//  path:"/js/pageIndex.json"
//http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=34930&only_specifications=&use_limit_days=&date=
//http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=35314&only_specifications=&use_limit_days=&date=
//			  http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=35238&only_specifications=&use_limit_days=&date=
			  	})
			  	var url2="http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=35314&only_specifications=&use_limit_days=&date=";
			  	MyAjax.fetch(url2,(data) => {
			  		console.log(data)
			  	})
			  	
		},
		updated(){
			 var mySwiper = new Swiper ('.swiper-container', {
//				    direction: 'vertical',
				    loop: true,
				    autoplay:3000,
				    autoplayDisableOnInteraction:false,
				    // 如果需要分页器
				    pagination: '.swiper-pagination'
				  })  
			  var swiper = new Swiper('.swiper', {
			      slidesPerView: 3,
//			      spaceBetween: 30,
			      freeMode: true,
			      pagination: {
			        el: '.swiper',
			        clickable: true,
			      },
			    });
			
		}
	}
</script>

<style scoped="" lang="scss" >
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
	.swiper-container {
		margin-top:3px ;
	    width: 100%;
	    /*height: 120px;*/
		.swiper-slide{
			img{
				
			width:100%;
			}
		}
	}  
	.row1{
		@include flexbox();
		width:100%;
		@include textcolor(#aaa);
		@incluse fontsize(.32rem);
		padding:10px 20px;
		@include text-align();
		.row1-1{
			@include textcolor(#666);
			@include fontsize();
		}
		.line-1{
			@include flex();
		}
	}
	.banner_rookie{
		width:100%;
		a{
			display: inline-block;
			@include rect(50%,50%);
			/*border-top: 1px solid #f2eae3;*/
    		/*border-bottom: 1px solid #f2eae3;*/
    		@include border(1px 1px 1px 1px, #f2eae3, solid);
    		&:nth-child(1),&:nth-child(2){
    			@include border(1px 1px 0px 0px,#f2eae3, solid)
    		}
    		&:nth-child(3),&:nth-child(4){
    			@include border(1px 1px 1px 0px,#f2eae3, solid)
    		}
    		&:nth-child(2){
    			@include border(1px 0px 0px 0px,#f2eae3, solid)
    		}
    		&:nth-child(4){
    			@include border(1px 0px 1px 0px,#f2eae3, solid)
    		}
			img{
				@include rect(100%,100%);
			}
		}
	}
	.homeList-1{
		@include rect(100%,auto);
		.caption{
			@include rect(100%,auto);
			@include text-align();
			@include textcolor(#232323);
			@include font-weight(700);
			margin:.2rem auto;
			.cap{
				@include textcolor(#999);
				@include font-weight(100);
			}
		}
	}
	.mrxp{
		@include rect(100%,auto);
		padding:0px 10px;
		@include fontsize(.1rem);
		@include flexbox();
		@include justify-content(space-between);
		@include textcolor(#333);
		padding-bottom:20px;
		margin-top:10px;
		.mrxp-left{
			padding-left:5px;
			border-left:1px solid #333;
			/*@include border(0px 0px 0px 1px,#232323, solid);*/
		}
	}
	#swiper{
		border-bottom: 2px solid rgb(245, 245, 245);
	}
	.looks{
		.look{
			font-size: 12px;
			text-align: center;
		    display: block;
		    position: absolute;
		    top: 80px;
		    left: 30px;
		    span:nth-of-type(1){
		    	border-bottom:1px solid #333;
		    }
		}
	}
	.swiper{
		overflow-y: hidden;
		overflow-x: auto;
		.swiper-wrapper{
			.swiper-slide{
				position: relative;
				margin-left:10px;
				margin-bottom: 10px;
					.images{
						@include rect(100%,auto);
					}
					.limit_tag{
						@include rect(.21rem,.28rem);
						@include flexbox();
						@include justify-content();
						@include align-items();
						.text{
							@include rect(55%,40%);
							@include fontsize();
							@include textcolor(#fff);
							@include text-align();
							white-space: normal;
							word-wrap: break-word;
							overflow: hidden;
							line-height: .12rem;
						}
						position: absolute;
						top:0px;
						left:0px;
						background: url(../assets/tag.png) no-repeat;
						background-size:cover ;
					}
					.card-content{
						@include textcolor(#333);
						text-overflow: ellipsis;
					    overflow: hidden;
					    white-space: nowrap;
						padding-top: 5px;
						line-height: 10px;
						@include fontsize();
						i{
							@include textcolor(#f5359b);
						}
						.price{
							@include fontsize(.1rem);
							@include textcolor(#989898);
							float: right;
						}
					}
			}
		}
	}
	.bottom{
		img{
			@include rect(100%,100%);
		}
	}
</style>
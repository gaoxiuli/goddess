<template>
  	<div id="content">
  		<div class="top">
  			<div class="topLeft">筛选</div>
  			<div class="topCenter">全部</div>
  			<div class="topRight"></div>
  		</div>
  		<div class="contents">
  			<div class="row"><span class="title">租期</span><span>请选择租期</span><i id="arrow" class="iconfont icon-icon07"></i></div>
			<div class="row"><span class="title">尺码</span><span><em>XXS/XS</em><em>S</em><em>M</em><em>L</em><em>XL</em><em>XL+</em></span></div>
			<div class="row"><span class="title">场合</span><span><em>时尚OL</em><em>约会小聚</em><em>休闲</em><em>度假</em><em>职场正装</em><em>XL+</em></span></div>
			<div class="row"><span class="title">排序</span><span><em>推荐</em><em>热品</em><em>新品</em></span></div>
			<div class="row"><span class="title">额度</span><span><em><i class="iconfont icon-zuanshi"></i></em><em><i class="iconfont icon-zuanshi"></i><i class="iconfont icon-zuanshi"></i></em><em><i class="iconfont icon-zuanshi"></i><i class="iconfont icon-zuanshi"></i><i class="iconfont icon-zuanshi"></i></em></span></div>
  			<div class="list">
  				<div class="centerLine"></div>
  				<ul v-for="(item,index) in list">
  					<li v-for="(item1, index) in item">
			      		<router-link :to="{name:'detail',params:{goodsID:item1.id}}">
	  						<img :src="item1.cover_image" alt="" />
	  						<p class="name">{{item1.brand}}</p>
	  						<p class="name2">{{item1.name}}</p>
	  						<p class="cm">{{item1.show_specifications}}</p>
	  						<p><i class="iconfont icon-zuanshi" v-for="i in item1.dots"></i></p>
	  						<div class="botline"></div>
  						</router-link>
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return {
				size:["XXS"],
				num:[1,2,3,4,5],
				list:[]
			}
		},
		mounted(){
			var that = this;
			this.num.forEach((item, index) => {
				var url='http://api.v2.msparis.com/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=' + item;
				MyAjax.fetch(url, (data) => {
					this.list.push(data.data.rows);
					console.log(this.list)
				})
				
			})
		}
	}
//	http://api.v2.msparis.com/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=5
//http://api.v2.msparis.com/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=4
//http://api.v2.msparis.com/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=3
//http://api.v2.msparis.com/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=2
//http://api.v2.msparis.com/product/filter?platform=wap&access_token=&mode=1&type=0&filter=sort:recomm&use_limit_days=&page=1
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
  	#content{
  		@include rect(100%, auto);
  		.top{
  			@include rect(100%,.4rem);
  			@include flexbox();
  			padding:0 5%;
  			@include justify-content(space-between);
  			@include align-items();
  			border-bottom:1px solid #b9b9b9;
  			.topRight{
  				@include rect(30px,30px)
  			}
  		}
  		.contents{
  			@include rect(100%,auto);
  			width: 100%;
  		.row{
  			width: 100%;
  			border-bottom: 1px solid #eee ;
	  		line-height: .4rem;
	  		padding: 0 4%;
	  		color:#ccc;
	  		.title{
	  			color:#000;
	  			padding-right:10px;
	  		}
	  		em{
	  			padding:0 5px;
	  		}
	  		.icon-icon07{
	  			float:right;
	  		}
	  		.icon-zuanshi{
	  			margin-left:-5px;
	  		}
	  		
  		}
  			.list{
  				position:relative;
  				.centerLine{
  					@include rect(1px, 100%);
  					position: absolute;
					background: #eee;
					z-index:1;
					left:50%;
  				}
  				@include rect(100%,auto);
  				ul{
  					@include rect(100%,100%);
  					@include clearfix();
  					li{
  						float:left;
  						padding:10px 0;
  						@include rect(50%,auto);
  						position:relative;
  						img{
  							@include rect(100%,80%);
  							margin:auto;
  						}
  						p{
  							padding-left:5%;
  							@include fontsize(.12rem);	
  						}
  						.name{
  							color:#000;
  						}
  						.name2,.cm{
  							@include textcolor(#ccc);
  						}
  						.botline{
  							@include rect(100%,1px);
						    position: absolute;
							background: #eee;
							z-index:1;
  						}
  						.icon-zuanshi{
  							@include textcolor(#f5359b);	
  						}
  					}
  				}
  			}
  		}
  	}
</style>
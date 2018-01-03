<template>
  	<div id="content">
  		<div class="image">
  			<img v-for="item in images" :src="item" alt="" />
  		</div>
  		<div class="list">
  			<div class="cenline"></div>
  			<div class="swiper-slide" v-for="(item, index) in article" :key="index">
		      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
			      	<img :src="item.cover_image" class="images"/>
			      	<div class="card-content">
			      		{{item.brand}}<br />
			      		<i v-for="n in item.dots" class="iconfont icon-zuanshi"></i><br />
			      		<span class="price">参考价￥{{item.rental_price}}</span>
			      	</div>
			    </router-link>
			      	<div class="botline"></div>
		      </div>
  		</div>
  	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return {
				images:[],
				article:[]
			}
		},
		mounted(){
			var that=this;
//			http://api.v2.msparis.com/activity?platform=wap&access_token=&activity_id=35
//			http://api.v2.msparis.com/activity?platform=wap&access_token=&activity_id=46
			
			var activeID=this.$route.params.activeID;
			var url ="http://api.v2.msparis.com/activity?platform=wap&access_token=&activity_id=" + activeID;
			  	MyAjax.fetch(url, (data) => {
			  		console.log(data)
			  		that.images=data.data.image_json;
			  		that.article=data.data.products.rows;
			  	})
			  	
		},
		updated(){
			  
			
		}
	}
</script>

<style scoped="" lang="scss" >
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
	
	#content{
		.image{
			@include rect(100%,auto);
			img{
				@include rect(100%,auto);
			}
		}
		.list{
			@include clearfix();
			position:relative;
			.cenline,.botline{
				@include bgcolor(#eee);
				position:absolute;
			}
			.cenline{
				@include rect(1px, 100%);
				left:50%;
			}
		}
		.swiper-slide{
				position: relative;
				padding:10px;
				@include rect(50%,auto);
				float:left;
				.botline{
					bottom:0;
					left:0;
					width:100%;
					height:1px;
				}
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
</style>
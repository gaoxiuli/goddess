<template>
  	<div id="content">
  		<div class="article" v-for="(item, index) in article">
  			<router-link :to="{name:'list_Home4',params:{activeID:item.id}}">
	  			<div class="image">
	  				<img :src="item.image_src" alt="" />
	  				<div class="jt">
	  					<img src="../assets/jt.png" />
	  				</div>
	  			</div>
  			</router-link>
  			</a>
  			<div class="swiper" id="swiper">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide" v-for="(it, index) in item.products.rows" :key="index">
			      	<router-link :to="{name:'detail',params:{goodsID:item.id}}">
				      	<img :src="it.cover_image" class="images"/>
				      	<div class="card-content">
				      		{{it.brand}}<br />
				      		<i v-for="n in it.dots" class="iconfont icon-zuanshi"></i><br />
				      		<span class="price">参考价￥{{it.rental_price}}</span>
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
  	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return {
				article:[]
			}
		},
		mounted(){
			var that=this;
//			http://api.v2.msparis.com/activity?platform=wap&access_token=&activity_id=35
//			http://api.v2.msparis.com/activity?platform=wap&access_token=&activity_id=46
			
			
			var url ="http://api.v2.msparis.com/home/topics?platform=wap&access_token=&page=2";
			  	MyAjax.fetch(url, (data) => {
			  		console.log(data.data.rows)
			  		that.article=data.data.rows;
			  	})
			  	
		},
		updated(){
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
	
	#content{
		.article{
			position:relative;
			@include rect(100%,auto);
			.image{
				@include rect(100%,100%);
				.jt{
					    width: 15px;
					    height: 15px;
					    position: absolute;
					    left: 50%;
					    bottom: 238px;
					    z-index: 1;
				}
				img{
					@include rect(100%,auto);
				}
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
		padding:10px 0;
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
	}
</style>
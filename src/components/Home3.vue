<template>
  	<div id="content">
  		<div class="content_1">
  			<div class="content_1_title">
  				<div><span>—————</span> <span class="name">礼服日租</span> <span>—————</span></div>
  				<span class="name_1">ON-DEMAND</span>
  			</div>
  			<div class="content_1_detail">
  				<ul>
  					<li v-for="(item, index) in contentList_01">
  						<img :src="item.image" />
  					</li>
  				</ul>
  			</div>
  		</div>
  		<div class="content_1">
  			<div class="content_1_title">
  				<div><span>—————</span> <span class="name">礼服日租</span> <span>—————</span></div>
  				<span class="name_1">ON-DEMAND</span>
  			</div>
  			<div class="content_1_detail">
  				<ul>
  					<li v-for="(item, index) in contentList_02">
  						<img :src="item.image" />
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
				contentList_01:[],
				contentList_02:[]
			}
		},
		mounted(){
			var that=this;
			var url ="http://api.v2.msparis.com/home/occasion?platform=wap";
			  	MyAjax.fetch(url, (data) => {
			  		console.log(data.data.cloth)
			  		that.contentList_02=data.data.cloth;
			  		that.contentList_01=data.data.dress;
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
		padding:4px;
		.content_1_title{
			@include text-align();
			padding:20px 0;
			.name{
				@include fontsize(.16rem);
				@include font-weight(700);
			}
			.name_1{
				@include fontsize(.1rem);
				@include textcolor(#999);
			}
		}
		.content_1_detail{
			/*clear:both;*/
			@include clearfix();
			margin-bottom:20px;
			@include rect(100%,auto)
			ul{
				@include rect(100%,100%)
				@include rect(100%,100%);
				li{
					float:left;
					@include rect(30%,auto);
					margin:6px;
					img{
						@include rect(100%,100%)
					}
				}
			}
		}
	}
</style>
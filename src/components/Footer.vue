<template>
	<footer id="footer">
		<ul>
			<li v-for="(item, index) in list">
				<router-link :to="item.path">
					<i class="iconfont" :class="item.icon"></i>
					<p>{{item.name}}</p>
				</router-link>
			</li>
			
		</ul>
	</footer>
</template>

<script>
	export default{
		 data(){
	      return {
	        list: [
	          {
	            icon:'icon-shouye',
	            name:"首页",
	            path:"/home"
	          },{
	            icon:'icon-yifu',
	            name:"无限衣橱",
	            path:"/print"
	          },{
	            icon:'icon-xiangji',
	            name:"晒图",
	            path:"/imgs"
	          },{
	            icon:'icon-daizi',
	            name:"衣袋",
	            path:"/cart"
	          },{
	            icon:'icon-mine',
	            name:"我的",
	            path:"/user"
	          }
	        ]
	      }
	    }
	}
</script>

<style scoped="" lang="scss">
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
  	#footer{
  		ul{
  			@include rect(100%, 100%);
  			@include flexbox();
  			li{
  				@include rect(auto, 100%);
  				@include flex();
  				a{
  					@include flexbox();
	  				@include flex-direction(column);
	  				@include align-items();
	  				@include justify-content();
	  				@include textcolor(#333);
	  				
	  				&.router-link-active{
	  					@include textcolor(#666);
	  				}
  				}
  				
  				
  			}
  		}
  	}
</style>
<template>
  <div id="container">
  	<router-view name="header"></router-view>
		<router-view name="content"></router-view>
  	<router-view name="footer"></router-view>
  	<!--<v-footer>3</v-footer>-->
  	
  </div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js";
export default {
  name: 'app',
  components:{
//	"v-footer":Footer
  },
  mounted(){
  /*	var that = this;
		var url ="http://localhost:3000/list";
  	MyAjax.fetch(url, (data) => {
  		console.log(data)
  	})*/
  }
}
</script>

<style lang="scss">
	@charset "utf-8";
  @import "~@/lib/reset.scss";
  
  html,body,#app,#container{
  	@include rect(100%, 100%);
  }
  #container{
  	@include flexbox();
  	@include flex-direction(column);
  	#header{
  		@include rect(100%, auto);
  		#top{
  			@include rect(100%, .4rem);
  			@include flexbox();
  			@include justify-content(space-between);
  			@include align-items(center)
  			@include border(0 0 1px 0,#eee,solid);
  			@include bgcolor(#fff);
				i{
					@include fontsize(.25rem);
				}
				.n{
					width:40px;
				}
  		}
  		#top2{
  			@include rect(100%, auto);
  			ul{
  				@include rect(100%,auto);
  				@include flexbox();
  				li{
  					line-height: 30px;
  					@include flex();
  					@include rect(auto, 100%);
  					@include flexbox();
  					@include align-items();
  					@include justify-content();
  					@include text-align();
  					a{
  						@include rect(100%,100%);
  						@include textcolor(#333);
  						@include fontsize();
  						&.router-link-active{
               @include textcolor(#f5359b);
               @include border(0 0 3px 0,#f5359b,solid);
               }
  					}
  				}
  			}
  		}
  	}
  	#content{
  		@include flex();
  		@include rect(100%, auto);
  		overflow:auto;
  	}
  	#footer{
  		@include rect(100%, .5rem);
  		@include bgcolor(#f9f9f9);
  		.router-link-active{
  			@include textcolor(#f5359b);
  		}
  	}
  }
  
</style>

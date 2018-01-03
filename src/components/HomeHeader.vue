<template>
	<header id="header">
  		<div id="top">
  			<i class="iconfont icon-erji"></i>
  			<span>
  				女神派
  			</span>
  			<div class="n"></div>
  		</div>
  		<div id="top2">
  		 <ul>
  		 	<li v-for="(item, index) in list">
  		 		<router-link :to="item.path">
	  		 		<p>{{item.name}}</p>
  		 		</router-link>
  		 	</li>
  		 </ul>
  		</div>
  	</header>
</template>

<script>
//	import
	export default{
		data(){
			return {
				list:[
					{
						name:"精选",
						path:"/home"
					},
					{
						name:"品牌",
						path:"/home2"
					},
					{
						name:"场合",
						path:"/home3"
					},
					{
						name:"专题",
						path:"/home4"
					}
				]
			}
		}
	}
</script>

<style scoped="">
	
</style>
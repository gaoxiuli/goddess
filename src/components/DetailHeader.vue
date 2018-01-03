<template>
	<header id="header">
  		<mt-header v-if="name" :title="name">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right"><i class="iconfont icon-erji"></i><i class="iconfont icon-gouwudai" @click="clickCart()"></i></mt-button>
		</mt-header>
		<mt-header v-else title="女神派">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button slot="right"><i class="iconfont icon-erji"></i><i class="iconfont icon-gouwudai" @click="clickCart()"></i></mt-button>
		</mt-header>
  	</header>
</template>

<script>
	import MyAjax from "@/md/MyAjax";
	import Vue from "vue";
	import { Header } from 'mint-ui';
	Vue.component(Header.name, Header);
	export default{
		data(){
			return{
				name:""
			}
		},
		methods:{
			clickCart(){
				if(localStorage.getItem("username")){
					this.$router.push('/cart');
				}else{
					this.$router.push('/login01')
				}
			}
		},
		mounted(){
			var that = this;
			var goodsID = this.$route.params.goodsID;
			var detailUrl="http://api.v2.msparis.com/product?platform=wap&access_token=&city=&id=" + goodsID+ "&only_specifications=&use_limit_days=&date=";
			MyAjax.fetch(detailUrl,(data) => {
//				console.log(data.data.name)
				that.name=data.data.brand;
			})
		}
	}
</script>

<style scoped="">
	.mint-header{
		color:#333;
		background: #f9f9f9;
	}
	.iconfont{
			font-size:20px;
			padding: 2px;
		}
</style>
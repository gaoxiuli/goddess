<template>
  	<div id="content" v-if="cartFlag">
  		<h3>购物车竟然是空的，太不可思议了</h3>
  		<p>在忙，也要记得买点什么犒劳自己</p>
  	</div>
  	<div id="content" v-else>
  		<div class="pro" v-for="(item, index) in pros">
  			<input type="checkbox" class="ch" style="height:20px;width:20px;" :value="item.price" @click="clickCheck()">
  			<router-link :to="{name:'detail',params:{goodsID:item.id}}">
  				<img class="img" :src="item.image" alt="" />
  			</router-link>
  			<div class="proDetail">
  				<p class="name">{{item.name}}</p>
  				<p class="gg">规格</p>
  				<div class="pri">
  					<div class="priLeft">￥{{item.price}}</div>
  					<div class="priRight">
  						<span @click="reduce(item)">-</span>
  						<input type="text" name="" id="num" :value="item.num"  readonly="readonly"/>
  						<span @click="add(item)">+</span>
  					</div>
  				</div>
  			</div>
  		</div>
  		
  		<footer id="footer">
  			<div class="footerLeft">
  				<input type="checkbox" id="check" @click="selectAll()"/><label>全选 </label>
  				<span class="count">合计：￥</span>0.00
  			</div>
  			<div class="footerRight">
  				<span class="jiesuan">去结算</span>（  {{count}}  ）
  			</div>
  		</footer>
  	</div>
</template>

<script>
	import Cart from "@/md/cart.js";
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return{
				cartFlag:false,
				pros:[],
				goodsID:"",
				count:""
			}
		},
		methods:{
			reduce(item){
				this.goodsID=item.id;
				if(item.num > 1){
					Cart.updateproductnum(item.id, item.num*1-1);
					var productlist=Cart.getproductlist();//取出购物车商品  
//					console.log(productlist)
					this.pros=productlist;
				}
					this.jiesuan();
			},
			add(item){
				this.goodsID=item.id;
				Cart.updateproductnum(item.id, item.num*1+1);
				var productlist=Cart.getproductlist();//取出购物车商品  
//				console.log(productlist)
				this.pros=productlist;
				this.jiesuan();
			},
			selectAll(){
				//全选与反选
				jQuery(".ch").prop("checked", jQuery("#check").prop("checked"));
				this.jiesuan();
			},
			clickCheck(){
				//点击复选框
		    	this.jiesuan()
			},
			jiesuan(){
				var that = this;
				that.count = 0;
				//input框选中及全选反选效果
				jQuery(".ch:checked").each(function(){
					that.count += jQuery(this).val()*jQuery(this).parent().find("#num").val() ;
				})
			}
		},
		mounted(){
			this.jiesuan()
			if(!localStorage.getItem("ShoppingCart")){
//				console.log("1")
				this.cartFlag=true
			}else{
				this.cartFlag=false
				var productlist=Cart.getproductlist();//取出购物车商品  
//				console.log(productlist)
				this.pros=productlist
			}
		
			
			
		}
	}
</script>

<style scoped=""lang="scss">
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
	#content{
		background: #f1f1f1;
		padding:2% 0;
	}
	.pro{
		margin:5px 0;
		padding:5% 10%;
		@include flexbox();
		@include justify-content(space-between);
		@include align-items();
		@include rect(100%,auto);
		@include bgcolor(#fff);
		a{
			@include rect(20%,auto);
			.img{
				@include rect(100%,auto)
				border: 1px solid #F1F1F1;
			}
		}
		.proDetail{
			@include rect(65%,auto);
			.name{
				width:100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.gg{
				color:#ccc;
				font-size:12px;
			}
			.pri{
				@include rect(100%,auto);
				@include flexbox();
				@include justify-content(space-between);
				.priLeft{
					font-size:18px;
					color:#f66;
				}
				.priRight{
					position:relative;
					span{
						display:inline-block;
						text-align:center;
						border:1px solid #ccc;
						width:25px;
						height:25px;
						position:absolute;
					}
					span:nth-of-type(1){
						left:-24px;
					}
					span:nth-of-type(2){
						right:-24px;
						top:0px;
					}
					input{
						width:30px;
						height:25px;
						text-align:center;
						border:1px solid #ccc;
					}
				}
			}
		}
	}
	
	#footer{
		position:fixed;
		bottom:0;
		@include flexbox();
		@include justify-content(space-between);
		.footerLeft{
			padding-left: 5%;
			@include rect(70%,100%);
			line-height: .5rem;
			#check{
				@include rect(20px,20px);
				vertical-align: middle;
			}
			label{
				font-size:10px;
				padding:0 5px;
			}
			.count{
				padding:0 2px;
			}
		}
		.footerRight{
			background: #f66;
			@include rect(30%,100%);
			line-height: .5rem;
			text-align: center;
			color:#fff;
		}
	}
</style>
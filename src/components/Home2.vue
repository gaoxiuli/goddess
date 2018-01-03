<template>
  	<div id="content">
  		<div class="banner">
  			<div class="banner-left banners" @click="qiehuan1()">
  				<img v-if="!flag" :src="banners.image_daily" />
  				<img v-if="flag" :src="banners.image_daily_sel" />
  			</div>
  			<div class="banner-right banners" @click="qiehuan2()">
  				<img v-if="flag" :src="banners.image_dress" />
  				<img v-if="!flag" :src="banners.image_dress_sel" />
  			</div>
  		</div>
  		<div class="renqi">
  			<span>人气品牌</span>
  			<span>ALL DESIGNERS</span>
  		</div>
  		<div class="actives">
  			<ul v-if="flag">
  				<li v-for="(item, index) in brand_dauly">
  					<img :src="item.logo" />
  				</li>
  			</ul>
  			<ul v-else>
  				<li v-for="(item, index) in brand_dress">
  					<img :src="item.logo" />
  				</li>
  			</ul>
  		</div>
  		
  		<mt-index-list  :show-indicator="true">
		  <mt-index-section index="A">
		    <mt-cell v-for="(item, index) in list_paixu.A" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="B">
		    <mt-cell v-for="(item, index) in list_paixu.B" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="C">
		    <mt-cell v-for="(item, index) in list_paixu.C" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="D">
		    <mt-cell v-for="(item, index) in list_paixu.D" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="E">
		    <mt-cell v-for="(item, index) in list_paixu.E" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="F">
		    <mt-cell v-for="(item, index) in list_paixu.F" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="G">
		    <mt-cell v-for="(item, index) in list_paixu.G" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="H">
		    <mt-cell v-for="(item, index) in list_paixu.H" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="I">
		    <mt-cell v-for="(item, index) in list_paixu.I" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="G">
		    <mt-cell v-for="(item, index) in list_paixu.G" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="K">
		    <mt-cell v-for="(item, index) in list_paixu.K" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="L">
		    <mt-cell v-for="(item, index) in list_paixu.L" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="M">
		    <mt-cell v-for="(item, index) in list_paixu.M" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="N">
		    <mt-cell v-for="(item, index) in list_paixu.N" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="O">
		    <mt-cell v-for="(item, index) in list_paixu.O" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="P">
		    <mt-cell v-for="(item, index) in list_paixu.P" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="Q">
		    <mt-cell v-for="(item, index) in list_paixu.Q" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="R">
		    <mt-cell v-for="(item, index) in list_paixu.R" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="S">
		    <mt-cell v-for="(item, index) in list_paixu.S" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="T">
		    <mt-cell v-for="(item, index) in list_paixu.T" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="U">
		    <mt-cell v-for="(item, index) in list_paixu.U" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="V">
		    <mt-cell v-for="(item, index) in list_paixu.V" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="W">
		    <mt-cell v-for="(item, index) in list_paixu.W" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="X">
		    <mt-cell v-for="(item, index) in list_paixu.X" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="Y">
		    <mt-cell v-for="(item, index) in list_paixu.Y" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="Z">
		    <mt-cell v-for="(item, index) in list_paixu.Z" :title="item"><span class="dingyue">订阅</span></mt-cell>
		  </mt-index-section>
		</mt-index-list>
  	</div>
</template>

<script>
	import Vue from "vue";
	import { IndexList, IndexSection } from 'mint-ui';
	Vue.component(IndexList.name, IndexList);
	Vue.component(IndexSection.name, IndexSection);
	import MyAjax from "@/md/MyAjax.js";
	export default{
		data(){
			return {
				banners:[],
				flag:true,
				brand_dauly:[],
				brand_dress:[],
				list_paixu:{
					A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]
				}
			}
		},
		methods:{
			qiehuan1(){
				this.flag= true;
				this.getData()
			},
			qiehuan2(){
				this.flag= false;
				this.getData()
			},
			getData(){
				var that=this;
			var home_2_url="http://api.v2.msparis.com/brand/home?platform=wap&access_token=";
			MyAjax.fetch(home_2_url, (data) => {
				console.log(data)
				that.banners=data.data.banner;
				that.brand_dauly=data.data.brand_commend.daily;
				that.brand_dress=data.data.brand_commend.dress;
				var names="";
				if(that.flag){
					that.list_paixu={
					A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]
				}
					names=data.data.brand_commend.daily;
				}else{
					that.list_paixu={
					A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[]
				}
					names=data.data.brand_commend.dress;
				}
					
				for(let i=0;i<names.length;i++){
					/*for(let j=65;j<=90;j++){
						if(names[i].name.charAt(0).toLocaleUpperCase() == String.fromCharCode(j)){
							var chars=names[i].name.charAt(0);
							console.log(chars)
							that.list_paixu.chars.push(names[i].name);
							console.log(that.list_paixu.chars)
							break;
							
						}
					}*/
					if(names[i].name.charAt(0).toLocaleUpperCase() == "A"){
						that.list_paixu.A.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "B"){
						that.list_paixu.B.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "C"){
						that.list_paixu.C.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "D"){
						that.list_paixu.D.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "E"){
						that.list_paixu.E.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "F"){
						that.list_paixu.F.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "G"){
						that.list_paixu.G.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "H"){
						that.list_paixu.H.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "I"){
						that.list_paixu.I.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "J"){
						that.list_paixu.J.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "K"){
						that.list_paixu.K.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "L"){
						that.list_paixu.L.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "M"){
						that.list_paixu.M.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "N"){
						that.list_paixu.N.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "O"){
						that.list_paixu.O.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "P"){
						that.list_paixu.P.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "Q"){
						that.list_paixu.Q.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "R"){
						that.list_paixu.R.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "S"){
						that.list_paixu.S.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "T"){
						that.list_paixu.T.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "U"){
						that.list_paixu.U.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "V"){
						that.list_paixu.V.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "W"){
						that.list_paixu.W.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "X"){
						that.list_paixu.X.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "Y"){
						that.list_paixu.Y.push(names[i].name);
					}
					if(names[i].name.charAt(0).toLocaleUpperCase() == "Z"){
						that.list_paixu.Z.push(names[i].name);
					}
//					console.log(names[i].name.charAt(0))
				}
			})
			}
		},
		mounted(){
			this.getData()
		},
		watch:{
			$route(){
//				this.getData()
			}
		},
		updated(){
			
			
		}
	}
</script>

<style scoped="" lang="scss" >
	
	@charset "utf-8";
  	@import "~@/lib/reset.scss";
	#content{
		.banner{
			padding:0 10px;
			@include flexbox();
			@include justify-content();
			@include align-items();
			.banners{
				position:relative;
				@include flex();
				margin:5px;
				img{
					@include rect(100%,100%);
				}
				img:nth-of-type(2){
					position:absolute;
					top:0;
					left:0;
				}
			}
		}
		.renqi{
			padding:0 10px;
			@include fontsize(.1rem);
			line-height:40px;
			span:nth-of-type(2){
				@include textcolor(#999);
			}
		}
		.actives{
			@include rect(95%,auto);
			margin: 0 auto;
			ul{
				/*@include flexbox();*/
				@include rect(100%, auto);
				/*@include justify-content(space-around);*/
				li{
					float:left;
					display: block;
					@include rect(80px,80px);
					background: #f8f8f8;
					@include flexbox();
					@include justify-content(space-between);
					margin:4px;
					padding:4px;
					img{
						@include rect(100%,40%);
						margin:auto;
					}
				}
			}
		}
		.mint-indexlist{
			padding:5%;
			ul{
				margin:0 !important;
				
				.mint-cell-value{
					.dingyue{
						padding:4px;
						border:1px solid #333;
						font-size: 12px;
						color:#333;
					}
				}
			}
		}
	}
</style>
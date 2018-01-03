<template>
	<div id="content">
		<div class="pic-top">
			<img :src="picTop"/>
		</div>
		<div class="pic-main" v-for = '(item, index) in userInfo'>
			<div class="main-top">
				<img :src="item.user.head_portrait"/>
				<div class="userInfo">
					{{item.user.nickname}}
					<br />
					<div class="userInfo-i" style="color: #999;">
						<i class="iconfont icon-xin"></i>{{item.like_num}}
						<i class="iconfont icon-conversation_icon" style="margin-left: 20px;"></i>{{item.comment_num}}
					</div>
				</div>
			</div>
			<p>{{item.content}}</p>
			<span id="infoPic" v-for='it in item.images'><img :src="it.src" alt="" /></span>
			<div class="main-bottom">
				<i class="iconfont icon-dunpai"></i>
				<span class="time">昨天9:41</span>
			</div>
		</div>
	</div>
</template>

<script>
	import MyAjax from '@/md/MyAjax.js';
	export default {
		data(){
			return {
				picTop:'',
				headLogo:'',
				userInfo:[],
			}
		},
		mounted(){
			var that = this;
			var url="http://api.v2.msparis.com/find?platform=wap&access_token=&page=1&page_size=10&type=1&id=";
			MyAjax.fetch(url,function(data){
				console.log(data.data);
				that.picTop = data.data.top.image_url;
				that.userInfo = data.data.rows;
			})
		}
	}
</script>

<style scoped="" lang="scss">
	#content{
		width: 100%;
		height: 100%;
		background: #fff;
		.pic-top{
			margin-top: 10px;
			img{
				width: 375px;
			}
		}
		.pic-main{
			width: 90%;
			overflow: hidden;
			margin: 0 auto;
			background-color: #fff;;
			/*border-radius: 10px;*/
			padding-left: 15px;
			margin-bottom: 10px;
			.main-top{
				width: 100%;
				height: 65px;
				display:flex;
				align-items:center;
				img{
					width: 50px;
					height: 50px;
					border-radius: 50%;
				}
				.userInfo{
					margin-left: 20px;
				}
			}
			#infoPic{
				display: block;
				float: left;
				width: 102.5px;
				height: 102.5px;
				margin: 2px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.main-bottom{
				width: 100%;
				line-height: 45px;
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				i{
					font-size: 26px;
					color: #999;
				}
				span {
					margin-right: 10px;
					color: #999;
				};
			}
		}
	}
</style>
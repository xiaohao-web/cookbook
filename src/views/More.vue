<template>
	<div class="more">
		<div class="navbar">
			<van-nav-bar title="更多" :border='false' />
		</div>
		<div class="more-list">
			<div class="more-content" @click="like">
				<div class="more-box">
					<div class="icon">
						<img :src="require('../assets/imgs/like.png')" alt="" class="img-auto">
					</div>
					<div class="title-box clearfix">
						<div class="title fl">我的收藏</div>
						<div class="arrow fl">
							<img :src="require('../assets/imgs/arrow.png')" alt="" class="img-auto">
						</div>
					</div>
				</div>
			</div>
			<div class="more-content" @click="recold">
				<div class="more-box">
					<div class="icon">
						<img :src="require('../assets/imgs/record.png')" alt="" class="img-auto">
					</div>
					<div class="title-box clearfix">
						<div class="title fl">浏览记录</div>
						<div class="arrow fl">
							<img :src="require('../assets/imgs/arrow.png')" alt="" class="img-auto">
						</div>
					</div>
				</div>
			</div>
			<div class="more-content" @click="Praise">
				<div class="more-box">
					<div class="icon">
						<img :src="require('../assets/imgs/good.png')" alt="" class="img-auto">
					</div>
					<div class="title-box clearfix">
						<div class="title fl">给个好评呗</div>
						<div class="arrow fl">
							<img :src="require('../assets/imgs/arrow.png')" alt="" class="img-auto">
						</div>
					</div>
				</div>
			</div>
		</div>

		<van-action-sheet v-model="isShow" title="评分">
			<div class="content">
				<div class="content-star">
					<van-rate v-model="Nub" :count='5' size='30px' />
					<div class="content-title">你的评分:{{Nub}}星</div>
				</div>
			</div>
		</van-action-sheet>

	</div>
</template>

<script>
	export default {
		name: "More",
		data() {
			return {
				isShow: false,
				Nub: 5
			}
		},
		
		methods: {
			// 跳转收藏页
			like() {
				this.$router.push({
					name: 'Like'
				});
			},

			//浏览记录
			recold() {
				this.$router.push({
					name: 'Record'
				});
			},

			Praise() {
				this.isShow = true;
			}
		}
	}
</script>

<style lang="less" scoped>
	.content-title{
		font-size: 16px;
	}
	
	.content-star {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
	}

	.content {
		height: 200px;
		position: relative;
	}

	.title {
		line-height: 50px;
		font-size: 14px;
		width: 100%;
		border-bottom: 1px solid #EEEEEE;
	}

	.title-box {
		padding-left: 55px;
	}

	.icon {
		height: 30px;
		width: 30px;
		position: absolute;
		top: 50%;
		left: 15px;
		transform: translateY(-50%);
	}

	.more-box {
		height: 50px;
		background-color: white;
		position: relative
	}

	.arrow {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		width: 16px;
		height: 16px;
	}

	.more-list {
		width: 100%;
		position: absolute;
		top: 46px;
		bottom: 50px;
		background-color: #F9F6F1;
	}

	.more-content:nth-child(1) {
		margin-top: 10px;
	}
</style>

<template>
	<div class="detail">
		<!-- 导航栏 -->
		<div class="navbar">
			<van-nav-bar :title="initialData.name" left-arrow @click-left="back" :fixed='true' />
		</div>

		<!-- 大图片 -->
		<div class="big-bg">
			<img src="http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg" alt="" class="image-auto">
		</div>

		<!-- 信息 -->
		<div class="info-bg">
			<div class="info-box">
				<div class="info-position">
					<div class="info-title">{{initialData.name}}</div>
					<div class="info-effect">所用时间:{{initialData.cookingtime}}</div>
					<div class="info-btn">
						<van-button class='btn' :color='Color' type="info" @click='like(initialData)'>{{text}}</van-button>
					</div>
				</div>
			</div>
		</div>

		<!-- 描述 -->
		<div class="describe" v-html='initialData.content'></div>

		<!-- 用料 -->
		<div class="ingredient-box">
			<div class="ingredient">
				<div class="ingredient-title">
					<div class="ingredient-txt">
						用料
					</div>
				</div>
				<div class="ingredient-content clearfix" v-for="(item,index) in initialData.material" :key='index'>
					<div class="content-lf fl">{{item.mname}}</div>
					<div class="content-rg fl">{{item.amount}}</div>
				</div>
			</div>
		</div>

		<!-- 做法步骤 -->
		<div class="step-box">
			<div class="step-title">
				做法
			</div>
			<div class="step-content" v-for="(item,index) in initialData.process" :key='index'>
				<div class="step-text-box clearfix"><span class="numbor-text fl">{{index+1}}</span><span class="step-text fl">{{item.pcontent}}</span></div>
				<div class="step-img">
					<img :src="item.pic" alt="" class="image-auto">
				</div>
			</div>
		</div>

		<div class="end-box">- END -</div>
	</div>
</template>

<script>
	//导入辅助函数
	import {
		mapState
	} from 'vuex'

	export default {
		name: "Detail",
		data() {
			return {
				Color: '#FF6D00',
				isLike: false,
				text: '收藏'
			}
		},


		created() {
			this.initial(),
				this.getLocality()
		},

		computed: {
			...mapState('DetailModule', ['initialData']),
			...mapState(['arr'])
		},


		methods: {
			// 浏览记录
			browsing(item) {
				let recordSong = JSON.parse(localStorage.getItem('recordSong'));
				if (recordSong.length === 0) {
					recordSong.unshift(item);
					localStorage.setItem('recordSong', JSON.stringify(recordSong));
					return;
				} else {
					for (let i = 0; i < recordSong.length; i++) {

						if (recordSong[i].id == item.id) {
							return;
						}
					}
				}
				recordSong.unshift(item);

				localStorage.setItem('recordSong', JSON.stringify(recordSong));

			},

			// 本地存储
			getLocality() {
				let songItems = ['recordSong', 'likeSong'];

				for (var i = 0; i < songItems.length; i++) {
					var d = localStorage.getItem(songItems[i]);

					//如果不存在数据结构
					if (!d) {
						localStorage.setItem(songItems[i], JSON.stringify([]));
					}
				}
			},

			likeLocality(item) {
				let likeSong = JSON.parse(localStorage.getItem('likeSong'));
				for (let i = 0; i < likeSong.length; i++) {
					console.log(likeSong[i]);
					if (likeSong[i].id == item.id) {
						this.Color = '#CCCCCC';
						this.text = '已收藏';
						break;
					} else {
						this.Color = '#FF6D00';
						this.text = '收藏';
					}
				}

			},

			like(item) {
				let likeSong = JSON.parse(localStorage.getItem('likeSong'));
				if (likeSong.length === 0) {
					this.Color = '#CCCCCC';
					this.text = '已收藏';
					likeSong.unshift(item);
				} else {
					for (let i = 0; i < likeSong.length; i++) {
						console.log(likeSong.length);
						if (likeSong[i].id == item.id) {
							this.Color = '#FF6D00';
							this.text = '收藏';
							likeSong.splice(i, 1);
							localStorage.setItem('likeSong', JSON.stringify(likeSong));
							return;
						}
					}
					this.Color = '#CCCCCC';
					this.text = '已收藏';
					likeSong.unshift(item);
				}

				localStorage.setItem('likeSong', JSON.stringify(likeSong));

			},

			//返回上一级
			back() {
				this.$router.go(-1);
			},

			//初始化
			initial() {
				let pid = this.$route.query;
				console.log(pid);

				//加载提示
				this.$toast.loading({
					forbidClick: true,
					duration: 0,
					message: "加载中..."
				});

				// 发起请求
				this.axios({
					method: 'GET',
					url: '/recipe/detail',
					params: {
						id: pid.pid,
						appkey: this.appkey
					}
				}).then(result => {
					console.log(result);
					if (result.status == 200 && result.data.status === 0) {
						this.$store.commit('DetailModule/changeData', {
							key: 'initialData',
							value: result.data.result
						});
						//关闭加载提示
						this.$toast.clear();
						this.likeLocality(result.data.result);
						this.browsing(result.data.result);
					}
				}).catch(err => {
					//关闭加载提示
					this.$toast.clear();
				})
			},
		},

	}
</script>

<style lang="less" scoped>
	.end-box {
		height: 80px;
		text-align: center;
		line-height: 80px;
		color: #898A84;
		background-color: #F9F6F1;
		margin-top: 20px;
	}

	.step-text-box {
		margin-bottom: 10px;
		position: relative;
	}

	.step-text {
		font-size: 14px;
	}

	.step-content {
		margin-top: 10px;
		padding: 0 30px;
	}

	.numbor-text {
		position: absolute;
		top: 2px;
		left: -20px;
		font-size: 14px;
	}

	.step-img {
		width: 310px;
		height: 210px;
		margin: 0 auto;
		vertical-align: bottom;
	}

	.step-title {
		padding: 20px 0 5px 15px;
		font-size: 18px;
	}

	.step-box {
		margin-top: 20px;
	}

	.ingredient-content {
		border-bottom: 1px solid #F4F4F4;
		padding: 18px 18px;
	}

	.content-rg {
		font-size: 12px;
		width: 30%;
		color: #999999;
	}

	.content-lf {
		font-size: 14px;
		color: #414141;
		width: 70%
	}

	.ingredient-title {
		border-bottom: 1px solid #EDEDED;
	}

	.ingredient-txt {
		padding: 0 0 15px 20px;
		font-size: 18px;
		color: #2A2A2A;
		font-weight: 700;
	}

	.describe {
		padding: 30px 15px;
		font-size: 16px;
		color: #363636;
	}

	.info-bg {
		padding-bottom: 10px;
		background-color: #F8F5EE;
	}

	.btn {
		width: 150px;
	}

	.info-effect {
		font-size: 14px;
		color: #A3A3A3;
		margin: 5px 0 10px;
	}

	.info-title {
		font-size: 22px;
		color: #222222;
		font-weight: 700;
	}

	.info-position {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.info-box {
		background-color: white;
		height: 150px;
		position: relative;
	}

	/deep/ .van-nav-bar__title {
		color: #5B5B5B;
	}

	/deep/ .van-nav-bar .van-icon {
		color: #656563;
	}

	.big-bg {
		margin-top: 46px;
		height: 230px;
		vertical-align: bottom;
	}

	.image-auto {
		width: 100%;
		height: 100%;
	}
</style>

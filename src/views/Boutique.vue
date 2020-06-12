<template>
	<div class="boutique">
		<div class="nav-bar">
			<van-nav-bar title="精品菜单" left-arrow :fixed='true' @click-left="back" />
		</div>

		<!-- 搜索内容 -->
		<div class="search-content-box">
			<div class="search-content clearfix" v-for="(item,index) in BoutiqueData" :key='index'>
				<div class="event-box" @click="goDetail(item.id)">
					<div class="search-img fl">
						<img :src="item.pic" alt="" class="img-auto">
					</div>
					<div class="search-font fl">
						<div class="search-title">{{item.name}}</div>
						<div class="search-describe">{{item.tag}}</div>
						<div class="preparetime">烹饪时间:{{item.cookingtime}}</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	//导入公共方法
	import {
		along
	} from '../utils/along'

	export default {
		name: "Boutique",

		data() {
			return {}
		},

		created() {
			let data = this.$route.query;
			this.initial(data.keyword, data.num)
		},

		computed: {
			...mapState('BoutiqueModule', ['BoutiqueData'])
		},

		methods: {

			goDetail(pid) {
				this.$router.push({
					name: 'Detail',
					query: {
						pid
					}
				})
			},

			//返回上一页
			back() {
				this.$router.go(-1);
			},

			//初始化数据
			initial(keyword, num) {
				//清空数据
				this.$store.commit('BoutiqueModule/emptyData');

				//加载提示
				this.$toast.loading({
					forbidClick: true,
					duration: 0,
					message: "加载中..."
				});

				//发起post请求
				this.axios({
					method: "POST",
					url: '/recipe/search',
					data: {
						keyword,
						appkey: this.appkey,
						num
					},

					transformRequest: along.transformRequest
				}).then(result => {
					if (result.status == 200 && result.data.status === 0) {
						this.$store.commit('BoutiqueModule/changeData', {
							key: 'BoutiqueData',
							value: result.data.result.list
						});
						//关闭加载提示
						this.$toast.clear();
					}
				}).catch(err => {
					//关闭加载提示
					this.$toast.clear();

				})
			},
		}

	}
</script>

<style lang="less" scoped>
	
	
	
	/deep/ .van-nav-bar__title {
		color: #5B5B5B;
	}

	/deep/ .van-nav-bar .van-icon {
		color: #656563;
	}

	.search-hot-box {
		margin-top: 54px;
	}

	.hot-centent {
		width: 25%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
	}

	.search-hot {
		padding: 10px 0 10px 10px;
		font-size: 14px;
		color: #949494;
		border-bottom: 1px solid #F0F0F0;
	}

	.preparetime {
		color: #9B9B9B;
		font-size: 10px;
	}

	.search-describe {
		font-size: 14px;
		color: #9B9B9B;
		margin-bottom: 10px;
		width: 256px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.search-title {
		width: 256px;
		font-size: 16px;
		margin-bottom: 10px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.search-font {
		margin-left: 15px;
	}

	.search-img {
		width: 80px;
		height: 100%;
	}

	.search-content {
		padding: 15px 0 10px 15px;
		height: 80px;
		border-bottom: 1px solid #F4F4F4;
	}

	.search-content-box {
		margin-top: 54px;
	}
</style>

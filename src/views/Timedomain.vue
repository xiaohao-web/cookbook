<template>
	<div class="timedomain">
		<div class="head-detail">
			<van-nav-bar left-arrow :fixed='true' :border='false' @click-left='back' @click-right='goSearch'>
				<template #title>
					<div class="tab clearfix">
						<div :class=" {'active':item.isHas}" class="timedomain-box fl" v-for="(item,index) in TimedomainTitle" :key='index'
						 @click="table(item.title,index)">
							{{item.title}}
						</div>
					</div>
				</template>
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>

		<!-- 搜索内容 -->
		<div class="search-content-box">
			<van-list finished-text="没有数据了喔亲" :finished="isBottom" v-model="isLoading" @load="loadData">
				<van-swipe-cell v-for="(item,index) in TimedomainData" :key="index">
					<div class="search-content clearfix">
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
				</van-swipe-cell>
			</van-list>
		</div>
	</div>
</template>

<script>
	//导入辅助函数
	import {
		mapState
	} from 'vuex'

	//导入公共方法
	import {
		along
	} from '../utils/along'

	export default {
		name: "Timedomain",
		data() {
			return {
				TimedomainTitle: [{
						title: '早餐',
						isHas: true
					},
					{
						title: '午餐',
						isHas: false
					},
					{
						title: '晚餐',
						isHas: false
					},
				],
				isLoading: false,
			}
		},

		created() {
			let query = this.$route.query;
			this.table(query.title, query.index);
		},

		computed: {
			...mapState('TimedomainModule', ['TimedomainData', 'isBottom','allTimedomainData'])
		},

		methods: {
			//跳到搜索页
			goSearch() {
				this.$router.push({name:'Search'});
			},
			
			//返回上一页
			back() {
				this.$router.go(-1);
			},
			
			// 导航切换
			table(title, index) {
				let TimedomainTitle = this.TimedomainTitle
				if (TimedomainTitle[index].isHas) {
					return;
				};
				for (let i = 0; i < TimedomainTitle.length; i++) {
					TimedomainTitle[i].isHas = false;
				}
				TimedomainTitle[index].isHas = true;
				
				//清空数据
				this.$store.commit('TimedomainModule/emptyData');
				
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
						keyword: title,
						appkey: this.appkey,
						num: 100
					},

					transformRequest: along.transformRequest
				}).then(result => {
					if (result.status == 200 && result.data.status === 0){
						this.$store.commit('TimedomainModule/changeData', {
							key: 'allTimedomainData',
							value: result.data.result.list
						});
						this.$store.commit('TimedomainModule/loadSearchData');
						//关闭加载提示
						this.$toast.clear();
						
						
					}
				}).catch(err => {
					//关闭加载提示
					this.$toast.clear();
				})

			},

			goDetail(pid) {
				this.$router.push({
					name: 'Detail',
					query: {
						pid
					}
				})
			},

			//触底触发
			loadData() {
					setTimeout(() => {
				
						this.isLoading = false;
						
						if (this.TimedomainData.length >= this.allTimedomainData.length) {
							//没有数据可加载
							this.$store.commit('TimedomainModule/changeData', {
								key: 'isBottom',
								value: true
							});
				
							//最后一个外边距为0
							let itmeS = document.querySelectorAll(".search-content");
							if (itmeS.length == 0) {
								return;
							}
							itmeS[itmeS.length - 1].style.marginBottom = 0;
							return;
						}
						this.$store.commit('TimedomainModule/loadSearchData');
						this.isAllSelect = false;
					}, 1000)
			},
		},

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

	.active {
		color: #E94C3D;
		border-bottom: 2px solid #E94C3D;
	}

	.timedomain-box {
		padding: 8px 0;
		margin: 0 10px;
	}

	.tab {
		font-size: 14px;
	}
</style>

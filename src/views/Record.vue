<template>
	<div class="record">
		<div class="navbar">
			<van-nav-bar title="浏览记录" right-text="全部清除" :fixed='true' left-arrow @click-left="back" @click-right="allclear" />
		</div>
		<div class="like-margin">
			<div class="search-content-box" v-if="isShow">
				<van-list finished-text="没有数据了喔亲" :finished="isBottom" v-model="isLoading" @load="loadData">
					<van-swipe-cell v-for="(item,index) in LikeData" :key="index">
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
						<template #right>
							<van-button square type="danger" text="删除"  @click='removeData(item.id,index)'/>
						</template>
					</van-swipe-cell>
				</van-list>
			</div>
		</div>
	</div>
</template>

<script>
	//导入辅助函数
	import {
		mapState
	} from 'vuex';

	export default {
		name: "Record",
		data() {
			return {
				isLoading: false,
				isShow: true
			}
		},

		created() {
			this.initial();
		},

		computed: {
			...mapState('LikeModule', ['isBottom', 'LikeData','allLikeData'])
		},

		methods: {
			// 初始化数据
			initial(){
				this.$store.commit('LikeModule/emptyData');
				let dataLike = JSON.parse(localStorage.getItem("recordSong"));
				this.$store.commit('LikeModule/changeData', {
					key: 'allLikeData',
					value: dataLike
				})
				this.isLoading = false;
				
			},
			
			back() {
				this.$router.go(-1);
			},
			
			//清除全部
			allclear() {
				localStorage.setItem('recordSong', JSON.stringify([]));
				this.$store.commit('LikeModule/emptyData');
			},
			
			removeData(pid,index){
				let dataLike = JSON.parse(localStorage.getItem("recordSong"));
				console.log(dataLike);
						console.log(dataLike);
				for(let i = 0 ; i<dataLike.length ; i++){
					if(dataLike[i].id == pid){
						dataLike.splice(i,1);
						localStorage.setItem('recordSong', JSON.stringify(dataLike));
						this.$store.commit('LikeModule/emptyData');
						this.$store.commit('LikeModule/changeData', {
							key: 'allLikeData',
							value: dataLike
						})
					}
				}
			},
			
			//触底触发
			loadData() {
				setTimeout(() => {
			
					this.isLoading = false;
					if (this.LikeData.length >= this.allLikeData.length) {
						//没有数据可加载
						this.$store.commit('LikeModule/changeData', {
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
					this.$store.commit('LikeModule/loadLikeData');
					this.isAllSelect = false;
				}, 1000)
			},
		}
	}
</script>

<style lang="less" scoped>
	
	.van-button--square {
		height: 100%;
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


	.like-margin {
		margin-top: 46px;
	}

	/deep/ .van-nav-bar .van-icon {
		color: #6B6D6C;
	}

	/deep/ .van-nav-bar__text {
		color: #6B6D6C;
	}
</style>

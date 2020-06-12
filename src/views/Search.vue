<template>
	<div class="search">
		<!-- 搜索框 -->
		<div class="search-head">
			<van-search id='inputId' v-model="value" show-action placeholder="想吃什么搜这里. 如排骨" autocomplete="off" @search="onSearch" @cancel="onCancel" />
		</div>
		
		<!-- 搜索内容 -->
		<div class="search-content-box" v-if="isShow">
			<van-list finished-text="没有数据了喔亲" :finished="isBottom" v-model="isLoading" @load="loadData">
				<van-swipe-cell v-for="(item,index) in searchData" :key="index">
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
		
		<!-- 热门搜索 -->
		<div class="search-hot-box" v-else>
			<div class="search-hot">
				热门搜索
			</div>
			<div class="hot-centent-box clearfix">
				<div class="hot-centent fl" v-for="(item,index) in hotField" :key='index' @click="hotContent(item)">{{item.title}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	//导入辅助函数
	import {
		mapState
	} from 'vuex'

	export default {
		name: "Search",
		data() {
			return {
				value: '',
				isLoading: false,
				isShow:false, //控制热门搜索是否显示
			}
		},
		
		created(){
			//获取路由参数
			let data = this.$route.query;
				console.log(data);
			if(data.title){
				
				this.getAxios(data.title);
				this.value = data.title;
			}
		},
		
		// 页面宣染之后触发
		mounted(){
			this.focus()
		},
		
		computed: {
			...mapState('SearchModule', ['isBottom', 'searchData', 'allsearchData','hotField'])
		},
		
		methods: {
			// 获取焦点
			focus(){
				console.log(document.querySelector("#inputId"));
				document.querySelector("#inputId").focus();
			},
			
			goDetail(pid){
				this.$router.push({name:'Detail',query:{pid}})
			},
			
			//回车或按手机的搜索触发
			onSearch(val) {
				this.getAxios(val);
			},
			
			//请求封装
			getAxios(text){
				//清空数据
				this.$store.commit('SearchModule/emptyData');
				
				//加载提示
				this.$toast.loading({
					forbidClick: true,
					duration: 0,
					message: "加载中..."
				});
				
				this.isShow = true;
				// 发起请求
				this.axios({
					method: 'GET',
					url: '/recipe/search',
					params: {
						keyword: text,
						appkey: this.appkey,
						num: 100
					}
				}).then(result => {
					console.log(result);
					if (result.status == 200 && result.data.status === 0) {
						this.$store.commit('SearchModule/changeData', {
							key: 'allsearchData',
							value: result.data.result.list
						});
						this.$store.commit('SearchModule/loadSearchData');
						//修改加载状态
						this.isLoading = false;
						
					}
					
					//关闭加载提示
					this.$toast.clear();
				}).catch(err => {
					//关闭加载提示
					this.$toast.clear();
				})
			},
			
			//点击取消触发
			onCancel() {
				this.$router.go(-1);
			},
			
			//触底触发
			loadData() {
				console.log(111)
				setTimeout(() => {

					this.isLoading = false;
					
					if (this.searchData.length >= this.allsearchData.length) {
						//没有数据可加载
						this.$store.commit('SearchModule/changeData', {
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
					this.$store.commit('SearchModule/loadSearchData');
					this.isAllSelect = false;
				}, 1000)
			},
			
			//点击热门内容触发
			hotContent(item){
				this.getAxios(item.title);
				document.querySelectorAll("#inputId")[0].focus();
				this.value = item.title;
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.search-hot-box{
		margin-top: 54px;
	}
	
	.hot-centent{
		width: 25%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
	}
	
	.search-hot{
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

	.van-search__action:active {
		background-color: white;
	}

	.van-search__action {
		color: #EE8536;
	}

	.search-head {
		width: 100%;
		background-color: white;
		position: fixed;
		top: 0;
		z-index: 1;
	}

	.van-search__content {
		background-color: #f5f2ed;
	}
</style>

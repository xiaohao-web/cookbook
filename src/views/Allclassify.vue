<template>
	<div class="allclassify">
		<div class="head-tab">
			<van-nav-bar left-arrow :fixed='true' :border='false' @click-left='back' @click-right='goSearch'>
				<template #title>
					<div class="tab clearfix">
						<div :class=" {'active':item.isHas}" class="timedomain-box fl" v-for="(item,index) in TimedomainTitle" :key='index'
						 @click="table(item.title,index,'TimedomainTitle')">
							{{item.title}}
						</div>
					</div>
				</template>
				<template #right>
					<van-icon name="search" size="18" />
				</template>
			</van-nav-bar>
		</div>
		
		<!-- 侧边栏 和内容-->
		<div class="big-box clearfix" v-if="isclassify">
			<div class="sidebar-title fl">
				<div :class="{'active-title':item.isHas}" class="title" v-for="(item,index) in tabbarData" :key='index' @click="table(item.title,index,'tabbarData')">
					<span>{{item.title}}</span>
					<div class="active-child"></div>
				</div>
				
			</div>
			<div class="sidebar-conter fl">
				<div class="sidebar-conter-title fl" v-for="(item,index) in tabbarCenterData" :key='index' @click="keyword(item.title)">
					{{item.title}}
				</div>
			</div>
		</div>
		
		<!-- 食材 -->
		<div class="big-box clearfix" v-else>
			<div class="sidebar-title fl">
				<div :class="{'active-title':item.isHas}" class="title" v-for="(item,index) in ingredientData" :key='index' @click="table(item.title,index,'ingredientData')">
					<span>{{item.title}}</span>
					<div class="active-child"></div>
				</div>
				
			</div>
			<div class="sidebar-conter fl">
				<div v-for="(item,index) in tabbarCenterData" :key='index'>
					<div class="small-box">
						{{item.title}}
					</div>
					<div class="clearfix">
						<div class="sidebar-conter-title fl" v-for="(itm,idx) in item.list" :key='idx' @click="keyword(item.title)">
							{{itm.title}}
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	//导入辅助函数
	import {mapState} from 'vuex'
	
	
	export default {
		name: "Allclassify",
		data() {
			return {
				isclassify:true,
				
				TimedomainTitle: [{
						title: '分类',
						isHas: true
					},
					{
						title: '食材',
						isHas: false
					},
				],
				
				 //侧边导航数据
				tabbarData: [
				  {title: '热门',isHas:true,tabData:'hotData'},
				  {title: '菜式',isHas:false,tabData:'piattiData'},
				  {title: '菜系',isHas:false,tabData:'styleBooking'},
				  {title: '特色',isHas:false,tabData:'feature'},
				  {title: '烘培',isHas:false,tabData:'bake'},
				  {title: '主食',isHas:false,tabData:'staple'},
				  {title: '烹饪方式',isHas:false,tabData:'cooking'},
				  {title: '口味',isHas:false,tabData:'taste'},
				  {title: '场合',isHas:false,tabData:'occasion'},
				],
				
				ingredientData:[
					{title: '肉类',isHas:true,tabData:'meat'},
					{title: '蛋,奶',isHas:false,tabData:'eggs'},
					{title: '鱼类',isHas:false,tabData:'fish'},
					{title: '水产',isHas:false,tabData:'aquatic'},
					{title: '蔬菜',isHas:false,tabData:'vegetables'},
					{title: '豆类',isHas:false,tabData:'beans'},
					{title: '五谷杂粮',isHas:false,tabData:'Cereal'},
				],
				
				// 侧边导航内容数据
				tabbarCenterData:[]
			}
		},

		computed: {
			...mapState('AllclassifyModule',['hotData','piattiData','styleBooking','feature','bake','staple','cooking','taste','occasion','meat','eggs','fish','aquatic','vegetables','beans','Cereal'])
		},
		
		created(){
			this.tabbarCenterData = this[this.tabbarData[0].tabData];
		},
		

		methods: {
			// 返回上一页
			back() {
				this.$router.go(-1);
			},

			//跳到搜索页
			goSearch() {
				this.$router.push({
					name: 'Search'
				});
			},
			
			//跳到搜索页
			keyword(title) {
				console.log(1111)
				this.$router.push({
					name: 'Search',
					query:{title}
				});
			},


			//切换数据类型
			table(title, index,tabbarData) {
				let TimedomainTitle = this[tabbarData];
				if (TimedomainTitle[index].isHas) {
					return;
				};
				for (let i = 0; i < TimedomainTitle.length; i++) {
					TimedomainTitle[i].isHas = false;
				}
				TimedomainTitle[index].isHas = true;
				if(TimedomainTitle[index].title == '分类'){
					this.isclassify = true;
					console.log(this.tabbarData[0].tabData)
					this.tabbarCenterData = this[this.tabbarData[0].tabData];
				}else if(TimedomainTitle[index].title == '食材'){
					this.isclassify = false;
					this.tabbarCenterData = this[this.ingredientData[0].tabData];
				}else if(tabbarData == 'tabbarData' || tabbarData == 'ingredientData'){
					this.tabbarCenterData = this[TimedomainTitle[index].tabData];
				}
				
			},
			
			
		}

	}
</script>

<style lang="less" scoped>
	.small-box{
		font-size: 16px;
	}
	
	.sidebar-conter-title{
		width: calc(~"100% / 3");
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #8A8A8A;
		font-size: 14px;
	}
	
	.sidebar-conter{
		width: 255px;
		height: 100%;
		padding: 20px;
	}
	
	.active-title .active-child{
		position: absolute;
		top: 0;
		left: 0;
		height: 40px;
		width: 2px;
		background-color: #DA5B02;
	}
	
	.active-title{
		background-color: #FFFFFF;
		color: #FDAB5B;
		position: relative;
	}
	
	.title{
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 14px;
	}
	
	.sidebar-title{
		width: 80px;
		height: 100%;
		background-color: #F3F3F3;
	}
	
	.big-box{
		position: absolute;
		top: 46px;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	/deep/ .van-nav-bar .van-icon{
		color: #6B6D6C;
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

<template>
	<div class="classify">
		<div class="title-box">
			<van-nav-bar title="菜谱分类" right-text="全部" :fixed='true' @click-right="goAll" />
		</div>
		<div class="classify-list">
			<div class="classify-pd">
				<div class="hot-classify" v-for="(item,index) in ClassifyData" :key='index'>
					<div class="classify-title">{{item.title}}</div>
					<div class="clearfix">
						<div class="classify-content fl" v-for="(it,idx) in item.list" :key='idx'>
							<div class="classify-img-box">
								<img :src="it.url" alt="" class="img-auto">
								<div class="position-box">
									<div class="position-title" @click="trigger(item.reason,it.title,it.type)">#{{it.title}}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<van-action-sheet v-model="isShow" :round='false' :close-on-click-action='true'>
			<div class="content">
				<div class="content-title-box">
					<div class="content-meat" v-for="(item,index) in hotingredientData" :key='index'>
						<div class="content-meat-title">{{item.title}}</div>
						<div class="content-meat-content clearfix">
							<div class="title fl" v-for="(it,idx) in item.list" :key='idx' @click="hotIngredient(it.title)">{{it.title}}</div>
						</div>
					</div>
				</div>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
	//导入辅助函数
	import {
		mapState
	} from 'vuex'


	export default {
		name: "Classify",

		data() {
			return {
				isShow: false
			}
		},

		computed: {
			...mapState('ClassifyModule', ['ClassifyData','meat','eggs','fish','aquatic','vegetables','beans','Cereal','hotingredientData'])
		},

		methods: {
			//全部
			goAll() {
				this.$router.push({name:'Allclassify'})
			},
			
			// 菜谱分类的所以内容
			trigger(reason,title,type){
				// reason不为0的时候弹出动作框，为零的时候跳转搜索页;
				if(reason == 0){
					this.$router.push({name:'Search',query:{title}});
					return;
				};
				
				this.isShow = true;
				
				//动态切换热门食材
				this.$store.commit('ClassifyModule/changeData',{
					key:'hotingredientData',
					value:this[type]
				});
			},
			
			hotIngredient(title){
				this.$router.push({name:'Search',query:{title}});
			},
		},
	}
</script>

<style lang="less" scoped>
	.title{
		width: 76px;
		height: 30px;
		line-height: 30px;
		margin-right: 10px;
		margin-bottom: 15px;
		text-align: center;
		background: #FAFBF6;
	}
	
	.title:nth-child(4n){
		margin-right: 0;
	}
	
	.content-meat-title{
		padding: 15px 0 10px 0;
		font-size: 14px;
		color: #0A0B06;
		font-weight: 550;
	}
	
	/deep/ .van-action-sheet{
		height: 300px;
	}
	
	
	.content{
		height: 200px;
		padding: 0 20px;
	}
	
	.classify-content:nth-child(4n) {
		margin-right: 0;
	}

	.classify-content {
		margin-right: 10px;
		margin-bottom: 10px;
	}

	.position-title {
		color: white;
		font-size: 12px;
	}

	.position-box {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .2);
		width: 100%;
		height: 100%;
		text-align: center;
		line-height: 76px;
	}

	.classify-img-box {
		width: 76px;
		height: 76px;
		position: relative;
	}

	.classify-title {
		font-size: 14px;
		color: #393A35;
		font-weight: 600;
		padding: 10px 0;
	}

	.classify-pd {
		margin: 55px 0 50px;
		padding: 0 20px;
	}
	
	/deep/ .van-overlay{
		background-color: rgba(0, 0, 0, .4);
	}

	/deep/ .van-nav-bar__text {
		color: #151515;
	}
</style>

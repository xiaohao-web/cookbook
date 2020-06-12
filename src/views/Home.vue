<template>
  <div class="home">
	  <!-- 搜索框 -->
    <div class="search">
      <van-search v-model="value" placeholder="搜菜谱，食材" @focus='goSearch' />
    </div>
	
	<!-- 轮播图 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in SwipeItemData" :key="index" @click='goTimedomain(item.title,index)'>
			<div class="type-box">
				<div class="img-box">
					<img class="img-auto" :src="item.url" alt="">
				</div>
				<div class="type">
					<div class="type-align">
						<div class="type-position">
							<div class="type-title">- {{item.title}} -</div>
							<span class="type-content">{{item.text}}</span>
						</div>
					</div>
				</div>
			</div>
		</van-swipe-item>
        
      </van-swipe>
    </div>
	
	<!-- 种类 -->
	<div class="kind-box clearfix">
		<div class="kind-title fl" v-for="(item,index) in KindData" :key='index' @click="goSearch(item.title)">{{item.title}}</div>
	</div>
	
	<!-- 精品菜单 -->
	<div class="menu">
		<div class="menu-title">
			精品菜单
		</div>
		<div class="menu-content-box clearfix">
			<div class="menu-content fl" v-for="(item,index) in MenuData" :key='index'>
				<div class="menu-img-box">
					<img :src="item.url" alt="" class="img-auto">
				</div>
				<div class="menu-bga-box"  @click='goBoutique(item.name,item.count)'>
					<div class="font-box">
						<div class="font-title">{{item.title}}</div>
						<div class="font-subheading">#{{item.count}}道菜谱#</div>
					</div>
				</div>
			</div>
		
		</div>
	</div>
	
	<div class="end-box">- END -</div>
  </div>
</template>

<script>
	//导入辅助函数
import {mapState} from 'vuex'

export default {
  name: "Home",
  data() {
    return {
      value: ""
    };
  },
  
  computed: {
	...mapState('HomeModule', ['SwipeItemData','KindData','MenuData'])
  },
  
  methods: {
  	goSearch(title) {
		if(title == '更多'){
			this.$router.push({name:'Classify',query:{name:'Classify'}});
			return;
		}
  		this.$router.push({name:'Search'});
  	},
	
	goTimedomain(title,index){
		this.$router.push({name:'Timedomain',query:{title,index}});
	},
	
	goBoutique(keyword,num){
		this.$router.push({name:'Boutique',query:{keyword,num}});
	}
  },
};
</script>

<style lang="less" scoped>
.end-box{
	height: 80px;
	text-align: center;
	line-height: 80px;
	color: #898A84;
	background-color: #F9F6F1;
	margin-bottom: 50px;
}

.search{
	width: 100%;
	background-color: white;
	position: fixed;
	top: 0;
	z-index: 1;
}

.van-search__content {
  background-color: #f5f2ed;
}

.type-box{
	margin-top: 54px;
	position: relative;
	.img-box{
		overflow: hidden;
		height: 80px;
		width: 100%;
	}
}

.swiper{
	overflow: hidden;
	padding: 10px 12px;
}

.type-align{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 80px;
	background-color: rgba(0, 0, 0, .2);
}

.type-position{
	text-align: center;
	position: absolute;
	left: 50%;
	top: 50%;
	margin:-21px 0 0 -32px;
}

.type-title{
	color: #fff;
	font-size: 20px;
}

.type-content{
	font-size: 12px;
	color: #C9C9C9;
}

.kind-title{
	background-color: white;
	width: calc(25% - 1px);;
	height: 40px;
	text-align: center;
	line-height: 40px;
	border-top: 1px solid #FAFAFA;
	border-right: 1px solid #FAFAFA;
	color: #868686;
}

.kind-box{
	padding-bottom: 10px;
	background-color: #F9F6EF;
}

.kind-title:nth-child(4n){
	border-right: none;
	width: 25%;
}

.menu{
	padding: 10px 12px; 
}

.menu-title{
	padding: 10px 0 15px 0;
	color: #BBBBBB;
}

.menu-content{
	width: 172px;
	height: 172px;
	position: relative;
	margin-bottom: 10px;
}

.menu-content:nth-child(2n){
	margin-left: 7px;
}

.menu-img-box{
	height: 100%
}

.menu-bga-box{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	color: white;
	background-color: rgba(0, 0, 0, .2);
}

.font-box{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	text-align: center;
}
</style>
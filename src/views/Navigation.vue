<template>
    <div class="navigation">
		
		<!-- 二级路由 -->
		<router-view/>

		<van-tabbar v-model="tabbarName" active-color="#F9A86A" inactive-color="#5E5E5E" class="base" @change="toggleTab()">
		  <van-tabbar-item :name="item.name" :icon="item.icon" v-for="(item, index) in tabbarData" :key="index">{{item.text}}</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>

export default {
		name: "Totality",
		
		data() {
		  return {
		    //底部导航索引
		    tabbarName: this.$route.name,
		  };
		},
		
		updated(){
			this.tabbarName = this.$route.name;
		},
		
		methods:{
			toggleTab(){
				
				//路由跳转
				this.$router.push({name: this.tabbarName});
			}
		},
		
		computed: {
		
		  tabbarData() {
			  //TotalityModule模块的state属性获取
		    return this.$store.state.TotalityModule.tabbarData;
		  }
		}
	}
</script>

<style lang="less" scoped>
	.base{
		border-top: 1px solid #E8E8E8;
	}
</style>
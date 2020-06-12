export const routes = [
	//底部导航
	{
		path: '/navigation',
		name: 'Navigation',
		component: r => require(['../views/Navigation.vue'], r),
		//二级路由
		children: [
			//主页
			{
				path: 'home',
				name: 'Home',
				component: r => require(['../views/Home.vue'], r)
			},
			//分类页
			{
				path: 'classify',
				name: 'Classify',
				component: r => require(['../views/Classify.vue'], r)
			},
			//更多页
			{
				path: 'more',
				name: 'More',
				component: r => require(['../views/More.vue'], r)
			}
		]
	},
	
	//详情页
	{
		path: '/detail',
		name: 'Detail',
		component: r => require(['../views/Detail.vue'], r),
	},
	
	//搜索页
	{
		path: '/search',
		name: 'Search',
		component: r => require(['../views/Search.vue'], r),
	},
	
	//时间(早，午，晚)页
	{
		path: '/timedomain',
		name: 'Timedomain',
		component: r => require(['../views/Timedomain.vue'], r),
	},
	
	//精品菜单页
	{
		path: '/boutique',
		name: 'Boutique',
		component: r => require(['../views/Boutique.vue'], r),
	},
	
	//全部分类页
	{
		path: '/allclassify',
		name: 'Allclassify',
		component: r => require(['../views/Allclassify.vue'], r),
	},
	
	//浏览记录
	{
		path: '/record',
		name: 'Record',
		component: r => require(['../views/Record.vue'], r),
	},
	
	//我的收藏
	{
		path: '/like',
		name: 'Like',
		component: r => require(['../views/Like.vue'], r),
	},
	
	//引导页
	{
		path: '/guidance',
		name: 'Guidance',
		component: r => require(['../views/Guidance.vue'], r),
	},
	
	//重定向
	{
		path: '*',
		redirect: {
			name: 'Guidance'
		}
	}
]
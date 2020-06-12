export const state = {
    //触底加载完成，没有数据可加载
    isBottom: false,

	//搜索数据
	searchData:[],
	
	//搜索所有数据
	allsearchData: [],
	
	//每次加载10条数据
	count: 15,
	
	//开始截取下标
	start: 0,
	
	//热门搜索字段
	hotField: [
		{title:'牛肉'},
		{title:'鸡蛋'},
		{title:'肉末'},
		{title:'红烧排骨'},
		{title:'鸡'},
		{title:'面'},
		{title:'鱼'},
		{title:'豆腐'},
		{title:'土豆丝'},
		{title:'龙虾'},
	]
	
}
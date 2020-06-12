export const state = {

	//菜谱分类数据
	ClassifyData: [
		// 热门分类
		{
			title: '热门分类',
			reason:0,
			list: [{
					title: '家常菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/120717_28847.jpg'
				},
				{
					title: '素菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115139_16737.jpg'
				},
				{
					title: '面食',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/181213_10806.jpg'
				},
				{
					title: '凉菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115343_41604.jpg'
				},
				{
					title: '汤',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115138_26193.jpg'
				},
				{
					title: '粥',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115139_16737.jpg'
				},
				{
					title: '下饭菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/122607_60539.jpg'
				},
			]
		},
		// 热门食材
		{
			title: '热门食材',
			reason:1,
			list: [{
					title: '肉类',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115145_23653.jpg',
					type:'meat'
				},
				{
					title: '蛋,奶',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115144_17294.jpg',
					type:'eggs'
				},
				{
					title: '鱼类',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115147_72350.jpg',
					type:'fish'
				},
				{
					title: '水产',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115137_43195.jpg',
					type:'aquatic'
				},
				{
					title: '蔬菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115157_89197.jpg',
					type:'vegetables'
				},
				{
					title: '豆类',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115152_15254.jpg',
					type:'beans'
				},
				{
					title: '五谷杂粮',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/115154_27190.jpg',
					type:'Cereal'
				},
			]
		},

		// 菜系
		{
			title: '菜系',
			reason:0,
			list: [{
					title: '川菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160720/091944_78046.jpg',
				},
				{
					title: '粤菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/120813_13839.jpg'
				},
				{
					title: '苏菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/170010_28466.jpg'
				},
				{
					title: '西餐',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/175343_39456.jpg'
				},
				{
					title: '东北菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/132102_23062.jpg'
				},
			]
		},

		// 场合
		{
			title: '场合',
			list: [{
					title: '早餐',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/120804_56873.jpg'
				},
				{
					title: '晚餐',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/175517_17377.jpg'
				},
				{
					title: '中餐',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/181559_85522.jpg'
				},
				{
					title: '下午茶',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/144005_93699.jpg'
				},
				{
					title: '东北菜',
					url: 'http://api.jisuapi.com/recipe/upload/20160719/132102_23062.jpg'
				},
			]
		},
	],
	
	//保存热门材料数据
	hotingredientData:[],
	//肉类
	meat: [
		//猪肉
		{
			title: '猪肉',
			list: [{
					title: '猪肉'
				},
				{
					title: '排骨'
				},
				{
					title: '猪蹄'
				},
				{
					title: '猪肚'
				},
				{
					title: '五花肉'
				},
				{
					title: '猪肝'
				},
				{
					title: '猪血'
				},
				{
					title: '猪腰'
				},
				{
					title: '猪皮'
				},
				{
					title: '猪肘'
				},
				{
					title: '猪耳朵'
				},
				{
					title: '猪心'
				},
				{
					title: '猪肺'
				},
				{
					title: '猪脑'
				},
				{
					title: '肥肠'
				},
				{
					title: '猪大肠'
				},
			]
		},

		//牛肉
		{
			title: '牛肉',
			list: [{
					title: '牛肉'
				},
				{
					title: '牛腩'
				},
				{
					title: '牛排'
				},
				{
					title: '肥牛'
				},
				{
					title: '牛肚'
				},
				{
					title: '牛脑'
				},
				{
					title: '牛肉片'
				},
				{
					title: '牛鞭'
				},
			]
		},

		//羊肉
		{
			title: '羊肉',
			list: [{
					title: '羊肉'
				},
				{
					title: '羊排'
				},
				{
					title: '羊腿'
				},
			]
		},

		//鸡肉
		{
			title: '鸡肉',
			list: [{
					title: '鸡肉'
				},
				{
					title: '鸡翅'
				},
				{
					title: '鸡腿'
				},
				{
					title: '鸡爪'
				},
				{
					title: '鸡血'
				},
				{
					title: '鸡胸肉'
				},
				{
					title: '鸡'
				},
				{
					title: '凤爪'
				},
				{
					title: '鸡排'
				},
			]
		},

		//鸭肉
		{
			title: '鸭肉',
			list: [{
					title: '鸭肉'
				},
				{
					title: '鸭腿'
				},
				{
					title: '鸭肠'
				},
				{
					title: '鸭'
				},
				{
					title: '鸭掌'
				},
			]
		},

		//肉制品
		{
			title: '肉制品',
			list: [{
					title: '腊肉'
				},
				{
					title: '火腿'
				},
				{
					title: '香肠'
				},
				{
					title: '肉松'
				},
				{
					title: '培根'
				},
				{
					title: '烤肉'
				},
				{
					title: '肉丸'
				},
			]
		},

		//其他肉类
		{
			title: '其他肉类',
			list: [{
					title: '兔肉'
				},
				{
					title: '鹅肉'
				},
				{
					title: '老鼠'
				},
				{
					title: '鹅肝'
				},
				{
					title: '乳鸽'
				},
				{
					title: '狗肉'
				},
			]
		},
	],

	//蛋,奶
	eggs: [{
		//蛋类
			title: '蛋类',
			list: [{
					title: '鸡蛋'
				},
				{
					title: '鸭蛋'
				},
				{
					title: '鹌鹑蛋'
				},
				{
					title: '威鸭蛋'
				},
				{
					title: '鸽子蛋'
				},
				{
					title: '鹅蛋'
				},
			]
		},
		
		//乳制品
		{
			title: '乳制品',
			list: [
				{
					title: '奶酪'
				},
				{
					title: '黄油'
				},
				{
					title: '奶油'
				}
			]
		},
	],
	
	//鱼类
	fish:[
		// 淡水鱼
		{
			title:'淡水鱼',
			list:[
				{title:'草鱼'},
				{title:'鲤鱼'},
				{title:'鲫鱼'},
				{title:'鲢鱼'},
				{title:'青鱼'},
				{title:'罗非鱼'},
				{title:'黄鳝'},
			]
		},
		
		// 咸水鱼
		{
			title:'咸水鱼',
			list:[
				{title:'带鱼'},
				{title:'鲈鱼'},
				{title:'鳕鱼'},
				{title:'三文鱼'},
				{title:'小黄鱼'},
				{title:'黄花鱼'},
				{title:'沙尖鱼'},
			]
		},
		
		//鱼制品
		{
			title:'鱼制品',
			list:[
				{title:'鱼丸'},
				{title:'鱼头'},
				{title:'鱼干'},
				{title:'鱼籽'}
			],
		}
	],
	
	//水产
	aquatic:[
		// 虾
		{
			title:'虾',
			list:[
				{title:'虾'},
				{title:'虾米'},
				{title:'龙虾'},
				{title:'虾皮'},
				{title:'皮皮虾'},
				{title:'虾仁'}
			]
		},
		
		// 蟹
		{
			title:'蟹',
			list:[
				{title:'螃蟹'},
				{title:'河蟹'}
			],
		},
		
		// 蟹
		{
			title:'贝',
			list:[
				{title:'鲍鱼'},
				{title:'干贝'},
				{title:'扇贝'},
				{title:'河蚌'},
				{title:'生蚝'},
				{title:'海螺'}
			],
		},
		
		// 藻类
		{
			title:'藻类',
			list:[
				{title:'海带'},
				{title:'紫菜'},
				{title:'海藻'},
				{title:'发菜'}
			],
		},
		
		// 其他水产
		{
			title:'其他水产',
			list:[
				{title:'鱿鱼'},
				{title:'田螺'},
			],
		}
	],
	
	//蔬菜
	vegetables:[
		// 茎叶花类
		{
			title:'茎叶花类',
			list:[
				{title:'白菜'},
				{title:'油菜'},
				{title:'芹菜'},
				{title:'菠菜'},
				{title:'小白菜'},
				{title:'生菜'},
				{title:'香菜'},
				{title:'娃娃菜'},
				{title:'菜花'},
				{title:'豌豆'},
			]
		},
		
		// 根茎类
		{
			title:'根茎类',
			list:[
				{title:'土豆'},
				{title:'红薯'},
				{title:'芋头'},
				{title:'胡萝卜'},
				{title:'白萝卜'},
				{title:'红萝卜'},
				{title:'紫薯'},
			],
		},
		
		// 菌菇类
		{
			title:'菌菇类',
			list:[
				{title:'蘑菇'},
				{title:'香菇'},
				{title:'草菇'},
				{title:'木耳'},
				{title:'金针菇'},
				{title:'银耳'}
			],
		},

		// 葱蒜类
		{
			title:'葱蒜类',
			list:[
				{title:'小葱'},
				{title:'大葱'},
				{title:'洋葱'},
				{title:'大蒜'},
			],
		}
	],
	
	//豆类
	beans:[
		//豆类
		{
			title:'豆类',
			list:[
				{title:'绿豆芽'},
				{title:'黄豆芽'},
				{title:'黄豆'},
				{title:'毛豆'},
				{title:'绿豆'},
				{title:'黑豆'},
			]
		},
		
		//豆制品
		{
			title:'豆制品',
			list:[
				{title:'豆腐'},
				{title:'豆腐干'},
				{title:'腐竹'},
				{title:'豆腐丝'},
				{title:'豆腐皮'},
				{title:'豆鼓'},
			]
		},
	],
	
	//五谷杂粮
	Cereal:[
		//米面制品
		{
			title:'米面制品',
			list:[
				{title:'面包'},
				{title:'吐司'},
				{title:'年糕'},
				{title:'米饭'},
				{title:'米粉'},
				{title:'河粉'},
				{title:'馒头'},
				{title:'油条'},
				{title:'凉粉'},
				{title:'面粉'},
				{title:'面条'},
				{title:'麦芽'},
				{title:'大米'},
				{title:'糯米'},
				{title:'小米'},
				{title:'玉米'},
				{title:'燕麦'},
				{title:'大麦'},
				{title:'油条'},
				{title:'红豆'},
				{title:'白米饭'},
			]
		},
		
	]

}

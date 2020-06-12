import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//导入模块
import {TotalityModule} from './Navigation/store'
import {HomeModule} from './Home/store'
import {SearchModule} from './Search/store'
import {DetailModule} from './Detail/store'
import {TimedomainModule} from './Timedomain/store'
import {BoutiqueModule} from './Boutique/store'
import {ClassifyModule} from './Classify/store'
import {AllclassifyModule} from './Allclassify/store'
import {LikeModule} from './Like/store'
import {RecordModule} from './Record/store'

export default new Vuex.Store({
  state: {
	  
  },
  mutations: {
	
  },
  actions: {
  },
  modules: {
    TotalityModule,
    HomeModule, //主页
    SearchModule, //搜索页
	DetailModule, //详情页
	TimedomainModule, //早餐，午餐，晚餐页
	BoutiqueModule,  //精品菜单页
	ClassifyModule, //分类页
	AllclassifyModule, //全部类型页
	LikeModule, //我的收藏页
	RecordModule //浏览记录页
  }
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 插件
import "swiper/dist/css/swiper.min.css";

//注册axios
Vue.use(VueAxios, axios)

//按需引入vant组件
import { 
  Tabbar, 
  TabbarItem ,
  Search,
  Swipe, 
  SwipeItem,
  List,
  SwipeCell,
  NavBar,
  Button,
  Icon,
  Toast,
  ActionSheet,
  Card,
  Rate
} from 'vant';


//注册vant组件
Vue.use(Tabbar)
   .use(TabbarItem)
   .use(Search)
   .use(Swipe)
   .use(SwipeItem)
   .use(List)
   .use(SwipeCell)
   .use(NavBar)
   .use(Button)
   .use(Icon)
   .use(Toast)
   .use(ActionSheet)
   .use(Card)
   .use(Rate)
   
   //设置基础请求路径
   axios.defaults.baseURL = 'http://localhost:8080'
   
   //配置post请求头
   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
   
   //为vue原型添加一个属性
   Vue.prototype.appkey = 'd40e54cf3219dc87'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

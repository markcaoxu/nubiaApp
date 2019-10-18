import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Find from '../pages/Find/Find.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Profile from '../pages/Profile/Profile.vue'
//引入详情页组件
import Detail from '../pages/Find/children/Detail.vue'
//引入体验店组件
import ExperienceShop from '../pages/Find/children/ExperienceShop.vue'
//引入视频长廊组件
import Video from '../pages/Find/children/Video.vue'
//引入产品评价组件
import ProductEvaluation from '../pages/Find/children/ProductEvaluation.vue'
//引入新闻中心组件
import NewsCenter from '../pages/Find/children/NewsCenter.vue'

// 引入优惠券组件
import Ticket01 from '../pages/Profile/children/Profile-ticket01/index.vue'
// 手机验证码登录
import LoginWithCode from '../pages/Login/children/LoginWithCode/index.vue'
// 登录页
import Login from '../pages/Login/Login.vue'
// 搜索

// 商品详情页
import ShopDetail from '../pages/Detail/Detail.vue'

import Search from '../pages/Search/Search.vue'
import Product from '../pages/Search/children/Product.vue'

import Phone from '../pages/Phone/Phone.vue'

export default [
  // 路由nh66
  {
    // 首页 msite
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    // 分类 classify
    path: '/classify',
    component: Classify,
    meta: {
      isShowFooter: true
    }
  },
  {
    // 发现 find
    path: '/find',
		component: Find,
		redirect: '/find/productEvaluation',
		children:[
			{
				path:'/find/detail',
				component: Detail
			},
			{
				path:'/find/experienceShop',
				component: ExperienceShop
			},
			{
				path:'/find/video',
				component: Video,
				meta:{
					isPlay:false
				}
			},
			{
				path:'/find/productEvaluation',
				component:ProductEvaluation
			},
			{
				path:'/find/newsCenter',
				component:NewsCenter
			}
		]
	},
  {
    // 购物车 shopcar
    path: '/shopcar',
    component: Shopcar
  },
  {
    // 个人中心 profile
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    // profile-ticket01 优惠券路由
    path: '/ticket01',
    component: Ticket01
  },
  {
    // 登录路由
    path: '/login',
    component: Login
  },
  {
    // search
    path: '/search',
    component: Search,
		children:[
			{
				path:'/search/product',
				component: Product
      }
    ]
  // phone 手机列表
  },
  {
    path: '/phone',
    component: Phone
  },
  {
    // 手机验证码登录组件
    path:'/loginWithCode',
    component: LoginWithCode
  },
  {
    // 商品详情
    path:'/shopDetail',
    component:ShopDetail
  },
  // 重定向
  {
    path: '/',
    redirect: '/msite'
  }
]
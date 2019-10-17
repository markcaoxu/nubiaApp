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
import Video from '../components/Find/Video.vue'
//一如产品评价组件
import ProductEvaluation from '../components/Find/ProductEvaluation'
//引入新闻中心组件
import NewsCenter from '../components/Find/NewsCenter.vue'

import Ticket01 from '../pages/Profile/children/Profile-ticket01/index.vue'
import Login from '../pages/Login/Login.vue'
//引入重置样式文件
import '../../public/css/reset.css'
//引入图标字体文件
import '../../public/css/font-icon.css'


export default [
  // 路由
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
				component: Video
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
    component: Shopcar,
    meta: {
      isShowFooter: true
    }
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
    // profile-ticket01
    path: '/ticket01',
    component: Ticket01
  },
  {
    path: '/login',
    component: Login
  },
  // 重定向
  {
    path: '/',
    redirect: '/msite'
  }
]
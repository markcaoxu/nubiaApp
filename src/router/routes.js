import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Find from '../pages/Find/Find.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Profile from '../pages/Profile/Profile.vue'

import Ticket01 from '../pages/Profile/children/Profile-ticket01/index.vue'
import Login from '../pages/Login/Login.vue'
import Phone from '../pages/Phone/Phone.vue'


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
    component: Find
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
    path:'/ticket01',
    component: Ticket01
  },
  {
    path: '/login',
    component: Login
  },
  // phone 手机列表
  {
    path: '/phone',
    component: Phone
  },
  // 重定向
  {
    path: '/',
    redirect: '/msite'
  }
]
import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import register from './views/register.vue'
import Main from './views/Main.vue'
import Main2 from './views/Main2.vue'
import safeInsurance from './views/safeInsurance.vue'
import toOperate from './views/toOperate.vue'
import aboutUs from './views/aboutUs.vue'
import appLandingPage from './views/appLandingPage.vue'
import toDebts from './views/toDebts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Login},
    {path: '/login',component: Login},
    {path: '/register',component: register},
    {path: '/applandingpage',component: appLandingPage},
    {path: '/main',component: Main,children:[
      {path: '',component: Main2},
      {path: 'main2',component: Main2},
      {path: 'safeinsurance',component: safeInsurance},
      {path: 'tooperate',component: toOperate},
      {path: 'aboutus',component: aboutUs},
      {path: 'todebts',component: toDebts},
    ]}
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import("@/components/index/Index")
const DetailPage = () => import("@/components/detail/DetailPage")
const ListPage = () => import("@/components/list/ListPage")
const AboutPage = () => import("@/components/about/AboutPage")
const MessagePage = () => import("@/components/message/MessagePage")

// 重写路由跳转方法
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/list/:name/:value',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/message',
      name: 'MessagePage',
      component: MessagePage
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/ChatPage').default
    },
    {
      path: '/settingWindow',
      name: 'settingWindow',
      meta: {
        // 页面标题title
        title: '设置'
      },
      component: require('@/components/SettingWindowPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

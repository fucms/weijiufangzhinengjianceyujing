import Layout from '@/layout'

const dynamicRouter = {
  path: '/dynamic',
  component: Layout,
  redirect: '/intelligentMonitoring/index.vue',
  meta: {
    title: '动态监测模块',
    icon: 'nested'
  },
  children: [
    {
      path: '/manualMonitoring',
      component: () => import('@/views/a_dynamicView/manualMonitoring/index.vue'),
      name: 'manualMonitoring',
      meta: { title: '人工监测' }
    },
    {
      path: '/intelligentMonitoring',
      component: () => import('@/views/a_dynamicView/intelligentMonitoring/index.vue'),
      name: 'intelligentMonitoring',
      meta: { title: '智能化监控与预警' }
    }

  ]
}

export default dynamicRouter

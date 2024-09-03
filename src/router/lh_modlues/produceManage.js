import Layout from '@/layout'

const produceRouter = {
  path: '/produceManage',
  component: Layout,
  redirect: '/basicInfo/index.vue',
  meta: {
    title: '隐患排查模块',
    icon: 'nested'
  },
  children: [
    {
      path: '/basicInfo',
      component: () => import('@/views/produceManage/basicInfo/index.vue'),
      name: 'basicInfo',
      meta: { title: '隐患排查数据录入' }
    },
    {
      path: '/tailorManage',
      component: () => import('@/views/produceManage/tailorManage/index.vue'),
      name: 'tailorManage',
      meta: { title: '隐患房屋数据统计' }
    },
    {
      path: '/qualityManage',
      component: () => import('@/views/produceManage/qualityManage/index.vue'),
      name: 'qualityManage',
      meta: { title: '隐患排查相关资料' }
    },
    {
      path: '/autoRemind',
      component: () => import('@/views/produceManage/autoRemind/index.vue'),
      name: 'autoRemind',
      meta: { title: '自动提醒' }
    }

  ]
}

export default produceRouter

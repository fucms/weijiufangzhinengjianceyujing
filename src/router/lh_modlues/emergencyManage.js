import Layout from '@/layout'

const emergencyRouter = {
  path: '/emergency',
  component: Layout,
  redirect: '/emergePhoneBook/index.vue',
  meta: {
    title: '应急管理模块',
    icon: 'nested'
  },
  children: [
    {
      path: '/emergePhoneBook',
      component: () => import('@/views/a_emergencyManage/emergePhoneBook/index.vue'),
      name: 'emergePhoneBook',
      meta: { title: '应急通讯录' }
    },
    {
      path: '/warnInfoPublish',
      component: () => import('@/views/a_emergencyManage/warnInfoPublish/index.vue'),
      name: 'warnInfoPublish',
      meta: { title: '预警信息发布' }
    },
    {
      path: '/emergeHandInfo',
      component: () => import('@/views/a_emergencyManage/emergeHandInfo/index.vue'),
      name: 'emergeHandInfo',
      meta: { title: '应急处置信息' }
    },
    {
      path: '/emergeDirectPolicy',
      component: () => import('@/views/a_emergencyManage/emergeDirectPolicy/index.vue'),
      name: 'emergeDirectPolicy',
      meta: { title: '应急指挥决策' }
    },
    {
      path: '/emergeDrill',
      component: () => import('@/views/a_emergencyManage/emergeDrill/index.vue'),
      name: 'emergeDrill',
      meta: { title: '应急演练' }
    },
    {
      path: '/emergeManageInfo',
      component: () => import('@/views/a_emergencyManage/emergeManageInfo/index.vue'),
      name: 'emergeManageInfo',
      meta: { title: '应急管理相关资料' }
    }
  ]
}

export default emergencyRouter

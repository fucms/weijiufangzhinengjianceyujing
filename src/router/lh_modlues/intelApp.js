import Layout from '@/layout'

const intelAppRouter = {
  path: '/intelApp',
  component: Layout,
  redirect: '/domainDivision/index.vue',
  meta: {
    title: '智能APP',
    icon: 'nested'
  },
  children: [
    {
      path: '/domainDivision',
      component: () => import('@/views/a_intelApp/domainDivision/index.vue'),
      name: 'domainDivision',
      meta: { title: '分权分域' }
    },
    {
      path: '/buildingManage',
      component: () => import('@/views/a_intelApp/buildingManage/index.vue'),
      name: 'buildingManage',
      meta: { title: '楼宇管理' }
    },
    {
      path: '/smartTerminal',
      component: () => import('@/views/a_intelApp/smartTerminal/index.vue'),
      name: 'smartTerminal',
      meta: { title: '智慧终端' }
    },
    {
      path: '/patrolLinkage',
      component: () => import('@/views/a_intelApp/patrolLinkage/index.vue'),
      name: 'patrolLinkage',
      meta: { title: '巡防联动' }
    }

  ]
}

export default intelAppRouter

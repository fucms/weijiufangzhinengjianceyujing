import Layout from '@/layout'

const patrolDefenceRouter = {
  path: '/patrolDefence',
  component: Layout,
  redirect: '/personnelManage/index.vue',
  meta: {
    title: '巡防联动',
    icon: 'nested'
  },
  children: [
    {
      path: '/personnelManage',
      component: () => import('@/views/a_patrolDefence/personnelManage/index.vue'),
      name: 'personnelManage',
      meta: { title: '人员管理' }
    },
    {
      path: '/taskManage',
      component: () => import('@/views/a_patrolDefence/taskManage/index.vue'),
      name: 'taskManage',
      meta: { title: '任务管理' }
    },
    {
      path: '/riskAlerts',
      component: () => import('@/views/a_patrolDefence/riskAlerts/index.vue'),
      name: 'riskAlerts',
      meta: { title: '风险告警' }
    },
    {
      path: '/alarmConfiguration',
      component: () => import('@/views/a_patrolDefence/alarmConfiguration/index.vue'),
      name: 'alarmConfiguration',
      meta: { title: '告警配置' }
    },
    {
      path: '/inspectionManage',
      component: () => import('@/views/a_patrolDefence/inspectionManage/index.vue'),
      name: 'inspectionManage',
      meta: { title: '巡检管理' }
    },
    {
      path: '/workOrderManage',
      component: () => import('@/views/a_patrolDefence/workOrderManage/index.vue'),
      name: 'workOrderManage',
      meta: { title: '巡防工单管理' }
    }
  ]
}

export default patrolDefenceRouter

import Layout from '@/layout'

const storageRouter = {
  path: '/storage',
  component: Layout,
  redirect: '/storageManage/index.vue',
  meta: {
    title: '隐患治理模块',
    icon: 'nested'
  },
  children: [
    {
      path: '/locationManage',
      component: () => import('@/views/storageManage/locationManage/index.vue'),
      name: 'locationManage',
      meta: { title: '隐患整改申报' }
    },
    {
      path: '/itemCount',
      component: () => import('@/views/storageManage/itemCount/index.vue'),
      name: 'itemCount',
      meta: { title: '隐患整改审核' }
    },
    {
      path: '/inventoryManage',
      component: () => import('@/views/storageManage/inventoryManage/index.vue'),
      name: 'inventoryManage',
      meta: { title: '数据汇总查询' }
    }
  ]
}

export default storageRouter

import Layout from '@/layout'

const storageRouter = {
  path: '/storage',
  component: Layout,
  redirect: '/storageManage/index.vue',
  meta: {
    title: '仓储管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/locationManage',
      component: () => import('@/views/storageManage/locationManage/index.vue'),
      name: 'locationManage',
      meta: { title: '库位管理' }
    },
    {
      path: '/itemCount',
      component: () => import('@/views/storageManage/itemCount/index.vue'),
      name: 'itemCount',
      meta: { title: '物料盘点' }
    },
    {
      path: '/inventoryManage',
      component: () => import('@/views/storageManage/inventoryManage/index.vue'),
      name: 'inventoryManage',
      meta: { title: '库存台账' }
    }
  ]
}

export default storageRouter

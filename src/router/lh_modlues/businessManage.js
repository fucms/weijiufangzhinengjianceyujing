import Layout from '@/layout'

const businessRouter = {
  path: '/business',
  component: Layout,
  redirect: '/customerManage/index.vue',
  meta: {
    title: '业务管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/customerManage',
      component: () => import('@/views/businessManage/customerManage/index.vue'),
      name: 'customerManage',
      meta: { title: '客户管理' }
    },
    {
      path: '/supplierManage',
      component: () => import('@/views/businessManage/supplierManage/index.vue'),
      name: 'supplierManage',
      meta: { title: '供应商管理' }
    },
    {
      path: '/productManage',
      component: () => import('@/views/businessManage/productManage/index.vue'),
      name: 'productManage',
      meta: { title: '商品管理' }
    },
    {
      path: '/materialsManage',
      component: () => import('@/views/businessManage/materialsManage/index.vue'),
      name: 'materialsManage',
      meta: { title: '材料管理' }
    },
    {
      path: '/orderManage',
      component: () => import('@/views/businessManage/orderManage/index.vue'),
      name: 'orderManage',
      meta: { title: '订单管理' }
    },
    {
      path: '/dispatchManage',
      component: () => import('@/views/businessManage/dispatchManage/index.vue'),
      name: 'dispatchManage',
      meta: { title: '出货计划' }
    }
  ]
}

export default businessRouter

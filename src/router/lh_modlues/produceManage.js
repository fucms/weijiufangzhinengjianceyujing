import Layout from '@/layout'

const produceRouter = {
  path: '/produce',
  component: Layout,
  redirect: '/basicInfo/index.vue',
  meta: {
    title: '生产管理',
    icon: 'nested'
  },
  children: [
    {
      path: '/basicInfo',
      component: () => import('@/views/produceManage/basicInfo/index.vue'),
      name: 'basicInfo',
      meta: { title: '基础信息' }
    },
    {
      path: '/tailorManage',
      component: () => import('@/views/produceManage/tailorManage/index.vue'),
      name: 'tailorManage',
      meta: { title: '裁剪管理' }
    },
    {
      path: '/qualityManage',
      component: () => import('@/views/produceManage/qualityManage/index.vue'),
      name: 'qualityManage',
      meta: { title: '质检应用' }
    },
    {
      path: '/deviceManage',
      component: () => import('@/views/produceManage/deviceManage/index.vue'),
      name: 'deviceManage',
      meta: { title: '设备管理' }
    },
    {
      path: '/outOrderManage',
      component: () => import('@/views/produceManage/outOrderManage/index.vue'),
      name: 'outOrderManage',
      meta: { title: '外协订单管理' }
    },
    {
      path: '/outFactoryManage',
      component: () => import('@/views/produceManage/outFactoryManage/index.vue'),
      name: 'outFactoryManage',
      meta: { title: '外协工厂管理' }
    }
  ]
}

export default produceRouter

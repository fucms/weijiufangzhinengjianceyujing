import Layout from '@/layout'

const visualRouter = {
  path: '/visualPlatform',
  component: Layout,
  redirect: '/buildingImaging/index.vue',
  meta: {
    title: '可视化支撑平台',
    icon: 'nested'
  },
  children: [
    {
      path: '/buildingImaging',
      component: () => import('@/views/a_visualPlatform/buildingImaging/index.vue'),
      name: 'buildingImaging',
      meta: { title: '楼宇成像' }
    },
    {
      path: '/largeScreen',
      component: () => import('@/views/a_visualPlatform/largeScreen/index.vue'),
      name: 'largeScreen',
      meta: { title: '大屏展示' }
    }

  ]
}

export default visualRouter

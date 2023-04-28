const routes = [
  {
    name: 'test',
    path: '/test',
    component: () => import('@/view/test/Index')
  },
  {
    name: 'varlet',
    path: '/varlet',
    component: () => import('@/view/varlet/Index')
  },
  // {
  //   name: 'b',
  //   path: '/b',
  //   component: () => import('@/view/b/index.vue')
  // },

];

export default routes

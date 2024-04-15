const routes = [
  {
    path: '/auth/login',
    name: 'auth-login',
    component: () => import('@/pages/LoginPage.vue')
  },
  {
    path: '/auth/register',
    name: 'auth-register',
    component: () => import('@/pages/RegisterPage.vue'),
    meta: {
      authRequired: false
    }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('@/pages/TasksPage.vue'),
    meta: {
      authRequired: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue')
  }
]

export default [
  {
    path: '/',
    name: 'admin',
    children: routes
  }
]

import { createRouter, createWebHistory } from 'vue-router'
import CreateApp from '../views/createApp.vue'
import UpdateApp from '../views/UpdateApp.vue'
import DeleteApp from '../views/DeleteApp.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: CreateApp
  },
  {
    path: '/update/:id',
    name: 'update-app',
    component: UpdateApp
  },
  {
    path: '/delete/',
    name: 'delete-app',
    component: DeleteApp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

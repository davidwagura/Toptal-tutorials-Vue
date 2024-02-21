/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import CreateApp from '../views/CreateApp.vue'
import UpdateApp from '../views/UpdateApp.vue'
import DeleteApp from '../views/DeleteApp.vue'


const routes = [
    {
        path: '/create',
        name: 'create',
        component: CreateApp
    },
    {
        path: '/update/:id',
        name: 'update-app',
        component: UpdateApp
    },
    {
        path: '/delete/:id',
        name: 'delete-app',
        component: DeleteApp
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

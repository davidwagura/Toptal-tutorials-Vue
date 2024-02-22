/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/IndexItem.vue'
import Create from '../views/CreateItem.vue'
import UpdateApp from '../views/UpdateApp.vue'
import DeleteApp from '../views/DeleteApp.vue'


const routes = [
    {
        path: '/',
        name: 'index',
        component: IndexItem
    },
    {
        path: '/create',
        name: 'create',
        component: CreateItem
    },

    {
        path: '/update/:id',
        name: 'update',
        component: UpdateApp
    },
    {
        path: '/delete/:id',
        name: 'delete-app',
        component: DeleteApp
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

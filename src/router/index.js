/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import IndexItem from '../views/IndexItem.vue'
import CreateItem from '../views/CreateItem.vue'
import UpdateApp from '../views/UpdateApp.vue'


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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

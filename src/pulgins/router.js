import defaultlayout from '@layout/default/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: defaultlayout
    }
]


export default createRouter({
    "history": createWebHistory(),
    "routes": routes
})
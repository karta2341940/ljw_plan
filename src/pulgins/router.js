import defaultlayout from '@layout/default/index.vue'
import introduction from '@layout/introduction/index.vue'
import methodAndStrategy from '@layout/methodAndStrategy/index.vue'
import result from '@layout/result/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: defaultlayout
    },
    {
        path: '/introduction',
        component: introduction
    },
    {
        path: '/methodAndStrategy',
        component: methodAndStrategy
    },    
    {
        path: '/result',
        component: result
    }

]


export default createRouter({
    "history": createWebHistory(),
    "routes": routes
})
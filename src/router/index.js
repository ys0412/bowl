// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/services', name: 'Services', component: () => import('../views/ServiceView.vue') },
  { path: '/news', name: 'News', component: () => import('../views/NewsView.vue') },
  { path: '/news/:id', name: 'NewsDetail', component: () => import('../views/NewsDetailView.vue') } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

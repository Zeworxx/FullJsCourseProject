import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TodayTask from '../components/TodayTask.vue'
import SevenDayTask from '../components/SevenDayTask.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/today-task', name: 'today', component: TodayTask },
    { path: '/seven-day-task', name: 'seven', component: SevenDayTask },
    { path: '/login', name: 'login', component: Login }
  ]
})

export default router

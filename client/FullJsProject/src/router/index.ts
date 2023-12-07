import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TodayTask from '../components/TodayTask.vue'
import SevenDayTask from '../components/SevenDayTask.vue'
import Login from '../components/Login.vue'

function isAuthenticated() {
  const token = localStorage.getItem('token')
  return token
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage, meta: { requiresAuth: true } },
    { path: '/today-task', name: 'today', component: TodayTask, meta: { requiresAuth: true } },
    { path: '/seven-day-task', name: 'seven', component: SevenDayTask, meta: { requiresAuth: true } },
    { path: '/login', name: 'login', component: Login }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router

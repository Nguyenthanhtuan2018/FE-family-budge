import { createRouter, createWebHistory } from 'vue-router'

// Tùy bạn có file gì thì import file đó. Ví dụ:
import Dashboard from '../pages/Dashboard.vue'
import Transactions from '../pages/Transactions.vue'
import Budgets from '../pages/Budgets.vue'
import Login from '../pages/Login.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/transactions', component: Transactions },
  { path: '/budgets', component: Budgets },
  { path: '/login', component: Login },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // fallback
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router   // ✅ export default (để main.js import router)

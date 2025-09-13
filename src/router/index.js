import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../pages/Dashboard.vue';
import Transactions from '../pages/Transactions.vue';
import Budgets from '../pages/Budgets.vue';
const routes=[{path:'/',component:Dashboard},{path:'/transactions',component:Transactions},{path:'/budgets',component:Budgets}];
export default createRouter({history:createWebHistory(),routes});


import { useAuth } from "../stores/auth.js";
router.beforeEach((to, _from, next) => {
  const auth = useAuth();
  const protectedPaths = ["/transactions", "/budgets"];
  if (protectedPaths.includes(to.path) && !auth.isAuthenticated) {
    return next({ path: "/login" });
  }
  next();
});

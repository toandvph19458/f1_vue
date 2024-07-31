import { createRouter, createWebHistory } from 'vue-router';
import Table3 from '../views/Table3.vue';   
const routes = [
  {
    path: '/',
    component: Table3
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestPage from '@/components/TestPage.vue'

// Define routes properly
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/testpage/:id',
    name: 'Testpage',
    component: TestPage,
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // or use createMemoryHistory() if needed
  routes,
});

export default router;

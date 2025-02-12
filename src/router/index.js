import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import TestPage from '@/components/TestPage.vue';
import UserPage from '@/components/UserPage.vue';
import UserProfile from '@/components/UserProfile.vue';
import UserPosts from '@/components/UserPosts.vue';

// Define routes properly
const routes = [
  {
    path: '/users/:id',  
    name: 'UserPage',
    component: UserPage,
    children: [
      {
        path: 'profile',
        name: 'UserProfile',
        component: UserProfile,
      },
      {
        path: 'posts',
        name: 'UserPosts',
        component: UserPosts,
      },
    ],
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // or use createMemoryHistory() if needed
  routes,
});

export default router;

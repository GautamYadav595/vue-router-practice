// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import TestPage from '@/components/TestPage.vue';
// import UserPage from '@/components/UserPage.vue';
// import UserProfile from '@/components/UserProfile.vue';
// import UserPosts from '@/components/UserPosts.vue';

// Define routes properly

// {
  //   path: '/users/:id',  
  //   name: 'UserPage',
  //   component: UserPage,
  //   children: [
  //     {
  //       path: 'profile',
  //       name: 'UserProfile',
  //       component: UserProfile,
  //     },
  //     {
  //       path: 'posts',
  //       name: 'UserPosts',
  //       component: UserPosts,
  //     },
  //   ],
  // },

import HomePage from '@/components/pages/HomePage.vue';
import LogIn from '@/components/pages/LogIn.vue';
import LogOut from '@/components/pages/LogOut.vue';

import UserProfile from '@/components/pages/UserProfile.vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {path: '/',  component: HomePage},
  {path: '/login', component: LogIn},
  {path: '/user', component: UserProfile, meta: {requiresAuth: true}},
  {path: '/logout', component: LogOut}
  
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // or use createMemoryHistory() if needed
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store || !store.getters || typeof store.getters.isAuthenticated === 'undefined') {
      next('/login'); // Redirect to login if `store.getters` is undefined
    } else if (!store.getters.isAuthenticated) {
      next('/login'); // Redirect to login if not authenticated
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;

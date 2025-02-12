<template>
   <div>
    
    <!-- Login Page Header (Blue Background) -->
    <div class="bg-purple-600 text-white text-center py-20 h-[200px]">
      <h2 class="text-3xl font-bold">Login Page</h2>
    </div>

    <!-- Login Form -->
    <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
      <form @submit.prevent="handleLogin">
        <label class="block font-semibold text-gray-700">Username</label>
        <input 
          type="text" 
          v-model="username" 
          placeholder="Enter your username"
          class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          required 
        />

        <label class="block font-semibold text-gray-700 mt-4">Password</label>
        <input 
          type="password" 
          v-model="password" 
          placeholder="Enter your password"
          class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          required 
        />

        <button 
          type="submit" 
          class="mt-6 bg-white text-blue-500 font-semibold px-6 py-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
  
  <script>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { ref, watchEffect } from 'vue';
  
  export default {
    setup() {
      const store = useStore();
      const router = useRouter();
      const username = ref('');
      const password = ref('');
  
      const handleLogin = () => {
        if (username.value && password.value) {
          store.dispatch('login', { username: username.value });
  
          // ✅ Wait for Vuex state to update before redirecting
          watchEffect(() => {
            if (store.getters.isAuthenticated) {
              router.push('/user');
            }
          });
        }
      };
  
      return { username, password, handleLogin };
    }
  };
  </script>
  
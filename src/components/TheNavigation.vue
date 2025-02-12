<template>
    <!-- Navbar for Non-Authenticated Users -->
    <nav v-if="!isAuthenticated" class="bg-yellow-400 py-4 px-6 flex justify-between items-center shadow-md">
      <h1 class="text-l font-bold text-blue-500"><router-link to="/">VUE</router-link></h1>
      <router-link to="/login" class="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md font-semibold">
          Login
      </router-link>
    </nav>
  
    <!-- Navbar for Authenticated Users -->
    <nav v-else class="bg-yellow-400 py-4 px-6 flex justify-between items-center shadow-md">
      <h1 class="text-l font-bold text-blue-500">VUE</h1>
      <div class="flex gap-4">
        <router-link to="/logout">
          <button class="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md font-semibold">
            Logout
          </button>
        </router-link>
      </div>
    </nav>
  </template>


<script>
import { computed  } from 'vue';
import { useStore } from 'vuex';
export default{
    setup(){
        const store = useStore();
        const isAuthenticated = computed(() => store.getters.isAuthenticated);
        return { isAuthenticated };
    }
}
</script>

<!-- <template>
  
  <nav
    v-if="!isAuthenticated"
    class="bg-yellow-400 py-4 px-6 flex justify-between items-center shadow-md"
  >
    <h1 class="text-l font-bold text-blue-500">
      <router-link to="/">VUE</router-link>
    </h1>
    <router-link
      to="/login"
      class="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md font-semibold"
    >
      Login
    </router-link>
  </nav>

  
  <nav
    v-else
    class="bg-yellow-400 py-4 px-6 flex justify-between items-center shadow-md"
  >
    <h1 class="text-l font-bold text-blue-500">VUE</h1>
    <div class="flex gap-4">
      <router-link to="/logout">
        <button
          class="bg-white text-blue-500 px-4 py-2 rounded-md shadow-md font-semibold"
        >
          Logout
        </button>
      </router-link>
    </div>
  </nav>
</template>


<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const isAuthenticated = computed(() => store.getters.isAuthenticated);
    return { isAuthenticated };
  },
};
</script> -->


<template>
  <div class="bg-[rgba(245,242,235,1)] w-[298px] flex justify-end items-center py-4 gap-3 fixed top-0 right-20">
 
  <router-link to="/" class="text-gray-800 hover:text-gray-600 transition h-[24px] w-[24px]"><i class="h-[19px] w-[19px] fa-solid fa-globe mr-2"></i></router-link>
  <router-link to="/login" class="text-gray-800 hover:text-gray-600 transition mr-2  w-[86px] p-[12px]">Log In</router-link>


   <div class="w-[164px] h=[45px ]">
  <button class="w-[164px] bg-[rgba(174,214,179,1)] text-white font-semibold py-2 rounded ">
    Request Demo <i class="fa-solid fa-arrow-up transform rotate-45"></i>

  </button>
</div>
</div>

</template>

<script>
export default{}
</script>



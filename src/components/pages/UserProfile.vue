<template>
    <div class="bg-purple-600 text-white text-center py-20 h-[200px]">
      <h2 class="text-3xl font-bold">User Profile</h2>
    </div>
    
        <h3 class="text-3xl font-bold text-black text-center py-20">Hello, {{ user.username }}</h3>
   
    
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup(){
        const store = useStore();;
        const user = computed(() => store.getters.user);
        return {user};
    }
}
</script>
<template>

    <div>
        <h3 class="text-3xl font-bold text-black">You have succesfully Log Out</h3>
    </div>
</template>



<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

export default {
    setup(){
        const store = useStore();
        const router = useRouter();

  
    onMounted(() => {
        store.dispatch('logout');
        router.push('/login');
    })
},
}
</script>

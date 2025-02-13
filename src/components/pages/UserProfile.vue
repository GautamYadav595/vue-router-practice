<template>
    

    <h3 class="text-3xl font-bold text-black text-center py-10">
        Hello, {{ user ? user.username : 'Guest' }}
    </h3>

    <p v-if="successMessage" class="success text-green-600 text-center text-lg font-semibold">
        {{ successMessage }}
    </p>

    <div class="text-center mt-5">
        <button @click="logoutUser" class="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const user = computed(() => store.getters.user);
        const successMessage = ref('');

        // Check if user is logged in

        // Logout function
        const logoutUser = () => {
            store.dispatch('logout');
            router.push('/');
        };

        return { user, logoutUser };
    }
};
</script>

<style scoped>
.success {
    margin-top: 10px;
}
</style>

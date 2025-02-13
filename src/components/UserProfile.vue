<!-- <template>
    <div>This is User Profile</div>

</template>

export default {}; -->

<template>
    <div class="logged-in-container">
        <h2>You are Logged In</h2>
    
        <div class="user-details">
            <h2>Welcome, {{ user?.firstName }}!</h2>
            <h2>Your details are:</h2>
            <h4>Firstname: {{ user?.firstName }}</h4>
            <h4>Lastname: {{ user?.lastName }}</h4>
            <h4>Age: {{ user?.age }}</h4>
    
            <button @click="logoutUser" class="logout-button">Logout</button>
        </div>
    </div>
    
    </template>
    
    <script>
    import { mapActions, mapState } from 'vuex';
    
    export default {
        computed:{
            ...mapState(['user'])
        },
        methods:{
            ...mapActions(['logout']),
            logoutUser(){
                this.logout();
                this.$router.push('/');
    
            }
        }
    }
    </script>
    
    
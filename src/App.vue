<template>
  
  <!-- <h1>Nested Views</h1>
  <p>
    <router-link :to="`/users/${id}`">/users/Gautam</router-link>
    <br />
    <router-link :to="`/users/${id}/profile`">/users/Gautam/profile</router-link>
    <br />
    <router-link :to="`/users/${id}/posts`">/users/Gautam/posts</router-link>
  </p> -->
  <div>
  <TheNavigation />
  <router-view></router-view>
</div> <!-- Renders UserPage -->
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    
    TheNavigation
    },
  data() {
    return {
      id: 'Gautam', // Ensure correct spelling (was 'Guatam')
    };
  },
};
</script>

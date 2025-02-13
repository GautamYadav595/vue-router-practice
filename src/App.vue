<template>
  
  <!-- <h1>Nested Views</h1>
  <p>
    <router-link :to="`/users/${id}`">/users/Gautam</router-link>
    <br />
    <router-link :to="`/users/${id}/profile`">/users/Gautam/profile</router-link>
    <br />
    <router-link :to="`/users/${id}/posts`">/users/Gautam/posts</router-link>
  </p> -->
  <div class="bg-[rgba(245,242,235,1)] h-screen">
  <TheNavigation />
  <router-view></router-view>
</div>
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';


export default {
  name: 'App',
  components: {
    
    TheNavigation
    },
  
};
</script>

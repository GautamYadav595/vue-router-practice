<template>
  <h1>Nested Views</h1>
  <p>
    <router-link :to="`/users/${id}`">/users/Gautam</router-link>
    <br />
    <router-link :to="`/users/${id}/profile`">/users/Gautam/profile</router-link>
    <br />
    <router-link :to="`/users/${id}/posts`">/users/Gautam/posts</router-link>
  </p>
  <router-view></router-view> <!-- Renders UserPage -->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      id: 'Gautam', // Ensure correct spelling (was 'Guatam')
    };
  },
};
</script>

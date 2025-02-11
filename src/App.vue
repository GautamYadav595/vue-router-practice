<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/Testpage">Go to Testpage</RouterLink>

    <button v-on:click="handleClick">Click to go to test page</button>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import TestPage from './components/TestPage.vue';


export default{
  name: 'App',
  data(){
    return{
      msg: 'Hello Vue!'
      }
  },
  methods: {
    handleClick(){
      this.$router.push('/testpage');
    }
  }
  
}

</script>



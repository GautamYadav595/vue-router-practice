<template>
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-link to='user/id/userprofile'></router-link>
      <router-view />
    </div>
  </template>

  <script></script>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/test">Go to Test</router-link>
      <router-link to="/h-todo">h-todo</router-link>
      <router-link to="/tour">tour</router-link>
      <router-link to="/Essentials">Essentials</router-link>
      <router-link to="/vue2/1">vue2</router-link>
      <router-link to="/vue-router/1">router</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  display: flex;
  gap: 10px;
}
</style>

<template>
  <div>
    <h1>Home page!</h1>
    <nav>
      <router-link v-bind:to="{name: 'about'}">About</router-link>
      <router-link v-bind:to="{name: 'login'}">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
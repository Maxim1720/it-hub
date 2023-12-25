<template>
  <div>
    <h1>Main</h1>
    <nav>
      <router-link v-bind:to="{name: 'home'}">Home</router-link>
      <router-link v-bind:to="{name: 'about'}">About</router-link>  
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  gap: 20px;
}
</style>
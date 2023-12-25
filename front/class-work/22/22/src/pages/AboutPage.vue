<template>
  <div class="container">
    <h1>About page!</h1>
    <router-link to="/">to Home</router-link>
    <button @click="pushHome">Go to home</button>
  </div>
</template>

<script>
export default {
    methods:{
        pushHome(){
            this.$router.push({
                name : "home"
            })
        }
    }
}
</script>

<style>
.container{
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #4a44;
}
</style>
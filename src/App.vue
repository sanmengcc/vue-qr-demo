<template>
  <div id="app">
    <router-link :to="{name:'Login'}"></router-link>
    <router-link :to="{name:'Index'}"></router-link>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ptable from "@/components/ptable";
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // ptable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

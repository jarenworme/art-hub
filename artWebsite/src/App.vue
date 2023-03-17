<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import BasePage from './components/BasePage.vue'
export default {
  name: 'App',
  components: {
    BasePage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>

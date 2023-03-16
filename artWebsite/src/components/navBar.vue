<template>
  <div class="navbar">
    <button class="nav-button" v-on:click="setPage(1)">home</button>
    <button v-if="pagenum == 3" class="nav-button" v-on:click="setPage(2)">arthub</button>
    <button v-if="pagenum == 2" class="nav-button" v-on:click="setPage(3)">jarens pieces</button>
  </div>
</template>

<script>
export default{
  name: 'navBar',
  props: {
    pagenum: Number
  },
  data () {
    return {}
  },
  methods: {
    setPage (pagenum) {
      this.$emit('newpage', pagenum)
    }
  }
}
</script>

<style scoped>
.navbar{
  display: flex;
}
</style>

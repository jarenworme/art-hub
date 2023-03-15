<template>
  <div class="home-page">
    <navBar/>
    <div>
    </div>
  </div>
</template>

<script>
import navBar from './navBar.vue'
import blogBase from './blogBase.vue'
import pieceCollections from './pieceCollections.vue'

export default {
  name: 'HelloWorld',
  components: {
    navBar,
    blogBase,
    pieceCollections
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: aqua;
}
</style>

<template>
  <div class="base-page">
    <div class="nav-bar">
      <navBar v-if="pagenum != 1" :pagenum="pagenum" @newpage="switchPage"/>
    </div>
    <div v-if="pagenum == 1" class="home-page">
      <HomePage :pagenum="pagenum" @newpage="switchPage"></HomePage>
    </div>
    <div v-if="pagenum == 2" class="blog-page">art hub page
    </div>
    <div v-if="pagenum == 3" class="jaren-page">jarens art page
    </div>
  </div>
</template>

<script>
import navBar from './navBar.vue'
import HomePage from './HomePage.vue'
import BlogPage from './BlogPage.vue'
import pieceCollections from './pieceCollections.vue'

export default {
  name: 'BasePage',
  components: {
    navBar,
    HomePage,
    BlogPage,
    pieceCollections
  },
  data () {
    return {
      pagenum: 3 // 1 -> home page, 2 -> blogpage, 3 -> jaren's pieces
    }
  },
  methods: {
    switchPage (pagenum) {
      this.pagenum = pagenum
      console.log(this.pagenum)
    }
  }
}
</script>

<style scoped>
.nav-bar {
  width: 100%;
  height: 10vh;
  top: 0;
  left: 0;
  position: fixed;
  background: #000;
}
</style>

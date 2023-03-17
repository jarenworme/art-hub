<template>
  <div class="base-page">
    <div class="nav-bar">
      <navBar v-if="pagenum != 1" :pagenum="pagenum" @newpage="switchPage"/>
    </div>
    <div v-if="pagenum == 1" class="home-page">
      <HomePage :pagenum="pagenum" @newpage="switchPage"></HomePage>
    </div>
    <BlogPage v-if="pagenum == 2"></BlogPage>
    <PieceCollections v-if="pagenum == 3"></PieceCollections>
  </div>
</template>

<script>
import navBar from './navBar.vue'
import HomePage from './HomePage.vue'
import BlogPage from './BlogPage.vue'
import PieceCollections from './pieceCollections.vue'

export default {
  name: 'BasePage',
  components: {
    navBar,
    HomePage,
    BlogPage,
    PieceCollections
  },
  data () {
    return {
      pagenum: 3 // 1 -> home page, 2 -> blogpage, 3 -> jaren's pieces
    }
  },
  methods: {
    switchPage (pagenum) {
      this.pagenum = pagenum
    }
  }
}
</script>

<style scoped>
.base-page {
  height: 100%;
  width: 100%;
}
.nav-bar {
  width: 100%;
  height: 10vh;
  top: 0;
  left: 0;
  position: fixed;
  background: #282828;
}
</style>

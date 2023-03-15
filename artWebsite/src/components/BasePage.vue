<template>
  <div class="base-page">
    <navBar v-if="page == 2 || page == 3"/>
    <div v-if="page == 1" class="home-page">
      <HomePage :page="page" @page-2="page2" @page-3="page3"></HomePage>
    </div>
    <div v-if="page == 2" class="blog-page">art hub page
    </div>
    <div v-if="page == 3" class="jaren-page">jarens art page
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
      page: 1 // 1 -> home page, 2 -> blogpage, 3 -> jaren's pieces
    }
  },
  methods: {
    page2 () {
      this.page = 2
    },
    page3 () {
      this.page = 3
    }
  }
}
</script>

<style scoped>
</style>

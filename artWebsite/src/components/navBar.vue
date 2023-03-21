<template>
  <div class="navbar">
    <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet'>
    <div class="logo">
      <img src="@/assets/jwlogo.png">
    </div>
    <div class="button-space">
      <div class="button-container">
       <button class="nav-button" v-on:click="setPage(1)"><div class="home">home</div></button>
      </div>
      <div v-if="pagenum == 3" class="button-container">
        <button class="nav-button" v-on:click="setPage(2)"><div class="text">arthub</div></button>
      </div>
      <div v-if="pagenum == 2" class="button-container">
        <button class="nav-button" v-on:click="setPage(3)"><div class="text">list collections</div></button>
      </div>
    </div>
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
.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.logo {
  width: 10%;
  height: 80%;
  margin-left: 3%;
  background-color: aliceblue;
  border-radius: 20px;
}

img {
  height: 100%;
}
.button-space {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}

.nav-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #087FD6;
  background-color: #FFF;
  border: none;
  border-radius: 13px;
  height: 60%;
  margin: 0 20px;
}

.text {
  font-family: lobster;
  font-size: 200%;
  min-width: fit-content;
  margin: 0 20px;
}

.home {
  font-family: lobster;
  font-size: 200%;
  margin: 0 30px;
}

.nav-button:hover {
  background-color: #087FD6;
  color: #FFF;
  border: none;
}
</style>

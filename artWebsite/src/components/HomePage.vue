<template>
  <div class="home-page">
    <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet'>
    <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet">
  <div class="card">
    <div class="button1-container">
      <button class="option-button1" v-on:click="setPage(2)">Art Hub</button>
    </div>
    <hr>
    <div class="button2-container">
      <button class="option-button2" v-on:click="setPage(3)">Jaren's Collections</button>
    </div>
    <div class="footer-info">
      <div class="logo">
        <img src="@/assets/jwlogo.png"/>
      </div>
      <div class="spacer"></div>
      <div class="instagram">
        <a class="ig-link" href="https://www.instagram.com/jarens_art_/" target="_blank">
          <i class="fab fa-instagram"></i>  @jarens_art_
        </a>
      </div>
      <div class="website">
        <a href="https://www.jarenworme.com/" target="_blank">jarenworme.com</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default{
  name: 'HomePage',
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
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /*background: #69EBCD; original background*/
  background: linear-gradient(170deg, #B6FF7D 0%, #159947 70%);
}

.card {
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  background-color: #FFF;
  width: 80%;
  height: 80%;
}

.button1-container {
  height: 55%;
}

.button2-container {
  height: 35%
}

.button1-container, .button2-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

hr {
  width: 80%;
  border: 4px solid #087FD6;
  border-radius: 6px;
}

.option-button1 {
  height: 60%;
  font-size: 400%;
}

.option-button2 {
  height: 45%;
  font-size: 300%;
}
.option-button1, .option-button2 {
  font-family: lobster;
  background-color: #FFF;
  border: 3px solid #000;
  border-radius: 20px;
  width: 70%;
}

.option-button1:hover, .option-button2:hover {
  background-color: #087FD6;
  color: #FFF;
  border: none;
}

.footer-info {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 10%;
  font-family: lobster;
}

.logo {
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

img {
  margin-top: -40%;
  height: 100%;
}

.spacer {
 width: 45%;
}

.instagram {
  width: 20%;
}

a, a:visited {
  color: #000;
  font-size: 140%;
  text-decoration: none;
}

a:hover {
  color: #087FD6;
  font-weight: bold;
}
.website {
  width: 20%;
}
</style>

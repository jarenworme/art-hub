<template>
  <div class="collections-base">
    <div class="categories">
      <button></button>
    </div>
    <div class="upload">
      <input class="question-text-box" type="text" placeholder="Untitled Question" v-model="currObj.title">
      <label>
			  <input :id="'file-upload-' + index" type="file" class="hide" accept="image/*" v-on:change="uploadImage()">
			  <!-- file upload icon -->
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
					<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
					<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
				</svg>
			</label>
      <h4>selected collection: {{ currCollection }}</h4>
      <button v-for="item in colObj" v-on:click="selectCollection(item.name)">{{ item.name }}</button>
      <button v-on:click="addPiece()">Submit</button>
    </div>
    <div v-for="item in colObj" class="collection">
      <h1>{{item.name }}</h1>
      <hr>
      <div v-for="piece in item.content" class="piece">
        <h1>{{piece.title }}</h1>
        <div class="img-container">
          <img :src="piece.imgSrc">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name: 'BlogPage',
  data () {
    return {
      currObj: {title: "", imgSrc: ""},
      currCollection: "",
      colObj: [
        //{name: "collection1", content:[{title: "avatar", imgSrc: ""}, {title: "mannfield", imgSrc: "@/assets/Mannfield.jpg"}, {title: "golf", imgSrc: "@/assets/IMG-0427.jpg"}]},
        //{name: "collection2", content:[{title: "col2item", imgSrc: ""}]},
        {name: "collection1", content:[]},
        {name: "collection2", content:[]},
        {name: "collection3", content:[]}
      ],
      index: 3
    };
  },
  methods: {
    uploadImage() {
			const uploadButton = document.getElementById("file-upload-" + this.index)
			this.currObj.imgSrc = URL.createObjectURL(uploadButton.files[0])
			//Vue.set(this.currObj, id-1, URL.createObjectURL(uploadButton.files[0]))
		},
    addPiece() {
      console.log(this.colObj)
      for(let i = 0; i<this.colObj.length; i++){
        if(this.colObj[i].name == this.currCollection){
          this.colObj[i].content.push(this.currObj)
          this.currObj = {title: "", imgSrc: ""}
          this.index++
          this.currCollection = ""
        }
      }
      
    },
    selectCollection(colName) {
      this.currCollection = colName
    },
  }
}
</script>

<style scoped>
.collections-base {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #087FD6;
}

.categories, .upload, .piece {
  width: 80%;
  box-shadow: 3px 3px #b1daf8;
  border-radius: 30px;
  background-color: #FFF;
}
.categories {
  margin-top: 15vh;
  height: 200px;
}

.upload {
  height: 200px;
  margin-top: 5vh;
}

.collection {
  color: #FFF;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
}

.collection:last-of-type{
  margin-bottom: 5vh;
}

h1 {
  margin: 0;
}

hr {
  border: 3px solid #FFF;
  width: 100%;
  margin: 0 0 -2vh 0;
}

.piece {
  margin-top: 5vh;
  height: 300px;
  background-color: #FFF;
  width: 90%;
  color: #000;
}

.img-container{
  width: 60%;
  height: 70%;
}

img{
  height: 100%;
}

.hide{
  width: 0px;
}
</style>
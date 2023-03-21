<template>
  <div class="collections-base">
    <div class="categories">
      <button></button>
    </div>
    <div class="upload">
      <label>
					<input :id="'file-upload-' + index + '-' + i" type="file" class="d-none" accept="image/*" v-on:change="uploadImage(i)">
					<!-- file upload icon -->
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
						<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
						<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
					</svg>
				</label>
    </div>
    <div v-for="item in colObj" class="collections">{{ item }}</div>
  </div>
</template>

<script>
export default{
  name: 'BlogPage',
  data () {
    return {
      colObj: ["title: ", "b", "c", "d", "e", "f"],
    };
  },
  methods: {
    uploadImage(id) {
			const uploadButton = document.getElementById("file-upload-" + this.index + "-" + id)
			this.content.options[id-1].imgSrc = URL.createObjectURL(uploadButton.files[0])
			Vue.set(this.imgSrcs, id-1, URL.createObjectURL(uploadButton.files[0]))
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

.categories, .collections, .upload {
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

.collections {
  margin-top: 5%;
  height: 300px;
}
</style>

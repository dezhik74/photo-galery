<template>
  <div id="app">
    <h1>Учебная галерея</h1>
    <ul class="list-container">
      <photo-item v-for="item in photoData" :key="item.id" :photo="item" @show-lb="showLB"/>
    </ul>
    <div>
    <the-light-box 
      v-if="selectedPhoto.id" 
      :photo="selectedPhoto" 
      @like-dec="decLikes"
      @like-inc="incLikes"
      @add-comment="addComment"
      @close-lb="closeLB"
    />

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import getPhotoData from "./api/api"
import PhotoItem from "./components/PhotoItem.vue"
import TheLightBox from "./components/TheLightBox.vue"

export default {
  name: 'App',
  components: {
    PhotoItem,
    TheLightBox,
  },
  data() {
    return {
      photoData: [],
      selectedPhoto: {},
    }
  },
  created (){
    getPhotoData()
      .then(result => this.photoData = result)
  },
  methods: {
    showLB (photo) {
      console.log("click")
      this.selectedPhoto = photo
      if (!photo.likes) Vue.set(photo, "likes", 0)
      if (!photo.comments) Vue.set(photo, "comments", [])
    },
    decLikes (photo) {
      if (photo.likes > 0) {
        photo.likes --
      }
    },
    incLikes (photo) {
      photo.likes ++
    },
    addComment (photo, newValue) {
      // console.log(photo, newValue)
      photo.comments.push(newValue)
    },
    closeLB () {
      this.selectedPhoto = {}
    }
  }

  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 900px;
  margin: auto;
}

.list-container  {
  max-width: 100%;
  padding: 0;
  /* display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 8px;
  row-gap: 8px; */
  display: flex;
  flex-flow: row wrap;

}

</style>

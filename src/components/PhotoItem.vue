<template>
  <li class="photo-container" @click="$emit('show-lb', photo)">
    <img class="image" :src="photo.url" :alt="photo.id">
    <div class="title">
      <b>Название: </b>{{ photo.title }}
    </div>
    <div class="data-block">
      <div>
        <b>К: </b> {{ photo.comments ? photo.comments.length : 0}}
      </div>
      <div>
        <b>Л: </b> {{ photo.likes ? photo.likes : 0}}
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "PhotoItem",
  props: {
    photo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
  .photo-container {
    margin: 8px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
    background-color: rgb(238, 235, 235);
    border-radius: 5px;
    box-shadow: 13px 10px 19px 0px #6C6D69;    
  }
  .image {
    max-width: 100%;
    border-radius: 5px;
  }

  .title {
  }

  .data-block {
    margin-top: auto;
    display: flex;
    width: 100%;
    justify-content: space-between
  }
</style>
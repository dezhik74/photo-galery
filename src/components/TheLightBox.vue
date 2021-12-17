<template>
    <div class="backdrop" @click="$emit('close-lb', photo)">
        <div class="lb-container" @click.stop>
            <button class="close-button" @click="$emit('close-lb', photo)">X</button>
            <h3>{{ photo.title }}</h3>
            <img class="image" :src="photo.url" :alt="photo.id" />
            <div class="data-block">
                <div class="like-block">
                    <b>Лайки: </b>
                    <button class="like-button" @click="$emit('like-dec', photo)">-</button>
                    {{ photo.likes }}
                    <button class="like-button" @click="$emit('like-inc', photo)">+</button>
                </div>
                <div class="comments-block">
                    <b>Комменты</b>
                    <div v-for="(comment, idx) in photo.comments" :key="`${photo.id}-${idx}`">
                        {{ comment }}
                    </div>
                    <div class="input-comment">
                        <input type="text" placeholder="новый коммент" v-model="commentValue" ref="commentInput" />
                        <button class="like-button add-comment-button" @click="addComment">+</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TheLightBox",
  data() {
    return {
        commentValue: "",
    };
  },
  props: {
    photo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    addComment() {
      this.$emit("add-comment", this.photo, this.commentValue);
      this.commentValue = "";
      // console.log(this.$refs.commentInput);
      this.$refs.commentInput.focus();
    },
  },
};
</script>

<style scoped>
.lb-container {
  /* max-width: 80%;
  margin: auto;
  border: 1px green solid; */
  /* top: 4px; */
  padding: 20px;
  /* left: 50%; */
  /* margin-left:-25%; */
  /* transform: translateX(-50%); */
  /* position: fixed; */
  max-width: 70%;
  margin: auto;
  z-index: 101;
  background-color: white;
  border-radius: 10px;
  animation: photo-anime 500ms;
}

@keyframes photo-anime {
  from {
    transform: scaleY(0%) scaleX(0%);
  }
  to {
    transform: scaleY(100%) scaleX(100%);
  }
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
}

.image {
  width: 80%;
}

.like-button {
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
}

.close-button {
  /* position: absolute;
  top: 12px;
  left: 95%; */
  position: relative;
  right: -50%;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

.data-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.comments-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-comment {
  display: flex;
}

.add-comment-button {
  margin-left: 12px;
}
</style>

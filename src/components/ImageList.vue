<template>
  <div>
    <section v-if="!isLoggedIn" class="hero" id="hero-section">
      <div class="hero-body center">
        <h1 class="has-text-dark title">
          Log in to get started!
        </h1>
      </div>
    </section>
    <section class="section center">
      <div
        class="columns is-mobile is-multiline"
        id="main-column"
        v-if="isLoggedIn"
      >
        <div
          class="column is-4"
          id="image-box"
          v-for="(image, index) in allImages"
          v-bind:key="image.id"
          @mouseover="image.deleteVisible = true"
          @mouseleave="image.deleteVisible = false"
        >
          <div id="gallery-delete-div">
            <button
              class="delete"
              id="delete-button"
              @click="deleteImage(image)"
            ></button>
          </div>
          <figure class="image is-square" @click="openCloseUp(image, index)">
            <img id="gallery-list-name" :src="image.link" />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CloseUp from "./CloseUp";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  created() {
    this.fetchImages();
  },
  methods: {
    ...mapActions(["deleteImage", "fetchImages"]),
    openCloseUp(image, index) {
      this.$modal.open({
        parent: this,
        component: CloseUp,
        scroll: "keep",
        hasModalCard: false,
        props: { image: image }
      });
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Karla", sans-serif;
}
#image-box {
  cursor: pointer;
  padding: 15px;
}
#main-column {
  min-width: 60vw;
}
img {
  height: 300px;
  object-fit: cover;
}
#gallery-list-name {
  font-family: "Nunito", sans-serif;
}
#hero-section {
  height: 80vh;
}
#gallery-delete-div {
  position: absolute;
  z-index: 10;
}
#delete-button {
  margin: 5px;
}
@media (max-width: 768px) {
  #main-column {
    min-width: 96vw;
    padding-left: 4px;
  }
  #image-box {
    padding: 2px;
  }
}
@media (min-width: 768px) {
  #main-column {
    min-width: 96vw;
    padding-left: 10px;
    padding-left: 10px;
  }
  #image-box {
    padding: 15px;
  }
}
@media (min-width: 1024px) {
  #main-column {
    min-width: 60vw;
  }
}
</style>

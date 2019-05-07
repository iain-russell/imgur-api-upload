<template>
  <div class="modal-card">
    <section class="section" id="section-body">
      <article class="columns">
        <section class="column is-7 " id="image-column">
          <div id="image-div">
            <figure class="image is-4by5" id="figure-image">
              <img :src="image.link" />
            </figure>
          </div>
        </section>
        <section class="column is-5 " id="media-column"></section>
      </article>
    </section>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CloseUp",
  props: ["image"]
};
</script>
<style scoped>
img {
  max-height: 600px;
  height: 100%;
  object-fit: cover;
}
hr {
  margin: 10px;
}
section {
}
#section-body {
  height: 80vh;
}

.modal-card {
  width: auto;
}
#image-column {
  display: flex;
  flex-direction: column;
  padding: 0px;
}
#figure-image {
}
.content {
  height: 50%;
}
.content figure:not(:last-child) {
  margin-bottom: 0px;
}
.media-left {
  margin: 10px;
}
.media + .media {
  border-top: none;
}
#media-column {
  height: 75vh;
  background: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* flex: 2 1 auto; */
}
#content-column {
  overflow-y: auto;
  flex-direction: column;
  display: flex;
  height: 80vh;
  margin-bottom: 0px;
  font-family: "Roboto";
  font-size: 14px;
}
.comment {
  line-height: 1em;
}
.textarea {
}
#comment-input {
}
.control.is-clearfix {
  width: 100vw;
}
#comment-field {
}
.footer {
  background: #999999;
}
#comment-delete-div {
  margin-right: 10px;
}
</style>

<template>
  <div class="section center">
    <div class="modal-card">
      <section class="modal-card-body">
        <div class="dropper">
          <input
            type="file"
            @change="startUploadImages($event.target.files)"
            multiple
            accept="image/*"
          />
          <i class="fas fa-cloud-upload-alt fa-5x"></i>
          <br />
          <span
            ><button style="margin-right: 5px;">Browse</button>or drag files
            here!</span
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { router } from "../main.js";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "UploadImages",

  data() {
    return {};
  },
  created: function() {},
  computed: {
    ...mapGetters(["getUser"])
  },
  methods: {
    ...mapActions(["incrementCounter", "uploadImages", "fetchImages"]),
    startUploadImages(images) {
      this.uploadImages(images);
    }
  }
};
</script>

<style scoped>
.dropper {
  height: 50vh;
  border: 1px dashed black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
}
.dropper:hover {
  background-color: #f7f7f7;
}
input {
  width: 100%;
  height: 50vh;
  position: absolute;
  opacity: 0;
}
.progress-bar {
  text-align: center;
  padding: 70px 10px;
}
.modal-card-body {
  border-radius: 10px;
}
</style>

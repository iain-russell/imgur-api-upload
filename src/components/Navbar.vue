<template>
  <nav class="navbar " role="navigation" aria-label="main navigation">
    <!-- .brand -->
    <div class="navbar-brand">
      <div class="navbar-item">
        <router-link to="/">
          <p class="subtitle">
            <i class="fas fa-camera"></i>
            Nonstagram
          </p>
        </router-link>
      </div>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <!-- /.brand -->

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <!-- .galleries -->
        <div class="right">
          <div class="navbar-item" v-if="isLoggedIn">
            <router-link to="/">
              <a class="button" @click="toggleNavbar()">Galleries</a>
            </router-link>
          </div>
        </div>
        <!-- /.galleries -->
        <!-- .upload-images -->
        <div class="right">
          <div class="navbar-item" v-if="isLoggedIn">
            <router-link to="/upload">
              <button class="button" @click="toggleNavbar()">Upload</button>
            </router-link>
          </div>
        </div>
        <!-- /.upload-images -->

        <!-- .about -->
        <div class="right">
          <div class="navbar-item">
            <router-link to="/about">
              <a class="button" @click="toggleNavbar()">About </a>
            </router-link>
          </div>
        </div>
        <!-- /.about -->

        <!-- .logout -->
        <div class="right">
          <div class="navbar-item" v-if="isLoggedIn">
            <router-link to="/">
              <button v-if="isLoggedIn" class="button" @click="logout">
                Logout
              </button>
            </router-link>
          </div>
        </div>
        <!-- /.logout -->

        <!-- .log-in -->
        <div class="right">
          <div class="navbar-item" v-if="!isLoggedIn">
            <button @click="login" class="button">
              Log In
            </button>
          </div>
        </div>
        <!-- /.log-in -->
      </div>
    </div>
  </nav>
</template>

<script>
import { router } from "../main.js";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      showNav: false
    };
  },
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    ...mapActions(["logout", "login", "fetchGalleries"]),
    toggleNavbar() {
      this.showNav = !this.showNav;
    }
  }
};
</script>

<style scoped>
a {
  color: #363636;
}
.fa-camera {
  padding-left: 10px;
  padding-right: 10px;
}
.subtitle {
  font-family: "Karla", sans-serif;
}
@media (min-width: 1024px) {
  .navbar {
    padding-left: 19.5%;
    padding-right: 20%;
  }
}
</style>

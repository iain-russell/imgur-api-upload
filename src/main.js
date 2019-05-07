import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store/index";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import AuthHandler from "./components/AuthHandler";
import ImageList from "./components/ImageList";
import UploadForm from "./components/UploadForm";
import About from "./components/About";

Vue.use(VueRouter);
Vue.use(Buefy);

require("./assets/css/style.css");
require("./assets/main.scss");

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: ImageList },
    { path: "/about", component: About },
    { path: "/upload", component: UploadForm },
    { path: "/oauth2/callback", component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

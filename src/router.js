import Vue from "vue";
import Router from "vue-router";

import Critics from "./views/Critics.vue";
import Reviews from "./views/Reviews.vue";
import Review from "./views/Critics.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "reviews",
      component: Reviews
    },
    {
      path: "/critics",
      name: "critics",
      component: Critics
    },
    {
      path: "/review/:id",
      name: "review",
      component: Review
    }
  ]
});

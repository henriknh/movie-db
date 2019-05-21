import Vue from "vue";
import Router from "vue-router";

import Reviews from "./views/Reviews.vue";
import Review from "./views/Review.vue";
import Critics from "./views/Critics.vue";
import Critic from "./views/Critic.vue";

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
      path: "/review",
      name: "review",
      component: Review
    },
    {
      path: "/critics",
      name: "critics",
      component: Critics
    },
    {
      path: "/critic",
      name: "critic",
      component: Critic
    }
  ]
});

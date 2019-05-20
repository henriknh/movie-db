import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "@/stores/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    reviews: []
  },
  actions: {
    retrieve: state => {
      const route = api.getters.route("reviews/search.json");
      console.log(route);

      axios
        .get(route)
        .then(function(response) {
          store.state.reviews = [];

          let reviews = response.data.results;

          for (let [i, review] of reviews.entries()) {
            console.log(i, review);
            // Add an unique id to each review
            review.id = i;
            store.state.reviews.push(review);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});

export default store;

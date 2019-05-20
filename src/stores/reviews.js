import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "@/stores/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pagination: 0,
    reviews: []
  },
  mutations: {
    prevPagination(state) {
      state.pagination--;
    },
    nextPagination(state) {
      state.pagination++;
    }
  },
  actions: {
    reset: state => {
      state.pagination = 0;
      state.reviews = [];
      store.dispatch("retrieve");
    },
    retrieve: () => {
      const url = api.getters.generateUrl("reviews/search.json", {
        offset: store.state.pagination
      });

      axios
        .get(url)
        .then(function(response) {
          let reviews = response.data.results;

          for (let [i, review] of reviews.entries()) {
            // Add an unique id to each review
            review.id = i;
            store.state.reviews.push(review);
          }
        })
        .catch(function(error) {
          console.error(error);
        });
    }
  }
});

export default store;

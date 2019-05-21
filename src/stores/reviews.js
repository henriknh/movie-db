import Vue from "vue";
import Vuex from "vuex";
import api from "@/stores/api";
import search from "@/stores/search";
import { LoadingProgrammatic as Loading } from "buefy/dist/components/loading";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pagination: 0,
    has_more: false,
    reviews: [],
    no_search_match: false,
    selectedReview: null
  },
  mutations: {
    prevPagination(state) {
      state.pagination -= 20;
      if (state.pagination < 0) state.pagination = 0;
      store.dispatch("retrieve");
    },
    nextPagination(state) {
      state.pagination += 20;
      store.dispatch("retrieve");
    },
    selectReview(state, review) {
      state.selectedReview = review;
    }
  },
  actions: {
    reset: (state, options) => {
      store.state.pagination = 0;
      store.state.has_more = false;
      store.state.selectedReview = null;

      if (!options || options.searchReset) search.commit("reset");
      store.dispatch("retrieve");
    },
    retrieve: () => {
      const tarElem = document.getElementsByClassName("reviews")[0];
      const loadingComponent = Loading.open({
        container: tarElem
      });

      store.state.no_search_match = false;

      // Get seach settings
      let params = search.state;
      // Add pagination offset
      params.offset = store.state.pagination;

      api
        .dispatch({
          type: "query",
          URI: "reviews/search.json",
          params
        })
        .then(data => {
          store.state.reviews = [];
          store.state.has_more = data.has_more;

          let reviews = data.results;

          for (let [i, review] of reviews.entries()) {
            // Add an unique id to each review
            // Make sure id is correct even for page 2+
            review.id = store.state.pagination * 20 + i;
            store.state.reviews.push(review);
          }

          if (store.state.reviews.length == 0) {
            store.state.no_search_match = true;
          }
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          loadingComponent.close();
        });
    }
  }
});

export default store;

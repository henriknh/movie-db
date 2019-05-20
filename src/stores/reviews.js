import Vue from "vue";
import Vuex from "vuex";
import api from "@/stores/api";
import { LoadingProgrammatic as Loading } from "buefy/dist/components/loading";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pagination: 0,
    reviews: []
  },
  mutations: {
    prevPagination(state) {
      state.pagination--;
      store.dispatch("retrieve");
    },
    nextPagination(state) {
      state.pagination++;
      store.dispatch("retrieve");
    }
  },
  actions: {
    reset: state => {
      state.pagination = 0;
      store.dispatch("retrieve");
    },
    retrieve: () => {
      const loadingComponent = Loading.open({
        container: null
      });

      let params = {
        offset: store.state.pagination
      };

      api
        .dispatch({
          type: "query",
          URI: "reviews/search.json",
          params
        })
        .then(data => {
          store.state.reviews = [];

          let reviews = data.results;

          for (let [i, review] of reviews.entries()) {
            // Add an unique id to each review
            // Make sure id is correct even for page 2+
            review.id = store.state.pagination * 20 + i;
            store.state.reviews.push(review);
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

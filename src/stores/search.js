import Vue from "vue";
import Vuex from "vuex";
import reviews from "@/stores/reviews";

Vue.use(Vuex);

let typingTimeout = null;

const store = new Vuex.Store({
  state: {
    "critics-pick": null,
    "opening-date": null,
    order: null,
    "publication-date": null,
    reviewer: null,
    query: null
  },
  mutations: {
    reset(state) {
      state["critics-pick"] = null;
      state["opening-date"] = null;
      state.order = null;
      state["publication-date"] = null;
      state.reviewer = null;
      state.query = null;
    },
    updateQuery(state, value) {
      state.query = value;

      if (typingTimeout) clearTimeout(typingTimeout);

      typingTimeout = setTimeout(() => {
        reviews.dispatch("reset", {
          searchReset: false
        });

        typingTimeout = null;
      }, 300);
    },
    updateCriticsPick(state, value) {
      state["critics-pick"] = value;
      reviews.dispatch("reset", {
        searchReset: false
      });
    }
  }
});

export default store;

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    criticsPick: "",
    offset: 0,
    openingDate: "",
    order: "",
    publicationDate: "",
    reviewer: "",
    query: "123"
  },
  mutations: {
    updateQuery(state, value) {
      state.query = value;
    }
  }
});

export default store;

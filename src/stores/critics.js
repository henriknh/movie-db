import Vue from "vue";
import Vuex from "vuex";
import api from "@/stores/api";
import { LoadingProgrammatic as Loading } from "buefy/dist/components/loading";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    critics: [],
    selectedCritic: null
  },
  mutations: {
    selectCritic(state, critic) {
      state.selectedCritic = critic;
    }
  },
  actions: {
    reset: () => {
      store.state.critics = [];
      store.state.selectedCritic = null;

      store.dispatch("retrieve");
    },
    retrieve: () => {
      const tarElem = document.getElementsByClassName("critics")[0];
      const loadingComponent = Loading.open({
        container: tarElem
      });

      let params = {};

      api
        .dispatch({
          type: "query",
          URI: "critics/all.json ",
          params
        })
        .then(data => {
          let critics = data.results;
          store.state.critics = [];

          for (let [i, critic] of critics.entries()) {
            // Add an unique id to each critic
            critic.id = i;
            store.state.critics.push(critic);
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

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    base: "https://api.nytimes.com/svc/movies/v2/",
    key: "rUiJZePIf4TiG4lZnuGEJ2CGoNLkOpCb"
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    route: state => route => {
      return `${
        state.base
      }${route}?query=big&opening-date=1980-01-01;1990-01-01&api-key=${
        store.state.key
      }`;
    }
  },
  actions: {
    doit: state => {
      axios
        .get("/user")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
});

export default store;

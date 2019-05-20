import Vue from "vue";
import Vuex from "vuex";

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
    generateUrl: state => (route, params = {}) => {
      // Create base url
      let url = `${state.base}${route}?`;

      // Add optional parameters
      for (let key of Object.keys(params)) {
        url += `${key}=${params[key]}&`;
      }

      // Add auth token
      url += `api-key=${store.state.key}`;

      console.log(`Url generated: ${url}`);

      return url;
    }
  }
});

export default store;

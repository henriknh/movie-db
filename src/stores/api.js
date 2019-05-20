import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { NotificationProgrammatic as Notification } from "buefy/dist/components/notification";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    base: "https://api.nytimes.com/svc/movies/v2/",
    key: "rUiJZePIf4TiG4lZnuGEJ2CGoNLkOpCb"
  },
  actions: {
    query({ commit, state }, data) {
      // Create base url
      let url = `${state.base}${data.URI}?`;

      // Add optional parameters
      for (let key of Object.keys(data.params)) {
        if (data.params[key]) url += `${key}=${data.params[key]}&`;
      }

      // Add auth token
      url += `api-key=${store.state.key}`;

      console.log(`Url generated: ${url}`);

      // Do request
      return axios
        .get(url)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          if (error.response) {
            Notification.open({
              duration: 5000,
              message: `Error ${error.response.status}: ${
                error.response.data.fault.faultstring
              }`,
              position: "is-bottom-right",
              type: "is-danger",
              hasIcon: true
            });
          } else {
            throw error;
          }
        });
    }
  }
});

export default store;

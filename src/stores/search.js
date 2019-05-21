import Vue from "vue";
import Vuex from "vuex";
import reviews from "@/stores/reviews";
import { NotificationProgrammatic as Notification } from "buefy/dist/components/notification";

Vue.use(Vuex);

let typingTimeout = null;

let formatDate = value => {
  const d = new Date(value);

  const year = d
    .getFullYear()
    .toString()
    .padStart(4, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const date = d
    .getDate()
    .toString()
    .padStart(2, "0");

  return `${year}-${month}-${date}`;
};

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
    },
    updateOpeningDateStart(state, value) {
      const date = formatDate(value);
      const oldDates = state["opening-date"]
        ? state["opening-date"].split(";")
        : [null, null];

      if (oldDates[1]) {
        state["opening-date"] = `${date};${oldDates[1]}`;
      } else {
        state["opening-date"] = date;
      }

      reviews.dispatch("reset", {
        searchReset: false
      });
    },
    updateOpeningDateEnd(state, value) {
      const date = formatDate(value);
      const oldDates = state["opening-date"]
        ? state["opening-date"].split(";")
        : [null, null];

      // Handle if not start date is set
      if (!oldDates[0]) {
        Notification.open({
          duration: 5000,
          message:
            "It is not possible to set only a end date. Please chose a opening start date first.",
          position: "is-bottom-right",
          type: "is-warning",
          hasIcon: true
        });

        // Do not set value if this error occurs
        state["opening-date"] = null;
        return;
      }

      // Handle if end date is before start date
      console.log(new Date(oldDates[0]) > new Date(oldDates[1]));
      if (new Date(oldDates[0]) > new Date(oldDates[1])) {
        Notification.open({
          duration: 5000,
          message: "End date has to be after start date",
          position: "is-bottom-right",
          type: "is-warning",
          hasIcon: true
        });

        // Do not set value if this error occurs
        state["opening-date"] = oldDates[0];
        return;
      }

      state["opening-date"] = `${oldDates[0]};${date}`;
      reviews.dispatch("reset", {
        searchReset: false
      });
    }
  }
});

export default store;

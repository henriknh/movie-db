<template>
  <div class="search">
    <b-field>
      <b-input
        v-model="query"
        placeholder="Search movies..."
        type="search"
        icon="magnify"
        size="is-large"
        expanded
      />
    </b-field>

    <div class="advanced" v-if="showAdvanced">
      <b-field>
        <b-switch v-model="criticsPick" true-value="Y" false-value="">
          Critics pick
        </b-switch>
      </b-field>
      <b-field>
        <b-datepicker
          v-model="openingDateStart"
          placeholder="Opening date start..."
          :first-day-of-week="1"
          :date-formatter="formatDate"
          icon="calendar-today"
          editable
        >
          <button class="button" @click="openingDateStart = new Date()">
            <b-icon icon="calendar-today"></b-icon>
            <span>Today</span>
          </button>

          <button class="button" @click="openingDateStart = null">
            <b-icon icon="close"></b-icon>
            <span>Clear</span>
          </button>
        </b-datepicker>
        <b-datepicker
          v-model="openingDateEnd"
          placeholder="Opening date end..."
          :first-day-of-week="1"
          :date-formatter="formatDate"
          icon="calendar-today"
          editable
        >
          <button class="button" @click="openingDateEnd = new Date()">
            <b-icon icon="calendar-today"></b-icon>
            <span>Today</span>
          </button>

          <button class="button" @click="openingDateEnd = null">
            <b-icon icon="close"></b-icon>
            <span>Clear</span>
          </button>
        </b-datepicker>
      </b-field>
    </div>
    <div
      class="toggle-advanced has-text-centered has-text-grey is-size-7 is-capitalized is-family-secondary"
      @click="toggleAdvanced"
    >
      {{ showAdvancedText }}
    </div>
  </div>
</template>

<script>
import store from "@/stores/search";

export default {
  store,
  name: "search",
  data: function() {
    return {
      showAdvanced: false
    };
  },
  methods: {
    toggleAdvanced: function() {
      this.showAdvanced = !this.showAdvanced;
    },
    formatDate: function(d) {
      console.log(d);
      const year = d
        .getFullYear()
        .toString()
        .padStart(4, "0");
      const month = (d.getMonth() + 1).toString().padStart(2, "0");
      const date = d
        .getDate()
        .toString()
        .padStart(2, "0");
      console.log(year, month, date);
      return `${year}-${month}-${date}`;
    }
  },
  computed: {
    showAdvancedText: function() {
      return this.showAdvanced
        ? "Close advanced filters"
        : "Open advanced filters";
    },
    query: {
      get() {
        return this.$store.state.query;
      },
      set(value) {
        this.$store.commit("updateQuery", value);
      }
    },
    criticsPick: {
      get() {
        return this.$store.state["critics-pick"];
      },
      set(value) {
        this.$store.commit("updateCriticsPick", value);
      }
    },
    openingDateStart: {
      get() {
        let openingDate = this.$store.state["opening-date"];

        return openingDate ? new Date(openingDate.split(";")[0]) : null;
      },
      set(value) {
        this.$store.commit("updateOpeningDateStart", value);
      }
    },
    openingDateEnd: {
      get() {
        let openingDate = this.$store.state["opening-date"];

        if (openingDate) {
          const split = openingDate.split(";");
          if (split.length > 1) return new Date(split[1]);
        }

        return null;
      },
      set(value) {
        this.$store.commit("updateOpeningDateEnd", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/buefy.scss";

.search {
  padding: $gap 0px;

  .toggle-advanced {
    cursor: pointer;
  }

  .advanced {
    padding: ($gap / 2) 0px;
  }
}
</style>

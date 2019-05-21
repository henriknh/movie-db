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
      <b-field label="Select a date">
        <b-datepicker
          placeholder="Type or select a date..."
          :first-day-of-week="1"
          icon="calendar-today"
          editable
        >
          <button class="button" @click="date = new Date()">
            <b-icon icon="calendar-today"></b-icon>
            <span>Today</span>
          </button>

          <button class="button" @click="date = null">
            <b-icon icon="close"></b-icon>
            <span>Clear</span>
          </button>
        </b-datepicker>
        <b-datepicker
          placeholder="Type or select a date..."
          :first-day-of-week="1"
          icon="calendar-today"
          editable
        >
          <button class="button" @click="date = new Date()">
            <b-icon icon="calendar-today"></b-icon>
            <span>Today</span>
          </button>

          <button class="button" @click="date = null">
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

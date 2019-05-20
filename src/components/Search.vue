<template>
  <div class="search">
    <b-field>
      <b-input
        v-model="query"
        placeholder="Search movies..."
        size="is-large"
      ></b-input>
    </b-field>

    <div class="advanced" v-if="showAdvanced">
      This is advanced stuff
    </div>
    <div
      class="toggle-advanced has-text-centered has-text-grey is-size-7 is-capitalized is-family-secondary"
      @click="toggleAdvanced"
    >
      {{ showAdvancedText }}
    </div>

    <div>{{ $store.state.query }}</div>
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
}
</style>

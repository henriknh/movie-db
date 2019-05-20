<template>
  <section class="section">
    <div class="search">
      <b-field>
        <b-input
          v-model="query"
          placeholder="Search movies..."
          size="is-large"
        ></b-input>
      </b-field>

      <div>{{ $store.state.query }}</div>
    </div>
  </section>
</template>

<script>
import store from "@/stores/search";

export default {
  store,
  name: "search",
  computed: {
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

<style lang="scss" scoped></style>

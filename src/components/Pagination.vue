<template>
  <div class="pagination">
    <div @click="$store.commit('prevPagination')">
      <b-icon
        icon="arrow-left"
        size="is-small"
        v-if="$store.state.pagination > 0"
      >
      </b-icon>
    </div>
    <div class="pagination-number">{{ store.state.pagination / 20 + 1 }}</div>
    <div @click="$store.commit('nextPagination')">
      <b-icon icon="arrow-right" size="is-small" v-if="$store.state.has_more">
      </b-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["store"]
};
</script>

<style lang="scss" scoped>
@import "@/assets/buefy.scss";

.pagination {
  justify-content: center;
  padding: $gap 0px;

  div {
    width: 50px;

    .pagination-number {
      user-select: none;
    }

    .icon {
      cursor: pointer;

      :hover {
        background: $white-bis;
      }
    }
  }
}
</style>

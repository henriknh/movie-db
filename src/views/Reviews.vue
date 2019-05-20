<template>
  <div class="reviews">
    <Search />

    <Thumb
      v-for="review in $store.state.reviews"
      :key="review.id"
      :id="review.id"
      :name="review.display_title"
    />

    <Pagination :store="$store" />
  </div>
</template>

<script>
import store from "@/stores/reviews";
import Search from "@/components/Search.vue";
import Thumb from "@/components/Thumb.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  store,
  name: "reviews",
  components: {
    Search,
    Thumb,
    Pagination
  },
  mounted() {
    this.$store.dispatch("reset");
  }
};
</script>

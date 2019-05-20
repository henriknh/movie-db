<template>
  <div class="reviews">
    <Search />

    <Thumb
      v-for="review in $store.state.reviews"
      :key="review.id"
      :id="review.id"
      :name="review.display_title"
    />
  </div>
</template>

<script>
import store from "@/stores/reviews";
import Search from "@/components/Search.vue";
import Thumb from "@/components/Thumb.vue";

export default {
  store,
  name: "reviews",
  components: {
    Search,
    Thumb
  },
  mounted() {
    this.$store.dispatch("reset");
  }
};
</script>

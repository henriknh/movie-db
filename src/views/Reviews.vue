<template>
  <div class="reviews">
    <Search />

    <div class="reviews-list">
      <!-- Own div because click can not be attached to component -->
      <div
        v-for="review in $store.state.reviews"
        :key="review.id"
        :id="review.id"
        @click="selectReview(review)"
      >
        <Thumb :name="review.display_title" />
      </div>
    </div>

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
  },
  methods: {
    selectReview: function(review) {
      this.$store.commit("selectReview", review);
      this.$router.push({ name: "review" });
    }
  }
};
</script>

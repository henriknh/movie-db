<template>
  <div class="review">
    <div class="title is-spaced">{{ title }}</div>
    <div class="subtitle">{{ $store.state.selectedReview.headline }}</div>
    <div class="container">
      <div class="columns">
        <img class="column is-on-third" :src="img_src" />
        <div class="column is-two-thirds">
          <div>{{ $store.state.selectedReview.summary_short }}</div>
          <br />
          <a
            v-if="$store.state.selectedReview.link"
            :href="$store.state.selectedReview.link.url"
          >
            {{ $store.state.selectedReview.link.suggested_link_text }}
          </a>
        </div>
      </div>
      <div
        class="has-text-right title has-text-grey-light is-size-7 has-text-weight-light"
      >
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/stores/reviews";

export default {
  store,
  name: "review",
  data: function() {
    return {
      review: null
    };
  },
  mounted() {
    // Make sure a review is actually set
    if (!this.$store.state.selectedReview) {
      // Redirect to reviews page if review is not set
      this.$router.push({ name: "reviews" });
    }
  },
  computed: {
    title: function() {
      const review = this.$store.state.selectedReview;

      const title = review.display_title;
      const year = new Date(review.opening_date).getFullYear();
      return `${title} (${year})`;
    },
    img_src: function() {
      const review = this.$store.state.selectedReview;

      if (review.multimedia) {
        return review.multimedia.src;
      }
      return null;
    },
    date: function() {
      const review = this.$store.state.selectedReview;

      const pub_date = review.publication_date;
      const update_date = review.date_updated;
      return update_date ? `${pub_date} (Updated: ${update_date})` : pub_date;
    }
  }
};
</script>

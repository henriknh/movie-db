<template>
  <div class="review">
    <div class="title is-spaced">{{ title }}</div>
    <div class="subtitle">{{ review.headline }}</div>
    <div class="container">
      <div class="columns">
        <img class="column is-on-third" :src="img_src" />
        <div class="column is-two-thirds">
          <div>{{ review.summary_short }}</div>
          <br />
          <a v-if="review.link" :href="review.link.url">
            {{ review.link.suggested_link_text }}
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
    this.review = this.$store.state.selectedReview;

    // Make sure a review is actually set
    if (!this.review) {
      // Redirect to reviews page if review is not set
      this.$router.push({ name: "reviews" });
    }
  },
  computed: {
    title: function() {
      this.review = this.$store.state.selectedReview;
      console.log(this);
      const title = this.review.display_title;
      const year = new Date(this.review.opening_date).getFullYear();
      return `${title} (${year})`;
    },
    img_src: function() {
      if (this.review.multimedia) {
        return this.review.multimedia.src;
      }
      return null;
    },
    date: function() {
      const pub_date = this.review.publication_date;
      const update_date = this.review.date_updated;
      return update_date ? `${pub_date} (Updated: ${update_date})` : pub_date;
    }
  }
};
</script>

<style lang="scss" scoped>
.review {
}
</style>

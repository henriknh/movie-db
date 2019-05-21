<template>
  <div class="critic">
    <div class="title is-spaced">
      {{ title }}
    </div>
    <div class="container">
      <div class="columns">
        <img class="column is-one-quarter" :src="img_src" />
        <div class="column is-three-quarters">
          <div>{{ $store.state.selectedCritic.bio }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/stores/critics";

export default {
  store,
  name: "critics",
  mounted() {
    // Make sure a critic is actually set
    if (!this.$store.state.selectedCritic) {
      // Redirect to reviews page if critics is not set
      this.$router.push({ name: "critics" });
    }
  },

  computed: {
    title: function() {
      const critic = this.$store.state.selectedCritic;

      const name = critic.display_name;
      const status = critic.status;
      return status ? `${name} (${status})` : name;
    },
    img_src: function() {
      const critic = this.$store.state.selectedCritic;

      if (critic.multimedia) {
        return critic.multimedia.resource.src;
      }
      return null;
    }
  }
};
</script>

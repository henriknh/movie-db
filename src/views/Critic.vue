<template>
  <div class="critic">
    <div class="title is-spaced">
      {{ title }}
    </div>
    <div class="container">
      <div class="columns">
        <img class="column is-on-third" :src="img_src" />
        <div class="column is-two-thirds">
          <div>{{ $store.state.selectedCritic.bio }}</div>
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
import store from "@/stores/critics";

export default {
  store,
  name: "critics",
  mounted() {
    console.log(this.$store.state.selectedCritic);
    this.critic = this.$store.state.selectedCritic;

    // Make sure a critic is actually set
    if (!this.critic) {
      // Redirect to reviews page if critics is not set
      this.$router.push({ name: "critics" });
    }
  },

  computed: {
    title: function() {
      this.critic = this.$store.state.selectedCritic;
      const name = this.critic.display_name;
      const status = this.critic.status;
      return status ? `${name} (${status})` : name;
    },
    img_src: function() {
      this.critic = this.$store.state.selectedCritic;
      if (this.critic.multimedia) {
        return this.critic.multimedia.resource.src;
      }
      return null;
    }
  }
};
</script>

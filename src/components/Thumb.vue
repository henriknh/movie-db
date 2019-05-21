<template>
  <div :href="nav" class="thumb">
    <img :src="url" v-if="showThumb" />
    <div>{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "thumb-critic",
  props: {
    id: Number,
    name: String,
    multimedia: Object,
    showThumb: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    nav: function() {
      return `/critic/${this.id}`;
    },
    url: function() {
      let url =
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg";

      if (this.multimedia) {
        if (this.multimedia.resource.src) url = this.multimedia.resource.src;
      }
      return url;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/buefy.scss";

.thumb {
  cursor: pointer;

  :hover {
    background: $white-bis;
  }

  img {
    max-width: 200px;
    height: 200px;
  }
}
</style>

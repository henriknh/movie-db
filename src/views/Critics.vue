<template>
  <div class="critics">
    <div class="critics-list" v-if="$store.state.critics.length > 0">
      <div class="title">Critics</div>
      <div class="columns is-mobile is-multiline">
        <div
          class="column is-one-quarter"
          v-for="critic in $store.state.critics"
          :key="critic.id"
          :id="critic.id"
          @click="selectCritic(critic)"
        >
          <Thumb
            :name="critic.display_name"
            :multimedia="critic.multimedia"
            :showThumb="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/stores/critics";
import Thumb from "@/components/Thumb.vue";

export default {
  store,
  name: "critics",
  components: { Thumb },
  mounted() {
    this.$store.dispatch("reset");
  },
  methods: {
    selectCritic: function(critic) {
      this.$store.commit("selectCritic", critic);
      this.$router.push({ name: "critic" });
    }
  }
};
</script>

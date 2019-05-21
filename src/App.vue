<template>
  <div id="app">
    <section class="hero is-link is-fullheight">
      <div class="hero-head">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item" :to="{ name: 'reviews' }">
                <b-icon icon="movie" size="is-large" type="is-primary">
                </b-icon>
              </router-link>

              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <router-link class="navbar-item" :to="{ name: 'reviews' }"
                  >Reviews
                </router-link>
                <router-link class="navbar-item" :to="{ name: 'critics' }"
                  >Critics</router-link
                >
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container">
          <router-view />
        </div>
      </div>
      <div class="hero-foot">
        <footer class="footer has-background-white-ter">
          <div class="container">
            <div class="content has-text-centered">
              <p>
                <strong>movie-db</strong> by
                <a href="mailto:henrik.nilsson.harnert@gmail.com"
                  >Henrik Nilsson Harnert</a
                >. Mini project for interview with Axis Communications.<br />
                API used is facilitated by New York Times for non-commercial use
                only.
                <a href="https://developer.nytimes.com/terms">Terms of Use</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted: function() {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  }
};
</script>

<style lang="scss">
@import "assets/buefy.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar a {
  font-weight: bold;
}
</style>

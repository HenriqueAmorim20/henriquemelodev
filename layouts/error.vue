<template>
  <div id="error" class="main">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout",
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },

  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>

h1 {
  font-size: 20px;
  color: #1094bd !important;
}

.main {
  background-image: url("~/static/error_404.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 60vh;
  margin-top: 5rem;
  padding: 2rem;
}
</style>

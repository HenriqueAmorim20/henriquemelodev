<template>
  <v-app class="window">
    <div v-if="!loading">
      <Navbar />
      <v-main>
        <Nuxt />
      </v-main>
      <Footer />
    </div>
    <Loading v-if="loading" />
  </v-app>
</template>

<script>
import Navbar from "~/layouts/navbar.vue";
import Footer from "~/layouts/footer.vue";
import Loading from "~/layouts/loading.vue";

export default {
  name: "DefaultLayout",
  components: {
    Navbar,
    Footer,
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>

<style>
/* Global styles */

* {
  margin: 0;
  padding: 0;
  font-family: "custom";
}

html.sr .load-hidden {
  visibility: hidden;
}

body {
  overflow: hidden !important;
}

.window {
  background: #0f0e18 !important;
}

@font-face {
  font-family: "custom";
  src: url("~/assets/ChakraPetch-Light.ttf") format("truetype");
}

@font-face {
  font-family: "tech";
  src: url("~/assets/ShareTechMono-Regular.ttf") format("truetype");
}
</style>

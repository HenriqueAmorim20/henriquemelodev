<template>
  <v-app class="window">
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>

import Navbar from "~/layouts/navbar.vue"
import Footer from "~/layouts/footer.vue"

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
/* Global styles */

* {
  margin: 0 !important;
  padding: 0 !important;
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

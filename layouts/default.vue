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
  font-family: "custom" !important;
  color: #fff !important;
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

.main {
  max-width: 1100px;
  margin: 0 auto !important;
}

.header {
  display: flex;
  align-items: center;
  padding: 10px 10px 0 !important;
}
.header-name {
  min-width: 210px;
  font-size: 2rem !important;
  padding: 15px 25px !important;
}

.header-order {
  font-size: 1.3rem;
  font-family: "tech" !important;
  color: #1094bc !important;
}

.header-divider {
  width: 300px;
  border-bottom: 1px solid #1094bc41;
}

</style>

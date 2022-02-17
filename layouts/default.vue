<template>
  <v-app>
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

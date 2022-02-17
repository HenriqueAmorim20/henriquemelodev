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
  },
  mounted() {
    this.revealScroll()
  },
  methods: {
    // Method that smoothes scrolling
    revealScroll() {

      // Headers
      ScrollReveal().reveal('.header',{
        delay: 300,
        duration: 2000,
        distance: "200px",
        origin: "left",
      })

      // About
      ScrollReveal().reveal('.section-about-intro',{
        delay: 300,
        duration: 2000,
        distance: "200px",
        origin: "left",
      })
      ScrollReveal().reveal('.section-about-name',{
        delay: 400,
        duration: 2000,
        distance: "200px",
        origin: "left",
      })
      ScrollReveal().reveal('.section-about-role',{
        delay: 500,
        duration: 2000,
        distance: "200px",
        origin: "left",
      })
      ScrollReveal().reveal('.section-about-info',{
        delay: 600,
        duration: 2000,
        distance: "200px",
        origin: "left",
      })
      ScrollReveal().reveal('.section-media',{
        delay: 700,
        duration: 2000,
        distance: "200px",
        origin: "left",
      })
      ScrollReveal().reveal('.section-image',{
        delay: 400,
        duration: 2000,
        distance: "200px",
        origin: "right",
      })
      ScrollReveal().reveal('.down-section',{
        delay: 700,
        duration: 2000,
        distance: "300px",
        origin: "bottom",
      })

      // Skills
      ScrollReveal().reveal('.section-skills-card',{
        delay: 400,
        duration: 2000,
        distance: "120px",
        origin: "right",
        interval: 60,
      })
      ScrollReveal().reveal('.section-down',{
        delay: 500,
        duration: 2000,
        distance: "300px",
        origin: "bottom",
      })

      // Experience
      ScrollReveal().reveal('.stepper-step',{
        delay: 400,
        duration: 2000,
        distance: "300px",
        origin: "bottom",
        interval: 100,
      })
      ScrollReveal().reveal('.stepper-content',{
        delay: 500,
        duration: 2000,
        distance: "300px",
        origin: "bottom",
        interval: 100,
      })


      // Projects
      ScrollReveal().reveal('.project-card',{
        delay: 400,
        duration: 2000,
        distance: "300px",
        origin: "right",
        interval: 100,
      })

    }
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
  margin: 0 auto 100px !important;
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

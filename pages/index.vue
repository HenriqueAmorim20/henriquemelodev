<template>
  <div>
    <About />
    <Skills />
    <Experience />
    <Projects />
  </div>
</template>

<script>

import About from "~/components/about.vue"
import Skills from "~/components/skills.vue"
import Experience from "~/components/experience.vue"
import Projects from "~/components/projects.vue"

export default {
  name: 'IndexPage',
  components: {
    About,
    Skills,
    Experience,
    Projects
  },
  mounted() {
    this.revealScroll()
  },
  methods: {
    // Method that smoothes scrolling
    revealScroll() {
      // Headers
      ScrollReveal().reveal(".header", {
        delay: 0,
        duration: 1500,
        distance: "100px",
        origin: "left",
      });

      // About
      ScrollReveal().reveal(".section-about-intro", {
        delay: 0,
        duration: 1500,
        distance: "150px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-about-name", {
        delay: 100,
        duration: 1500,
        distance: "150px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-about-role", {
        delay: 200,
        duration: 1500,
        distance: "150px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-about-info", {
        delay: 300,
        duration: 1500,
        distance: "150px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-media", {
        delay: 400,
        duration: 1500,
        distance: "150px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-image", {
        delay: 200,
        duration: 1500,
        distance: "150px",
        origin: "right",
      });
      ScrollReveal().reveal(".down-section", {
        delay: 400,
        duration: 1500,
        distance: "150px",
        origin: "bottom",
      });

      // Skills
      ScrollReveal().reveal(".section-skills-card", {
        delay: 100,
        duration: 1500,
        distance: "300px",
        origin: "bottom",
        interval: 50,
      });
      ScrollReveal().reveal(".section-down", {
        delay: 850,
        duration: 1500,
        distance: "150px",
        origin: "bottom",
      });

      // Experience
      ScrollReveal().reveal(".stepper-step", {
        delay: 100,
        duration: 1500,
        distance: "150px",
        origin: "bottom",
        interval: 100,
      });
      ScrollReveal().reveal(".stepper-content", {
        delay: 200,
        duration: 1500,
        distance: "150px",
        origin: "bottom",
        interval: 100,
      });

      // Projects
      ScrollReveal().reveal(".project-card", {
        delay: 100,
        duration: 1500,
        distance: "300px",
        origin: "bottom",
        interval: 100,
      });
    },
  },
}

</script>

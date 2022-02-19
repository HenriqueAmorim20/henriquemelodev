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
  created() {
    this.revealScroll()
  },
  methods: {
    // Method that smoothes scrolling
    revealScroll() {
      // Headers
      ScrollReveal().reveal(".header", {
        delay: 0,
        duration: 2500,
        distance: "200px",
        origin: "left",
      });

      // About
      ScrollReveal().reveal(".section-about-intro", {
        delay: 0,
        duration: 2500,
        distance: "400px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-about-name", {
        delay: 100,
        duration: 2500,
        distance: "400px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-about-role", {
        delay: 200,
        duration: 2500,
        distance: "400px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-about-info", {
        delay: 300,
        duration: 2500,
        distance: "400px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-media", {
        delay: 400,
        duration: 2500,
        distance: "400px",
        origin: "left",
      });
      ScrollReveal().reveal(".section-image", {
        delay: 200,
        duration: 2500,
        distance: "400px",
        origin: "right",
      });
      ScrollReveal().reveal(".down-section", {
        delay: 400,
        duration: 2500,
        distance: "400px",
        origin: "bottom",
      });

      // Skills
      ScrollReveal().reveal(".section-skills-card", {
        delay: 100,
        duration: 2500,
        distance: "200px",
        origin: "right",
        interval: 60,
      });
      ScrollReveal().reveal(".section-down", {
        delay: 200,
        duration: 2500,
        distance: "400px",
        origin: "bottom",
      });

      // Experience
      ScrollReveal().reveal(".stepper-step", {
        delay: 100,
        duration: 2500,
        distance: "400px",
        origin: "bottom",
        interval: 100,
      });
      ScrollReveal().reveal(".stepper-content", {
        delay: 200,
        duration: 2500,
        distance: "400px",
        origin: "bottom",
        interval: 100,
      });

      // Projects
      ScrollReveal().reveal(".project-card", {
        delay: 100,
        duration: 2500,
        distance: "300px",
        origin: "right",
        interval: 150,
      });
    },
  },
}

</script>

<template>
  <div class="index">
    <About />
    <Skills />
    <Experience />
    <Projects />
  </div>
</template>

<script>
import About from "~/sections/about.vue";
import Skills from "~/sections/skills.vue";
import Experience from "~/sections/experience.vue";
import Projects from "~/sections/projects.vue";

export default {
  name: "IndexPage",
  components: {
    About,
    Skills,
    Experience,
    Projects,
  },
  mounted() {
    this.revealScroll();
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
      ScrollReveal().reveal(".upper-section-info-intro", {
        delay: 0,
        duration: 2000,
        distance: "50px",
        origin: "left",
      });
      ScrollReveal().reveal(".upper-section-info-name", {
        delay: 100,
        duration: 2000,
        distance: "50px",
        origin: "left",
      });
      ScrollReveal().reveal(".upper-section-info-role", {
        delay: 200,
        duration: 2000,
        distance: "50px",
        origin: "left",
      });
      ScrollReveal().reveal(".upper-section-info-details", {
        delay: 300,
        duration: 2000,
        distance: "50px",
        origin: "left",
      });
      ScrollReveal().reveal(".upper-section-info-media", {
        delay: 400,
        duration: 2000,
        distance: "50px",
        origin: "left",
      });
      ScrollReveal().reveal(".upper-section-img", {
        delay: 200,
        duration: 2000,
        distance: "50px",
        origin: "right",
      });
      ScrollReveal().reveal(".bottom-section", {
        delay: 400,
        duration: 2000,
        distance: "50px",
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
};
</script>

<style>
/* Inicio index */
.index {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}
/* Fim index */

/* Inicio header secao */
.header {
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 0;
  margin-top: 5rem;
}
.header-name {
  min-width: max-content;
  font-size: 1.8rem;
  padding: 0.5rem 1.5rem;
}

.header-order {
  font-size: 1.3rem;
  font-family: "tech";
  color: #1094bc;
}

.header-divider {
  width: 300px;
  border-bottom: 1px solid #1094bc41;
}
/* Fim header secao */
</style>

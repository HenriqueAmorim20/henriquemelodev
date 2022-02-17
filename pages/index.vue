<template>
  <div>
    Index
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
  }
}

</script>

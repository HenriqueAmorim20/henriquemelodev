<template>
  <div id="skills">
    <!-- Titulo da secao -->
    <header class="header">
      <span class="header-order">02.</span>
      <span class="header-name">Skills</span>
      <span class="header-divider" />
    </header>

    <!-- Habilidades -->
    <section class="section-skills">
      <v-card
        v-for="(item, index) in skills"
        :key="index"
        class="section-skills-card"
        flat
        tile
      >
        <div class="section-skills-card-header">
          <v-icon class="section-skills-card-header-icon">
            {{ item.icon }}
          </v-icon>
          <span class="section-skills-card-header-label">
            {{ item.name }}
          </span>
        </div>
        <v-progress-linear
          :value="item.progress"
          class="section-skills-card-progress"
          color="#1094bc"
        ></v-progress-linear>
      </v-card>
    </section>

    <section class="section-info">
      <p class="section-info-text">
        My first contact with the programming world was when I started my
        Software Engineering Bachelor at the University of Brasilia in 2017.
        Since 2020 I started to focus my career on web development, learning new
        programming languages, frameworks, methodologies and so on.
        <ul>
          <li>Experience with C/C++ in algorithms and data structures.</li>
          <li>VueJS, AngularJS, HTML and CSS for frontend.</li>
          <li>REST API in Node.js using ES6 and Express for Backend.</li>
          <li>Brief contact with containerization using Docker and cloud knowledge with AWS.</li>
          <li>Java, JSF, SpringBoot and Hibernate.</li>
        </ul>
      </p>
      <img src="/skillsbg.svg" class="section-info-img" />
    </section>
  </div>
</template>
<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skills: [
        {
          name: "Git",
          icon: "mdi-git",
          progress: 100,
        },
        {
          name: "HTML",
          icon: "mdi-language-html5",
          progress: 100,
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
          progress: 100,
        },
        {
          name: "JavaScript",
          icon: "mdi-language-javascript",
          progress: 90,
        },
        {
          name: "TypeScript",
          icon: "mdi-language-typescript",
          progress: 90,
        },
        {
          name: "AngularJS",
          icon: "mdi-angular",
          progress: 80,
        },
        {
          name: "NodeJS",
          icon: "mdi-nodejs",
          progress: 80,
        },
        {
          name: "VueJS",
          icon: "mdi-vuejs",
          progress: 80,
        },
        {
          name: "C/C++",
          icon: "mdi-language-cpp",
          progress: 60,
        },
        {
          name: "Java",
          icon: "mdi-language-java",
          progress: 60,
        },
        {
          name: "MongoDB",
          icon: "mdi-database",
          progress: 60,
        },
        {
          name: "SQL",
          icon: "mdi-database",
          progress: 50,
        },
        {
          name: "ReactJS",
          icon: "mdi-react",
          progress: 40,
        },
        {
          name: "Docker",
          icon: "mdi-docker",
          progress: 30,
        },
        {
          name: "AWS",
          icon: "mdi-aws",
          progress: 30,
        },
      ],
    };
  },
};
</script>
<style scoped>
/* Inicio secao de habilidades */
.section-skills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}
/* Fim secao de habilidades */

/* Inicio card de habilidade */
.section-skills-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 1rem;
}

.section-skills-card-header {
  display: flex;
  align-items: center;
}

.section-skills-card-header-icon {
  color: #1094bc;
  margin: 0 0.5rem 0 0;
}

.section-skills-card-progress {
  width: 50%;
}
/* Fim card de habilidade */

/* Inicio secao de info */
.section-info {
  display: flex;
  justify-content: space-between;
}

.section-info-text{
  text-indent: 2rem;
  width: 65%;
}

.section-info-text ul{
  text-indent: 0rem;
  margin: 0 0 0 1rem;
}

.section-info-img {
  width: 30%;
  max-width: 320px;
}
/* Fim secao de info */

/* Inicio media query para tablet */
@media (max-width: 850px) {
  .section-skills {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-info {
    flex-direction: column;
    align-items: center;
  }

  .section-info-text{
    width: 100%;
  }

  .section-info-img {
    width: 100%;
  }
}
/* Fim media query para tablet */

/* Inicio media query para mobile */
@media (max-width: 600px) {
  .section-skills {
    grid-template-columns: repeat(1, 1fr);
  }
}
/* Fim media query para mobile */
</style>

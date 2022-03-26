<template>
  <div id="skills" class="main">
    <div class="header">
      <span class="header-order">02.</span>
      <span class="header-name">Main skills</span>
      <div class="header-divider" />
    </div>
    <v-row class="section">
      <v-col cols="12">
        <v-row class="section-skills">
          <v-col v-for="skill in skills" :key="skill.name" align="center">
            <v-card class="section-skills-card">
              <div class="section-skills-card-content">
                <v-icon class="section-skills-card-content-icon">
                  {{ skill.icon }}
                </v-icon>
                <span>{{ skill.name }}</span>
                <v-progress-linear
                  class="section-skills-card-content-progress"
                  color="#1094bc"
                  :value="skill.progress"
                ></v-progress-linear>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="section-down" justify="center">
      <v-col class="section-down-text" cols="6">
        <p>
          My first contact with the programming world was when I started my
          Software Engineering Bachelor at the University of Brasilia in 2017.
          Since 2020 I started to focus my career on web development, learning
          new programming languages, frameworks, methodologies and so on.
        </p>
        <div>- Experience with C/C++ in algorithms and data structures.</div>
        <div>- VueJS, AngularJS, HTML and CSS for frontend.</div>
        <div>- REST API in Node.js using ES6 and Express for Backend.</div>
        <div>
          - Brief contact with containerization using Docker and cloud knowledge
          with AWS.
        </div>
        <div>- Java, JSF, SpringBoot and Hibernate.</div>
      </v-col>
      <v-col class="section-down-img" cols="4" align="end">
        <img :src="require('~/static/skillsbg.svg')" width="100%" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "SkillsComponent",
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
.section {
  padding: 30px 20px !important;
}

.section-skills-card {
  margin: 0 5px 18px !important;
  background: #1a192b;
}

.section-skills-card-content {
  display: flex;
  align-items: center;
  padding: 5px 15px !important;
}

.section-skills-card-content-icon {
  margin-right: 0.5rem !important;
  color: #1094bd !important;
}

.section-skills-card-content span {
  margin-right: 7px !important;
  font-size: 1rem;
  font-family: "custom";
  width: 100px;
  text-align: start;
  display: flex;
  justify-content: flex-start;
}

.section-skills-card-content-progress {
  width: 170px !important;
}

.section-down {
  max-width: 1100px;
  margin: 0 auto !important;
  padding: 15px 20px !important;
}

.section-down-text {
  margin: 0 20px 30px 10px !important;
  padding: 0 10px !important;
}

.section-down-text p {
  font-size: 1.1rem;
  text-indent: 2rem;
  margin: 0 0 10px 0 !important;
}

.section-down-text div {
  margin-left: 20px !important;
}

.section-down-img,
.section-down-text {
  min-width: 300px;
}
</style>

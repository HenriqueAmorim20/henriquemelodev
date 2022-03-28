<template>
  <div id="experience">
    <!-- Titulo da secao -->
    <header class="header">
      <span class="header-order">03.</span>
      <span class="header-name">Experience</span>
      <span class="header-divider" />
    </header>

    <!-- Stepper das experiencias -->
    <v-stepper class="experiences" vertical flat>
      <!-- Iteracao para cada experiencia -->
      <div v-for="(item, index) in experiences" :key="index">
        <!-- Header da experiencia -->
        <v-stepper-step class="experience" complete step="1" color="#1094bc">
          <span class="experience-role">{{ item.role }}</span>
          <small class="experience-info">{{ item.info }}</small>
          <small class="experience-duration">{{ item.duration }}</small>
        </v-stepper-step>
        <!-- Conteudo da experiencia -->
        <v-stepper-content
          class="experience-content"
          :class="
            index < experiences.length - 1 ? 'experience-content-divider' : ''
          "
          step="1"
        >
          <p class="experience-content-description">
            {{ item.description }}
          </p>
          <div class="experience-content-icons">
            <span
              v-for="(icon, index) in item.icons"
              :key="index"
              class="experience-content-icons-item"
              :class="icon"
            >
            </span>
          </div>
        </v-stepper-content>
      </div>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "ExperienceSection",
  data() {
    return {
      experiences: [
        {
          role: "Full-stack Developer",
          info: "Centro de Gestão e Estudos Estratégicos - Brasília, DF",
          duration: "September 2021 - present",
          description:
            "After a solid performance on my intership I was hired as a fulltime developer. With this promotion came a lot more responsabilities, such as new projects, technologies, meetings and management work in general. Currently I mainly work in 3 projects, the first being a survey/forms tool developed with AngularJS, NodeJS and MongoDB; the second is a large manager of events, contracts, etc. using Java, JSF, SpringBoot, SQL and Hibernate; and finally the third one is an admin service which creates, manages and plots graphics based on a large set of data developed with Vuejs, NodeJS and MongoDB. I also had some contact with AWS and Docker.",
          icons: [
            "angular",
            "nodejs",
            "mongodb",
            "vuejs",
            "java",
            "aws",
          ],
        },
        {
          role: "Full-stack Developer intern",
          info: "Centro de Gestão e Estudos Estratégicos - Brasília, DF",
          duration: "January 2021 - September 2021",
          description:
            "In my second internship I worked in web development using AngularJS, MongoDB and NodeJS. The project was related to updating an existing survey/forms system to improve the software architecture and performance. I worked by myself on this project and had a lot of freedom to implement my updates and thoughts, but at the same time I had to be very responsible and conscientious in my decisions. With that, I developed a lot of experience in frontend, backend and database.",
          icons: ["angular", "nodejs", "mongodb"],
        },
        {
          role: "Full-stack Developer intern",
          info: "Confia Tecnologia LTDA - Brasília, DF",
          duration: "October 2020 - January 2021",
          description:
            "In my first internship I worked in web development using React, Firebase and NodeJS. The project was related to online subscriptions and contracts, with purchases of plans and services. Our goal was to get rid of the complexity of notary offices and I mainly worked with the frontend of the site.",
          icons: ["react", "nodejs", "firebase"],
        },
      ],
    };
  },
};
</script>
<style scoped>
/* Inicio stepper experiencias */
.experiences {
  background-color: transparent !important;
  margin: 3rem 0 0;
  padding: 0;
}
/* Fim stepper experiencias */

/* Inicio experiencia */
.experience {
  padding: 0;
}

.experience-role {
  font-size: clamp(1.2rem, 4vw, 1.4rem);
}

.experience-info,
.experience-duration {
  font-size: 1rem;
  font-size: clamp(0.9rem, 3vw, 1rem);
  margin-top: 0.5rem;
  color: #c2c2c2;
}

.experience-content {
  /* margin: 0 0.7rem !important; */
  padding-right: 0 !important;
}

.experience-content-divider {
  display: flex;
  position: relative;
}
/* Divider que fica ao lado de cada step da experiencia */
.experience-content-divider::before {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.233);
}

.experience-content-description {
  text-indent: 2rem;
}

.experience-content-icons {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 2rem 0;
}

.experience-content-icons-item {
  width: 2.5rem;
  margin: 1rem;
  color: #1094bc;
}
/* Fim experiencia */

/* Inicio dos icones */
.angular {
  content: url("https://api.iconify.design/vscode-icons/file-type-angular.svg");
}

.nodejs {
  content: url("https://api.iconify.design/logos/nodejs-icon.svg");
}

.mongodb {
  content: url("https://api.iconify.design/vscode-icons/folder-type-mongodb.svg");
}

.vuejs {
  content: url("https://api.iconify.design/vscode-icons/file-type-vue.svg");
}

.java {
  content: url("https://api.iconify.design/logos/java.svg");
}

.aws {
  content: url("https://api.iconify.design/logos/aws.svg");
}

.react {
  content: url("https://api.iconify.design/vscode-icons/file-type-reactjs.svg");
}

.firebase {
  content: url("https://api.iconify.design/vscode-icons/file-type-firebase.svg");
}
/* Fim dos icones */
</style>

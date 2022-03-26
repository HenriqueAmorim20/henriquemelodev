<template>
  <div id="projects">
    <!-- Titulo da secao -->
    <header class="header">
      <span class="header-order">04.</span>
      <span class="header-name">Projects</span>
      <span class="header-divider" />
    </header>

    <div class="projects">
      <!-- Card do projeto -->
      <v-card
        v-for="(item, index) in projects"
        :key="index"
        class="project-card"
        flat
      >
        <!-- Header do card projeto -->
        <header class="project-card-header">
          <v-icon class="project-card-header-folder" color="blue">
            mdi-folder
          </v-icon>
          <v-spacer></v-spacer>
          <!-- Links do projeto -->
          <a
            v-if="item.github"
            :href="item.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card-header-link"
          >
            <v-icon class="project-card-header-link-icon">mdi-github</v-icon>
          </a>
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card-header-link"
          >
            <v-icon class="project-card-header-link-icon">
              mdi-link-variant
            </v-icon>
          </a>
        </header>

        <!-- Conteudo do projeto -->
        <h2 class="project-card-name">{{ item.name }}</h2>
        <p class="project-card-description">{{ item.description }}</p>

        <!-- Tecnologias do projeto -->
        <div class="project-card-techs">
          <span
            v-for="(tech, i) in item.techs"
            :key="i"
            class="project-card-techs-item"
          >
            {{ tech }}
          </span>
        </div>
      </v-card>
    </div>
</div>
</template>

<script>
export default {
  name: "ProjectsComponent",
  data() {
    return {
      projects: [
        {
          name: "loemi",
          description:
            "This website was built as a Floral Design portfolio for a florist in Brasilia. The idea of this project is to show the products in a minalistic yet beautiful way.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/loemi-flores",
          link: "www.loemiflores.com.br",
        },
        {
          name: "henrique melo",
          description:
            "This website was built to showcase my web develpment skills and to tell a little bit of my story.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/henriquemelodev",
          link: null,
        },
        {
          name: "bloco",
          description:
            "This website was built for a local shirt brand from Brasília. The idea of this project is to help clients visualize the products and make the purchase easier.",
          techs: ["NuxtJS", "NodeJS", "MongoDB"],
          github: "https://github.com/HenriqueAmorim20/BlocoBSB-Vuejs",
          link: "https://www.blocobsb.com.br/",
        },
        {
          name: "shortly",
          description:
            "This project is an intermediate code challenge from Frontend Mentor. It's a landpage of a url shortener, which requires api consuming and frontend skills.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/shortly",
          link: "https://melohenrique-shortly.netlify.app/",
        },
        {
          name: "room",
          description:
            "This project is an intermediate code challenge from Frontend Mentor. It's a homepage of a furniture company, which requires a lot frontend skills.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/room",
          link: "https://melohenrique-room.netlify.app/",
        },
        {
          name: "space tourism",
          description:
            "This project is an intermediate code challenge from Frontend Mentor. It's a space tourism website, which requires a lot of html/css skills to replicate the frontend of the challenge.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/space-tourism",
          link: "https://melohenrique-spacetourism.netlify.app/home",
        },
        {
          name: "countries",
          description:
            "This project is an advanced code challenge from Frontend Mentor. It's a website with countries information, which requires logic, API consuming and html/css skills to replicate the frontend of the challenge.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/countries-challenge",
          link: "https://melohenrique-countrieschallenge.netlify.app/countries",
        },
        {
          name: "rock paper scissors",
          description:
            "This project is an advanced code challenge from Frontend Mentor. It's a rock-paper-scissors-spock-lizard game, which requires logic for the game rules and html/css skills to replicate the frontend of the challenge.",
          techs: ["NuxtJS", "VueJS", "Vuetify"],
          github: "https://github.com/HenriqueAmorim20/rock-paper-scissors",
          link: "https://melohenrique-rockpaperscissors.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Inicio secao projects */
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}
/* Fim secao projects */

/* Inicio card do projeto */
.project-card {
  display: flex;
  flex-direction: column;
  background-color: #1a192b;
  padding: 0.5rem 0.8rem;
}

.project-card-header {
  display: flex;
  align-items: center;
}

.project-card-header-folder {
  font-size: 3rem;
  margin-left: -0.3rem;
}

.project-card-header-link {
  text-decoration: none;
}

.project-card-header-link-icon {
  font-size: 1.8rem;
  margin-left: 0.3rem;
}

.project-card-header-link-icon:hover {
  color: #1094bd;
}

.project-card-name {
  text-transform: capitalize;
}

.project-card-description {
  color: #bebebe;
  margin: 1rem 0;
}

.project-card-techs {
  margin-top: auto;
}

.project-card-techs-item {
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #1094bc;
  border: 1px solid #1094bc;
  padding: 0.1rem 0.5rem;
  margin: 0 1rem 0 0;
}
/* Fim card do projeto */

/* Inicio media queries */
@media (max-width: 1000px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
/* Fim media queries */
</style>

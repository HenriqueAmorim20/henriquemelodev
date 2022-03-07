<template>
  <div id="projects" class="main">
    <div class="header">
      <span class="header-order">04.</span>
      <span class="header-name">Projects</span>
      <div class="header-divider" />
    </div>
    <div class="projects">
      <v-card class="project-card">
        <header>
          <Icon :icon="'file'" :width="50" :color="'#1094bc'" />
          <v-spacer></v-spacer>
          <a
            href="https://github.com/HenriqueAmorim20/loemi-flores"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'github'" :width="30" />
          </a>
          <a
            href="https://master.d1je8uzer0baxp.amplifyapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'link'" :width="30" />
          </a>
        </header>
        <h2>Loemi</h2>
        <p>
          This website was built as a Floral Design portfolio for a florist in
          Brasilia. The idea of this project is to show the products in a
          minalistic yet beautiful way.
        </p>
        <div class="project-card-techs">
          <span>NuxtJS</span>
          <span>VueJS</span>
          <span>Vuetify</span>
        </div>
      </v-card>
      <v-card class="project-card">
        <header>
          <Icon :icon="'file'" :width="50" :color="'#1094bc'" />
          <v-spacer></v-spacer>
          <a
            href="https://github.com/HenriqueAmorim20/henriquemelodev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'github'" :width="30" />
          </a>
        </header>
        <h2>Henrique Melo</h2>
        <p>
          This website was built to showcase my web develpment skills and to
          tell a little bit of my story.
        </p>
        <div class="project-card-techs">
          <span>NuxtJS</span>
          <span>VueJS</span>
          <span>Vuetify</span>
        </div>
      </v-card>
      <v-card class="project-card">
        <header>
          <Icon :icon="'file'" :width="50" :color="'#1094bc'" />
          <v-spacer></v-spacer>
          <a
            href="https://github.com/HenriqueAmorim20/BlocoBSB-Vuejs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'github'" :width="30" />
          </a>
          <a
            href="https://www.blocobsb.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'link'" :width="30" />
          </a>
        </header>
        <h2>Bloco</h2>
        <p>
          This website was built for a local shirt brand from Brasília. The idea
          of this project is to help clients visualize the products and make the
          purchase easier.
        </p>
        <div class="project-card-techs">
          <span>NuxtJS</span>
          <span>NodeJS</span>
          <span>MongoDB</span>
        </div>
      </v-card>
      <v-card class="project-card">
        <header>
          <Icon :icon="'file'" :width="50" :color="'#1094bc'" />
        </header>
        <h2>iSurvey</h2>
        <p>
          This project is a survey/forms system, with a frontend for the user
          and a another frontend that is a forms configurator. It's a private
          project for an outsourced company of the Ministry of Technology.
        </p>
        <div class="project-card-techs">
          <span>AngularJS</span>
          <span>NodeJS</span>
          <span>MongoDB</span>
        </div>
      </v-card>
      <v-card class="project-card">
        <header>
          <Icon :icon="'file'" :width="50" :color="'#1094bc'" />
          <v-spacer></v-spacer>
          <a
            href="https://octi.cgee.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="'link'" :width="30" />
          </a>
        </header>
        <h2>OCTI - Admin</h2>
        <p>
          This project was built as an administrator system that manages,
          stores, creates and plots graphics for the website that is linked in
          this card.
        </p>
        <div class="project-card-techs">
          <span>NuxtJS</span>
          <span>NodeJS</span>
          <span>MongoDB</span>
        </div>
      </v-card>
      <v-card class="project-card">
        <header>
          <Icon :icon="'file'" :width="50" :color="'#1094bc'" />
          <v-spacer></v-spacer>
        </header>
        <h2>Neo</h2>
        <p>
          This project is a complex intern manager of events, contracts, etc.
          It's also a private project for an outsourced company of the Ministry
          of Technology.
        </p>
        <div class="project-card-techs">
          <span>Java</span>
          <span>SpringBoot</span>
          <span>SQL</span>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icons.vue";

export default {
  name: "ProjectsComponent",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.projects {
  max-width: 1100px;
  padding: 20px 20px !important;
  margin: 0 auto !important;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 1025px) {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .projects {
    grid-template-columns: 1fr;
  }
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 10px !important;
  background-color: #1a192b;
}

.project-card header {
  display: flex;
  align-items: center;
  width: 100%;
}

.project-card h2 {
  font-size: 1.5rem;
  transition: 0.7s all ease;
}

.project-card:hover h2 {
  color: #1094bd !important;
}

.project-card p {
  font-size: 1rem;
  margin: 10px auto auto !important;
  color: #bebebe !important;
}

.project-card-techs {
  margin-top: 20px !important;
}

.project-card-techs span {
  font-size: 0.8rem;
  color: #1094bc !important;
  border: 1px solid #1094bc;
  padding: 1px 10px !important;
  margin: 0 20px 0 0 !important;
}
</style>

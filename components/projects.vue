<template>
  <div id="projects" class="main">
    <div class="header">
      <span class="header-order">04.</span>
      <span class="header-name">Projects</span>
      <div class="header-divider" />
    </div>
    <v-row class="projects" justify="start">
      <v-card
        class="project-card"
        width="325"
        min-width="280"
        min-height="280"
        color="#1a192b"
      >
        <v-row class="project-card-header" align="center">
          <v-col cols="2" align="start" justify="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="50px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1094bc"
                d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
              />
            </svg>
          </v-col>
          <v-spacer />
          <v-col class="project-card-header-icon" cols="1" align="center">
            <a
              href="https://github.com/HenriqueAmorim20/BlocoBSB-Vuejs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                @mouseenter="hoverGit = true"
                @mouseleave="hoverGit = false"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  :fill="hoverGit ? '#1094bc' : 'white'"
                  d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
                />
              </svg>
            </a>
          </v-col>
          <v-col class="project-card-header-icon" cols="1" align="center">
            <a
              href="https://www.blocobsb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                @mouseenter="hoverLink = true"
                @mouseleave="hoverLink = false"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  :stroke="hoverLink ? '#1094bc' : 'white'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177"
                  />
                  <path
                    d="M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823"
                  />
                </g>
              </svg>
            </a>
          </v-col>
        </v-row>
        <v-row class="project-card-content" align="center">
          <v-col cols="12">
            <span class="project-card-content-name">Bloco bsb</span>
          </v-col>
          <v-col cols="12">
            <p class="project-card-content-desc">
              This website was built for a Brasília local shirt brand. The ideia
              of this project is to help clients vizualize the products and make
              the purchase easier.
            </p>
          </v-col>
          <span style="flex: 1 1 auto"></span>
          <v-row class="project-card-tech" justify="center">
            <v-col align="center">
              <span>VueJS</span>
            </v-col>
            <v-col align="center">
              <span>NodeJS</span>
            </v-col>
            <v-col align="center">
              <span>MongoDB</span>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <v-card
        class="project-card"
        width="325"
        min-width="280"
        min-height="280"
        color="#1a192b"
      >
        <v-row class="project-card-header" align="center">
          <v-col cols="2" align="start" justify="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="50px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1094bc"
                d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
              />
            </svg>
          </v-col>
          <v-spacer />
          <v-col class="project-card-header-icon" cols="1" align="center">
            <a
              href="https://github.com/HenriqueAmorim20/henriquemelodev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                @mouseenter="hoverGit = true"
                @mouseleave="hoverGit = false"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  :fill="hoverGit ? '#1094bc' : 'white'"
                  d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
                />
              </svg>
            </a>
          </v-col>
        </v-row>
        <v-row class="project-card-content" align="center">
          <v-col cols="12">
            <span class="project-card-content-name">My page</span>
          </v-col>
          <v-col cols="12">
            <p class="project-card-content-desc">
              This website was built to showcase my web develpment skills and to
              tell a little bit of my history.
            </p>
          </v-col>
          <span style="flex: 1 1 auto"></span>
          <v-row class="project-card-tech" justify="center">
            <v-col align="start">
              <span>VueJS</span>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <v-card
        class="project-card"
        width="325"
        min-width="280"
        min-height="280"
        color="#1a192b"
      >
        <v-row class="project-card-header" align="center">
          <v-col cols="2" align="start" justify="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="50px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1094bc"
                d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
              />
            </svg>
          </v-col>
        </v-row>
        <v-row class="project-card-content" align="center">
          <v-col cols="12">
            <span class="project-card-content-name">iSurvey</span>
          </v-col>
          <v-col cols="12">
            <p class="project-card-content-desc">
              This project is a survey/forms system, with a frontend for the
              user and a another frontend that is a forms configurator. It's a
              private project for my current company.
            </p>
          </v-col>
          <span style="flex: 1 1 auto"></span>
          <v-row class="project-card-tech" justify="center">
            <v-col align="center">
              <span>AngularJS</span>
            </v-col>
            <v-col align="center">
              <span>NodeJS</span>
            </v-col>
            <v-col align="center">
              <span>MongoDB</span>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <v-card
        class="project-card"
        width="325"
        min-width="280"
        min-height="280"
        color="#1a192b"
      >
        <v-row class="project-card-header" align="center">
          <v-col cols="2" align="start" justify="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="50px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1094bc"
                d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
              />
            </svg>
          </v-col>
          <v-spacer />
          <v-col class="project-card-header-icon" cols="1" align="center">
            <a
              href="https://www.blocobsb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                @mouseenter="hoverLink = true"
                @mouseleave="hoverLink = false"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  :stroke="hoverLink ? '#1094bc' : 'white'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M13.544 10.456a4.368 4.368 0 0 0-6.176 0l-3.089 3.088a4.367 4.367 0 1 0 6.177 6.177L12 18.177"
                  />
                  <path
                    d="M10.456 13.544a4.368 4.368 0 0 0 6.176 0l3.089-3.088a4.367 4.367 0 1 0-6.177-6.177L12 5.823"
                  />
                </g>
              </svg>
            </a>
          </v-col>
        </v-row>
        <v-row class="project-card-content" align="center">
          <v-col cols="12">
            <span class="project-card-content-name">OCTI - Admin</span>
          </v-col>
          <v-col cols="12">
            <p class="project-card-content-desc">
              This project was built as a administrator system that manages, stores, creates and plots graphics for the website that is linked in this card.
            </p>
          </v-col>
          <span style="flex: 1 1 auto"></span>
          <v-row class="project-card-tech" justify="center">
            <v-col align="start">
              <span>VueJS</span>
            </v-col>
            <v-col align="start">
              <span>NodeJs</span>
            </v-col>
            <v-col align="start">
              <span>MongoDb</span>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
      <v-card
        class="project-card"
        width="325"
        min-width="280"
        min-height="280"
        color="#1a192b"
      >
        <v-row class="project-card-header" align="center">
          <v-col cols="2" align="start" justify="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="50px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1094bc"
                d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z"
              />
            </svg>
          </v-col>
        </v-row>
        <v-row class="project-card-content" align="center">
          <v-col cols="12">
            <span class="project-card-content-name">Neo</span>
          </v-col>
          <v-col cols="12">
            <p class="project-card-content-desc">
              This project is a complex intern manager of events, contracts, etc. It's also a private project.
            </p>
          </v-col>
          <span style="flex: 1 1 auto"></span>
          <v-row class="project-card-tech" justify="center">
            <v-col align="center">
              <span>Java</span>
            </v-col>
            <v-col align="center">
              <span>SpringBoot</span>
            </v-col>
            <v-col align="center">
              <span>SQL</span>
            </v-col>
          </v-row>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProjectsComponent",
  data() {
    return {
      hoverGit: false,
      hoverLink: false,
    };
  },
};
</script>

<style scoped>
.projects {
  max-width: 1100px;
  padding: 20px 0 !important;
  margin: 0 auto !important;
}

.project-card {
  cursor: default;
  position: relative;
  margin: 20px 10px !important;
  padding: 10px !important;
  transition-delay: 0 !important;
}

.project-card-header a svg {
  width: 25px !important;
}

.project-card-content-name {
  font-size: 1.5rem;
  font-weight: bold;
  transition: 0.7s all ease;
}

.project-card:hover .project-card-content-name {
  color: #1094bd !important;
  transition: 0.7s all ease;
}
.project-card-content-desc {
  font-size: 1rem;
  padding: 5px 0px !important;
  margin: 10px auto !important;
  color: #bebebe !important;
}

.project-card-tech {
  position: absolute;
  bottom: 10px;
}

.project-card-tech span {
  font-size: 0.8rem;
  color: #1094bc !important;
  border: 1px solid #1094bc;
  padding: 1px 10px !important;
  margin: 0 20px 0 0 !important;
}
</style>

<template>
  <div id="about" class="main">
    <div class="header">
      <span class="header-order">01.</span>
      <span class="header-name">About me</span>
      <div class="header-divider" />
    </div>
    <v-row class="section" align="center">
      <v-col class="section-about" :cols="width > 750 ? 7 : 12">
        <v-col class="section-about-intro" cols="12">Hello, i'm</v-col>
        <v-col class="section-image" cols="12" align="center">
          <v-img
            v-if="width <= 750"
            :src="require('~/static/perfil.jpeg')"
            width="100%"
            max-width="350"
            style="border-radius: 50%; aspect-ratio: 1 / 1 !important;"
          />
        </v-col>
        <v-col class="section-about-name" cols="12" align="start"
          >Henrique Melo</v-col
        >
        <v-col class="section-about-role" cols="12" align="start"
          >Full stack Developer</v-col
        >
        <v-col class="section-about-info" cols="12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
            />
          </svg>
          <span>hacmelo@gmail.com</span>
        </v-col>
        <v-col class="section-about-info" cols="12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M18.997 20C10.466 20.012 3.991 13.46 4 5.003C4 4.45 4.448 4 5 4h2.64c.495 0 .916.364.989.854a12.417 12.417 0 0 0 1.015 3.397l.103.222a.707.707 0 0 1-.23.872c-.818.584-1.13 1.759-.493 2.675a11.832 11.832 0 0 0 2.956 2.957c.917.636 2.092.324 2.675-.493a.707.707 0 0 1 .873-.231l.221.102c1.078.5 2.222.842 3.397 1.016c.49.073.854.494.854.99V19a1 1 0 0 1-1.001 1h-.002Z"
            />
          </svg>
          <span>+55 (061) 98527-0234</span>
        </v-col>
        <v-col class="section-about-info" cols="12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 20 20"
          >
            <path
              fill="white"
              d="M10 2.009c-2.762 0-5 2.229-5 4.99c0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 1 1 0-5.4a2.7 2.7 0 0 1 0 5.4z"
            />
          </svg>
          <span>Brasília, Brazil.</span>
        </v-col>
        <v-col class="section-media" cols="12" align="center">
          <a
            href="https://www.linkedin.com/in/henriqueamorim20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="section-media-icon"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82Z"
              />
              <rect
                width="4.5"
                height="11.7"
                x="3"
                y="9.3"
                fill="currentColor"
                rx=".9"
                ry=".9"
              />
              <circle cx="5.25" cy="5.25" r="2.25" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://github.com/HenriqueAmorim20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="section-media-icon"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822c0 5.277-3.002 6.824-5.823 7.279c.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187c0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185c0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728a.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092c-.455-.546-.819-1.001-1.274-1.092c-.09-.091-.364-.455-.273-.819c.091-.364.455-.637.82-.455c.91.182 1.455.91 2 1.547c.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093c-2.73-.546-5.914-2.093-5.914-7.279c0-1.456.455-2.73 1.365-3.822c-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/henriqueamorimcm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              class="section-media-icon"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"
              />
            </svg>
          </a>
        </v-col>
      </v-col>
      <v-col class="section-image" cols="5" align="center">
        <v-img
          v-if="width > 750"
          :src="require('~/static/perfil.jpeg')"
          width="100%"
          max-width="400"
          style="border-radius: 50%; aspect-ratio: 1 / 1 !important;"
        />
      </v-col>
    </v-row>
    <v-row class="down-section">
      <div class="down-section-interests">
        <div
          v-for="interest in interests"
          :key="interest"
          class="down-section-interests-item"
        >
          <span>{{ interest }}</span>
        </div>
      </div>
      <div class="down-section-text">
        <p>
          My name is Henrique Amorim Costa Melo, I'm 22 years old and I
          currently hold the position of Full-stack Developer at Centro de
          Gestão e Estudos Estratégicos (CGEE). I am creative, fast learner,
          always looking for the most efficient solutions in IT problems, good
          with communication, excellent with teamwork and constantly seeking for
          opportunities to improve my skills, knowledge and boost my career.
        </p>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      width: null,
      interests: [
        "Web",
        "FrontEnd",
        "BackEnd",
        "Leadership",
        "Software Engineering",
        "DevOps",
        "Logic",
        "Creative",
        "TeamWork",
        "Inovation",
      ],
    };
  },
  mounted() {
    // Gets the device width and add a listener to watch changes on the width
    this.width = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  //Remove listener before the component is destroyed
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    // Method called everytime window is resized
    onResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.section {
  max-width: 1000px;
  margin: 0 auto !important;
  padding: 30px 20px !important;
}

.section-about-intro {
  padding: 5px 25px !important;
  border-radius: 15px 15px 15px 0;
  background-color: #1094bc;
  width: fit-content;
  font-size: 1.2rem;
}

.section-about-name {
  font-size: 4rem;
}

.section-about-role {
  font-size: 2rem;
  color: #ebebeb !important;
}

.section-about-info {
  display: flex;
  align-items: center;
  margin: 10px 0 0 !important;
}

.section-about-info span {
  margin-left: 15px !important;
}

.section-media {
  padding: 60px 0 0 !important;
}

.section-media-icon {
  width: 40px;
  margin: 0 15px !important;
  transition: 0.7s all ease;
}

.section-media-icon:hover {
  transition: 0.7s all ease;
  transform: translate(0, -10px);
}

.down-section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
  margin: 0 auto !important;
  padding: 30px 0 !important;
}

.down-section-interests {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 40%;
  min-width: 300px;
}

.down-section-interests-item {
  width: fit-content;
  height: fit-content;
  border-radius: 5px;
  padding: 5px 15px !important;
  margin: 8px !important;
  border: 1px solid #1094bc;
}

.down-section-text {
  width: 60%;
  min-width: 300px;
}

.down-section-text p {
  text-indent: 2rem;
  font-size: 1.1rem;
}
</style>

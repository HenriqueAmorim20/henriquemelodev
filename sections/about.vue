<template>
  <div id="about" class="main">
    <div class="header load-hidden">
      <span class="header-order">01.</span>
      <span class="header-name">About me</span>
      <div class="header-divider" />
    </div>
    <v-row class="section" align="center">
      <v-col class="section-about" :cols="width > 750 ? 7 : 12">
        <v-col class="section-about-intro load-hidden" cols="12">
          Hello, i'm
        </v-col>
        <v-col class="section-image load-hidden" cols="12" align="center">
          <img v-if="width <= 750" :src="require('~/static/perfil.jpg')" />
        </v-col>
        <v-col class="section-about-name load-hidden" cols="12" align="start">
          Henrique Melo
        </v-col>
        <v-col class="section-about-role load-hidden" cols="12" align="start">
          Full stack Developer
        </v-col>
        <v-col class="section-about-info load-hidden" cols="12">
          <v-icon class="section-about-info-icon">mdi-email</v-icon>
          <span>hacmelo@gmail.com</span>
        </v-col>
        <v-col class="section-about-info load-hidden" cols="12">
          <v-icon class="section-about-info-icon">mdi-phone</v-icon>
          <span>+55 (061) 98527-0234</span>
        </v-col>
        <v-col class="section-about-info load-hidden" cols="12">
          <v-icon class="section-about-info-icon">mdi-map-marker</v-icon>
          <span>Brasília, Brazil.</span>
        </v-col>
        <v-col class="section-media load-hidden" cols="12" align="center">
          <a
            href="https://www.linkedin.com/in/henriqueamorim20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="section-media-icon">mdi-linkedin</v-icon>
          </a>
          <a
            href="https://github.com/HenriqueAmorim20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="section-media-icon">mdi-github</v-icon>
          </a>
          <a
            href="https://www.instagram.com/henriqueamorimcm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="section-media-icon">mdi-instagram</v-icon>
          </a>
        </v-col>
      </v-col>
      <v-col class="section-image load-hidden" cols="5" align="center">
         <img v-if="width > 750" :src="require('~/static/perfil.jpg')" />
      </v-col>
    </v-row>
    <v-row class="down-section load-hidden">
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

.section-about-info-icon {
  font-size: 1rem;
}

.section-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  aspect-ratio: 1 !important;
  object-fit: cover;
  object-position: center;
  margin: 1rem 0 !important;
}

.section-media {
  padding: 2.5rem 0 0 !important;
}

.section-media a {
  text-decoration: none;
}

.section-media-icon {
  font-size: 2.5rem;
  margin: 0 1rem !important;
  transition: 0.7s all ease;
}

.section-media-icon:hover {
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

<template>
  <div id="about">
    <!-- Titulo da secao -->
    <header class="header">
      <span class="header-order">01.</span>
      <span class="header-name">About me</span>
      <span class="header-divider" />
    </header>

    <!-- Secao superior -->
    <section class="upper-section">
      <div class="upper-section-info">
        <p class="upper-section-info-intro load-hidden"> Hello, i'm </p>
        <img class="upper-section-img mobile load-hidden" src="/perfil.jpg" />
        <h1 class="upper-section-info-name load-hidden">Henrique Melo</h1>
        <h2 class="upper-section-info-role load-hidden">Fullstack developer</h2>
        <div class="upper-section-info-details load-hidden">
          <v-icon class="upper-section-info-details-icon"> mdi-email </v-icon>
          <span class="upper-section-info-details-label">
            hacmelo@gmail.com
          </span>
        </div>
        <div class="upper-section-info-details load-hidden">
          <v-icon class="upper-section-info-details-icon"> mdi-phone</v-icon>
          <span class="upper-section-info-details-label">
            +55 (061) 98527-0234
          </span>
        </div>
        <div class="upper-section-info-details load-hidden">
          <v-icon class="upper-section-info-details-icon">
            mdi-map-marker
          </v-icon>
          <span class="upper-section-info-details-label">
            Brasília, Brazil.
          </span>
        </div>
        <div class="upper-section-info-media load-hidden">
          <a
            href="https://www.linkedin.com/in/henriqueamorim20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="upper-section-info-media-icon">mdi-linkedin</v-icon>
          </a>
          <a
            href="https://github.com/HenriqueAmorim20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="upper-section-info-media-icon">mdi-github</v-icon>
          </a>
          <a
            href="https://www.instagram.com/henriqueamorimcm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon class="upper-section-info-media-icon">mdi-instagram</v-icon>
          </a>
        </div>
      </div>
      <img class="upper-section-img desktop load-hidden" src="/perfil.jpg" />
    </section>

    <!-- Secao inferior -->
    <section class="bottom-section load-hidden">
      <!-- Interesses -->
      <div class="bottom-section-interests">
        <span
          v-for="(item, index) in interests"
          :key="index"
          class="bottom-section-interests-item"
          >{{ item }}</span
        >
      </div>

      <!-- Resumo -->
      <p class="bottom-section-text">
        My name is Henrique Amorim Costa Melo, I'm 22 years old and I currently
        hold the position of Full-stack Developer at Centro de Gestão e Estudos
        Estratégicos (CGEE). I am creative, fast learner, always looking for the
        most efficient solutions in IT problems, good with communication,
        excellent with teamwork and constantly seeking for opportunities to
        improve my skills, knowledge and boost my career.
      </p>
    </section>
  </div>
</template>
<script>
export default {
  name: "AboutSection",
  data() {
    return {
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
};
</script>
<style scoped>
/* Inicio secao superior */
.upper-section {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0;
}

.upper-section-info {
  width: 50%;
}

.upper-section-info-intro {
  width: max-content;
  padding: 0.3rem 1.5rem;
  border-radius: 1rem 1rem 1rem 0;
  background-color: #1094bc;
  font-size: 1.2rem;
}

.upper-section-info-name {
  font-size: clamp(2.5rem, 4.5vw, 4rem);
  font-weight: normal;
}

.upper-section-info-role {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: normal;
  color: #bbbbbb;
  margin: 0 0 0.7rem 0;
}

.upper-section-info-details {
  margin: 0 0 0.7rem 0;
}

.upper-section-info-details-icon {
  font-size: 1rem;
  margin: 0 0.7rem 0 0;
}

.upper-section-info-media {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 0 0;
}

.upper-section-info-media a {
  text-decoration: none;
  margin: 0 1rem;
  transition: transform 0.7s ease;
}

.upper-section-info-media a:hover {
  transform: translateY(-5px);
}

.upper-section-info-media-icon {
  font-size: 2.5rem;
}

.upper-section-img {
  width: 100%;
  max-width: 400px;
  border-radius: 50%;
  aspect-ratio: 1 !important;
  object-fit: cover;
}
/* Fim secao superior */
/* Inicio secao inferior */
.bottom-section {
  display: flex;
  align-items: center;
}

.bottom-section-interests {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 45%;
}

.bottom-section-interests-item {
  padding: 0.3rem 1rem;
  margin: 0.5rem;
  border: 1px solid #1094bc;
}

.bottom-section-text {
  width: 60%;
  text-indent: 2rem;
  font-size: 1.1rem;
  margin: 0 1rem;
}
/* Fim secao inferior */

/* Inicio media query desktop */
@media (min-width: 800px) {
  .mobile {
    display: none;
  }
}
/* Fim media query desktop */

/* Inicio media query mobile */
@media (max-width: 800px) {
  .upper-section-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
  }

  .mobile {
    margin: 1rem auto 0;
  }

  .desktop {
    display: none;
  }

  .bottom-section {
    flex-direction: column-reverse;
  }

  .bottom-section-interests,
  .bottom-section-text {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
  }
}
/* Fim media query mobile */
</style>
